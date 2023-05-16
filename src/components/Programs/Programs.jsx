import React from "react";
import "./Programs.css";
import RightArrow from "../../assets/images/right-arrow.png";
import { programsData } from "../../data/programsData";

const Programs = () => {
  return (
    <div className="Programs" id="programs">
      {/* <div className="box"></div> */}
      <div className="programs-header">
        <span className="stroke-text">Explore our</span>
        <span>Programs</span>
        <span className="stroke-text">To Shape You</span>
      </div>

      <div className="program-category">
        {programsData.map((program) => (
          <div className="category">
            <img src={program.image} alt="" />
            <span>{program.heading}</span>
            <span>{program.description}</span>
            <div className="join">
              <span>Join Now</span>
              <img src={RightArrow} alt="arrow" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programs;
