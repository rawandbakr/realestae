import React from "react";

export default function ProjectsCard() {
  return (
    <div class=" bg-secondary rounded-xl overflow-hidden cursor-pointer">
      <img src={require("../assets/model.jpeg")} alt="..." />
      <div class="p-6">
        <h4 class="font-medium text-lg">Card Title</h4>
        <p class="text-gray-600">Some card content</p>
      </div>
    </div>
  );
}
