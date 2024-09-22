import React, { useState } from "react";

import "./Header.css";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
const Header = () => {
  const listItems = [
    {
      path: "/",
      items: "Home"
    },
    {
      path: "/about",
      items: "About"
    },
    {
      path: "/projects",
      items: "Project"
    },
    {
      path: "/contacts",
      items: "Contact"
    },
  ]



  const [resp, setResponsive] = useState(false);
  return (
    <div className="xyflex xyheader">
      <NavLink to="/">
        <div style={{ color: "black" }}>
          <h2>Malik Hannan</h2>
        </div>
      </NavLink>
      <ul className={resp ? "yresponsive" : "xyflex xyheader_ul"}>


        {/* <li className="xyheader_li" style={ }>
          {listItems.map((item, index) => {
            <NavLink to={item.path} key={index}>
              <div className="xyh_li">
                <li>{item.items}</li>
              </div>
            </NavLink>
          })}
        </li> */}

        <li className="xyheader_li">
          <NavLink to="/">
            <div className="xyh_li">
              <li >Home</li>
            </div>
          </NavLink>
        </li>
        <li className="xyheader_li">
          <NavLink to="/about">
            <div className="xyh_li">
              <li >About</li>
            </div>
          </NavLink>
        </li>
        <li className="xyheader_li">
          <NavLink to="/projects">
            <div className="xyh_li">
              <li>Project</li>
            </div>
          </NavLink>
        </li>
        <li className="xyheader_li">
          <NavLink to="/contacts">
            <div className="xyh_li">
              <li>Contact</li>
            </div>
          </NavLink>
        </li>
      </ul>
      <div
        className="xymenu"
        onClick={() => {
          setResponsive(!resp);
        }}
      >
        <Button>
          <MenuIcon />
        </Button>
      </div>
    </div>
  );
};

export default Header;
