import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Authenticate from './components/Authenticate';
import NotFound from './pages/404';
import Home from './pages/Home';
import Login from './pages/Login';
import Otp from './pages/Otp';
import Register from './pages/Register';
import Verify from './pages/Verify';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/auth' element={<Authenticate />} >
          <Route path='/auth/login' element={<Login />} />
          <Route path='/auth/register' element={<Register />} />
          <Route path='/auth/otp' element={<Otp />} />
          <Route path='/auth/verify-reg' element={<Verify />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
