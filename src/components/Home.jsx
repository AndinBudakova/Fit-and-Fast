import React from 'react'
import './styles/Home.css'
import Header from './Header/Header'
import Heart from "../../src/assets/heart.jpg"
import home_image from "../assets/home_image.jpg"
import home_image_back from "../assets/home_image_back.jpg"
import Calories from "../assets/calories.jpg"

const Home = () => {
    return(
        <div className="home">
            <div className="left-h">
                <Header/>

                <div className="ad">
                    <div></div>
                    <span>Inspiration does exist, but it must find you working</span>
                </div>

                <div className="home-text">
                    <div><span className='stroke-text'>You should never stay</span>
                    </div>
                    <div><span>At the same level</span>
                    </div>
                    <div>
                        <span>
                        When I feel tired, I just think about how great I will feel once I finally reach my goal

                        </span>
                    </div>

                </div>

                <div className="figures">
                    <div>
                        <span>+110</span>
                        <span>expert coachs</span>
                    </div>
                    <div>
                        <span>+800</span>
                        <span>members joined</span>
                    </div>
                    <div>
                        <span>+50</span>
                        <span>fitness programs</span>
                    </div>                 
                </div>
                <div className="home-buttons">
                        <buttons className="btn">Start</buttons>
                        <buttons className="btn">Learn More</buttons>
                    </div> 
            </div>
            <div className="right-h">
                <button className="btn">Join Now</button>

                <div className="heart-rate">
                    <img src={Heart} alt=""/>
                    <span>Heart Rate</span><span>116 bpm</span>
                </div>
                
                <img src={home_image} className="home-image" alt=''/>
                <img src={home_image_back} className="home-image-back" alt=''/>

                <div className="calories">
                    <img src={Calories} alt=''/>
                    <div>
                        <span>Calories Burned</span>
                        <span>210 kcal</span>
                    </div>

                </div>

            </div>
        </div>
    )
}
export default Home