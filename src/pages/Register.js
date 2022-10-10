import React from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate()
    return (
        <div>
            <div className='px-0 py-5'>
                <div className='d-block d-md-none d-flex justify-content-center'>
                    <img alt='logo' src={require('../assets/logo1.png')} width='150px' height='150px' />
                </div>
                <p className='h4 px-md-5 py-4'>Register</p>
                <form className='px-0 px-md-5'>
                    <div className='form-group'>
                        <input className='form-control' placeholder='Email' />  
                    </div>
                    <div className='form-group'>
                        <input className='form-control' placeholder='Phrase' />  
                    </div>
                    <div className='form-group'>
                        <input className='form-control' placeholder='Confirm Phrase' required />
                    </div>
                    <button className='btn theme-bg text-white font-weight-bold btn-block'>Continue...</button>
                    <p className='py-2 h6'>Already sign up? <span className='theme-color cursor-pointer' onClick={()=>navigate('/auth/login')} >Sign in</span></p>
                </form>
            </div>
        </div>
    );
};

export default Register;