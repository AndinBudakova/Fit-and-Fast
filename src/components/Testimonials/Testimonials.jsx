import React, {useState} from 'react'
import './Testimonials.css'
import { testimonialsData} from "../../data/testimonialsData"
import leftArrow from '../../assets/images/leftArrow.png'
import rightArrow from '../../assets/images/rightArrow.png'
import {motion} from 'framer-motion'
import ReactAudioPlayer from 'react-audio-player';
import audioFile from '../../assets/videos/file.mp3';



const Testimonials = ()=>{
    const transition ={type: "spring", duration: 3};


        const [selected, setSelected] = useState(0);
        const tLength = testimonialsData.length;

    return(
        <div className="Testimonials">
             <div className="left-t">
                <span>Testimonials</span>
                <span className="stroke-text">What they</span>
                <span>say about us</span>
                <motion.span
                 key={selected}
                 initial={{opacity: 0, x: 100}}
                 animate={{opacity:1, x:0}}
                 exit={{opacity:0, x:-100}}
                 transition={transition}>
                    {testimonialsData[selected].review}
                    <ReactAudioPlayer
  src={audioFile}
  autoPlay
  controls
  style={{
    width: '100%',
    marginTop: '10px',
    background: 'linear-gradient(rgb(96, 172, 96), white,  rgb(116, 177, 141))',
    padding: '15px',
    borderRadius: '50px',
 
  }}
/>





                </motion.span>
                


                <span>
                    <span style={{color: 'rgb(96, 172, 96)'}}>
                        {testimonialsData[selected].name}
                    </span>
                    - {testimonialsData[selected].status}
                </span>
             </div>
             <div className="right-t">
                <motion.div
                initial={{opacity:0, x: -100}}
                transition={{...transition, duration: 2}}
                whileInView={{opacity:1, x:0}}
                ></motion.div>

                   <motion.div
                initial={{opacity:0, x: 100}}
                transition={{...transition, duration: 2}}
                whileInView={{opacity:1, x:0}}
                ></motion.div>
                <motion.img
                key={selected}
                initial={{opacity: 0, x: 100}}
                animate={{opacity:1, x:0}}
                exit={{opacity:0, x:-100}}
                transition={transition}
                src={testimonialsData[selected].image} alt=""/>

                <div className="arrows">
                    <img 
                    onClick={() => {
                        selected === 0
                        ? setSelected(tLength - 1)
                        : setSelected((prev) => prev -1 );
                    }}
                    
                    src={leftArrow} alt='' />
                    <img 
                        onClick={() =>{
                            selected === tLength - 1
                            ? setSelected(0)
                            : setSelected((prev) => prev + 1);
                        }}
                    src={rightArrow} alt=''/>

                </div>
             </div>
        </div>
    );
};

export default Testimonials