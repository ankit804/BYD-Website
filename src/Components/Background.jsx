import "../styles/Background.css"
import image1 from "../assets/byd-yuan-ev.png"
import image2 from "../assets/byd-tang-ev.png"
import image3 from "../assets/byd-auto-hero.png"
import video1 from "../assets/video.mp4"

function Background({playStatus,heroCount}){
    if(playStatus){
        return(
            <video className="background fade-in" autoPlay loop muted playsInline aria-hidden="true">
                <source src={video1} type="video/mp4"/>
            </video>
        )
    }
    else if(heroCount === 0){
        return (<img src={image1} className="background fade-in" alt="" />)
    }
    else if(heroCount === 1){
        return (<img src={image2} className="background fade-in" alt=""/>)
    }
    else if(heroCount === 2){
        return (<img src={image3} className="background fade-in" alt="" />)
    }
    
}

export default Background;
