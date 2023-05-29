import React, { useState, useEffect } from 'react';
import go from '../../assets/images/gogo.png';
import "./goToTopButton.css";

const GoToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 20) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      className={`go-to-top ${showButton ? 'show' : ''}`}
      onClick={scrollToTop}
    >
      <img src={go} alt="" />
    </button>
  );
};

export default GoToTopButton;

      

