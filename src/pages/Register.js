import axios from 'axios';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup'

const Register = () => {
    const api = useSelector(state=>state.url)
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            confirm_password: ''
        },
        validate: (values)=>{
            let errors = {}
            if(values.password !== values.confirm_password) {
                errors.confirm_password = 'Password not match'
            }
            return errors
        },
        validationSchema: Yup.object({
            email: Yup.string().required('This field is required').email('Enter a valid E-mail'),
            password: Yup.string().required('Password is required').matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, 'Password must be alphanumeric'),
            confirm_password: Yup.string().required('Confirm your Password')
        }),
        onSubmit: (values)=>{
            setIsLoading(true)
            axios.post(`${api}auth/register`, values).then((res)=>{
                console.log(res.data)
                if(res.data.statusCode === 200){
                    sessionStorage.setItem('validating', JSON.stringify({id: res.data.message._id, otp: res.data.message.otp}))
                    navigate('/auth/otp')
                }else{
                    setIsLoading(false)
                    setError(res.data.message)
                }
            }).catch((err)=>{
                console.log(err)
                setIsLoading(false)
                setError('Internal Server Error')
            })
        }
    })
    return (
        <div>
            <div className='px-0 py-5'>
                <div className='d-block d-md-none d-flex justify-content-center'>
                    <img alt='logo' src={require('../assets/logo1.png')} width='150px' height='150px' />
                </div>
                <p className='h4 px-md-5 py-4'>Register</p>
                <form className='px-0 px-md-5' onSubmit={formik.handleSubmit}>
                    {
                        error !== '' && !isLoading
                        &&
                        <div className='alert alert-danger'>
                            <span><strong><i className='fa fa-exclamation-triangle'></i></strong> {error} </span>
                        </div>
                    }
                    <div className='form-group'>
                        <input className='form-control' placeholder='Email' name='email' onChange={formik.handleChange} onBlur={formik.handleBlur} /> 
                        {formik.touched.email && <div className='text-danger'>{formik.errors.email}</div>} 
                    </div>
                    <div className='form-group'>
                        <input className='form-control' placeholder='Password' name='password' onChange={formik.handleChange} onBlur={formik.handleBlur} /> 
                        {formik.touched.password && <div className='text-danger'>{formik.errors.password}</div>}  
                    </div>
                    <div className='form-group'>
                        <input className='form-control' placeholder='Confirm Password' name='confirm_password' onChange={formik.handleChange} onBlur={formik.handleBlur} />
                        {formik.touched.confirm_password && <div className='text-danger'>{formik.errors.confirm_password}</div>} 
                    </div>
                    <button type='submit' className={isLoading ? 'btn theme-bg text-white font-weight-bold btn-block disabled' : 'btn theme-bg text-white font-weight-bold btn-block'} >
                        {
                            isLoading
                            ?
                            'Please wait...'
                            :
                            'Continue...'
                        }
                    </button>
                    <p className='py-2 h6 text-center'>Already have an account? <span className='theme-color cursor-pointer' onClick={()=>navigate('/auth/login')} >Sign in</span></p>
                </form>
            </div>
        </div>
    );
};

export default Register;