import { useFormik } from 'formik';
import React, { useState } from 'react';
import * as Yup from 'yup';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Otp = () => {
    const navigate = useNavigate()
    const api = useSelector(state=>state.url)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')
    const [user, setUser] = useState({_id: ''})
    useEffect(()=>{
        if(sessionStorage.getItem('validating')){
            setUser(JSON.parse(sessionStorage.getItem('validating')))
        }else{
            navigate('/auth/register')
        }
    }, [])
    const formik = useFormik({
        initialValues: {
            otp: ''
        },
        validationSchema: Yup.object({
            otp: Yup.string().required().length(6)
        }),
        onSubmit: (values)=>{
            values.id = user.id
            console.log(values)
            setIsLoading(true)
            axios.post(`${api}auth/verify_signup`, values).then(res=>{
                setIsLoading(false)
                console.log(res.data)
            }).catch(err=>{
                setIsLoading(false)
                console.log(err)
            })
        }
    })
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
                        <form onSubmit={formik.handleSubmit}>
                        <p className='text-center fs-9'>Enter your 6-digits OTP</p>
                            <div className="form-group col-12">
                                <input className='form-control mx-2 font-weight-bold text-center' maxLength='6' onChange={formik.handleChange} onBlur={formik.handleBlur} name='otp' />
                                {formik.touched.otp && <div className='text-danger'>{formik.errors.otp}</div>}
                            </div>
                            <div className='d-flex justify-content-center' >
                                <button type='submit' className={isLoading ? 'btn text-white font-weight-bold theme-bg disabled' : 'btn text-white font-weight-bold theme-bg'} >
                                    {
                                        isLoading
                                        ?
                                        'Verifying...'
                                        :
                                        'Verify'
                                    }
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Otp;