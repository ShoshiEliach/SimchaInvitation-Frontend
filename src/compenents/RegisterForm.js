import React from 'react';
import { useState } from 'react';
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBIcon,
    MDBCheckbox
} from 'mdb-react-ui-kit';
import './RegisterForm.css'

function RegisterForm() {

    const [registerData, setRegisterData] = useState({
        firstname: ' ',
        lastname: ' ',
        email: ' ',
        phone: ' ',
        password: ' ',
        confirmpassword: ' ',
    });

    const [errorMessage, setErrorMessage] = useState(' ');
    const [successMessage, setSuccessMessage] = useState(' ');
    const handleChange = (e) => {
        const { name, value } = e.target;
        setRegisterData({
            ...registerData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (registerData.password !== registerData.confirmpassword) {
            setErrorMessage('Passwords do not match!');
            setSuccessMessage('');
        } else {
            setErrorMessage('');
            setSuccessMessage('Registration Successful!');
        }
    };

    return (
        <MDBContainer className='register-container'>
            <MDBCard className='register-card'>
                <MDBCardBody>
                    <p className="text-center h1 fw-bold mb-5">Sign up</p>

                    <div className="input-group">
                        <MDBIcon fas icon="user me-3" size='lg' />
                        <MDBInput label='First Name' id='form1' type='text' className='w-100' onChange={handleChange} value={registerData.firstname} required />
                    </div>

                    <div className='input-group'>
                        <MDBIcon fas icon="user-circle me-3" size='lg' />
                        <MDBInput label='Last Name' id='form1' type='text' className='w-100' onChange={handleChange} value={registerData.lastname} required />

                    </div>

                    <div className="input-group">
                        <MDBIcon fas icon="envelope me-3" size='lg' />
                        <MDBInput label='E-mail' id='form2' type='email' onChange={handleChange} value={registerData.email} required />
                    </div>

                    <div className="input-group">
                        <MDBIcon fas icon="phone-square-alt me-3" size='lg' />
                        <MDBInput label='Phone' id='form2' type='tel' onChange={handleChange} value={registerData.phone} required />
                    </div>

                    <div className="input-group">
                        <MDBIcon fas icon="lock me-3" size='lg' />
                        <MDBInput label='Password' id='form3' type='password' onChange={handleChange} value={registerData.password} required />
                    </div>

                    <div className="input-group">
                        <MDBIcon fas icon="key me-3" size='lg' />
                        <MDBInput label='Repeat your password' id='form4' type='password' onChange={handleChange} value={registerData.confirmpassword} required />
                    </div>

                    {errorMessage && <p className="error-message">{errorMessage}</p>}
                    {successMessage && <p className="success-message">{successMessage}</p>}


                    <MDBBtn className='register-btn' size='lg'>Register</MDBBtn>
                </MDBCardBody>
            </MDBCard>
        </MDBContainer>
    );
}

export default RegisterForm;
