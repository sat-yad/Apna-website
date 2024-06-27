import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { GiTeacher } from "react-icons/gi";
import { GrReactjs } from "react-icons/gr";
import "./WorkExp.css";

const WorkExp = () => {
  return (
    <>
      <div className="work" id="experience">
        <div className="container work-exp">
          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase bulge">
            Work Experience
          </h2>
          <hr />
          <VerticalTimeline lineColor="#1e1f2d">
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "whitesmoke", color: "black" }}
              contentArrowStyle={{ borderRight: "7px solid  black" }}
              date="June 2023 - Dec 2023"
              iconStyle={{ background: "lightyellow", color: "fff" }}
              icon={<GiTeacher />}
            >
              <h3 className="vertical-timeline-element-title">
                Teaching Assistant
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Coding Ninjas
              </h4>
              <p className="paragraph">
                Mentored students and assisted them in understanding DSA and
                coding concepts
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "whitesmoke", color: "black" }}
              contentArrowStyle={{ borderRight: "7px solid  gray" }}
              date="Jan 2024 - April 2024"
              iconStyle={{ background: "lightblue", color: "fff" }}
              icon={<GrReactjs />}
            >
              <h3 className="vertical-timeline-element-title">
                Frontend-Developer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Calinfo, Prt Ltd
              </h4>
              <p className="paragraph">
                Designed and implemented user interfaces for various clients
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default WorkExp;
