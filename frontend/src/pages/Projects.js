import React, { useEffect } from "react";
import ProjectsCard from "../features/project/ProjectsCard"
import ProjectsLayout from "../features/project/ProjectsLayout";
import { getProjects } from '../actions/projects';
import { useSelector,useDispatch } from 'react-redux';

export default function Projects() {
  const dispatch = useDispatch();
  const projects= useSelector((state) => state.projects.value)

  useEffect(() => {
    dispatch(getProjects());
    console.log('useeffect run')
  },[dispatch]);  
  
  

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
