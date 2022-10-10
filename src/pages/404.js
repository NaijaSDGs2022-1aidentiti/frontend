import React from 'react';
import Nav from '../components/Nav';

const NotFound = () => {
    return (
        <div>
            <Nav />
            <img alt='notfound' src={require('../assets/404.gif')} className='w-100' />
        </div>
    );
};

export default NotFound;