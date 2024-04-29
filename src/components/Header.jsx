import React from 'react'
import { RiMenu2Fill } from "react-icons/ri";
import Input from './Input';
import { IoMdNotificationsOutline } from "react-icons/io";
import {Link} from 'react-router-dom'
import { CiLogout } from "react-icons/ci";

function Header({ name, mail, search, setSearch}) {
    return (
        <>
            <nav className="navbar text-white sticky-top" style={{backgroundColor : '#275df5'}}>
                <div className="container-fluid px-md-5 py-2">
                    <a className="navbar-brand fs-3 text-white" href="/">Work  in Japan <span className='logo'><img src='japan.png'/></span></a>
                    <Input search = {search} setSearch = {setSearch}/>
                    <div>
                        <IoMdNotificationsOutline className='fs-3 me-3 mb-2'/>
                        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" >
                            <span className=""><RiMenu2Fill className='text-white mb-1'/></span>
                        </button>
                    </div>

                    <div className="offcanvas offcanvas-end rounded"  id="offcanvasNavbar" style={{backgroundColor:'#f8f9fa'}}>
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Work in Japan</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <div className='pb-4'>
                                <span><img src='user2.jpg' style={{width:'30px'}} className='rounded'/></span>
                                <p className='m-0 mt-2 fw-bold text-uppercase'>{name}</p>
                                <p className='m-0 '>{mail}</p>
                                <p className='m-0 mt-2 fw-bolder'><Link to='update' className='text-decoration-none '>View & Update Profile</Link></p>
                            </div>
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li className="nav-item px-2 Nav">
                                    <Link to='/' className='nav-link' >Home</Link>
                                </li>
                                <li className="nav-item px-2">
                                    <Link to='jobs' className='nav-link'>Jobs</Link>
                                </li>
                                <li className="nav-item px-2">
                                    <Link to='lifestyle' className='nav-link'>Japan Life Style</Link>
                                </li>
                                <li className="nav-item px-2">
                                    <Link to='about' className='nav-link'>About Us</Link>
                                </li>
                                <li className="nav-item px-2">
                                    <Link to='contact' className='nav-link'>Login</Link>
                                </li>
                                <li className="nav-item px-2">
                                    <Link to='' className='nav-link'>Logout<CiLogout className='text-dark ms-2'/></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header
