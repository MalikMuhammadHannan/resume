import React from "react";
import Slider from "@mui/material/Slider";
import "./Skill.css";
const Skills = () => {
  return (
    <div className="xyskill_main">
      <div className="xyskill">
        <h1
          style={{
            textAlign: "center",
            fontWeight: "bolder",
            marginBottom: 50,
          }}
        >
          <b>MY SKILLS</b>
        </h1>

        <div className="xyskill_gap">
          <div className="xyflex xyskill_h3">
            <h5 className="xymain_h3">HTML</h5>
            <div className="xyslider">
              <Slider value="75" valueLabelDisplay="75" />
            </div>
          </div>
          <div className="xyflex xyskill_h3">
            <h5 className="xymain_h3">CSS</h5>
            <div className="xyslider">
              <Slider value="70" valueLabelDisplay="70" />
            </div>
          </div>
          <div className="xyflex xyskill_h3">
            <h5 className="xymain_h3">JAVASCRIPT</h5>
            <div className="xyslider">
              <Slider value="60" valueLabelDisplay="60" />
            </div>
          </div>
          <div className="xyflex xyskill_h3">
            <h5 className="xymain_h3">REACT</h5>
            <div className="xyslider">
              <Slider value="60" valueLabelDisplay="60" />
            </div>
          </div>
          <div className="xyflex xyskill_h3">
            <h5 className="xymain_h3">TYPE-SCRIPT</h5>
            <div className="xyslider">
              <Slider value="40" valueLabelDisplay="40" />
            </div>
          </div>
          <div className="xyflex xyskill_h3">
            <h5 className="xymain_h3">MATERIAL-UI</h5>
            <div className="xyslider">
              <Slider value="50" valueLabelDisplay="50" />
            </div>
          </div>
          <div className="xyflex xyskill_h3">
            <h5 className="xymain_h3">SASS</h5>
            <div className="xyslider">
              <Slider value="75" valueLabelDisplay="75" />
            </div>
          </div>
          <div className="xyflex xyskill_h3">
            <h5 className="xymain_h3">STYLED-COMPONENTS</h5>
            <div className="xyslider">
              <Slider value="80" valueLabelDisplay="80" />
            </div>
          </div>
          <div className="xyflex xyskill_h3">
            <h5 className="xymain_h3">GIT</h5>
            <div className="xyslider">
              <Slider value="65" valueLabelDisplay="65" />
            </div>
          </div>
          <div className="xyflex xyskill_h3">
            <h5 className="xymain_h3">GITHUB</h5>
            <div className="xyslider">
              <Slider value="65" valueLabelDisplay="65" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
