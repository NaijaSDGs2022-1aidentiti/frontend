import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';

const Footer = () => {
    return (
        <div className='m-0 p-0'>
            <div className='footer-theme m-0 pb-5'>
                <AnimationOnScroll animateIn='animate__slideInLeft'>
                    <p className='theme-color h1 p-5'>1aidentiti</p>
                </AnimationOnScroll>
                <AnimationOnScroll animateIn='animate__slideInUp animate__slower'>
                    <div className='container footer-card my-3 shadow rounded-lg'>
                        <div className='row w-100 mx-auto p-5'>
                            <div className='col-md-3'>
                                <p className='h5'>Products</p>
                            </div>
                            <div className='col-md-3'>
                                <ol className='list-unstyled text-muted'>
                                    <li> - Payin</li>
                                    <li> - Payout</li>
                                    <li> - Multi-currency wallet</li>
                                    <li> - Exchange</li>
                                </ol>
                            </div>
                            <div className='col-md-3'>
                                <ol className='list-unstyled text-muted'>
                                    <li> - Cross-border exchange</li>
                                    <li> - Global walet-walet</li>
                                    <li> - Bank transfers</li>
                                    <li> - Exchange with enterprise</li>
                                </ol>
                            </div>
                        </div>
                    </div>                    
                </AnimationOnScroll>
                <AnimationOnScroll animateIn='animate__slideInUp animate__slower'>
                    <div className='container my-3 footer-card shadow rounded-lg'>
                        <div className='row w-100 mx-auto p-5'>
                            <div className='col-md-2'>
                                <p className='h5'>Solutions</p>
                            </div>
                            <div className='col-md-10'>
                                <ol className='list-unstyled text-muted'>
                                    <li>
                                        - Extensive liquidity in exotic currencies opens up previously under-served trade markets.
                                    </li>
                                    <li>
                                        - Cheaper access to inter-bank exchange rates and zero transaction fees improve bottomlines
                                    </li>
                                    <li>
                                        - Faster processing and local settlement accounts ensure quick delivery of payments.
                                    </li>
                                    <li>
                                    - Leverage advanced and robust security, thoroughly tested with capabilities to withstand malicious attacks.
                                    </li>
                                    <li>
                                        - With a click, you can exchange 51 currencies and make business‑to‑business payments almost instantly.
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </AnimationOnScroll>
            </div>
        </div>
    );
};

export default Footer;