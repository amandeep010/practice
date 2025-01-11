import React from "react";
import { TiArrowLeftThick } from "react-icons/ti";
import { useNavigate } from "react-router-dom";
import "./styles.scss";

function BackNav() {
  const navigate = useNavigate();
  return (
    <div className="backTopDiv">
      <div onClick={() => navigate("/project")} className="navBack">
        <TiArrowLeftThick color="white" className="backIcon" />
      </div>
      <div className="tableHeading">Practice Differents Tables</div>
    </div>
  );
}

export default BackNav;