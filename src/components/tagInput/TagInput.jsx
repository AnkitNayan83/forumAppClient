import React, { useRef } from "react";
import { useState } from "react";
import "./TagInput.scss";
function TagInput() {
   const [tags, setTags] = useState([]);
   const [tag, setTag] = useState("");
   const ref = useRef();

   function handleKeyDown(e) {
      if (e.key !== "Enter") return;
      const value = e.target.value;
      if (!value.trim()) return;

      setTags([...tags, value]);
      e.target.value = "";
   }

   const handelCLick = () => {
      const value = tag;
      if (!value.trim()) return;
      setTags([...tags, value]);
      setTag("");
      ref.current.value = "";
   };

   function removeTag(index) {
      setTags(tags.filter((el, i) => i !== index));
   }

   return (
      <div tabIndex="-1" className="tags-input-container">
         <div className="tag_input_wrapper">
            <input
               onKeyDown={handleKeyDown}
               type="text"
               className="tags-input"
               placeholder="Type tags"
               onChange={(e) => setTag(e.target.value)}
               ref={ref}
            />
            <button onClick={handelCLick}>Add Tag</button>
         </div>
         <div className="tah_item_wrapper">
            {tags.map((tag, index) => {
               return (
                  <span className="tag-item" key={index}>
                     <span className="text">{tag}</span>
                     <span className="close" onClick={() => removeTag(index)}>
                        &times;
                     </span>
                  </span>
               );
            })}
         </div>
      </div>
   );
}

export default TagInput;
