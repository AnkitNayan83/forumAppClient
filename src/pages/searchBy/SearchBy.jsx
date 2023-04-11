import { ArrowBack, Search } from "@mui/icons-material";
import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Footer } from "../../components/footer/Footer";
import { Item } from "../../components/item/Item";
import { Navbar } from "../../components/navbar/Navbar";
import "./searchBy.scss";
import { publicRequest } from "../../axiosinstance";

export const SearchBy = () => {
   const location = useLocation();
   const navigate = useNavigate();
   const type = location.state.type;
   const [tag, setTag] = useState("");
   const [items, setItems] = useState([]);
   const inputRef = useRef();

   useEffect(() => {
      const getItems = async () => {
         const res = await publicRequest.get(
            tag ? `/post?tag=${tag}` : "/post"
         );
         setItems(res.data);
      };
      getItems();
   }, [items, tag, setTag]);

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
                     <input
                        type="text"
                        placeholder={`enter any ${type}`}
                        ref={inputRef}
                     />
                     <Search
                        className="icon"
                        onClick={() => setTag(inputRef.current.value)}
                     />
                  </div>
               </div>
               <div className="middle">
                  {items.map((item, i) => (
                     <Item data={item} key={i} />
                  ))}
               </div>
            </div>
         </div>
         <Footer />
      </div>
   );
};
