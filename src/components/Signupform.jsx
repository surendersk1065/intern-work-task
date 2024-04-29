import React from 'react'

function Signupform({values, error, handleSubmit, handleChange}) {
  return (
    <div className='signup-container container'>
    <div className='signup '>
        <div className='text-center py-3'>
            <h3 className=''>Register</h3>
        </div>
        <div className="modal-body">
            <form onSubmit={handleSubmit}>
                <label>UserName:</label>
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={values.username}
                    onChange={handleChange}
                />
                <p>{error.username}</p>
                <label>Email:</label>
                <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    value={values.email}
                    onChange={handleChange}
                />
                <p>{error.email}</p>
                <label>Password:</label>
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={values.password}
                    onChange={handleChange}
                />
                <p>{error.password}</p>
                <button className="btn btn-light" >Submit</button>
                {/* <button data-bs-dismiss='modal'>close</button>
                        <p>{Object.keys(formErrors).length === 0 && isSubmit ?
                            (<>Signed in Succesfully Click Close</>) : ''}</p> */}

            </form>
        </div>

    </div>
    
</div>
  )
}

export default Signupform
