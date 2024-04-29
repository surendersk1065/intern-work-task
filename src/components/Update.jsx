import React from 'react'
import { useNavigate } from 'react-router-dom'

function Update({name , setName, mail , setMail}) {

    const navigate = useNavigate()

    const handleSubmit = () => {
        alert('Profile Updated Successfully')
        navigate('/')
    }
  return (
    <div className='px-3 py-5'>
      <div className='container update p-4 px-5 rounded'>
        <div className='d-md-flex gap-5 justify-content-around mx-md-5 px-md-5'>
            <div className='mb-4'>
                <img src='user2.jpg' style={{maxWidth:'160px'}} className=''/>
                <input type='file' className='d-block'/>
            </div>
            <div style={{width:'300px'}} className=''>
                <label className='mb-1'>Name:</label>
                <input type='text' 
                   placeholder='John Kumar'
                   className='w-100 p-1 px-2 rounded border border-danger mb-2'
                   value={name}
                   onChange={(e) => setName(e.target.value)}
                />
                <label className='mb-1'>Email:</label>
                <input type='mail' 
                   placeholder='ABC@gmail.com'
                   className='w-100 p-1 px-2 rounded border border-danger mb-2'
                   value={mail}
                   onChange={(e) => setMail(e.target.value)}
                />
                <label className='mb-1'>Phone Number:</label>
                <input type='text' 
                   placeholder='1234567897'
                   className='w-100 p-1 px-2 rounded border border-danger mb-2'
                />
                <label className='mb-1'>Location:</label>
                <input type='text' 
                   placeholder='Chennai, TamilNadu'
                   className='w-100 p-1 px-2 rounded border border-danger'
                />
            </div>
        </div>
        </div>

        <div className='px-2 py-5'>
            <div className='container bg-white p-4 px-5'>
                <h3 className='fw-bolder'>Resume</h3>
                <div className='container py-3 border rounded'>
                    <div className='text-center'>
                        <p className=''>Upload Resume</p>
                        <input type='file' className=''/>
                        <div className='text-center'>
                        <button className='btn border mt-3  '>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className='px-2 py-5'>
            <div className='container bg-white p-4 px-5'>
                <h3 className='fw-bolder'>Headline</h3>
                <textarea className='form-control'
                    placeholder='Resume Headline minimum 50 words'
                />
                
            </div>
        </div>

        <div className='px-2 py-5'>
            <div className='container bg-white p-4 px-5'>
                <h3 className='fw-bolder mb-3'>Education</h3>
                <div className='' style={{maxWidth:'700px',}} >
                    <label className='mb-1'>University Name:</label>
                    <input 
                       type='text'
                       className='form-control mb-3' 
                       placeholder='Abc institute of technology'
                    />
                    <div className='mb-2'>
                        <label className='mb-1'>Degree:</label>
                        <select className='px-2 py-2 form-select' >
                            <option className=''>B Tech</option>
                            <option>BE</option>
                            <option>BCA</option>
                            <option>BSC Computer Science</option>
                        </select>
                    </div>
                    <div className='mb-2'>
                        <label className='mb-1'>Specialization:</label>
                        <select className='px-2 py-2 form-select' >
                            <option className=''>Information Technology</option>
                            <option>Computer Science Engineering</option>
                            <option>Agriculture</option>
                            <option>Mechanical</option>
                        </select>
                    </div>
                    <div className='mb-2'>
                        <label className='mb-1'>Completion Year:</label>
                        <select className='px-2 py-2 form-select' >
                            <option className=''>2023</option>
                            <option>2022</option>
                            <option>2021</option>
                            <option>2020</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>

        <div className='px-2 py-5'>
            <div className='container bg-white p-4 px-5'>
                <h3 className='fw-bolder mb-3'>Career Profile</h3>
                <div className='' style={{maxWidth:'700px',}} >
                    <div className='mb-2'>
                            <label className='mb-1'>Role Category:</label>
                            <select className='px-2 py-2 form-select' >
                            <option className=''>Software Development</option>
                            <option>Data Analyst</option>
                            <option>Marketing</option>
                            <option>IT</option>
                            </select>
                    </div>
                    <div className='mb-2'>
                        <label className='mb-1'>Degree:</label>
                        <select className='px-2 py-2 form-select' >
                            <option className=''>B Tech</option>
                            <option>BE</option>
                            <option>BCA</option>
                            <option>BSC Computer Science</option>
                        </select>
                    </div>
                    <div className='mb-2'>
                        <label className='mb-1'>Preferred Shift:</label>
                        <select className='px-2 py-2 form-select' >
                            <option className=''>Day</option>
                            <option>Night</option>
                            <option>Flexible</option>
                        </select>
                    </div>
                    <div className='mb-2'>
                    <label className='mb-1'>Expected Salary:</label>
                    <input 
                       type='text'
                       className='form-control mb-3' 
                       placeholder='3,00,000'
                    />
                    </div>
                </div>
            </div>
        </div>
      <div className='text-center'><button className='btn btn-primary'onClick={handleSubmit}>Update Profile</button></div>
    </div>
  )
}

export default Update
