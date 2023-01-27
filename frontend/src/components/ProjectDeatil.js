import React from 'react'
import { useSelector } from 'react-redux';

export default function ProjectDeatil() {
    const projects= useSelector((state) => state.projects.link)

  return (
    <>title
    <div>{projects.title}</div>adress
    <div>{projects.adress}</div>meter
    <div>{projects.meter}</div>bathroom
    <div>{projects.bathroom}</div>discription
    <div>{projects.discription}</div>virtualtour
    <div>{projects.virtualtour}</div>Cardphoto
    <div>{projects.Cardphoto}</div>
    </>
  )
}

