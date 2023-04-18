import React, { useState } from "react";
import "./login.scss";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/apiCalls";

export const Login = () => {
   const [username, setUserName] = useState("");
   const [password, setPassword] = useState("");
   const dispatch = useDispatch();
   const { loading, error } = useSelector((state) => state.user);
   const handelLogin = (e) => {
      e.preventDefault();
      login(dispatch, { username, password });
   };

   return (
      <div className="login">
         <div className="login_card">
            <div className="top">
               <h1>Login</h1>
               {error && <span>Wrong username or password</span>}
               {loading && <span>loading please wait...</span>}{" "}
            </div>
            <form>
               <input
                  onChange={(e) => setUserName(e.target.value)}
                  type="text"
                  placeholder="username"
               />
               <input
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="password"
               />
               <button className="login_submit" onClick={handelLogin}>
                  Login
               </button>
            </form>
            <div className="login_bottom">
               New to this website, Click here to register
            </div>
         </div>
      </div>
   );
};
