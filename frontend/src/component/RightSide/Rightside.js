import React  from "react";
import "./Rightside.css";
import Home from "../../img/home.png";
import Noti from "../../img/noti.png";
import Comment from "../../img/comment.png";
import TrendCard from "../TrendCard/TrendCard";

const RightSide = () => {
  return (
    <div className="RightSide">
      <div className="navIcons">
        <img src={Home} alt="" />
        <span class="material-symbols-outlined">
settings
</span>
        <img src={Noti} alt="" />
        <img src={Comment} alt="" />
      </div>

      <TrendCard/>

    </div>
  );
};

export default RightSide;