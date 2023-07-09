import React from 'react';
import armsVideo from '../../assets/videos/arms.mp4';

const ArmsVideo = () => {
  return (
    <video
      src={armsVideo}
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

export default ArmsVideo;
