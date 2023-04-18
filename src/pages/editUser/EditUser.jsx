import React from "react";
import { Footer } from "../../components/footer/Footer";
import { Navbar } from "../../components/navbar/Navbar";
import "./editUser.scss";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../redux/apiCalls";
import { useNavigate } from "react-router-dom";

export const EditUser = () => {
   const user = useSelector((state) => state.user.currentUser);
   const [username, setUsername] = useState(user.username);
   const [email, setEmail] = useState(user.email);
   const dispatch = useDispatch();
   const navigate = useNavigate();

   const handelUpdate = (e) => {
      e.preventDefault();
      updateUser(dispatch, { username, email }, user._id);
      navigate(`/userprofile/editUser`);
   };

   return (
      <div className="EditUser">
         <Navbar />
         <div className="edituser-container">
            <div className=" edituser-wrapper">
               <div className="left-part">
                  <div className="input-user-img">
                     <label htmlFor="inputImg" className="labelImg">
                        <img src="/assests/robot.png" alt="name" />
                     </label>
                     {/* <input
                        className="inputImg"
                        id="inputImg"
                        type="file"
                        accept="image/*"
                     /> */}
                  </div>
               </div>
               <div className="right-part">
                  <h2>Your Details</h2>
                  <form>
                     <div className="i1">
                        <label htmlFor="username">Username:</label>
                        <input
                           id="username"
                           type="text"
                           value={username}
                           placeholder="Your Name"
                           onChange={(e) => setUsername(e.target.value)}
                        />
                     </div>
                     <div className="i2">
                        <label htmlFor="email">Email</label>
                        <input
                           type="email"
                           value={email}
                           id="email"
                           placeholder="email"
                           onChange={(e) => setEmail(e.target.value)}
                        />
                     </div>

                     <button onClick={handelUpdate} className="btn-update">
                        Update Account
                     </button>
                  </form>

                  <button className="del-account btn-primary">
                     Delete Account
                  </button>
               </div>
            </div>
         </div>
         <div className="foot">
            <Footer />
         </div>
      </div>
   );
};
