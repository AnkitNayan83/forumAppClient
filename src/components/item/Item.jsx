import React from "react";
import { useNavigate } from "react-router-dom";
import "./item.scss";

export const Item = () => {
   const navigate = useNavigate();
   return (
      <div className="item" onClick={() => navigate("/lists/123")}>
         <div className="item_container">
            <div className="top">
               <h3 className="title">This is a test question 123 abc xyz</h3>
            </div>
            <span className="vote">10 votes</span>
            <div className="tags">
               <span>Tag 1</span>
               <span>Tag 2</span>
               <span>Tag 3</span>
            </div>
            <div className="footer">created by: USER</div>
         </div>
      </div>
   );
};
