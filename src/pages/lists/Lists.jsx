import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Footer } from "../../components/footer/Footer";
import { Item } from "../../components/item/Item";
import { Navbar } from "../../components/navbar/Navbar";
import "./lists.scss";

export const Lists = () => {
   //on this page we will search by title of post
   const [active, setActive] = useState("");
   const navigate = useNavigate();

   const handelClick = (type) => {
      navigate("/search", { state: { type } });
   };

   return (
      <div className="lists">
         <Navbar />
         <div className="lists_Container">
            <div className="lists_wrapper">
               <div className="lists_header">
                  <div className="left">
                     <h2>Top Questions</h2>
                     <div className="filter">
                        <span onClick={() => handelClick("tag")}>
                           Search by tags
                        </span>
                        <span onClick={() => handelClick("user")}>
                           Search by user
                        </span>
                        <span onClick={() => handelClick("company")}>
                           Search by company
                        </span>
                     </div>
                  </div>
                  <div className="right">
                     <button onClick={() => navigate("/ask")}>
                        Ask a question
                     </button>
                  </div>
               </div>
               <div className="lists_filter">
                  <span
                     onClick={() => setActive("newest")}
                     className={active === "newest" ? "active" : ""}
                  >
                     Newest
                  </span>
                  <span
                     onClick={() => setActive("votes")}
                     className={active === "votes" ? "active" : ""}
                  >
                     Most Voted
                  </span>
                  <span className="clear" onClick={() => setActive("")}>
                     clear
                  </span>
               </div>
               <div className="lists_item">
                  <Item />
                  <Item />
                  <Item />
                  <Item />
                  <Item />
                  <Item />
               </div>
            </div>
         </div>
         <Footer />
      </div>
   );
};
