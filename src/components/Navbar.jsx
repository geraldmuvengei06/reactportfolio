import React, { useState, useEffect } from 'react';
import logo from '../images/logo.png';


export default function Navbar() {
    const [navclass, setNavclass] = useState('transparent')
  
    useEffect(() => {
      window.addEventListener('scroll', () => {
        let bg = window.scrollY > 200 ? 'indigo-50 shadow-xl' : 'transparent'
        return setNavclass(bg)
      })

    }, [navclass])
  
    return (
      <nav className={`bg-${navclass} filter fixed top-0 left-0 right-0 z-40 transition duration-500`}>
        <div className="container mx-auto py-4 px-4 flex justify-between flex-column">
          <div className="nav-logo flex-none">
            <img src={logo} className='w-40' alt="geraldmuvengei" />
          </div>
          <ul className="hidden sm:flex justify-around">
            <li className="m-2"><a href="#about" className="font-bold text-sm text-black hover:text-gray-200">About Me</a></li>
            <li className="m-2"><a href="#portfolio" className="font-bold text-sm text-black hover:text-gray-200">Portfolio</a></li>
  
            <li className="m-2 hover:mb-1 font-bold">
              <a href="#contact" className="py-4 px-6 rounded-full bg-black text-indigo-50">Contact Me ✉️</a>
            </li>
          </ul>
        </div>
      </nav>
    )
  }