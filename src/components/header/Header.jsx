import React from "react";
import { useNavigate } from "react-router-dom";
import "./header.scss";

export const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="header">
      <div className="header_container">
        <img className="header_icon" src="/assests/respect.png" alt="" />
        <p className="desc">
          A one place destination for all your queries.
          <br />
          You want to know about your college or school or <br /> want to solve
          some problems or anything in your mind we are here for your.
          <br />
          You got a question we got answers
        </p>
        <button className="header_btn" onClick={() => navigate("/lists")}>
          Get Started
        </button>
      </div>
    </div>
  );
};
