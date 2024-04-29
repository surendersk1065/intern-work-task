import React from 'react'

function Input2({search, setSearch}) {
  return (
    <>
        <input 
            type='search'
            placeholder='Search for Job title...'
            className='form-control searchbar2 shadow p-3'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
        />
    </>
  )
}

export default Input2
