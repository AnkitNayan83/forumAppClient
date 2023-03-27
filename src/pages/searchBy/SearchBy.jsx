import { ArrowBack, Search } from "@mui/icons-material";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Item } from "../../components/item/Item";
import { Navbar } from "../../components/navbar/Navbar";
import "./searchBy.scss";

export const SearchBy = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const type = location.state.type;
  return (
    <div className="searchBy">
      <Navbar />
      <div className="search_container">
        <div className="search_wrapper">
          <div className="top" onClick={() => navigate("/lists")}>
            <ArrowBack className="back_icon" />
            <span>Back</span>
          </div>
          <div className="title">
            <h3>Search by {type}</h3>
            <div className="search_bar">
              <input type="text" placeholder={`enter any ${type}`} />
              <Search className="icon" />
            </div>
          </div>
          <div className="middle">
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
          </div>
        </div>
      </div>
    </div>
  );
};
