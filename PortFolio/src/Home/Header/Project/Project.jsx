import React from "react";
import "./Project.css";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
const Project = () => {
  const Data = [
    {
      id: 1,
      logo: "https://frontend-coder.netlify.app/img/shop.png",
      AppName: "E-mart",
      para: "E-Shop App Using React,React-Icons,Styled-Components and Apis ",
      path: "https://e-commerce-malik.netlify.app/"
    },
    {
      id: 2,
      logo: "https://frontend-coder.netlify.app/img/weather.png",
      AppName: "weather App",
      para: "Real Time Weather App",
      path: "https://checks-weathers.netlify.app/"
    },
  ];
  return (
    <div className="xyProject_main">
      <h2 className="xyproject_h2">Projects</h2>
      <div className="xyflex xyproject">
        {Data.map((e) => {
          const { logo, AppName, id, para, path } = e;
          return (
            <div className="xycard" key={id}>
              <figure>
                <img className="xycard_img" src={logo} alt={AppName} />
              </figure>
              <h3 className="xyProject_h3">{AppName}</h3>
              <h5 className="xycard_para">{para}</h5>
              <div className="xycard_btn">
                {/* <Link to={path}> */}
                <a href={path} target="_blank">

                  <Button className="xycard_btn">Click To See</Button>
                </a>
                {/* </Link> */}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Project;
