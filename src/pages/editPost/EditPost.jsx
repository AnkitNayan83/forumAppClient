import React, { useState } from "react";
import "./editPost.scss";
import { Navbar } from "../../components/navbar/Navbar";
import TagInput from "../../components/tagInput/TagInput";
import { Footer } from "../../components/footer/Footer";
import { useLocation, useNavigate } from "react-router-dom";
import { publicRequest } from "../../axiosinstance";

export const EditPost = () => {
   const location = useLocation();
   const data = location.state;
   const [title, setTitle] = useState(data.title);
   const [desc, setDesc] = useState(data.desc);
   const [newTags, setNewTag] = useState([...data.tags]);
   const navigate = useNavigate();

   const handelEdit = async () => {
      try {
         const res = await publicRequest.put(
            `/post/${data._id}`,
            {
               title,
               desc,
               tags: newTags,
            },
            { withCredentials: true }
         );
         console.log(res.data);
         navigate(`/lists/${data._id}`);
      } catch (error) {
         console.log(error);
      }
   };

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
                     <input
                        className="input"
                        onChange={(e) => setTitle(e.target.value)}
                        type="text"
                        value={title}
                     />
                  </div>
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
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)}
                     ></textarea>
                  </div>
               </div>

               <div className="ques-title">
                  <h4>Tags</h4>
                  <div className="input-container extra">
                     <TagInput tags_={data.tags} setNewTag={setNewTag} />
                  </div>
               </div>

               <div className="btn-div">
                  <button className="btn-post" onClick={handelEdit}>
                     Edit your Post
                  </button>
               </div>
            </div>
         </div>
         <Footer />
      </div>
   );
};
