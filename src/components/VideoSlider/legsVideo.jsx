import React from 'react';
import legsVideo from '../../assets/videos/legs.mp4';

const LegsVideo = () => {
  return (
    <video
      src={legsVideo}
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

export default LegsVideo;
