import React from "react";
import { RxExit } from "react-icons/rx";
import "./styles.scss";

function index() {
  return (
    <div className="pages">
      <div className="project">
        <div className="projectView">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0c/Netflix_2015_N_logo.svg"
            alt=""
            width="15px"
          />
          <div>Netflix UI Clone</div>
          <a
            href="https://netflix-ui-clone-rho.vercel.app/Home"
            target="_blank"
          >
            <RxExit />
          </a>
        </div>
      </div>
    </div>
  );
}

export default index;
