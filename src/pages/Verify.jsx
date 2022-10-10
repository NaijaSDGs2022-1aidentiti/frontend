import React from 'react';

const Verify = () => {
    return (
        <div>
            <div className='px-5'>
                <div className='d-flex justify-content-center'>
                    <img alt='logo' src={require('../assets/logo1.png')} width='150px' height='150px' />
                </div>
                <p className='p-4 h4'>Complete your registration, It's free!</p>
                <form className='px-5'>
                    <div className='form-group'>
                        <input className='form-control' placeholder='Enter your BVN' />  
                    </div>
                    <div className='form-group'>
                        <input className='form-control' placeholder='Surname' />  
                    </div>
                    <div className='form-group'>
                        <input className='form-control' placeholder='Last Name' required />
                    </div>
                    <div className='form-group'>
                        <input className='form-control' placeholder='Address' required />
                    </div>
                    <button className='btn theme-bg text-white font-weight-bold btn-block'>Create your free account</button>
                    <p className='h6 py-2'>By signing up you agree to our <span className='theme-color'>Privacy & Terms & Privacy Policy.</span> </p>
                </form>
            </div>
        </div>
    );
};

export default Verify;