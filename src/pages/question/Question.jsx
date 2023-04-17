import React, { useState } from "react";
import { Navbar } from "../../components/navbar/Navbar";
import "./Question.scss";
import TagInput from "../../components/tagInput/TagInput";
import { Footer } from "../../components/footer/Footer";
import { useSelector } from "react-redux";
import { publicRequest } from "../../axiosinstance";
import { useNavigate } from "react-router-dom";
function Question() {
   const [tags_, setNewTag] = useState([]);
   const [title, setTitle] = useState("");
   const [desc, setDesc] = useState("");
   const user = useSelector((state) => state.user.currentUser);

   const username = user.username;
   const navigate = useNavigate();

   const handelPost = async () => {
      try {
         const data = { title, desc, tags: tags_, username };
         console.log(data);
         const res = await publicRequest.post("/post", data, {
            withCredentials: true,
         });
         navigate(`/lists/${res.data._id}`);
      } catch (error) {
         console.log(error);
      }
   };

   return (
      <div className="question">
         <Navbar />
         <div className="question-container">
            <div className="question-wrapper">
               <div className="question-title">
                  <h2 className="question-heading">Ask a public Question</h2>
                  <div className="img-container">
                     <img
                        className="question-img"
                        src="/assests/quest1.png"
                        alt=""
                     />
                     <img
                        className="question-img img2"
                        src="/assests/quest2.png"
                        alt=""
                     />
                  </div>
               </div>

               <div className="ques-title">
                  <h4>Title</h4>
                  <p>Express your question in few words</p>
                  <div className="input-container">
                     <input
                        onChange={(e) => setTitle(e.target.value)}
                        className="input"
                        type="text"
                     />
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
                        onChange={(e) => setDesc(e.target.value)}
                     ></textarea>
                  </div>
                  <button>Next</button>
               </div>

               <div className="ques-title">
                  <h4>Tags</h4>
                  <p>
                     Add up to 5 tags to describe what your question is about.
                     Start typing to see suggestions.
                  </p>
                  <div className="input-container extra">
                     <TagInput tags_={[]} setNewTag={setNewTag} />
                  </div>
               </div>

               <div className="btn-div">
                  <button className="btn-post" onClick={handelPost}>
                     Post your Question
                  </button>
               </div>
            </div>
         </div>
         <Footer />
      </div>
   );
}

export default Question;
