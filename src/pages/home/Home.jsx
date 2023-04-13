import React from "react";
import { Header } from "../../components/header/Header";
import { Navbar } from "../../components/navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";

export const Home = () => {
   const dispatch = useDispatch();
   const user = useSelector((state) => state.user.currentUser);
   console.log(user);
   return (
      <div className="home">
         <Navbar />
         <Header />
      </div>
   );
};
