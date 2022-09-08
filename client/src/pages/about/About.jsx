import "./about.css";
const PF = "http://localhost:4000/images/";

export default function About() {
  return (
    <div>
      <div className="about">
        <center className="aboutTitle">About us!</center>
        <div className="boxes">
          <div className="aboutbox">
            <img className="aboutimg" src={PF + "kyle.png"} alt="" />
            <div className="boxinfo">
              <p className="name">Kyle Welch</p>
              <p className="blurb">
                BA in English Literature from University of Delaware. Former
                General Manager of the Homewood Suites by Hilton with PM Hotel
                Group. Winner of the 2016 Delaware Hotel and Lodging Association
                Employee of the Year award. Currently developing a solo project
                using React, Spring Boot and SQL to combine streaming service
                listings into a single place, allowing users to navigate all
                subscriptions at once. Additionally, in a team of four we used
                React,
              </p>
            </div>
          </div>

          <div className="aboutbox">
            <img className="aboutimg" src={PF + "eugene.jpg"} alt="" />
            <div className="boxinfo">
              <p className="name">Eugene Shin</p>
              <span className="blurb">
                BS in Biology from Penn State University - University Park, a
                former Certified Nursing Assistant at One You Love Homecare.
                Independently developing an app, where users are given Korean
                music suggestions based on weather using Java, SQL, Spring Boot,
                and React. In a team of 4, used Java, Spring Boot, SQL, React,
                and AWS to create a blog application that allows users to create
                and view posts from other users; can be filtered through the use
                of tagging; personally responsible for creating user interface
                using React. Proficient in Java, SQL, Spring Boot, Unit Testing,
                and Git. Learning JavaScript, Agile and Scrum methodologies.{" "}
              </span>
            </div>
          </div>

          <div className="aboutbox">
            <img className="aboutimg" src={PF + "randy.png"} alt="" />
            <div className="boxinfo">
              <p className="name">Randy Reina</p>
              <span className="blurb">
                Local truck driver in the construction industry. Transported
                heavy machinery and materials to contractors in Delaware and its
                surrounding states. Prior background in creating Digital
                Marketing Strategies ranging from a content and search engine
                optimized website, to driving laser targeted traffic using
                advanced Facebook and google ads tactics. Combined hardware and
                software to control Light Emitting Diodes using Java. Proficient
                in Java, SQL, InteliJ, and Github. Fluent in Spanish.
              </span>
            </div>
          </div>

          <div className="aboutbox">
            <img className="aboutimg" src={PF + "mary.jpeg"} alt="" />
            <div className="boxinfo">
              <p className="name">Mary Bunde</p>
              <span className="blurb">
                CPR/First aid and med certified former healthcare worker. Over 5
                years experience working on teams with people from diverse
                backgrounds. Worked tirelessly to deliver exceptional customer
                service to former clients. Currently working in a team of 4 to
                create a blog application that allows users to create and view
                posts from other users, which can be filtered through the use of
                tagging. Used Java, Spring Boot, SQL, React.
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* <Sidebar /> */}
    </div>
  );
}
