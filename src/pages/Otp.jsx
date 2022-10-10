import React from 'react';

const Otp = () => {
    return (
        <div>
            <div className='d-flex justify-content-center'>
                <div className='col-8'>
                    <div className='d-flex justify-content-center'>
                        <img alt='logo' src={require('../assets/logo1.png')} width='150px' height='150px' />
                    </div>
                    <p className='text-center py-4 h6'>An OTP has just been sent to your email address. Kindly enter it in the box below</p>
                    <div className='d-flex'>
                        <input className='form-control mx-2 py-5 font-weight-bold text-center' maxLength='1' />
                        <input className='form-control mx-2 py-5 font-weight-bold text-center' maxLength='1' />
                        <input className='form-control mx-2 py-5 font-weight-bold text-center' maxLength='1' />
                        <input className='form-control mx-2 py-5 font-weight-bold text-center' maxLength='1' />
                        <input className='form-control mx-2 py-5 font-weight-bold text-center' maxLength='1' />
                        <input className='form-control mx-2 py-5 font-weight-bold text-center' maxLength='1' />
                    </div>
                    <div className="d-flex justify-content-center my-3">
                        <button className='btn text-white font-weight-bold theme-bg' >Verify</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Otp;