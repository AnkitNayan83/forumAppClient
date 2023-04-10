import React, { useEffect, useState } from "react";
import "./list.scss";
import { Navbar } from "../../components/navbar/Navbar";
import { Footer } from "../../components/footer/Footer";
import { ArrowDropDown, ArrowDropUp } from "@mui/icons-material";
import { Comment } from "../../components/comment/Comment";
import { useLocation, useNavigate } from "react-router-dom";
import { publicRequest } from "../../axiosinstance";

export const List = () => {
   const navigate = useNavigate();
   const location = useLocation();
   const data = location.state.data;
   const [comments, setComments] = useState([]);
   const [userName, setUserName] = useState("");
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

   console.log(comments);
   console.log(data);

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
                  <span
                     className="edit"
                     onClick={() => navigate("/postedit/123")}
                  >
                     Edit
                  </span>
                  <span className="delete">Delete</span>
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
                        ></textarea>
                        <button>Post Answer</button>
                     </form>
                  </div>
               </div>
            </div>
         </div>
         <Footer />
      </div>
   );
};
