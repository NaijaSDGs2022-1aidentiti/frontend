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
                    <button className='btn theme-bg text-white font-weight-bold btn-block my-2'>Verify and Create your account</button>
                    <p className='pt-2 cashflakes-muted'>By signing up you agree to our <span className='theme-color'>Privacy & Terms & Privacy Policy.</span> </p>
                    <p className='cashflakes-muted'>When you provide your BVN, it helps cashfkakes protect your financial interest and combat AML with proper KYC</p>
                </form>
            </div>
        </div>
    );
};

export default Verify;