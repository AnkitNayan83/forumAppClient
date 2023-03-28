import { ArrowDropDown, ArrowDropUp } from "@mui/icons-material";
import "./comment.scss";
import React from "react";

export const Comment = () => {
  return (
    <div className="comment">
      <div className="container">
        <div className="comment_user">
          <span className="user">User Name</span>
          <span className="date"> 28/03/23</span>
        </div>
        <div className="comment_content">
          <div className="comment_vote">
            <ArrowDropUp className="vote_icon up" />
            <span>10</span>
            <ArrowDropDown className="vote_icon down" />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ipsa
            soluta eos recusandae ad officiis facilis praesentium doloribus,
            beatae nesciunt similique, saepe, accusantium quo impedit et
            voluptas quibusdam temporibus. Minus? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Eius reprehenderit beatae unde, omnis
            quisquam dicta excepturi doloremque iusto modi nisi ratione dolor.
            Explicabo iure quas repudiandae ab suscipit accusamus saepe. Lorem
            ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
      </div>
    </div>
  );
};
