import React from 'react'

export default function projectsLayout(props) {
  return (
    <div className=' bg-primary min-h-screen p-5 gap-5 grid grid-cols-3'>
     {props.children}
    </div>
  )
}
