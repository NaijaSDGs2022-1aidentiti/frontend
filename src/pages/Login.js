import React, { useState } from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import axios from 'axios';
import { useSelector } from 'react-redux';

const Login = () => {
    const navigate = useNavigate()
    const api = useSelector(state=>state.url)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            email: Yup.string().required('Email is required').email('Invalid email address'),
            password: Yup.string().required('Enter your password')
        }),
        onSubmit: (values)=>{
            setIsLoading(true)
            console.log(values)
            axios.post(`${api}auth/login`, values).then(res=>{
                setIsLoading(false)
                console.log(res.data)
                if(res.data.statusCode === 200){
                    navigate('/dashboard')
                }else{
                    setError(res.data.error)
                }
            }).catch(err=>{
                setIsLoading(false)
                console.log(err)
                setError('Internal Server Error')
            })
        }
    })
    return (
        <div>
            <div className='py-5 my-md-5'>
                <div className='d-block d-md-none d-flex justify-content-center'>
                    <img alt='logo' src={require('../assets/logo1.png')} width='150px' height='150px' />
                </div>
                <p className='h4 py-4 px-md-5'>Login </p>
                <form className='px-0 px-md-5' onSubmit={formik.handleSubmit}>
                    {
                        error !== '' && !isLoading
                        ?
                        <div className='alert alert-danger'>
                            <span><strong><i className='fa fa-exclamation-triangle'></i></strong> {error}</span>
                        </div>
                        :
                        ''
                    }
                    <div className='form-group'>
                        <input className='form-control' placeholder='Enter your E-mail' onChange={formik.handleChange} onBlur={formik.handleBlur} name='email' />
                        {formik.touched.email && <div className='text-danger'>{formik.errors.email}</div>}
                    </div>
                    <div className='form-group'>
                        <input className='form-control' placeholder='Enter your Password' onChange={formik.handleChange} onBlur={formik.handleBlur} name='password' />
                        {formik.touched.password && <div className='text-danger'>{formik.errors.password}</div>}
                    </div>
                    <button type='submit' className={isLoading ? 'btn theme-bg text-white font-weight-bold btn-block disabled' : 'btn theme-bg text-white font-weight-bold btn-block' }>
                        {
                            isLoading
                            ?
                            'Signing In...'
                            :
                            'Sign In'
                        }
                    </button>
                    <p className='pb-5 pt-2 text-center h6'>Don't have an account yet? <span className='theme-color cursor-pointer' onClick={()=>navigate('/auth/register')} >Sign up</span></p>
                </form>
            </div>
        </div>
    );
};

export default Login;