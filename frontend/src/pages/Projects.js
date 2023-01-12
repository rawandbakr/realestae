import React from 'react'
import ProjectsCard from '../components/ProjectsCard'
import ProjectsLayout from '../components/ProjectsLayout'


export default function Projects() {
  return (
   <div className=' bg-slate-900 min-h-screen'>

   
     <ProjectsLayout>
      <ProjectsCard/>
      </ProjectsLayout>
      </div>   
  )
}
