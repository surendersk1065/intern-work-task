import React, { useEffect } from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import AOS from 'aos'
import 'aos/dist/aos.css'

function About() {
  const navigate = useNavigate()
  const handleSubmit = () => {
    alert('Thankyou for your Feedback')
    navigate('/')
  }

  useEffect(() => {
    AOS.init({duration: 2000})
  },[])

  return (
    <div>
      <h1 className='text-center my-3 fw-bolder'>About Us</h1>
      <div className='d-flex justify-content-center'>
        <div>Social Links: </div>
        <div className='links d-flex'>
          <li className='nav-link' data-aos='flip-right'><a href=''><FaFacebook className='fs-3 mx-3 text-dark' /></a></li>
          <li className='nav-link' data-aos='flip-left'><a href=''><FaLinkedin className='fs-3 me-3 text-dark' /></a></li>
          <li className='nav-link' data-aos='flip-right'><a href=''><FaYoutube className='fs-3 text-dark' /></a></li>
        </div>
      </div>

      <div className='pt-5 pb-2 px-3'>
        <h3 className='fw-bolder mb-3'>A Key Resource for Foreigners to find Jobs in Japan.</h3>
        <p>WorkinJapan.com has been a key resource for expats working in Japan and those wanting to work in Japan. With constantly updated jobs in all industries, we aim to provide the widest selection of employment opportunities on the face of the internet.Our goal is usefulness for job seekers, and that is why we offer one of the most competitive and low rates for posting a job advertisement in Japan. We want a huge selection of jobs, and not just for the big companies but the little ones too.
        Small to medium sized businesses, large corporations, or tiny schools with five employees – everyone can afford our rates and get qualifiedemployees eyes on their job ad.</p>
      </div>
      <hr style={{maxWidth:'1000px',margin:'0px auto'}}></hr>
      <div className='aboutbg my-3 container' data-aos='fade-left'>

      </div>

      <div className='pt-5 pb-2 px-3'>
        <h3 className='fw-bolder'>Our Values</h3>
        <div className='d-flex gap-md-5 mt-4 px-md-5 mx-md-5'>
          <div className='' data-aos='fade-right'>
            <img src='bg.jpeg' className='img-fluid'/>
          </div>
          <div className=''style={{width:'300px'}}>
            <ul className=''>
            <li className=''>Customer Delight</li>
            <li>Entrepreneurship</li>
            <li>Knowledge</li>
            <li>Result</li>
            <li>Trust</li>
            <li>Training</li>
            <li>Experience</li>
            <li>Loyalty</li>
            <li>Quick Response</li>
            </ul>
          </div>
        </div>
      </div>

      <div className='contact container my-5'>
        <h3 className='fw-bolder mb-4'>Contact Us</h3>
        <form onSubmit={(e) => e.preventDefault() }>
          <label>Name*</label>
          <input 
            type='text'
            className='form-control w-50'
          />
          <label>Email*</label>
          <input 
            type='email'
            className='form-control w-50'
          />
          <label>Message*</label>
          <textarea 
            className='form-control w-50 mb-3'
          />
          <button className='btn btn-primary w-25' onClick={handleSubmit}>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default About
