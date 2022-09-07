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
        <span className="eugeneblurb">
        Eugene Shin, BS in Biology from Penn State University - University Park, a former Certified Nursing Assistant at One You Love Homecare. Independently developing an app, where users are given Korean music suggestions based on weather using Java, SQL, Spring Boot, and React. In a team of 4, used Java, Spring Boot, SQL, React, and AWS to create a blog application that allows users to create and view posts from other users; can be filtered through the use of tagging; personally responsible for creating user interface using React. Proficient in Java, SQL, Spring Boot, Unit Testing, and Git. Learning JavaScript, Agile and Scrum methodologies.        </span>
        </div>
      </div>
      </div>
  );
}
