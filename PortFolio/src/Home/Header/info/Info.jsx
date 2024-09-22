import React from "react";
import "./Info.css";
import { Link } from "react-router-dom";
const Info = () => {
  return (
    <div className="xyflex xyInfo">
      <div className="xyinfo_left">
        <h6 className="xygrey">THIS IS ME</h6>
        <h1 className="xyinfo_h1">
          <b>MALIK MUHAMMAD HANNAN</b>
        </h1>
        <h4 className="xygrey xyinfo_h4">
          I'm Malik Hannan.A Frontend Developer and a Software Engineering
          student at Karachi University.
        </h4>
        <div>
          <Link to="/contacts">
            <button className="xyinfo_btn">HIRE ME</button>
          </Link>
          <Link to="/about">
            <button className="xyinfo_btn">READ MORE</button>
          </Link>
        </div>
      </div>
      <div className="xyInfo_img">
        <figure>
          <img className="xyInfo_img" src="./Images/Img2.jpg" alt="jani" />
        </figure>
      </div>
    </div>
  );
};

export default Info;
