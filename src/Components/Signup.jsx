import { useFormik } from 'formik';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Signup = () => {
  const navigate = useNavigate();

  const [selImage, setSelImage] = useState(' ');

   // initializing formik
    const SignupForm = useFormik({
    initialValues: {
      name:' ',
      email: ' ',
      password: ' '
    },

    onSubmit: async(values) => {
      values.avatar = selImage;
      console.log(values);

      //sending request to backend
      const res = await fetch('http://localhost:5000/user/add',{
        method:'POST',
        body:JSON.stringify(values),
        headers:{
          'Content-Type':'application/json'
        }
      })
        console.log(res.status);
        if(res.status==200){
          Swal.fire({
            icon:'success',
            title:'Singup success',
            text:'Now login to Continue'
          });
          navigate('/login');
        }else{
          Swal.fire({
          icon :'error',
          title :'Oops!!',
          text :'Some Error Occured'
        });
        }
      
    }
  });
  const UploadFile = async(e)=>{
    let file = e.target.files[0];
    setSelImage(file.name);
    const fd = new FormData();
    fd.append('myfile',file);
    const res = await fetch('http://localhost:5000/util/uploadfile',{
      method: 'Post',
      body:fd
    });
  }
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card w-25 shadow-lg rounded-5">
        <div className="card-body p-5">
          <i className="fa-solid fa-lock fa-3x d-block text-center" />
          <h2 className="text-center my-5">Singup Form</h2>
          <form onSubmit={SignupForm.handleSubmit}>
            <label htmlFor="">Name</label>
            <input className="form-control mb-4 rounded-5" type="text" name='name' onChange={SignupForm.handleChange} value={SignupForm.values.name} />
            <label htmlFor="">Email</label>
            <input className="form-control mb-4 rounded-5" type="email"  name='email' onChange={SignupForm.handleChange} value={SignupForm.values.email} />
            <label htmlFor="">Password</label>
            <input className="form-control mb-4 rounded-5" type="password"  name='password' onChange={SignupForm.handleChange} value={SignupForm.values.password} />
            <label htmlFor=''>Upload File</label>
            <input type='file' onChange={UploadFile}/>
            <button type ="submit" className="btn btn-danger w-100 mt-4 rounded-5">
              Signup
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup