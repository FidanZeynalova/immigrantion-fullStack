import React from 'react'
import { CiUser } from "react-icons/ci";
import { GrServices } from "react-icons/gr";
import { FaSquarePhoneFlip } from "react-icons/fa6";
import { FaRocket } from "react-icons/fa";
import { FaDiagnoses } from "react-icons/fa";
import { DiAndroid } from "react-icons/di";
function Features() {
    return (
        <div className='Features'>
            <div className="container">
               <div className="text">
               <h2>Our Unique Features that can impress you</h2>
                <span>Who are in extremely love with eco friendly system.</span>
               </div>

                <div className="card-wrapper">
                    <div className="card">
                        <div className="head">
                            <CiUser /> <span>Expert Technicians</span>
                        </div>
                        <p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
                    </div>
                    <div className="card">
                        <div className="head">
                            <GrServices /><span>Professional Service</span>
                        </div>
                        <p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
                    </div>
                    <div className="card">
                        <div className="head">
                            <FaSquarePhoneFlip /> <span>Great Support</span>
                        </div>
                        <p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
                    </div>
                    <div className="card">
                        <div className="head">
                            <FaRocket /> <span>Technical Skills</span>
                        </div>
                        <p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
                    </div>
                    <div className="card">
                        <div className="head">
                            <FaDiagnoses /><span>Highly Recomended</span>
                        </div>
                        <p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
                    </div>
                    <div className="card">
                        <div className="head">
                            <DiAndroid /> <span>Positive Reviews</span>
                        </div>
                        <p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features
