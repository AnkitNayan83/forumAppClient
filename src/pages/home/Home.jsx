import React from "react";
import { Header } from "../../components/header/Header";
import { Navbar } from "../../components/navbar/Navbar";

export const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Header />
    </div>
  );
};
