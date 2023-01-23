import React from "react";
import { useDispatch } from "react-redux";
import moment from 'moment'
import { removeProject } from "../../actions/projects";

export default function ProjectsCard({project}) {
  const dispatch = useDispatch()
  return (
    
    <div className=" bg-secondary rounded-xl overflow-hidden">
   <img src={require("../../assets/model.jpeg")} alt="..." />
      <div className="p-6">
        <h4 className="font-medium text-lg">{project.title}</h4>
        <p className="text-gray-600">{moment(project.createdAt).fromNow()}</p>
        <button onClick={()=>dispatch(removeProject(project._id))}>delete</button>
      </div>
    </div>
  );
}
