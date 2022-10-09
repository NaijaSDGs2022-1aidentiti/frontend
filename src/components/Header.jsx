import React from 'react';
import { useNavigate } from 'react-router-dom';
import Nav from './Nav';

const Header = () => {
    const navigate = useNavigate()
    return (
        <div>
            <div className='animate__animated animate__fadeIn animate__slower theme-bg pb-5 banner'>
                <Nav />
                <div className='px-5 py-5 animate__animated animate__fadeInUp animate__slower'>
                    <p className='display-4 text-white col-md-9 font-weight-bold py-2'>Cross-border payments solution built for <span className='e-commerce text-dark'>e-commerce</span><span className='emerging-markets text-dark'>emerging markets</span><span className='global-startups text-dark'>global startups</span><span className='enterprises text-dark'>enterprises</span></p>
                    <p className='h6 text-white col-md-6 fs-2'>We power cross-border payments for  the world's fastest-growing startups and enterprises. Send and receive instant payments globally via our solution.</p>
                    <button onClick={()=>navigate('/register')} className='my-3 mx-2 btn btn-light btn-lg text-danger font-weight-bold animate__animated animate__shakeY animate__slow animate__delay-3s'>Sign up for free now</button>
                </div>
            </div>
        </div>
    );
};

export default Header;