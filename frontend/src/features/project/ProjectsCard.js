import React from "react";
import { useDispatch } from "react-redux";
import moment from "moment";
import { removeProject, getProject } from "../../actions/projects";
import { Link } from "react-router-dom";
import ProjectDeatil from "../../components/ProjectDeatil";

export default function ProjectsCard({ project }) {
  const dispatch = useDispatch();
  return (
    <div className="bg-white rounded-lg overflow-hidden">
      <button onClick={() => dispatch(getProject(project._id))}>
        <Link to={project._id}>
          <img
            src={project.Cardphoto}
            className="w-full h-full object-cover"
            alt="Title"
          />
        </Link>
      </button>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{project.title}</div>
        <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          <br></br>
          {moment(project.createdAt).fromNow()}
        </p>
      </div>
      <div className="px-6 py-4 flex">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full
           items-end justify-start"
          onClick={() => dispatch(removeProject(project._id))}>
          Delete
        </button>
      </div>
    </div>
  );
}
