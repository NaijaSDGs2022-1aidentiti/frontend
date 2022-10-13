import React from 'react';
import { useNavigate } from 'react-router-dom';
import Nav from '../components/Nav'

const Home = () => {
    const navigate =useNavigate()
    return (
        <div>
            <div className="App">
                <Nav />
                <div className='row w-100 mx-0 px-md-5'>
                    <div className='col-md-4'>
                        <p className='display-2 font-weight-bold pt-5'>The bank that does it all</p>
                        <p className='cashflakes-muted'>
                            By installing this application on your phone, you will benefit from excellent financial services
                        </p>
                        <button onClick={()=>navigate('/auth/register')} className='btn theme-bg text-white font-weight-bold rounded-pill px-4 py-2'>
                            Get Started
                        </button>
                    </div>
                    <div className='col-md-8'>
                        <img alt='bg-logo' src={require('../assets/three.png')} className='w-100'  />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;