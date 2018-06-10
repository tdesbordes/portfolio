import React from "react";
import ProjectsSection from "../components/ProjectsSection";
import ExperienceSection from "../components/ExperienceSection";
import About from "../components/Sidebar/About";
import Links from "../components/Sidebar/Links";

import "./style.scss";

const IndexPage = () => (
  <div className="index">
    <div className="main">
      <h5>
        Hi, I'm <span className="bold">Thibault Desbordes</span>
      </h5>

      <h3 className="bold">
        Software engineer with 2 years' experience building apps for banks and
        learning to be fullstack developer on my free time.
      </h3>

      <ExperienceSection />
      <ProjectsSection />
    </div>

    <div className="aside">
      <div className="top">
        <About />
      </div>
      <div className="bottom">
        <Links />
      </div>
    </div>
  </div>
);

export default IndexPage;
