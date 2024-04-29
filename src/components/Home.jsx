import React, { useEffect, useState } from 'react'
import Search from './Search'
import Category from './Category'
import { IoMdTime } from "react-icons/io";
import { CiTimer } from "react-icons/ci";
import { FaBookmark } from "react-icons/fa6";
import { RiVisaFill } from "react-icons/ri";
import { FaBookOpen } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";
import { Link } from 'react-router-dom';
import Jobs from './Jobs';
import { IoReload } from "react-icons/io5";

function Home({ jobs }) {
  const image = ['bg-1.png', 'bg-2.png', 'bg-3.png', 'bg-4.png']
  const [img, setImg] = useState(null)
  useEffect(() => {
    const intervalId = setInterval(() => {
      setImg(image[Math.floor(Math.random() * image.length)]);
    }, 3000)

    return () => clearInterval(intervalId);
  }, [])

  const category = [
    {
      id: 1,
      name: 'Full time',
      sym: <IoMdTime />
    },
    {
      id: 2,
      name: 'Part Time',
      sym: <CiTimer />
    },
    {
      id: 3,
      name: 'Bookmarked',
      sym: <FaBookmark />
    },
    {
      id: 4,
      name: 'Visa Offered',
      sym: <RiVisaFill />
    },
    {
      id: 1,
      name: 'Internship',
      sym: <FaBookOpen />
    },
    {
      id: 5,
      name: 'Overseas',
      sym: <CiGlobe />
    }
  ]
  return (
    <div>

      <div className='my-5 my-md-0'>
        <Search />
      </div>

      <div className='slider px-2 px-md-0'>
        <img
          src={img}
        />
      </div>

      <Link to='/jobs' className='text-decoration-none'><div className='container category my-5'>
        <div className='row'>
          {
            category.map((val) => (
              <>
                <Category name={val.name} key={val.id} sym={val.sym} />
              </>
            ))
          }
        </div>
      </div></Link>

      <div>
        <h2 className='fw-bolder px-3 mb-5'>Featured Jobs</h2>
      </div>
      {
        (jobs.length) ?
          (
            <div className=''>
              
              <Link to='/jobs' className='text-decoration-none'><div className='container jobs'>
                <div className='row'>
                  {
                    jobs.map((val) => (
                      <>
                        <Jobs title={val.title} loc={val.loc} comp={val.comp} post={val.posted} key={val.id}/>
                      </>
                    ))
                  }
                </div>
              </div></Link>

            </div>
          )
          :
          (
            
            <div className='text-center'>
              <p className='m-0 mb-1 fs-4'><IoReload className=''/></p>
              <p className=''>Loading Please Wait</p>
            </div>
            
          )
          }

    </div>
  )
}

export default Home
