import React from 'react'
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <header className=' bg-secondary h-24 font-semibold flex'>
        <nav className=' p-5'>
                <Link to='/' className=' grid grid-flow-col gap-3'>
                <img src="https://cdn-icons-png.flaticon.com/512/2163/2163350.png" className=' h-10 w-10' alt='icon'/>
                <h1 className=' text-accent text-4xl'>realestate</h1>
                </Link>
            <ul className=' flex justify-between'>
                <Link to='/'>
                Home
                </Link>
                <Link to='/projects'>
                Projects
                </Link>
                <Link to='/login'>
                login
                </Link>
            </ul>
        </nav>
    </header>
  )
}
//how to add a img in html?
