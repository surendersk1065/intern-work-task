import React, { useEffect } from 'react'
import {Link} from 'react-router-dom'
import { FaGooglePlay } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";



function Footer() {
    const date = new Date()
  return (
    <div className=' py-3'>
      <div className='bg-white p-4'>
            <div className='text-center'>
                <h4 className='fw-bolder'>Work in Japan</h4>
            </div>
            <div className='text-center py-3'>
                <ul className='list-unstyled d-md-flex justify-content-center'>
                    <Link to='/about' className='nav-link mx-md-4 mb-2'><li>About us</li></Link>
                    <Link to='/about' className='nav-link mx-md-4 mb-2'><li>Contact us</li></Link>
                    <Link to='/jobs' className='nav-link mx-md-4 mb-2'><li>Careers</li></Link>
                    <li className='mx-md-4 mb-2'>Privacy Policy</li>
                    <li className='mx-md-4 mb-2'>Term's & Condition</li>
                </ul>
            </div>
            <div className='text-center'>
                <h4>Get App on</h4>
                <span className='d-block'><FaGooglePlay className='fs-2 me-3 mb-2'/>Playstore</span>
                <span><FaApple className='fs-2 me-3 mb-2'/>Appstore</span>

            </div>
            
            <div className='d-flex justify-content-center pt-4 pb-2'>
                <div>Social Links: </div>
                    <div className='links d-flex'>
                        <li className='nav-link'><a href=''><FaFacebook className='fs-3 mx-3 text-dark' /></a></li>
                        <li className='nav-link'><a href=''><FaLinkedin className='fs-3 me-3 text-dark' /></a></li>
                        <li className='nav-link'><a href=''><FaYoutube className='fs-3 text-dark' /></a></li>
                    </div>
            </div>

            <div className='text-center pt-4'>
            <p>Copyright &copy; {date.getFullYear()} @Work in Japan | All Rights Reserved</p>
            </div>
      </div>
    </div>
  )
}

export default Footer
