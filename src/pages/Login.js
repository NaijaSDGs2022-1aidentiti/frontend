import React from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

const Login = () => {
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            phrase: ''
        },
        validationSchema: Yup.object({
            phrase: Yup.string().required('Enter your phrase')
        }),
        onSubmit: (values)=>{
            console.log(values)
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
                    <div className='form-group'>
                        <input className='form-control' placeholder='Enter your Phrase' onChange={formik.handleChange} onBlur={formik.handleBlur} name='phrase' />
                        {formik.touched.phrase && <div className='text-danger'>{formik.errors.phrase}</div>}
                    </div>
                    <button type='submit' className='btn theme-bg text-white font-weight-bold btn-block'>SIGN IN</button>
                    <p className='pb-5 pt-2 text-center h6'>Don't have an account yet? <span className='theme-color cursor-pointer' onClick={()=>navigate('/auth/register')} >Sign up</span></p>
                </form>
            </div>
        </div>
    );
};

export default Login;