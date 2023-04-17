import { ArrowDropDown, ArrowDropUp } from "@mui/icons-material";
import "./comment.scss";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { publicRequest } from "../../axiosinstance";

export const Comment = ({ data, postId }) => {
   const user = useSelector((state) => state.user.currentUser);
   const [vote, setVote] = useState(data.votes);
   const checkUser = () => {
      if (!user) return false;
      const userId = user._id;
      if (data.author === userId) return true;
      else return false;
   };

   const handelDelete = async () => {
      try {
         const res = await publicRequest.delete(
            `/comment/${postId}/${data._id}`,
            { withCredentials: true }
         );
         console.log(res.data);
      } catch (error) {
         console.log(error);
      }
   };

   useEffect(() => {
      const getVotes = async () => {
         const res = await publicRequest.get(`/comment/vote/${data._id}`);
         setVote(res.data);
      };
      getVotes();
   }, [data.votes]);

   const handelUpVoteC = async () => {
      try {
         if (!user) {
            alert("You should log in to vote");
            return;
         }
         const res = await publicRequest.post(`/comment/upvote/${data._id}`, {
            withCredentials: true,
         });
         setVote(res.data);
      } catch (error) {
         alert("You have already voted");
         console.log(error);
      }
   };

   const handelDownVoteC = async () => {
      try {
         if (!user) {
            alert("You should log in to vote");
            return;
         }
         const res = await publicRequest.post(`/comment/downvote/${data._id}`, {
            withCredentials: true,
         });
         setVote(res.data);
      } catch (error) {
         alert("You have already voted");
         console.log(error);
      }
   };

   return (
      <div className="comment">
         <div className="container">
            <div className="comment_user">
               <span className="user">{data.username}</span>
               <span className="date"> 28/03/23</span>
            </div>
            <div className="comment_content">
               <div className="comment_vote">
                  <ArrowDropUp
                     onClick={handelUpVoteC}
                     className="vote_icon up"
                  />
                  <span>{vote}</span>
                  <ArrowDropDown
                     onClick={handelDownVoteC}
                     className="vote_icon down"
                  />
               </div>
               <p>{data.desc}</p>
            </div>
            <div className="comment_delete">
               {checkUser() && (
                  <span className="del" onClick={handelDelete}>
                     delete
                  </span>
               )}
            </div>
         </div>
      </div>
   );
};
