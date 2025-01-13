import "./styles.scss";
import React from "react";
import smiley from "../../assets/smiley.png"

function index() {
  return (
    <div className="pages">
      <h4><img src={smiley} width="30px"/>Hii there,i am _<span>Aman Deep Rawat</span>!</h4>
      <div className="portfolio">
        A full Stack Developer,
        Who will convert your imagination to a canvas.
      </div>
    </div>
  );
}

export default index;
