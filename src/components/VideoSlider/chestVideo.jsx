import React from 'react';
import chestVideo from '../../assets/videos/chest.mp4';

const ChestVideo = () => {
  return (
    <video
      src={chestVideo}
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

export default ChestVideo;
