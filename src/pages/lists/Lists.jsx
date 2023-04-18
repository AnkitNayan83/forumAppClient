import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Footer } from "../../components/footer/Footer";
import { Item } from "../../components/item/Item";
import { Navbar } from "../../components/navbar/Navbar";
import "./lists.scss";
import { publicRequest } from "../../axiosinstance";

export const Lists = () => {
   //on this page we will search by title of post
   const [posts, setPosts] = useState([]);
   const [active, setActive] = useState("");
   const navigate = useNavigate();
   const location = useLocation();
   const title = location.state;

   useEffect(() => {
      const makeRequest = async () => {
         try {
            let res;
            if (active === "newest") {
               res = title
                  ? await publicRequest.get(`/post?new=true&title=${title}`)
                  : await publicRequest.get("/post?new=true");
            } else if (active === "votes")
               res = title
                  ? await publicRequest.get(`/post?vote=true&title=${title}`)
                  : await publicRequest.get("/post?vote=true");
            else if (active === "")
               res = title
                  ? await publicRequest.get(`/post?title=${title}`)
                  : await publicRequest.get("/post");
            setPosts(res.data);
         } catch (error) {
            console.log(error);
         }
      };
      makeRequest();
   }, [title, active]);

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
                     <h2>
                        {title
                           ? `Showing result for ${title}`
                           : "Top Questions"}
                     </h2>
                     <div className="filter">
                        <span onClick={() => handelClick("tag")}>
                           Search by tags
                        </span>
                     </div>
                  </div>
                  <div className="right">
                     <button onClick={() => navigate("/post")}>
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
               {posts.length === 0 ? (
                  <span className="notFound">
                     <img
                        className="no_result"
                        src="/assests/no_result.png"
                        alt=""
                     />
                     <p>No result found for "{title}"</p>
                  </span>
               ) : (
                  <div className="lists_item">
                     {posts.map((post, i) => (
                        <Item key={i} data={post} />
                     ))}
                  </div>
               )}
            </div>
         </div>
         <Footer />
      </div>
   );
};
