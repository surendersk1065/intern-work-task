import React from 'react'
import { CiLocationOn } from "react-icons/ci";

function Jobs({title, loc, comp, post}) {
  return (
    <div className='col-12 col-md-6 col-lg-4 '>
        <div className='card shadow mb-3 p-5 jobcard' style={{height:'230px'}}>
            <p className='fs-5'>{title}</p>
            <p>Company : {comp}</p>
            <p><CiLocationOn className='fs-5 me-3 mb-1'/>{loc}</p>
            <p className='posted px-2 rounded'>{post}</p>
        </div>
      
    </div>
  )
}

export default Jobs
