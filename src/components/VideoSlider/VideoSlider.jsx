import React, { useState, useRef } from 'react';
import armsVideo from '../../assets/videos/arms.mp4';
import backVideo from '../../assets/videos/back.mp4';
import legsVideo from '../../assets/videos/legs.mp4';
import shouldersVideo from '../../assets/videos/shoulders.mp4';
import chestVideo from '../../assets/videos/chest.mp4';
import './VideoSlider.css';

const VideoSlider = () => {
  const [currentVideo, setCurrentVideo] = useState(0);
  const videoRef = useRef(null);

  const videos = [
    armsVideo,
    legsVideo,
    shouldersVideo,
    chestVideo,
    backVideo,
  ];

  const changeVideo = () => {
    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.classList.add('fade-out');
      setTimeout(() => {
        const nextVideo = (currentVideo + 1) % videos.length;
        setCurrentVideo(nextVideo);
        videoElement.classList.remove('fade-out');
      }, 500);
    }
  };

  return (
    <div className="video-slider-container">
      <video
        ref={videoRef}
        src={videos[currentVideo]}
        muted
        controls
        height="500"
        style={{
          marginTop: "80px",
          boxShadow: "0px 50px 80px 5px #000000"
        }}
      />
      <button onClick={changeVideo}>Change Video</button>
    </div>
  );
};

export default VideoSlider;
