import React, { useEffect, useRef, useState } from "react";
import "./list.scss";
import { Navbar } from "../../components/navbar/Navbar";
import { Footer } from "../../components/footer/Footer";
import { ArrowDropDown, ArrowDropUp } from "@mui/icons-material";
import { Comment } from "../../components/comment/Comment";
import { useNavigate, useParams } from "react-router-dom";
import { publicRequest } from "../../axiosinstance";
import { useSelector } from "react-redux";

export const List = () => {
   const navigate = useNavigate();
   const [data, setData] = useState({});
   const [comments, setComments] = useState([]);
   const [newComment, setnewComment] = useState("");
   const [vote, setVote] = useState(data?.votes);
   const user = useSelector((state) => state.user.currentUser);
   const commentRef = useRef();
   const params = useParams();

   useEffect(() => {
      const getData = async () => {
         const res = await publicRequest.get(`/post/${params.id}`);
         setData(res.data);
      };
      getData();
   }, [params.id]);

   useEffect(() => {
      const getComments = async () => {
         const res = await publicRequest.get(
            `/comment/all?postId=${params.id}`
         );
         setComments(res.data);
      };
      getComments();
   }, [comments, params.id]);

   useEffect(() => {
      const getVotes = async () => {
         const res = await publicRequest.get(`/post/vote/${params.id}`);
         setVote(res.data);
      };
      getVotes();
   }, [params.id, vote]);

   const checkUser = () => {
      if (!user) return false;
      const userId = user._id;
      if (data.author === userId) return true;
      else return false;
   };

   const handelComment = async (e) => {
      if (!user) {
         alert("You should log in to vote");
      }
      try {
         e.preventDefault();
         const res = await publicRequest.post(
            `comment/create/${data?._id}`,
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

   const handelDelete = async () => {
      try {
         const res = await publicRequest.post(`/post/${data._id}`);
         console.log(res);
         navigate("/lists");
      } catch (error) {
         console.log(error);
      }
   };

   const handelUpVote = async () => {
      console.log("hii");
      if (!user) {
         alert("You should log in to vote");
      }
      try {
         const res = await publicRequest.post(`/post/upvote/${data._id}`, {
            withCredentials: true,
         });
         setVote(res.data);
      } catch (error) {
         alert("You have already voted");
         console.log(error);
      }
   };

   const handelDownVote = async () => {
      if (!user) {
         alert("You should log in to vote");
         return;
      }
      try {
         const res = await publicRequest.post(`/post/downvote/${data._id}`, {
            withCredentials: true,
         });
         setVote(res.data);
      } catch (error) {
         alert("You have already voted");
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
                  <span>created by {data.username}</span>
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
                        <span className="delete" onClick={handelDelete}>
                           Delete
                        </span>
                     </>
                  )}
               </div>
               <div className="list_desc">
                  <div className="list_vote">
                     <ArrowDropUp
                        className="vote_icon up"
                        onClick={handelUpVote}
                     />
                     <span>{vote}</span>
                     <ArrowDropDown
                        onClick={handelDownVote}
                        className="vote_icon down"
                     />
                  </div>
                  <p>{data.desc}</p>
               </div>
               <div className="list_tags">
                  {data?.tags?.map((tag, i) => (
                     <span key={i}>{tag}</span>
                  ))}
               </div>
               <div className="list_answers">
                  <h2>Answers</h2>
                  {comments?.map((comment, i) => (
                     <Comment data={comment} postId={data._id} key={i} />
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
