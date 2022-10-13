import axios from 'axios';
import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup'

const Verify = () => {
    const navigate = useNavigate()
    const api = useSelector(state=>state.url)
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [user, setUser] = useState({id: ''})
    useEffect(()=>{
        if(sessionStorage.getItem('validating')){
            setUser(JSON.parse(sessionStorage.getItem('validating')))
        }else{
            navigate('/auth/register')
        }
    }, [])

    const formik = useFormik({
        initialValues: {
            bvn: ''
        },
        validationSchema: Yup.object({
            bvn: Yup.string().required('BVN is required').length(11, 'Must be 11 characters')
        }),
        onSubmit: (values)=>{
            setIsLoading(true)
            values.id = user.id
            console.log(values)
            axios.put(`${api}auth/update_user`, values).then(res=>{
                console.log(res.data)
                if(res.data.statusCode === 200){
                    setIsLoading(false)
                    navigate('/dashboard')
                    localStorage.setItem('newUser', res.data.newUser)
                }else{
                    setIsLoading(false)
                    setError("Sorry, couldn't verify your BVN")
                }
            }).catch(err=>{
                setIsLoading(false)
                setError('Internal Server Error')
            })
        }
    })
    return (
        <div>
            <div className='py-md-5'>
                <div className='d-block d-md-none d-flex justify-content-center'>
                    <img alt='logo' src={require('../assets/logo1.png')} width='150px' height='150px' />
                </div>
                <p className='py-4 px-md-5 h4'>Complete your registration, It's free!</p>
                <form className='px-md-5' onSubmit={formik.handleSubmit}>
                    {
                        error !== '' && !isLoading
                        ?
                        <div className='alert alert-danger'>
                            <span><strong><i className='fa fa-exclamation-triangle'></i></strong> {error} </span>
                        </div>
                        :
                        ''
                    }
                    <div className='form-group'>
                        <input className='form-control' placeholder='Enter your BVN' name='bvn' onChange={formik.handleChange} onBlur={formik.handleBlur} />  
                        {formik.touched.bvn && <div className='text-danger'>{formik.errors.bvn}</div>}
                    </div>
                    <button className={isLoading ? 'disabled btn theme-bg text-white font-weight-bold btn-block my-2' : 'btn theme-bg text-white font-weight-bold btn-block my-2' }>
                        {
                            isLoading
                            ?
                            'Verifying...'
                            :
                            'Verify and Create your account'
                        }
                    </button>
                    <p className='pt-2 cashflakes-muted'>By signing up you agree to our <span className='theme-color'>Privacy & Terms & Privacy Policy.</span> </p>
                    <p className='cashflakes-muted'>When you provide your BVN, it helps cashfkakes protect your financial interest and combat AML with proper KYC</p>
                </form>
            </div>
        </div>
    );
};

export default Verify;