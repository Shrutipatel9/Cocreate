import { Project } from "@/state/api";
import React from "react";

type Props = {
  project: Project;
};

const ProjectCard = ({ project }: Props) => {
  return (
    <div className="rounded border p-4 shadow dark:text-white">
      <h3>
        <b>Name : </b>
        {project.name}
      </h3>
      <p>
        <b>Description : </b>
        {project.description}
      </p>
      <p>
        <b>Start Date :</b> {project.startDate}
      </p>
      <p>
        <b>End Date :</b> {project.endDate}
      </p>
    </div>
  );
};

export default ProjectCard;
