import React from "react";
import { Navbar } from "../../components/navbar/Navbar";
import "./Question.scss";
import TagInput from "../../components/tagInput/TagInput";
import { Footer } from "../../components/footer/Footer";
function Question() {
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
                  <p>
                     Be specific and imagine you’re asking a question to another
                     person.
                  </p>
                  <div className="input-container">
                     <input className="input" type="text" />
                  </div>
                  <button>Next</button>
               </div>

               <div className="ques-title">
                  <h4>What are the details of your problem?</h4>
                  <p>
                     Introduce the problem and expand on what you put in the
                     title. Minimum 20 characters.
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
                  <p>
                     Add up to 5 tags to describe what your question is about.
                     Start typing to see suggestions.
                  </p>
                  <div className="input-container extra">
                     <TagInput />
                  </div>
               </div>

               <div className="btn-div">
                  <button className="btn-post">Post your Question</button>
               </div>
            </div>
         </div>
         <Footer />
      </div>
   );
}

export default Question;
