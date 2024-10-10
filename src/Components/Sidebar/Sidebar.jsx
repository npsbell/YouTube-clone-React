import React from "react";
import "./Sidebar.css";
import home from "../../assets/home.png";
import game_icon from "../../assets/game_icon.png";
import automobiles from "../../assets/automobiles.png";
import sports from "../../assets/sports.png";
import entertainment from "../../assets/entertainment.png";
import tech from "../../assets/tech.png";
import music from "../../assets/music.png";
import blogs from "../../assets/blogs.png";
import news from "../../assets/news.png";
import jack from "../../assets/people/Ellipse 12.png";
import simon from "../../assets/people/Ellipse 14.png";
import mimi from "../../assets/people/Ellipse 175.png";
import megan from "../../assets/people/Ellipse 87.png";
import cameron from "../../assets/people/Ellipse 9.png";

const Sidebar = ({ sidebar, category, setCategory }) => {
  return (
    <div className={`sidebar ${sidebar ? "" : "small-sidebar"}`}>
      <div className="shortcut-links">
        <div
          className={`side-link ${category === 0 ? "active" : ""}`}
          onClick={() => setCategory(0)}
        >
          <img src={home} alt="" />
          <p>Home</p>
        </div>
        <div
          className={`side-link ${category === 20 ? "active" : ""}`}
          onClick={() => setCategory(20)}
        >
          <img src={game_icon} alt="" />
          <p>Gaming</p>
        </div>
        <div
          className={`side-link ${category === 2 ? "active" : ""}`}
          onClick={() => setCategory(2)}
        >
          <img src={automobiles} alt="" />
          <p>Automobiles</p>
        </div>
        <div
          className={`side-link ${category === 17 ? "active" : ""}`}
          onClick={() => setCategory(17)}
        >
          <img src={sports} alt="" />
          <p>Sports</p>
        </div>
        <div
          className={`side-link ${category === 24 ? "active" : ""}`}
          onClick={() => setCategory(24)}
        >
          <img src={entertainment} alt="" />
          <p>Entertainment</p>
        </div>
        <div
          className={`side-link ${category === 28 ? "active" : ""}`}
          onClick={() => setCategory(28)}
        >
          <img src={tech} alt="" />
          <p>Teachnology</p>
        </div>
        <div
          className={`side-link ${category === 10 ? "active" : ""}`}
          onClick={() => setCategory(10)}
        >
          <img src={music} alt="" />
          <p>Music</p>
        </div>
        <div
          className={`side-link ${category === 22 ? "active" : ""}`}
          onClick={() => setCategory(22)}
        >
          <img src={blogs} alt="" />
          <p>Blogs</p>
        </div>
        <div
          className={`side-link ${category === 25 ? "active" : ""}`}
          onClick={() => setCategory(25)}
        >
          <img src={news} alt="" />
          <p>News</p>
        </div>
        <hr />
      </div>
      <div className="subscribes-list">
        <h3>Subscribes</h3>
        <div className="side-link">
          <img src={jack} alt="" />
          <p>Jack</p>
        </div>
        <div className="side-link">
          <img src={simon} alt="" />
          <p>Tom</p>
        </div>
        <div className="side-link">
          <img src={mimi} alt="" />
          <p>Mimi</p>
        </div>
        <div className="side-link">
          <img src={megan} alt="" />
          <p>Megan</p>
        </div>
        <div className="side-link">
          <img src={cameron} alt="" />
          <p>Cameron</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
