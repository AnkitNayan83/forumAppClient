import React from "react";
import "./register.scss";

export const Register = () => {
  return (
    <div className="register">
      <div className="register_card">
        <div className="top">
          <h1>Register</h1>
        </div>
        <form>
          <input type="text" placeholder="username" />
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <button className="register_submit">Register</button>
        </form>
        <div className="register_bottom">
          New to this website, Click here to login
        </div>
      </div>
    </div>
  );
};
