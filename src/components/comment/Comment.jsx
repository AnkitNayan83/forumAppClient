import { ArrowDropDown, ArrowDropUp } from "@mui/icons-material";
import "./comment.scss";
import React, { useEffect, useState } from "react";
import { publicRequest } from "../../axiosinstance";

export const Comment = ({ data }) => {
   const [userName, setUserName] = useState("");
   useEffect(() => {
      const getUser = async () => {
         const res = await publicRequest.get(`/users/${data.author}`);
         setUserName(res.data.username);
      };
      getUser();
   }, [data]);

   return (
      <div className="comment">
         <div className="container">
            <div className="comment_user">
               <span className="user">{userName}</span>
               <span className="date"> 28/03/23</span>
            </div>
            <div className="comment_content">
               <div className="comment_vote">
                  <ArrowDropUp className="vote_icon up" />
                  <span>{data.votes}</span>
                  <ArrowDropDown className="vote_icon down" />
               </div>
               <p>{data.desc}</p>
            </div>
         </div>
      </div>
   );
};
