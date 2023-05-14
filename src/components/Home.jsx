import React from 'react'
import './styles/Home.css'
import Header from './Header/Header'
const Home = () => {
    return(
        <div className="home">
            <div className="left-h">
                <Header/>

                <div className="ad">
                    <div></div>
                    <span>Inspiration does exist, but it must find you working</span>
                </div>

                <div className="hero-text">
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
                
            </div>
            <div className="right-h">right side</div>
        </div>
    )
}
export default Home