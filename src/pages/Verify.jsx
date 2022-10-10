import React from 'react';

const Verify = () => {
    return (
        <div>
            <div className='py-md-5'>
                <div className='d-block d-md-none d-flex justify-content-center'>
                    <img alt='logo' src={require('../assets/logo1.png')} width='150px' height='150px' />
                </div>
                <p className='py-4 px-md-5 h4'>Complete your registration, It's free!</p>
                <form className='px-md-5'>
                    <div className='form-group'>
                        <input className='form-control' placeholder='Enter your BVN' />  
                    </div>
                    <div className='form-group'>
                        <input className='form-control' placeholder='Surname' disabled />  
                    </div>
                    <div className='form-group'>
                        <input className='form-control' placeholder='Last Name' required disabled />
                    </div>
                    <div className='form-group'>
                        <input className='form-control' placeholder='Address' required disabled />
                    </div>
                    <button className='btn theme-bg text-white font-weight-bold btn-block'>Create your free account</button>
                    <p className='h6 py-2'>By signing up you agree to our <span className='theme-color'>Privacy & Terms & Privacy Policy.</span> </p>
                </form>
            </div>
        </div>
    );
};

export default Verify;