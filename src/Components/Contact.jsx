import { useFormik } from 'formik';
import React from 'react'

const contact = () => {
    const ContactForm = useFormik({
        initialValues: {
          username:' ',
          email: ' ',
          message: ' '
        },
        // initializing formik

    onSubmit: (values) => {
      console.log(values);
      // submit values form 
    },
    validationSchema:contactSchema
  });

  return (

    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card w-25 shadow-lg rounded-5">
        <div className="card-body p-5">
          <i className="fa-solid fa-lock fa-3x d-block text-center" />
          <h2 className="text-center my-5" >Contact Form</h2>
          <form onSubmit={ContactForm.handleSubmit}>
            <label htmlFor="">User Name</label>
            <input className="form-control mb-4 rounded-5" type="text" name='name' onChange={ContactForm.handleChange} value={ContactForm.values.name} />
            <label htmlFor="">Email</label>
            <input className="form-control mb-4 rounded-5" type="email"  name='email' onChange={ContactForm.handleChange} value={ContactForm.values.email} />
            <label htmlFor="">Message </label>
            <input className="form-control mb-4 rounded-5" type="Message "  name='Message ' onChange={ContactForm.handleChange} value={ContactForm.values.Message } />
            <button type ="submit" className="btn btn-danger w-100 mt-4 rounded-5">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
      )
    }

export default contact