import React from 'react'
import Sidebar from './Sidebar'
import Input2 from './Input2'

function Jobcontainer({jobs, search, setSearch}) {
  return (
    <>
      <div className='my-5'>
        <Input2 search={search} setSearch={setSearch}/>
      </div>

      <div className='' >
        <div>
          <Sidebar />
        </div>
        
        
      </div>
    </>
  )
}

export default Jobcontainer
