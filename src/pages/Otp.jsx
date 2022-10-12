import React from 'react';

const Otp = () => {
    return (
        <div>
            <div className='pt-3 pb-5'>
                <div className='col-12'>
                    <div className='d-block d-md-none d-flex justify-content-center'>
                        <img alt='logo' src={require('../assets/logo1.png')} width='150px' height='150px' />
                    </div>
                    <p className='pt-4 h4 text-uppercase'>otp verification</p>
                    <p className='fs-8 font-weight-bold cashflakes-muted'>A 6-digits pin has just been sent to your registered email address.</p>
                    <div className='d-flex justify-content-center pt-5 mt-2'>
                        <form>
                        <p className='text-center fs-9'>Enter your 6-digits OTP</p>
                            <div className="form-group col-12">
                                <input className='form-control mx-2 font-weight-bold text-center' maxLength='6' />
                            </div>
                            <div className='d-flex justify-content-center' >
                                <button className='btn text-white font-weight-bold theme-bg' >Verify</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Otp;