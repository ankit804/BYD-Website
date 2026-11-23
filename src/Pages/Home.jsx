import { useEffect, useState } from "react";
import Background from "../Components/Background";
import Hero from "../Components/Hero";

function Home() {
    let heroData = [
        { text1: "Drive Beyond Limits.", text2: "Experience the perfect blend of innovation, performance, and sustainability." },
        { text1: "Innovation That Moves the Future.", text2: "Redefining mobility with intelligent technology and a cleaner vision for tomorrow." },
        { text1: "Powering Tomorrow, Today.", text2: "Driving the transition towards a smarter, greener, and more electrified world." }
    ]

    const [heroCount, setHeroCount] = useState(0);
    const [playStatus, setPlayStatus] = useState(false);

    useEffect(() => {
        setInterval(() => {
            setHeroCount((count) => { return count === 2 ? 0 : count + 1 })
        },3000)
    }, [])
    return (<>
        <div>
            <Background playStatus={playStatus} heroCount={heroCount} />
            <Hero
                playStatus={playStatus}
                heroCount={heroCount}
                setHeroCount={setHeroCount}
                setPlayStatus={setPlayStatus}
                heroData={heroData[heroCount]}
            />
        </div>
    </>)
}

export default Home;