import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate()
    return (
        <div>
            <div className='py-5 my-md-5'>
                <div className='d-block d-md-none d-flex justify-content-center'>
                    <img alt='logo' src={require('../assets/logo1.png')} width='150px' height='150px' />
                </div>
                <p className='h4 py-4 px-md-5'>Login </p>
                <form className='px-0 px-md-5'>
                    <div className='form-group'>
                        <input className='form-control' placeholder='Enter your Phrase' required />
                    </div>
                    <button className='btn theme-bg text-white font-weight-bold btn-block'>SIGN IN</button>
                    <p className='py-5 h6'>Don't have an account yet? <span className='theme-color cursor-pointer' onClick={()=>navigate('/auth/register')} >Sign up</span></p>
                </form>
            </div>
        </div>
    );
};

export default Login;