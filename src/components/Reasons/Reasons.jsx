import "./Reasons.css";
import React from "react";
import image1 from "../../assets/images/image1.jpg";
import image2 from "../../assets/images/image2.png";
import image3 from "../../assets/images/image3.png";
import image4 from "../../assets/images/image4.png";
import adidas from "../../assets/images/adidas.png";
import nike from "../../assets/images/nike.png";
import RightArrow from "../../assets/images/right-arrow.png";

 
function Reasons() {
    return (
        <div className="Reasons" id="reasons">
            <div className="left-r">
                <img src={image1} alt="" />
                <img src={image2} alt="" />
                <img src={image3} alt="" />
                <img src={image4} alt="" />
            </div>
            <div className="right-r">
                <span>some reasons</span>

                <div>
                    <span className="stroke-text">why</span>
                    <span>choose us?</span>
                </div>

                <div className="details-r">              
                <div>
                    <img src={RightArrow} alt="" />
                    <span>Over 140+ Coachs</span>
                </div>
                <div>
                    <img src={RightArrow} alt="" />
                    <span>Train Smarter</span>
                </div>
                <div>
                    <img src={RightArrow} alt="" />
                    <span>1 free program for new member</span>
                </div>
                <div>
                    <img src={RightArrow} alt="" />
                    <span>Reliable Partners</span>
                </div>
                </div>
                    <span
                    style={{
                        color:"var(--grey)",
                        fontWeight:"normal",
                    }}
                 >
                Our Partners</span>

                <div className="partners">
                    <img src={adidas} alt="" />
                    <img src={nike} alt="" />
                </div>
                 
                </div>
        </div>
    );
}

export default Reasons;
