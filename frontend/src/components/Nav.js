import React from 'react'
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <header className=' bg-secondary h-24 font-semibold'>
        <nav className=' p-5'>
                <Link to='/' className='flex'>
                <img src={require('../assets/house.png')} className=' h-10 w-10' alt='icon'/>
                <h1 className=' text-accent text-4xl pl-3'>realestate</h1>
                </Link>
            <ul className=' flex gap-2'>
                <Link to='/'>
                Home
                </Link>
                <Link to='/projects'>
                Projects
                </Link>
                <Link to='/login'>
                login
                </Link>
                <Link to='/post'>
                post
                </Link>
                
            </ul>
        </nav>
    </header>
  )
}
