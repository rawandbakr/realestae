import React from "react";

export default function ProjectsCard({project}) {
  return (
    <div className=" bg-secondary rounded-xl overflow-hidden cursor-pointer">
      <img src={require("../assets/model.jpeg")} alt="..." />
      <div className="p-6">
        <h4 className="font-medium text-lg">{project.title}</h4>
        <p className="text-gray-600">{project.price}</p>
      </div>
    </div>
  );
}
