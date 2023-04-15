import React, { useState } from "react";
import "./register.scss";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../redux/apiCalls";

export const Register = () => {
   const [username, setUserName] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

   const dispatch = useDispatch();

   const { loading, error } = useSelector((state) => state.user);

   const handelRegister = (e) => {
      e.preventDefault();
      register(dispatch, { username, email, password });
   };

   return (
      <div className="register">
         <div className="register_card">
            <div className="top">
               <h1>Register</h1>
               {loading && <span>loading please wait</span>}
               {error && <span>Something went wrong</span>}
            </div>
            <form>
               <input
                  onChange={(e) => setUserName(e.target.value)}
                  type="text"
                  placeholder="username"
               />
               <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="email"
               />
               <input
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="password"
               />
               <button className="register_submit" onClick={handelRegister}>
                  Register
               </button>
            </form>
            <div className="register_bottom">
               New to this website, Click here to login
            </div>
         </div>
      </div>
   );
};
