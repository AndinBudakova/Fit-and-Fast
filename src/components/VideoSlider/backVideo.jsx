import React from 'react';
import backVideo from '../../assets/videos/back.mp4';

const BackVideo = () => {
  return (
    <video
      src={backVideo}
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

export default BackVideo;
