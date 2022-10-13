import React from 'react';
import { useNavigate } from 'react-router-dom';

const Nav = () => {
    const navigate = useNavigate()
    return (    
        <div>
            <nav className='navbar navbar-inverse navbar-expand-sm bg-white text-dark'>
                <a href='/' className='navbar-brand text-dark font-weight-bold text-lowercase h3 animate__animated animate__slideInLeft animate__slow px-md-5 px-1 fs-9' >
                 <img alt='logo' src={require('../assets/logo1.png')} width='30px' className='py-0 my-0' /> <span className='text-capitalize'>CashFlakes</span>
                </a>
                <div className='collapse navbar-collapse justify-content-end animate__animated animate__fadeInRight animate__slower py-2'>
                    <ul className='navbar-nav'>
                        <li className='nav-item my-1 mx-2'>
                            <a href='/' className='nav-link text-dark fs-9'>Services</a>
                        </li>
                        <li className='nav-item my-1 mx-2'>
                            <a href='/' className='nav-link text-dark fs-9'>Work with us</a>
                        </li>
                        <li className='nav-item my-1 mx-2'>
                            <a href='/' className='nav-link text-dark fs-9'>About</a>
                        </li>
                        <li className='nav-item my-1 mx-2'>
                            <button className='btn nav-btn rounded-pill text-white font-weight-bold mx-1 px-4' onClick={()=>navigate('/auth/login')} >Sign in</button>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Nav;