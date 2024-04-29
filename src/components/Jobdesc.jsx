import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { CiLocationOn } from "react-icons/ci";
import { MdWork } from "react-icons/md";

function Jobdesc({jobs}) {
    const {id} = useParams()
    const job = jobs.find((val) => (val.id).toString() === id)
    const navigate = useNavigate()

    const handleSubmit = () => {
      alert('Applied Successfully')
      navigate('/jobs')
    }
  return (
    <div>
      {
        job && 
        <div className='px-3 px-md-0'>
        <div className='container bg-white p-4 shadow rounded mb-5'>
            <p className='fw-bolder'>{job.title}</p>
            <p><span className='fw-bolder'>Company:</span> {job.comp}</p>
            <p><span className='fw-bolder'>Job Highlights</span> : {job.desc}</p>
            <p className='d-inline-block bg-primary text-white p-2 rounded'>Skills : {job.skill}</p>
            <p><span className='fw-bolder'>Location</span> : <span><CiLocationOn className='fs-5 me-2 mb-1' /></span>{job.loc}</p>
            <p><span className='fw-bolder'>Posted</span> : {job.posted}</p>
            <p><MdWork className='me-2 fs-5 mb-1'/>{job.exp}</p>
            <p><span className='fw-bolder'>Qualification</span> : {job.edu}</p>
            <p><span className='fw-bolder'>Applicants Applied</span> : {job.app}</p>
            <button className='btn btn-primary' onClick={handleSubmit}>Apply</button>
        </div>
        </div>
      }
      {
        !job && 
        <div>
            <p className='text-center my-4'>No Jobs to display</p>
        </div>
      }
    </div>
  )
}

export default Jobdesc
