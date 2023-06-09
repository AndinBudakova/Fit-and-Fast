import React from "react";
import "./Home.css";
import Header from "../Header/Header";
import Kcal from "../../assets/images/calories.png";
import Athlete from "../../assets/images/athlete.png";
import AthleteG from "../../assets/images/athleteg.png";

import {motion} from 'framer-motion'

const Home = () => {

  const transition = {type: 'spring', duration : 3}

  return (
    <div className="home">
      <div className="left">
        <Header />

        <div className="theAd">
        <motion.div
            initial={{left:'178px'}}
          whileInView={{left:'8px'}}
          transition={{...transition, type :'tween'}}
          ></motion.div>
          <span>the best gym in the town</span>
        </div>

        <div className="home-text">
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </div>

          <div>
            <span>Ideal </span>
            <span className="stroke-text">Body</span>
          </div>

          <div>
            <span className="font-span">
              Unleash your inner strength and forge a powerful physique at our
              gym
            </span>
          </div>
        </div>

        <div className="figs">
          <div>
            <span>+140</span>
            <span>Expert Coaches</span>
          </div>

          <div>
            <span>+550</span>
            <span>Members joined</span>
          </div>

          <div>
            <span>+60</span>
            <span>Gym Programs</span>
          </div>
        </div>

        <div className="home-buttons">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>

      <div className="right">
        <button className="btn">Join Now</button>

        <motion.div
        initial={{right:"-10px"}}
         whileInView={{right:"40px"}}
        transition={transition}
        className="kcal">
          <img src={Kcal} alt="Kcal-icon" />
          <span>Calories Burned</span>
          <span>350 kcal</span>
          </motion.div>

        <img src={Athlete} alt="" className="athlete" />
        <img src={AthleteG} alt="" className="athleteg" />
      </div>
    </div>
  );
};

export default Home;
