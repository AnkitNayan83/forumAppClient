import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./item.scss";

export const Item = ({ data }) => {
   const navigate = useNavigate();
   const [loadingPost, setLoadingPost] = useState(false);

   return (
      <div
         className="item"
         onClick={() => navigate(`/lists/${data._id}`, { state: { data } })}
      >
         {loadingPost ? (
            <span>Loading please wait...</span>
         ) : (
            <div className="item_container">
               <div className="top">
                  <h3 className="title">{data.title}</h3>
               </div>
               <span className="vote">{data.votes} votes</span>
               <div className="tags">
                  {data.tags.map((tag, i) => (
                     <span key={i}>{tag}</span>
                  ))}
               </div>
               <div className="footer">
                  created by: <u>{data.username}</u>
               </div>
            </div>
         )}
      </div>
   );
};
