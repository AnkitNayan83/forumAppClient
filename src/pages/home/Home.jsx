import React from "react";
import { Header } from "../../components/header/Header";
import { Navbar } from "../../components/navbar/Navbar";
import { useNavigate } from "react-router-dom";
import "./home.scss";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../redux/userSlice";
import Cookies from "js-cookie";

export const Home = () => {
   const cookieExists = Cookies.get("access_token");
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
         {user && !cookieExists ? (
            <div className="sessionExpired">
               <div className="wrapper">
                  <p>Your Session has been expired</p>
                  <button onClick={handelUser}>Click Here to logIn</button>
               </div>
            </div>
         ) : (
            <>
               <Navbar />
               <Header />
            </>
         )}
      </div>
   );
};
