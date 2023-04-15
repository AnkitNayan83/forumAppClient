import React, { useEffect, useRef, useState } from "react";
import "./list.scss";
import { Navbar } from "../../components/navbar/Navbar";
import { Footer } from "../../components/footer/Footer";
import { ArrowDropDown, ArrowDropUp } from "@mui/icons-material";
import { Comment } from "../../components/comment/Comment";
import { useLocation, useNavigate } from "react-router-dom";
import { publicRequest } from "../../axiosinstance";
import { useSelector } from "react-redux";

export const List = () => {
   const navigate = useNavigate();
   const location = useLocation();
   const data = location.state.data;
   const [comments, setComments] = useState([]);
   const [userName, setUserName] = useState("");
   const [newComment, setnewComment] = useState("");
   const user = useSelector((state) => state.user.currentUser);
   const commentRef = useRef();

   useEffect(() => {
      const getUser = async () => {
         const res = await publicRequest.get(`/users/${data.author}`);
         setUserName(res.data.username);
      };
      getUser();
   }, [data]);

   useEffect(() => {
      const getComments = async () => {
         const res = await publicRequest.get(`/comment/all?postId=${data._id}`);
         setComments(res.data);
      };
      getComments();
   }, [comments, data]);

   const checkUser = () => {
      const userId = JSON.parse(localStorage.getItem("user")) || null;
      if (!userId) return false;
      if (data.author === userId._id) return true;
      else return false;
   };

   const handelComment = async (e) => {
      try {
         e.preventDefault();
         const res = await publicRequest.post(
            `comment/create/${data._id}`,
            {
               desc: newComment,
               username: user.username,
            },
            { withCredentials: true }
         );
         setComments([...comments, res.data]);
         commentRef.current.value = "";
      } catch (error) {
         console.log(error);
      }
   };

   return (
      <div className="list">
         <Navbar />
         <div className="list_container">
            <div className="list_wrapper">
               <div className="title">
                  <h2>{data.title}</h2>
                  <button onClick={() => navigate("/post")}>
                     Ask a question
                  </button>
               </div>
               <div className="list_time">
                  <span>created by {userName}</span>
                  <span>created At 27/03/2023</span>
                  {checkUser() && (
                     <>
                        <span
                           className="edit"
                           onClick={() =>
                              navigate("/editPost", { state: data })
                           }
                        >
                           Edit
                        </span>
                        <span className="delete">Delete</span>
                     </>
                  )}
               </div>
               <div className="list_desc">
                  <div className="list_vote">
                     <ArrowDropUp className="vote_icon up" />
                     <span>{data.votes}</span>
                     <ArrowDropDown className="vote_icon down" />
                  </div>
                  <p>{data.desc}</p>
               </div>
               <div className="list_tags">
                  {data.tags.map((tag, i) => (
                     <span key={i}>{tag}</span>
                  ))}
               </div>
               <div className="list_answers">
                  <h2>Answers</h2>
                  {comments.map((comment, i) => (
                     <Comment data={comment} key={i} />
                  ))}
               </div>
               <div className="list_postAnswer">
                  <div className="post_container">
                     <h2>Your Answer</h2>
                     <form>
                        <textarea
                           name="answer"
                           id="answer"
                           cols="30"
                           rows="10"
                           placeholder="State your opinion"
                           onChange={(e) => setnewComment(e.target.value)}
                           ref={commentRef}
                        ></textarea>
                        <button onClick={handelComment}>Post Answer</button>
                     </form>
                  </div>
               </div>
            </div>
         </div>
         <Footer />
      </div>
   );
};
