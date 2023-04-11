import { Search } from "@mui/icons-material";
import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./navbar.scss";

export const Navbar = () => {
   const navigate = useNavigate();
   const user = false;
   const searchRef = useRef();
   const handelClick = () => {
      const title = searchRef.current.value;
      navigate("/lists", { state: title });
   };
   return (
      <div className="navbar">
         <div className="navContainer">
            <div className="left" onClick={() => navigate("/")}>
               <img
                  style={{ width: "30px", height: "30px", marginRight: "5px" }}
                  src="/assests/chat.png"
                  alt=""
               />
               Right Path
            </div>
            <div className="middle">
               <input
                  type="text"
                  placeholder="search anything..."
                  ref={searchRef}
               />
               <Search className="navIcon" onClick={handelClick} />
            </div>
            <div className="right">
               {user ? (
                  <>
                     <img
                        src="https://i.ibb.co/tpPJjB3/Whats-App-Image-2022-06-21-at-5-48-06-PM.jpg"
                        alt=""
                        className="profile"
                     />
                     <button>Sign Out</button>
                  </>
               ) : (
                  <>
                     <Link to="/login">
                        <button>Sign In</button>
                     </Link>
                     <Link to="/register">
                        <button>Register</button>
                     </Link>
                  </>
               )}
            </div>
         </div>
      </div>
   );
};
