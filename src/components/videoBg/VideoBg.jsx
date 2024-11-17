import bgVideo from "../../assets/time.mp4";
import "./videobg.css";

function VideoBg() {
  return (
    <div className="video-bg-container">
      <video className="video-bg" loop muted autoPlay>
        <source src={bgVideo}></source>
      </video>
      <div className="overlay"></div>
    </div>
  );
}

export default VideoBg;
