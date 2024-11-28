import React from 'react';
import {
  MDBContainer,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBIcon
}

  from 'mdb-react-ui-kit';
import './LoginForm.css'
import { Link } from 'react-router-dom'

function LoginForm() {
  return (
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50 custom-container">
      <div className='wraper'>
        <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email' className='input-custom' />
        <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password' className='input-custom' />
      </div>

      <div className="forgot-remember d-flex justify-content-between mx-3 mb-4">
        <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' className='remember' />
        <Link to="/forgotPassword" className='link-forgot'>Forgot password?</Link>
      </div>
      <div className='signIn'>
        <button className="button-custom">Sign in</button>

      </div>

      <div className="text-center">
        <p>Not a member?<Link to='/Register' className='link-register'>Register</Link> </p>




        <div className='google'>
          <button
            color="primary"
            className="button-custom"
          >
            <MDBIcon fab icon="google" className="me-2" />
            Sign up with Google
          </button>


        </div>
      </div>

    </MDBContainer >
  );
}

export default LoginForm;