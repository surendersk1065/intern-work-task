import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Sidebar() {
  const category = [
    {
      id:1,
      name:'Web Development',
      link:'/jobs'
    },
    {
      id:2,
      name:'Data Analyst',
      link:'/jobs/data'
    },
    {
      id:3,
      name:'Human Resource',
      link:'/jobs/hr'
    },
    {
      id:4,
      name:'Marketing',
      link:'/jobs/market'
    },
    {
      id:5,
      name:'Internship',
      link:'/jobs/net'
    },
    {
      id:6,
      name:'Tech Support',
      link:'/jobs/tech'
    },
  ] 
  return (
    <>
    <div className='sidebar p-3'>
      <p className='fw-bolder'>Search by Category</p>
      <div className='container'>
        <div className='row'>
          {
            category.map((val) => (
              <div className='col-6 col-md-6 col-lg-2' key={val.id}>
                <Link to={val.link} className='text-decoration-none'><div className='card p-3 catcard mb-3 shadow text-center'key={val.id}>
                  <p>{val.name}</p>
                  </div></Link>
              </div>
            ))
          }
        </div>
      
      </div>
    </div>
    <Outlet />
    </>
  )
}

export default Sidebar
