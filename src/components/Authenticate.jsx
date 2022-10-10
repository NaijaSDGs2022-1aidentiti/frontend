import React from 'react';
import { Outlet } from 'react-router-dom';

const Authenticate = () => {
    return (
        <div>
            <div className='row w-100 mx-0 box-position'>
                <div className='col-6 theme-bg p-5 d-none d-md-block'>
                    <img alt='logo' src={require('../assets/logo2.png')} width='100px' className='m-5' />
                    <p className='p-5 h3'>
                        <span className='text-dark'>Cheaper, Faster & Safer B2B FX Payments</span> <span className='text-white'>with a business account</span>
                    </p>
                    <p className='p-5 h3'>
                        <span className='text-white'>Join other businessess who enjoy</span> <span className='text-dark'>cheaper FX rates, faster settlement periods and liquidity</span>
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