import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./item.scss";
import { publicRequest } from "../../axiosinstance";

export const Item = ({ data }) => {
   const navigate = useNavigate();
   const [userName, setUserName] = useState("");
   useEffect(() => {
      const getUser = async () => {
         const res = await publicRequest.get(`/users/${data.author}`);
         setUserName(res.data.username);
      };
      getUser();
   }, [data]);

   return (
      <div
         className="item"
         onClick={() => navigate(`/lists/${data._id}`, { state: { data } })}
      >
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
               created by: <u>{userName}</u>
            </div>
         </div>
      </div>
   );
};
