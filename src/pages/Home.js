import React from 'react';
import { useNavigate } from 'react-router-dom';
import Nav from '../components/Nav'
import SubHeader from '../components/SubHeader';

const Home = () => {
    const navigate =useNavigate()
    return (
        <div>
            <div className="App">
                <Nav />
                <div className='row w-100 mx-0 px-md-5'>
                    <div className='col-md-4'>
                        <p className='display-4 font-weight-bold pt-4 animate__animated animate__backInUp animate__slower'>Now pay for everything with your crypto</p>
                        <p className='cashflakes-muted animate__animated animate__fadeIn animate__slower'>
                            By installing this application on your phone, you will benefit from excellent financial services
                        </p>
                        <div className='d-flex animate__animated animate__backInDown animate__slower flex-md-row flex-column'>
                            <button onClick={()=>navigate('/auth/register')} className='btn nav-btn text-white font-weight-bold rounded-pill px-4 py-2 mx-1 my-1'>
                                Get Started
                            </button>
                            <button className='btn text-dark font-weight-bold rounded-pill px-4 py-2 mx-1 my-1'>
                               <span className='bg-white px-2 py-1 rounded-circle shadow-lg'><i className='fa fa-apple'></i></span> Download for IOS
                            </button>
                        </div>
                    </div>
                    <div className='col-md-8 animate__animated animate__fadeIn animate__slower d-none d-md-block'>
                        <div className='bg-white shadow-lg rounded-pill mini-text px-2 py-1'>
                            <div className='d-flex'>
                                <img alt='miniImage' src={require('../assets/transfer.png')} width='50px' height='50px' className='mt-2 bg-white shadow-lg rounded-circle mr-2' />
                                <div className='px-4'>
                                    <p className='font-weight-bold text-dark fs-8 my-0 pt-2'>David Ololade</p>
                                    <p className='fs-8 cashflakes-muted'>08164572165........</p>
                                </div>
                            </div>
                        </div>
                        <div className='bg-white shadow-lg rounded-pill max-text px-2 py-1'>
                            <div className='d-flex'>
                                <img alt='miniImage' src={require('../assets/secure.png')} width='50px' height='50px' className='mt-2 bg-white shadow-lg rounded-circle mr-2' />
                                <div className='px-4'>
                                    <p className='font-weight-bold text-dark my-0 pt-2 fs-8'>Secured Payment</p>
                                    <p className='fs-8 cashflakes-muted'>Anywhere...</p>
                                </div>
                            </div>
                        </div>
                        <img alt='bg-logo' src={require('../assets/two.png')} className='w-100'  />
                    </div>
                </div>
            </div>
            <SubHeader />
        </div>
    );
};

export default Home;