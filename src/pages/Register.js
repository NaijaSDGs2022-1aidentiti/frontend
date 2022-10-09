import React from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate()
    return (
        <div>
            <div className='row w-100 mx-0'>
                <div className='col-6 theme-bg p-5'>
                    <p className='p-5 h3'>
                        <span className='text-dark'>Cheaper, Faster & Safer B2B FX Payments</span> <span className='text-white'>with a business account</span>
                    </p>
                    <p className='p-5 h4 text-white'>Pay and receive cross-border payment with ease</p>
                    <p className='px-5 text-dark h6'>Up to 9X cheaper business FX rates than high street banks</p>
                    {/* <p className='p-3 float-right'>Home</p> */}
                </div>
                <div className='col-6 p-5'>
                    <div className='d-flex justify-content-center'>
                        <img alt='logo' src={require('../assets/logo1.png')} width='150px' height='150px' />
                    </div>
                    <p className='h4 p-4'>Create <span className='text-muted'>your CashFlakes</span> account</p>
                    <form className='px-5'>
                        <div className='form-group'>
                            <input className='form-control' placeholder='Mobile' />  
                        </div>
                        <div className='form-group'>
                            <input className='form-control' placeholder='Email' />  
                        </div>
                        <div className='form-group'>
                            <input className='form-control' placeholder='Password' required />
                        </div>
                        <button className='btn theme-bg text-white font-weight-bold btn-block'>Create your free account</button>
                        <p className='py-2 h6'>Already sign up? <span className='theme-color cursor-pointer' onClick={()=>navigate('/login')} >Sign in</span></p>
                        <p className='h6 py-2'>By signing up you agree to our <span className='theme-color'>Privacy & Terms & Privacy Policy.</span> </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;