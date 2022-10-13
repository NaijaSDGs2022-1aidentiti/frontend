import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';

const SubHeader = () => {
    return (
        <div className='px-md-5 px-2 my-3'>
            <AnimationOnScroll animateIn='animate__fadeIn animate__slower'>
                <div className='bg-light p-3 rounded-md'>
                    <div className='row w-100 mx-0'>
                        <div className='col-md-2 p-1'>
                            <div className='nav-btn rounded-xl'>
                                <p className='text-white h3 text-uppercase p-4 text-center font-weight-bold'>How it works</p>
                                <p className='text-white text-center h6 fs-8 px-3 pb-4'>Mobile banking differs from mobile payments</p>
                            </div>
                        </div>
                        <div className='col-md-10'>
                            <div className='row w-100 mx-0 my-1'>
                                <div className='col-md-6'>
                                    <div className='d-flex'>
                                        <img alt='peer' src={require('../assets/crypto_to_bank.png')} width='50px' height='50px' className='rounded-circle mx-1' />
                                        <p className='text-dark h6 p-3'>Direct Crypto to bank transfer</p>
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div className='d-flex'>
                                        <img alt='peer' src={require('../assets/crypto_to_crypto.png')} width='50px' height='50px' className='rounded-circle mx-1' />
                                        <p className='text-dark h6 p-3'>Send Crypto to crypto transfers</p>
                                    </div>
                                </div>
                            </div>
                            <div className='row w-100 mx-0 my-4'>
                                <div className='col-md-6'>
                                    <div className='d-flex'>
                                        <img alt='peer' src={require('../assets/crypto_to_wallet.png')} width='50px' height='50px' className='mx-1' />
                                        <p className='text-dark h6 p-3'>Crypto to mobile wallets payments</p>
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div className='d-flex'>
                                        <img alt='peer' src={require('../assets/peer.png')} width='50px' height='50px' className='rounded-circle mx-1' />
                                        <p className='text-dark h6 p-3'>Peer to peer trading</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </AnimationOnScroll>
        </div>
    );
};

export default SubHeader;