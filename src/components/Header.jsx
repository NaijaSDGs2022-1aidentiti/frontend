import React from 'react';

const Header = () => {
    return (
        <div>
            <div className='theme-bg px-5 pb-5'>
                <div className='d-flex justify-content-between px-5 text-white py-4'>
                    <p className='h5'>1aidentiti</p>
                    <button className='btn btn-outline-light'>Get the App</button>
                </div>
                <div className='py-5'>
                    <p className='display-4 text-white col-md-9 font-weight-bold py-2'>Cross-border payments solution built for <span className='e-commerce text-dark'>e-commerce</span><span className='emerging-markets text-dark'>emerging markets</span><span className='global-startups text-dark'>global startups</span><span className='enterprises text-dark'>enterprises</span></p>
                    <p className='h6 text-white col-md-6 fs-2'>We power cross-border payments for  the world's fastest-growing startups and enterprises. Send and receive instant payments globally via our solution.</p>
                    <button className='my-3 mx-2 btn btn-light text-danger font-weight-bold'>Sign up for free now</button>
                </div>
            </div>
        </div>
    );
};

export default Header;