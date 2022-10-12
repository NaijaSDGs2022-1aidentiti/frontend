import React from 'react';
import { Outlet } from 'react-router-dom';

const Authenticate = () => {
    return (
        <div>
            <div className='row w-100 mx-0 box-position'>
                <div className='col-6 theme-bg p-5 d-none d-md-block'>
                    <img alt='logo' src={require('../assets/logo2.png')} width='150px' className='d-block m-4' />
                    {/* <p className='p-5 h3'>
                        <span className='text-dark'>Cheaper, Faster & Safer B2B FX Payments</span> <span className='text-white'>with a business account</span>
                    </p> */}
                        <img alt='logo' src={require('../assets/one.png')} height='250px' className='d-block mx-5 mt-4' />
                    <p className='px-5 pb-5 pt-2 h3 text-center'>
                        <span className='text-white'>One Wallet,</span> <span className='text-dark'>make payments anywhere in the world.</span>
                    </p>
                </div>
                <div className='col-md-6 p-5'>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Authenticate;