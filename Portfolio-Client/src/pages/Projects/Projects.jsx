import React from "react";
import "./Projects.css";
import Spin from "react-reveal/Spin";
const Projects = () => {
  return (
    <>
      <div className="project" id="projects">
        <div className="container">
          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
            Top Recent Projects
          </h2>
          <hr />
          <p className="pb-3 text-center">
            I have developed several notable projects demonstrating my technical
            skills and practical experience. I created an AI-based online food
            ordering website that features weekly meal planning and delivery,
            using HTML5, CSS3, and JavaScript. Additionally, I developed a to-do
            list application with React, designed to help users manage their
            tasks efficiently. Another significant project is a weather
            application built using React and the OpenWeather API to display
            current temperatures. These projects showcase my proficiency in web
            development, front-end technologies, and my ability to apply
            programming skills to solve real-world problems.
          </p>
          <div className="row" id="ads">
            <Spin>
              <div className="col-md-4">
                <div className="card rounded">
                  <div className="card-image">
                    <span className="card-notify-badge">Full Stack</span>
                    <img
                      src="https://i.ytimg.com/vi/N0pycwOjPlY/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDAo0k_1wkKiPVf3C5Lb8LUv-a_Pw"
                      alt="project1"
                    ></img>
                  </div>
                  <div className="card-image-overlay m-auto mt-3">
                    <span className="card-detail-badge">Nodejs</span>
                    <span className="card-detail-badge">Express</span>
                    <span className="card-detail-badge">Reactjs</span>
                    <span className="card-detail-badge">MongoDB</span>
                  </div>
                  <div className="card-body text-center">
                    <div className="ad-title m-auto">
                      <h5 className="text-uppercase m-auto">
                        Chat Application Website
                      </h5>
                    </div>
                    <a className="ad-btn" href="#">
                      View{" "}
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card rounded">
                  <div className="card-image">
                    <span className="card-notify-badge">Full Stack</span>
                    <img
                      src="https://i.ytimg.com/vi/N0pycwOjPlY/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDAo0k_1wkKiPVf3C5Lb8LUv-a_Pw"
                      alt="project1"
                    ></img>
                  </div>
                  <div className="card-image-overlay m-auto mt-3">
                    <span className="card-detail-badge">Nodejs</span>
                    <span className="card-detail-badge">Express</span>
                    <span className="card-detail-badge">Reactjs</span>
                    <span className="card-detail-badge">MongoDB</span>
                  </div>
                  <div className="card-body text-center">
                    <div className="ad-title m-auto">
                      <h5 className="text-uppercase m-auto">
                        Chat Application Website
                      </h5>
                    </div>
                    <a className="ad-btn" href="#">
                      View{" "}
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card rounded">
                  <div className="card-image">
                    <span className="card-notify-badge">Full Stack</span>
                    <img
                      src="https://i.ytimg.com/vi/N0pycwOjPlY/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDAo0k_1wkKiPVf3C5Lb8LUv-a_Pw"
                      alt="project1"
                    ></img>
                  </div>
                  <div className="card-image-overlay m-auto mt-3">
                    <span className="card-detail-badge">Nodejs</span>
                    <span className="card-detail-badge">Express</span>
                    <span className="card-detail-badge">Reactjs</span>
                    <span className="card-detail-badge">MongoDB</span>
                  </div>
                  <div className="card-body text-center">
                    <div className="ad-title m-auto">
                      <h5 className="text-uppercase m-auto">
                        Chat Application Website
                      </h5>
                    </div>
                    <a className="ad-btn" href="#">
                      View{" "}
                    </a>
                  </div>
                </div>
              </div>
            </Spin>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
