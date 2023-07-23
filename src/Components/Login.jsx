import { useFormik } from 'formik'
import React from 'react'
import * as Yup from 'yup';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is Required'),
  password: Yup.string().required('Password is required')
});

const Login = () => {
  
  // initializing formik
  const LoginForm = useFormik({
    initialValues: {
      email: ' ',
      password: ' '
    },

    onSubmit: (values) => {
      console.log(values);
      // submit values form 
    },
    validationSchema:LoginSchema
  });

  return (

    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card w-25 shadow-lg rounded-5">
        <div className="card-body p-5">
          <i className="fa-solid fa-lock fa-3x d-block text-center" />
          <h2 className="text-center my-5" >Login Form</h2>
          <form onSubmit={LoginForm.handleSubmit}>
            <label htmlFor="">Email</label>
            <p className='error-label'>{ LoginForm.touched.email ? LoginForm.errors.email:' '}</p>
            <input className="form-control mb-4 rounded-5" type="email" name='email' onChange={LoginForm.handleChange} value={LoginForm.values.email}/>
            <label htmlFor="">Password</label>
            <p className='error-label'>{LoginForm.touched.password ? LoginForm.errors.password: ' '}</p>
            <input className="form-control mb-4 rounded-5" type="password" name='password' onChange={LoginForm.handleChange} value={LoginForm.values.password}/>
            <button type='submit'className="btn btn-danger w-100 mt-4 rounded-5">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
      )
    }

export default Login