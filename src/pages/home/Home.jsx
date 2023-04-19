import React from "react";
import { Header } from "../../components/header/Header";
import { Navbar } from "../../components/navbar/Navbar";
import { useNavigate } from "react-router-dom";
import "./home.scss";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../redux/userSlice";

export const Home = () => {
   const user = useSelector((state) => state.user.currentUser);
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const handelUser = () => {
      dispatch(logOut);
      localStorage.removeItem("user");
      navigate("/login");
      window.location.reload(false);
   };
   return (
      <div className="home">
         <>
            <Navbar />
            <Header />
         </>
      </div>
   );
};
