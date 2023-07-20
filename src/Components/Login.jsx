import React from 'react'

const Login = () => {
  return (
    <form className='login'>
      <div>
        <label htmlFor="email">Email</label>
        <input type="text" name='email' id='email'/>
      </div>
      <div>
        <label htmlFor="Pasword" >Password</label>
        <input type="text" name='Password' id='Password'/>
      </div>
      <button type='sumbit'>Login</button>

    </form>
  )
}

export default Login