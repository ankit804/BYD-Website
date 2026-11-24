import { useEffect, useState } from "react";
import Background from "../Components/Background";
import Hero from "../Components/Hero";
import "../styles/Background.css";

const heroSlides = [
    { text1: "Drive Beyond", textAccent: "Limits.", text2: "Experience the perfect blend of innovation, performance, and sustainability." },
    { text1: "Innovation That Moves", textAccent: "the Future.", text2: "Redefining mobility with intelligent technology and a cleaner vision for tomorrow." },
    { text1: "Powering Today,", textAccent: "Tomorrow.", text2: "Driving the transition towards a smarter, greener, and more electrified world." },
];

function Home() {
    const [heroCount, setHeroCount] = useState(0);
    const [playStatus, setPlayStatus] = useState(false);

    useEffect(() => {
        const intervalId = window.setInterval(() => {
            setHeroCount((count) => (count + 1) % heroSlides.length);
        }, 5000);
        return () => window.clearInterval(intervalId);
    }, [])
    return (<>
        <div className="home-page">
            <Background playStatus={playStatus} heroCount={heroCount} />
            <Hero
                playStatus={playStatus}
                heroCount={heroCount}
                setHeroCount={setHeroCount}
                setPlayStatus={setPlayStatus}
                heroData={heroSlides[heroCount]}
            />
        </div>
    </>)
}

export default Home;
