import React, { useState, lazy, Suspense } from 'react';
import './VideoSlider.css';

const VideoSlider = () => {
  const [currentVideo, setCurrentVideo] = useState(0);

  const videoComponents = [
    lazy(() => import('../../components/VideoSlider/armsVideo')),
    lazy(() => import('../../components/VideoSlider/legsVideo')),
    lazy(() => import('../../components/VideoSlider/shoulderVideo')),
    lazy(() => import('../../components/VideoSlider/chestVideo')),
    lazy(() => import('../../components/VideoSlider/backVideo')),
  ];

  const changeVideo = () => {
    setCurrentVideo((currentVideo + 1) % videoComponents.length);
  };

  const VideoComponent = videoComponents[currentVideo];

  return (
    <div className="video-slider-container">
      <Suspense fallback={<div>Loading...</div>}>
        {VideoComponent && <VideoComponent />}
      </Suspense>
      <button onClick={changeVideo}>Change Video</button>
    </div>
  );
};

export default VideoSlider;
