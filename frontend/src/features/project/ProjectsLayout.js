import React from 'react'

export default function projectsLayout(props) {
  return (
    <div className='p-4 grid md:grid-cols-3 xl:grid-cols-4 gap-4 grid-cols-2'>
     {props.children}
    </div>
  )
}
