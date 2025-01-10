import React from 'react'
import { CiHeart, CiInstagram, CiLinkedin } from "react-icons/ci";
import { FaFacebook, FaTwitter } from 'react-icons/fa6';

function UserFooter() {
  return (
    <div className='Footer'>
      <div className="container">
        <div className="text">
          <p> Copyright ©2025 All rights reserved | This template is made with <span style={{ color: "#ff134d" }}>by Colorlib</span></p>
        </div>
        <div className="icons">
          <button><CiInstagram /></button>
          <button><FaFacebook /></button>
          <button><FaTwitter /></button>
          <button><CiLinkedin /></button>

        </div>
      </div>
    </div>
  )
}

export default UserFooter
