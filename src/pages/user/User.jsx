import React from "react";
import { Item } from "../../components/item/Item";
import { Navbar } from "../../components/navbar/Navbar";
import { SlCalender } from "react-icons/sl";
import { FaPen } from "react-icons/fa";
import "./user.scss";
import { useNavigate } from "react-router-dom";
import { Footer } from "../../components/footer/Footer";
import { useState } from "react";
import { useEffect } from "react";
import { publicRequest } from "../../axiosinstance";
import { useSelector } from "react-redux";
export const User = () => {
   const currentUser = useSelector((state) => state.user.currentUser);
   const navigate = useNavigate();
   const [posts, setPosts] = useState([]);
   useEffect(() => {
      const getPost = async () => {
         const res = await publicRequest.get(`/post?user=${currentUser._id}`);
         setPosts(res.data);
      };
      getPost();
   }, [currentUser, posts]);

   const getDate = (str) => {
      let date = "";
      for (let i = 0; i < str.length; i++) {
         if (str[i] === "T") break;
         else date += str[i];
      }
      return date;
   };

   return (
      <div className="User">
         <Navbar />
         <div className="user-container">
            <div className="user-wrapper">
               <div className="personal-info">
                  <div className="left-part">
                     <div className="img-container">
                        <img src="/assests/robot.png" alt="profile" />
                     </div>
                     <div className="info-container">
                        <h2>{currentUser.username}</h2>
                        <p>
                           <SlCalender className="icon" /> Joined at :{" "}
                           {getDate(currentUser.createdAt)}
                        </p>
                     </div>
                  </div>
                  <div className="right-part">
                     <div className="update-profile">
                        <button
                           className="btn-profil"
                           onClick={() => navigate("/useredit")}
                        >
                           {" "}
                           <div className="info">
                              <FaPen className="pen" /> <p>Edit Profile</p>
                           </div>{" "}
                        </button>
                     </div>
                  </div>
               </div>
               <span className="user_post">Your Posts</span>
               <div className="item-container">
                  {posts.map((post, i) => (
                     <Item data={post} key={i} />
                  ))}
               </div>
            </div>
         </div>
         <Footer />
      </div>
   );
};
