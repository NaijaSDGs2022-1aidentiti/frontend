import React from 'react';
import Nav from './Nav';

const Header = () => {
    return (
        <div>
            <div className='animate__animated animate__fadeIn animate__slower theme-bg pb-5'>
                <Nav />
                {/* <div className='d-flex justify-content-between px-5 text-white py-4'>
                    <p className='h5 animate__animated animate__slideInLeft animate__slower'>1aidentiti</p>
                    <div className='animate__animated animate__slideInRight animate__slower'>
                        <button className='btn btn-light text-danger btn-lg font-weight-bold mx-1'>Get Started</button>
                        <button className='btn btn-outline-light btn-lg mx-1'>Sign in</button>
                    </div>
                </div> */}
                <div className='px-5 py-5 animate__animated animate__fadeInUp animate__slower'>
                    <p className='display-4 text-white col-md-9 font-weight-bold py-2'>Cross-border payments solution built for <span className='e-commerce text-dark'>e-commerce</span><span className='emerging-markets text-dark'>emerging markets</span><span className='global-startups text-dark'>global startups</span><span className='enterprises text-dark'>enterprises</span></p>
                    <p className='h6 text-white col-md-6 fs-2'>We power cross-border payments for  the world's fastest-growing startups and enterprises. Send and receive instant payments globally via our solution.</p>
                    <button className='my-3 mx-2 btn btn-light btn-lg text-danger font-weight-bold animate__animated animate__shakeY animate__slow animate__delay-3s'>Sign up for free now</button>
                </div>
            </div>
        </div>
    );
};

export default Header;