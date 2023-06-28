import "./Reasons.css";
import adidas from "../../assets/images/adidas.png";
import nike from "../../assets/images/nike.png";
import RightArrow from "../../assets/images/right-arrow.png";
import React, { useEffect, useRef } from "react";
import * as PIXI from "pixi.js";
import image1 from "../../assets/images/image1.jpg";
import image2 from "../../assets/images/image2.png";
import image3 from "../../assets/images/image3.png";
import image4 from "../../assets/images/image4.png";
 
function Reasons() {
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const ref4 = useRef(null);
  const pixiRefs = [ref1, ref2, ref3, ref4];
    const images = [image1, image2, image3, image4];
  
    useEffect(() => {
      images.forEach((imageSrc, index) => {
        const ref = pixiRefs[index];
  
        // Load the image first to get its dimensions
        const image = new Image();
        image.src = imageSrc;
        image.onload = () => {
          const app = new PIXI.Application({
            width: image.width,
            height: image.height,
            backgroundColor: 0x4D4A4A,
            transparent: true,
          });
  
          const sprite = PIXI.Sprite.from(imageSrc);
          sprite.anchor.set(0.5);
          sprite.x = app.screen.width / 2;
          sprite.y = app.screen.height / 2;
          sprite.scale.set(0.1, 0.1);  // set initial scale to smaller than original size
          app.stage.addChild(sprite);
  
          // zoom effect logic
          app.ticker.add(() => {
            if (sprite.scale.x < 1) {
              sprite.scale.x += 0.01;
              sprite.scale.y += 0.01;
            }
          });
  
          if (ref.current) {
            while (ref.current.firstChild) {
              ref.current.removeChild(ref.current.firstChild);
            }
            ref.current.appendChild(app.view);
          }
  
          return () => {
            app.destroy(true, { children: true, texture: true, baseTexture: true });
          };
        };
      });
    }, [pixiRefs, images]);
    return (
        <div className="Reasons" id="reasons">
        <div className="left-r">
          <div ref={ref1} className="image-container" />
          <div ref={ref2} className="image-container" />
          <div ref={ref3} className="image-container" />
          <div ref={ref4} className="image-container" />
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
