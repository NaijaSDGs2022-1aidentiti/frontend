import { useFormik } from 'formik';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup'

const Register = () => {
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            email: '',
            phrase: '',
            confirm_phrase: ''
        },
        validate: (values)=>{
            let errors = {}
            if(values.phrase !== values.confirm_phrase) {
                errors.confirm_phrase = 'Phrase not match'
            }
            return errors
        },
        validationSchema: Yup.object({
            email: Yup.string().required('This field is required').email('Enter a valid E-mail'),
            phrase: Yup.string().required('Phrase is required'),
            confirm_phrase: Yup.string().required('Confirm your Phrase')
        }),
        onSubmit: (values)=>{
            console.log(values)
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
                    <div className='form-group'>
                        <input className='form-control' placeholder='Email' name='email' onChange={formik.handleChange} onBlur={formik.handleBlur} /> 
                        {formik.touched.email && <div className='text-danger'>{formik.errors.email}</div>} 
                    </div>
                    <div className='form-group'>
                        <input className='form-control' placeholder='Phrase' name='phrase' onChange={formik.handleChange} onBlur={formik.handleBlur} /> 
                        {formik.touched.phrase && <div className='text-danger'>{formik.errors.phrase}</div>}  
                    </div>
                    <div className='form-group'>
                        <input className='form-control' placeholder='Confirm Phrase' name='confirm_phrase' onChange={formik.handleChange} onBlur={formik.handleBlur} />
                        {formik.touched.confirm_phrase && <div className='text-danger'>{formik.errors.confirm_phrase}</div>} 
                    </div>
                    <button type='submit' className='btn theme-bg text-white font-weight-bold btn-block'>Continue...</button>
                    <p className='py-2 h6'>Already sign up? <span className='theme-color cursor-pointer' onClick={()=>navigate('/auth/login')} >Sign in</span></p>
                </form>
            </div>
        </div>
    );
};

export default Register;