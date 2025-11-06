import React from "react";
import { NavLink } from "react-router";

function Project({ project, id }) {
  return (
    <li className="project">
      <NavLink to={`/Project/${id}`}>
        <img src={project.img} alt="Project img" className="project__img" />
        <h3 className="project__title">{project.title}</h3>
      </NavLink>
    </li>
  );
}

export default Project;
