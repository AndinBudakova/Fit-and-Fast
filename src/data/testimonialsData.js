import image1 from "../assets/images/t-image1.png";
import image2 from "../assets/images/t-image2.jpg";
import image3 from "../assets/images/t-image3.jpg";
import ReactAudioPlayer from "react-audio-player";
import audioFile1 from "../assets/audio/file1.mp3";
import audioFile2 from "../assets/audio/file2.mp3";
import audioFile3 from "../assets/audio/file3.mp3";

export const testimonialsData = [
  {
    image: image1,
    review: "Fitclub has been a transformative force in my fitness journey. Their tailored plans and programs have helped me achieve my goals and reshape my body!",
    name: 'MATHEW HENDRICKSON',
    status: 'ENTREPRENEUR',
    audioFile: (
      <ReactAudioPlayer
        src={audioFile1}
        muted
        controls
        style={{
          width: "100%",
          marginTop: "50px",
          padding: "15px",
          borderRadius: "50px",
          boxShadow: "0px 23px 35px 1px #000000"
        }}
      />
    )
  },
  {
    image: image2,
    review: 'Choosing Fitclub has been a pivotal decision in my pursuit of fitness. Their expertise and personalized approach have yielded incredible results and pushed me to new heights!',
    name: 'JOHN KEVIN',
    status: 'COACH',
    audioFile: (
      <ReactAudioPlayer
        src={audioFile2}
        muted
        controls
        style={{
          width: "100%",
          marginTop: "50px",
          padding: "15px",
          borderRadius: "50px",
          boxShadow: "0px 23px 35px 1px #000000"
        }}
      />
    )
  },
  {
    image: image3,
    review: 'Thanks to Fitclub, I\'ve experienced a complete fitness revolution. Their dedicated trainers and diverse programs have made my journey enjoyable and successful!',
    name: 'FRANKLIN',
    status: "CUSTOMER",
    audioFile: (
      <ReactAudioPlayer
        src={audioFile3}
        muted
        controls
        style={{
          width: "100%",
          marginTop: "50px",
          padding: "15px",
          borderRadius: "50px",
          boxShadow: "0px 23px 35px 1px #000000",
        }}
      />
    )
  }
];