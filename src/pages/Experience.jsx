import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { School, Work } from "@mui/icons-material";


const Experience = () => {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2015 - 2019"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<School />}
        >
          <h3 className="vertical-timeline-element-title">
            National University of Science and Technology (NUST)
          </h3>
          <h4
            className="vertical-timeline-element-subtitle"
            style={{ color: "grey" }}
          >
            Harare, Zimbabwe
          </h4>
          <p>BSc Statistics and Operations Research</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2019 - 2020"
          iconStyle={{ background: "green", color: "#fff" }}
          icon={<Work />}
        >
          <h3 className="vertical-timeline-element-title">
            Junior Front-End Developer, CWS Technologies
          </h3>
          <h4
            className="vertical-timeline-element-subtitle"
            style={{ color: "grey" }}
          >
            Harare, Zimbabwe
          </h4>
          <p>
            Worked on small to medium sized frontend projects for company 
            portfolio.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2020 - Present"
          iconStyle={{ background: "green", color: "#fff" }}
          icon={<Work />}
        >
          <h3 className="vertical-timeline-element-title">
            FullStack Engineer, NetherScope Inc
          </h3>
          <h4
            className="vertical-timeline-element-subtitle"
            style={{ color: "grey" }}
          >
            Remote
          </h4>
          <p>
            Worked on enterprise level web applications and mobile applications
            including Web3 and AI Automation Systems.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};
export default Experience;
