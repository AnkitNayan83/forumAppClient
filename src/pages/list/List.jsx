import React from "react";
import "./list.scss";
import { Navbar } from "../../components/navbar/Navbar";
import { Footer } from "../../components/footer/Footer";
import { ArrowDropDown, ArrowDropUp } from "@mui/icons-material";
import { Comment } from "../../components/comment/Comment";

export const List = () => {
  return (
    <div className="list">
      <Navbar />
      <div className="list_container">
        <div className="list_wrapper">
          <div className="title">
            <h2>This is a change testing of a post page 123 456 xyz ...</h2>
            <button>Ask something</button>
          </div>
          <div className="list_time">
            <span>created by User Name</span>
            <span>created At 27/03/2023</span>
            <span className="edit">Edit</span>
            <span className="delete">Delete</span>
          </div>
          <div className="list_desc">
            <div className="list_vote">
              <ArrowDropUp className="vote_icon up" />
              <span>10</span>
              <ArrowDropDown className="vote_icon down" />
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              ipsa soluta eos recusandae ad officiis facilis praesentium
              doloribus, beatae nesciunt similique, saepe, accusantium quo
              impedit et voluptas quibusdam temporibus. Minus? Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Eius reprehenderit beatae
              unde, omnis quisquam dicta excepturi doloremque iusto modi nisi
              ratione dolor. Explicabo iure quas repudiandae ab suscipit
              accusamus saepe. Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Dolorem odit dolores cumque voluptate
              praesentium aliquid iure omnis facilis quas, voluptates eius
              minima laudantium tempore quis recusandae magnam eligendi sunt
              consequuntur! Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Voluptas reprehenderit quasi est illum libero assumenda modi
              asperiores hic. Sequi magnam similique, nisi ut minus ipsum quo
              laborum nostrum non. Error.
            </p>
          </div>
          <div className="list_tags">
            <span>Tag 1</span>
            <span>Tag 2</span>
            <span>Tag 3</span>
          </div>
          <div className="list_answers">
            <h2>Answers</h2>
            <Comment />
            <Comment />
            <Comment />
            <Comment />
          </div>
          <div className="list_postAnswer">
            <div className="post_container">
              <h2>Your Answer</h2>
              <form>
                <textarea
                  name="answer"
                  id="answer"
                  cols="30"
                  rows="10"
                  placeholder="State your opinion"
                ></textarea>
                <button>Post Answer</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
