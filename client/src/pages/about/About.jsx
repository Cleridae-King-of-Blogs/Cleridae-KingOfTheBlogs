import "./about.css";
const PF = "http://localhost:4000/images/";

export default function About() {
  return (
    <div className="about">
      <span className="aboutTitle">About us!</span>
      <div className="aboutItem">
        
        <div className="aboutRandy">      
        <img
          className="randyImage"
          src={PF + "randy.png"}
          alt=""
        />
        <span>
          This is the blurb section.
        </span>
        </div>
        <div className="aboutMary">
        <img
          className="maryImage"
          src={PF + "mary.png"}
          alt=""
        />
        <span>
          This is the blurb section.
        </span>
        </div>
        <div className="aboutKyle">
        <img
          className="kyleImage"
          src={PF + "kyle.jpeg"}
          alt=""
        />
        <span>
          This is the blurb section.
        </span>
        </div>
        <div className="aboutEugene">
        <img
          className="eugeneImage"
          src={PF + "eugene.png"}
          alt=""
        />
        <span>
          This is the blurb section.
        </span>
        </div>
      </div>
      </div>
  );
}
