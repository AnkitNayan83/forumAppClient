import React from "react";
import { useState } from "react";
import "./TagInput.scss";
function TagInput() {
   const [tags, setTags] = useState([]);

   function handleKeyDown(e) {
      if (e.key !== "Enter") return;
      const value = e.target.value;
      if (!value.trim()) return;

      setTags([...tags, value]);
      e.target.value = "";
   }

   function removeTag(index) {
      setTags(tags.filter((el, i) => i !== index));
   }

   return (
      <div tabIndex="-1" className="tags-input-container">
         {tags.map((tag, index) => {
            return (
               <div className="tag-item" key={index}>
                  <span className="text">{tag}</span>
                  <span className="close" onClick={() => removeTag(index)}>
                     &times;
                  </span>
               </div>
            );
         })}
         <input
            onKeyDown={handleKeyDown}
            type="text"
            className="tags-input"
            placeholder="Type tags"
         />
      </div>
   );
}

export default TagInput;
