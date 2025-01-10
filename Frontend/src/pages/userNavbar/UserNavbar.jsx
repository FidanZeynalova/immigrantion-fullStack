import React from 'react'
import { NavLink } from 'react-router'
import { FaBars } from "react-icons/fa";


function UserNavbar() {
  return (
    <div className='Navbar'>
      <div className="container">
        <div className="logo">
            <img src="https://preview.colorlib.com/theme/immigration/img/logo.png"  />
        </div>
      <div className="list">
      <ul>
            <li><NavLink style={({isActive})=>({color: isActive ? "red" : "black"})}>Home</NavLink></li>
            <li><NavLink >About</NavLink></li>
            <li><NavLink >Immigration</NavLink></li>
            <li><NavLink >Course</NavLink></li>
            <li><NavLink >Blog</NavLink></li>
            <li><NavLink >Contact</NavLink></li>
            <li><NavLink >Elements</NavLink></li>
        </ul>
        <div className="icon">
        <FaBars />
        </div>
      </div>
      </div>
    </div>
  )
}

export default UserNavbar
