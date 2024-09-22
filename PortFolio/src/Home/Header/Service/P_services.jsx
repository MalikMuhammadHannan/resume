import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import "./P_services.css";

import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
const P_services = () => {
  return (
    <>
      <div className="xyflex xyservice">
        <div className="xyservice_one xyall">
          <h2 className="xyservice_h2">Malik Hannan</h2>
          <h4 className="xyservice_h4">Made By Malik Muhammad Hannan</h4>
        </div>
        <div className="xyservice_two xyall">
          <h2 className="xyservice_h2">Subscribe</h2>
          <input className="xyP_input" type="email" placeholder="YOUR EMAIL" />
          <br />
          <button className="xyservice_btn">Subscribe</button>
        </div>
        <div className="xyservice_three xyall">
          <h2 className="xyservice_h2">Follow Me</h2>
          <div className="xyservice_icon">
            <a href="https://www.facebook.com/malik.hannan.986" target="blank">
              <FacebookIcon />
            </a>
            <a href="https://react.dev/" target="blank">
              <InstagramIcon />
            </a>

            <a
              href="https://www.linkedin.com/in/malik-hannan-b12b8a244/"
              target="blank"
            >
              <LinkedInIcon />
            </a>
          </div>
        </div>
        <div className="xyservice_four xyall">
          <h2 className="xyservice_h2">Call Me</h2>
          <h4 className="xyservice_h4">+923331368190</h4>
          <h2 className="xyservice_h2">Email Me</h2>
          <h4 className="xyservice_h4">hannanmalik228@gmail.com</h4>
        </div>
      </div>
      <p className="xyservice_p">
        @{new Date().getFullYear()} Malik Hannan. All Rights Reserved
      </p>
    </>
  );
};

export default P_services;
