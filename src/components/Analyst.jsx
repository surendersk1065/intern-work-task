import React from 'react'
import { Link } from 'react-router-dom'
import { CiLocationOn } from "react-icons/ci";
import { MdWork } from "react-icons/md";

function Analyst({ jobs }) {
  return (
    <>
      <h2 className='fw-bolder px-3 mb-5'>Data Analyst</h2>
      {
        (jobs.length) ?
          (
            <div className=''>
              
              <Link to='' className='text-decoration-none'><div className='container jobs'>
                <div className='row'>
                  {
                    jobs.map((val) => (
                      <div className='col-12 col-md-6 col-lg-4 'key={val.id}>
                        <Link to={`/jobs/${val.id}`} className='text-decoration-none'><div className='card shadow mb-3 p-5 jobcard' key={val.id}>
                          <p className='fs-5'>{val.title}</p>
                          <p>Company : {val.comp}</p>
                          <p><CiLocationOn className='fs-5 me-3 mb-1' />{val.loc}</p>
                          <p className=' posted px-2 rounded'>{val.posted}</p>
                          <p><MdWork className='me-3 fs-5 mb-1' />{val.exp}</p>
                        </div>
                        </Link>
                      </div>
                    ))
                  }
                </div>
              </div></Link>

            </div>
          )
          :
          (
            <p className='text-center my-5 fw-bolder'>No Jobs to display</p>
        )
      }
    </>


  )
}

export default Analyst
