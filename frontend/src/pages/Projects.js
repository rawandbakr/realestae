import React, { useEffect, useState } from "react";
import ProjectsCard from "../components/ProjectsCard";
import ProjectsLayout from "../components/ProjectsLayout";
import { getProjects } from '../actions/projects';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

export default function Projects() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProjects());
  },[]);
  
  const projects = useSelector((state) => state.projects);

  return (
    <div className=" bg-slate-900 min-h-screen">
      <ProjectsLayout>
        {projects &&
          projects.map((project) => (
            <ProjectsCard project={project} key={project._id} />
          ))}
      </ProjectsLayout>
    </div>
    
  );
}
