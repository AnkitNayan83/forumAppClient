import React from "react";
import "./login.scss";

export const Login = () => {
   return (
      <div className="login">
         <div className="login_card">
            <div className="top">
               <h1>Login</h1>
            </div>
            <form>
               <input type="text" placeholder="username" />
               <input type="password" placeholder="password" />
               <button className="login_submit">Login</button>
            </form>
            <div className="login_bottom">
               New to this website, Click here to register
            </div>
         </div>
      </div>
   );
};
