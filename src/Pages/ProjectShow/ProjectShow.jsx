import React from "react";
import { dataProject } from "../../Utils/dataProjects";
import { useParams } from "react-router";

function ProjectShow() {
  const { id } = useParams();

  return (
    <main className="section">
      <div className="container">
        <div className="project-details">
          <h1 className="title-1">{dataProject[id].title}</h1>

          <img
            src={dataProject[id].imgBig}
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
