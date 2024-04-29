import React from 'react'

function Category({name,sym }) {
  return (
    <div className='col-6 col-md-4'>
      <div className='card mb-3 p-4'style={{maxWidthwidth:'150px'}}>
        <span className='fs-4 mb-2'>{sym}</span>
        <p>{name}</p>
      </div>
    </div>
  )
}

export default Category
