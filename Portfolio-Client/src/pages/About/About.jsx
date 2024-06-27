import React from "react";
import "./About.css";
import "animate.css";
import Jump from "react-reveal/Jump";
const About = () => {
  return (
    <>
      <Jump>
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              <img src="image-4.jpg" alt="Profile-pic" />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1 className="animate__animated animate__pulse">About Me</h1>
              <p>
                I'm Final Year student at the National Institute of Technology,
                Kurukshetra. Proficient in C/C++, Python, HTML, CSS, JavaScript,
                Tailwind, React.js, Node.js, Express.js, MongoDB, and more. I'm
                an avid competitive programmer with a Codechef rating of 1910
                (4⭐), a Codeforces rating of 1593 (Specialist), and a Leetcode
                contest ranking of 1900 (Knight). I have participated in various
                hackathons and other coding challenges. I have a comprehensive
                understanding of algorithms and data structures, along with
                strong problem-solving skills, further evidenced by my
                successful completion of a Coding Ninjas course with excellence
                and my role as a TA at Coding Ninjas. With a robust academic
                foundation and a passion for coding, I am well-prepared for
                future challenges in the field of computer engineering
              </p>
            </div>
          </div>
        </div>
      </Jump>
    </>
  );
};

export default About;
