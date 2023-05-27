import image1 from "../assets/images/t-image1.png";
import image2 from "../assets/images/t-image2.jpg";
import image3 from "../assets/images/t-image3.jpg";
import ReactAudioPlayer from "react-audio-player";
import audioFile1 from "../assets/audio/file1.mp3";
import audioFile2 from "../assets/audio/file2.mp3";

export const testimonialsData = [
  {
    image: image1,
    review: "I made the right choice by choosing the Fitclub and by choosing the right plan and program I already achieved my ideal body!",
    name: 'MATHEW HENDRICKSON',
    status: 'ENTREPRENEUR',
    audioFile: (
      <ReactAudioPlayer
        src={audioFile1}
        muted
        controls
        style={{
          width: "100%",
          marginTop: "10px",
          padding: "15px",
          borderRadius: "50px",
        }}
      />
    )
  },
  {
    image: image2,
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ipsam, ab itaque nam perferendis impedit sint',
    name: 'JOHN KEVIN',
    status: 'COACH',
    audioFile: (
      <ReactAudioPlayer
        src={audioFile2}
        muted
        controls
        style={{
          width: "100%",
          marginTop: "10px",
          padding: "15px",
          borderRadius: "50px",
        }}
      />
    )
  },
  {
    image: image3,
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima aspernatur quod voluptatem',
    name: 'FRANKLIN',
    status: "CUSTOMER",
    audioFile: (
      <ReactAudioPlayer
        src={audioFile2}
        muted
        controls
        style={{
          width: "100%",
          marginTop: "10px",
          padding: "15px",
          borderRadius: "50px",
        }}
      />
    )
  }
];