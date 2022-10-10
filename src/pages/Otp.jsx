import React from 'react';

const Otp = () => {
    return (
        <div>
            <div className='d-flex justify-content-start py-5'>
                <div className='col-md-8'>
                    <div className='d-block d-md-none d-flex justify-content-center'>
                        <img alt='logo' src={require('../assets/logo1.png')} width='150px' height='150px' />
                    </div>
                    <p className='py-4 h4 text-uppercase'>otp verification</p>
                    <p className='h6'>Enter your 6-digits OTP</p>
                    <div className='d-flex justify-content-start'>
                        <form>
                            <div className="form-group col-10">
                                <input className='form-control mx-2 font-weight-bold text-center' maxLength='6' />
                            </div>
                            <button className='btn text-white font-weight-bold theme-bg' >Verify</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Otp;