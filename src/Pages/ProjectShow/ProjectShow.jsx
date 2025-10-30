import React from "react";
import { dataProject } from "../../Utils/dataProjects";

function ProjectShow() {
  return (
    <main className="section">
      <div className="container">
        <div className="project-details">
          <h1 className="title-1">Video service</h1>

          <img
            src={dataProject[0].imgBig}
            alt="ooo"
            className="project-details__cover"
          />

          <div className="project-details__desc">
            <p>Skills: React, Node.js, MongoDB</p>
          </div>

          <a href="#!" className="btn-outline">
            <img src="./img/icons/gitHub-black.svg" alt="" />
            GitHub repo
          </a>
        </div>
      </div>
    </main>
  );
}

export default ProjectShow;
