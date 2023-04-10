import React from "react";
import "./editPost.scss";
import { Navbar } from "../../components/navbar/Navbar";
import TagInput from "../../components/tagInput/TagInput";
import { Footer } from "../../components/footer/Footer";

export const EditPost = () => {
   return (
      <div className="editPost">
         <Navbar />
         <div className="editPost-container">
            <div className="editPost-wrapper">
               <div className="editPost-title">
                  <h2 className="editPost-heading">Edit Your Post</h2>
               </div>

               <div className="ques-title">
                  <h4>Title</h4>
                  <div className="input-container">
                     <input className="input" type="text" />
                  </div>
                  <button>Next</button>
               </div>

               <div className="ques-title">
                  <h4>Detailed description about your problem</h4>
                  <p>
                     Introduce the problem and expand on what you put in the
                     title. Minimum 250 characters.
                  </p>
                  <div className="input-container">
                     <textarea
                        className="input"
                        name=""
                        id=""
                        cols="116"
                        rows="10"
                     ></textarea>
                  </div>
                  <button>Next</button>
               </div>

               <div className="ques-title">
                  <h4>Tags</h4>
                  <div className="input-container extra">
                     <TagInput />
                  </div>
               </div>

               <div className="btn-div">
                  <button className="btn-post">Edit your Post</button>
               </div>
            </div>
         </div>
         <Footer />
      </div>
   );
};
