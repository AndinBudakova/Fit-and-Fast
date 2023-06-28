import React, { useEffect, useRef } from 'react';
import { Link } from 'react-scroll';
import * as PIXI from 'pixi.js';
import './Header.css';
import Logo from '../../assets/images/logo.png';

const Header = () => {
  const logoRef = useRef(null);

  useEffect(() => {
    // Load the logo image first to get its dimensions
    const logoImage = new Image();
    logoImage.src = Logo;
    logoImage.onload = () => {
      const app = new PIXI.Application({
        width: logoImage.width,
        height: logoImage.height,
        backgroundColor: 0x4D4A4A,
        transparent: true,
      });
      const logoSprite = PIXI.Sprite.from(Logo);
      logoSprite.anchor.set(0.5);
      logoSprite.x = app.screen.width / 2;
      logoSprite.y = app.screen.height / 2;
      logoSprite.alpha = 0; // set initial transparency to invisible
      app.stage.addChild(logoSprite);

      // fade in/out logic
      let fadeDirection = 1; // 1 for fade in, -1 for fade out
      app.ticker.add(() => {
        logoSprite.alpha += 0.01 * fadeDirection;
        if (logoSprite.alpha >= 1) fadeDirection = -1; // fade out when fully visible
        else if (logoSprite.alpha <= 0) fadeDirection = 1; // fade in when fully invisible
      });

      if (logoRef.current) {
        while (logoRef.current.firstChild) {
          logoRef.current.removeChild(logoRef.current.firstChild);
        }
        logoRef.current.appendChild(app.view);
      }

      return () => {
        app.destroy(true, { children: true, texture: true, baseTexture: true });
      };
    };
  }, []);

  return (
    <div className='header'>

      <ul className='header-menu'>
        <li><Link to='home' spy={true} smooth={true} duration={1000}>Home</Link></li>
        <li><Link to='programs' spy={true} smooth={true} duration={1000}>Programs</Link></li>
        <li><Link to='Reasons' spy={true} smooth={true} duration={1500}>Why Us</Link></li>
        <li><Link to='plans-container' spy={true} smooth={true} duration={2000}>Plans</Link></li>
        <li><Link to='Testimonials' spy={true} smooth={true} duration={2000}>Testimonials</Link></li>
        <li><Link to='video-slider-container' spy={true} smooth={true} duration={2000}>Workouts</Link></li>
      </ul>
      <div className='logo' ref={logoRef}></div>

    </div>
  );
};

export default Header;