import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate()
    return (
        <div>
            <div className='row w-100 mx-0'>
                <div className='col-6 theme-bg p-5'>
                    <p className='p-5 h3'>
                        <span className='text-white'>Join other businessess who enjoy</span> <span className='text-dark'>cheaper FX rates, faster settlement periods and liquidity</span>
                    </p>
                    <p className='p-5 h4 text-white'>Start making/accepting payments...</p>
                    <p className='p-5 text-dark h6'>Enter your email address and password to access the platform</p>
                    {/* <p className='p-3 float-right'>Home</p> */}
                </div>
                <div className='col-6 p-5'>
                    <div className='d-flex justify-content-center'>
                        <img alt='logo' src={require('../assets/logo1.png')} width='150px' height='150px' />
                    </div>
                    <p className='h4 p-4'>Login <span className='text-muted'>to your CashFlakes</span> account</p>
                    <form className='px-5'>
                        <div className='form-group'>
                            <input className='form-control' placeholder='Email' />  
                        </div>
                        <div className='form-group'>
                            <input className='form-control' placeholder='Password' required />
                        </div>
                        <button className='btn theme-bg text-white font-weight-bold btn-block'>SIGN IN</button>
                        <p className='py-5 h6'>Don't have an account yet? <span className='theme-color cursor-pointer' onClick={()=>navigate('/register')} >Sign up</span></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;