import React from 'react';
import { useNavigate } from 'react-router-dom';

const Nav = () => {
    const navigate = useNavigate()
    return (
        <div>
            <nav className='navbar navbar-inverse navbar-expand-sm theme-bg text-white'>
                <a href='/' className='navbar-brand text-white font-weight-bold text-lowercase h3 animate__animated animate__slideInLeft animate__slow px-md-5 px-1' >
                 1aidentiti
                </a>
                <div className='collapse navbar-collapse justify-content-end animate__animated animate__fadeInRight animate__slower py-2'>
                    <ul className='navbar-nav'>
                        <li className='nav-item'>
                            <button className='btn btn-light text-danger font-weight-bold mx-1'>Get Started</button>
                        </li>
                        <li className='nav-item my-1 mx-2'>
                            <button className='btn btn-outline-light mx-1' onClick={()=>navigate('/login')} >Sign in</button>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Nav;