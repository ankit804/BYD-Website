import "../styles/Hero.css"
import { FaArrowRight } from "react-icons/fa";
import { FaPlayCircle } from "react-icons/fa";
import { FaCirclePause } from "react-icons/fa6";

function Hero({ playStatus, heroCount, setHeroCount, setPlayStatus, heroData }) {
    return (<>
        <div className="hero">
            <div className="hero-text">
                <p className="one">{heroData.text1}</p>
                <p className="two">{heroData.text2}</p>
            </div>
            <div className="hero-explore">
                <p>Explore the features</p>
                <span><FaArrowRight /></span>
            </div>
            <div className="hero-dot-play">
                <ul className="hero-dots">
                    <li onClick={() => setHeroCount(0)} className={heroCount === 0 ? "hero-dot-orange" : "hero-dot"}></li>
                    <li onClick={() => setHeroCount(1)} className={heroCount === 1 ? "hero-dot-orange" : "hero-dot"}></li>
                    <li onClick={() => setHeroCount(2)} className={heroCount === 2 ? "hero-dot-orange" : "hero-dot"}></li>
                </ul>
                <div className="hero-play">
                    <span onClick={() => setPlayStatus(!playStatus)}>  {playStatus ? <FaCirclePause /> : <FaPlayCircle />}</span>
                </div>
            </div>
        </div>
    </>)
}

export default Hero;