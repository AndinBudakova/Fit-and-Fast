import React from 'react';
import shouldersVideo from '../../assets/videos/shoulders.mp4';

const ShouldersVideo = () => {
  return (
    <video
      src={shouldersVideo}
      muted
      controls
      height="500"
      style={{
        marginTop: "80px",
        boxShadow: "0px 50px 80px 5px #000000"
      }}
    />
  );
};

export default ShouldersVideo;
