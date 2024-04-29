import React from 'react'

function Input({search, setSearch}) {
  return (
    <>
        <input 
            type='search'
            placeholder='Search for Job title...'
            className='form-control searchbar shadow-lg'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
        />
    </>
  )
}

export default Input
