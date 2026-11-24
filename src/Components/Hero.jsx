import "../styles/Hero.css"
import { FaArrowRight } from "react-icons/fa";
import { FaPlayCircle } from "react-icons/fa";
import { FaCirclePause } from "react-icons/fa6";
import { Link } from "react-router";

function Hero({ playStatus, heroCount, setHeroCount, setPlayStatus, heroData }) {
    return (<>
        <section className="hero" aria-label="Featured BYD highlights">
            <div className="hero-text">
                <h1 className="one">{heroData.text1} <span className="hero-highlight">{heroData.textAccent}</span></h1>
                <p className="two">{heroData.text2}</p>
            </div>
            <Link className="hero-explore" to="/about">
                <p>Explore the features</p>
                <span><FaArrowRight /></span>
            </Link>
            <div className="hero-dot-play">
                <ul className="hero-dots" aria-label="Choose featured slide">
                    {[0, 1, 2].map((slide) => (
                      <li key={slide}>
                        <button type="button" className="hero-dot-button" aria-label={`Show slide ${slide + 1}`} aria-current={heroCount === slide} onClick={() => setHeroCount(slide)}>
                          <span className="hero-dot" />
                        </button>
                      </li>
                    ))}
                </ul>
                <div className="hero-play">
                    <button type="button" onClick={() => setPlayStatus(!playStatus)} aria-label={playStatus ? "Pause background video" : "Play background video"}>
                      {playStatus ? <FaCirclePause aria-hidden="true" /> : <FaPlayCircle aria-hidden="true" />}
                    </button>
                </div>
            </div>
        </section>
    </>)
}

export default Hero;
