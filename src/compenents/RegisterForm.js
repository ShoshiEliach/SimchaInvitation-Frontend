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
import './RegisterForm.css';
import { useFormik } from 'formik';

const validate = (values) => {
    const errors = {};
    if (!values.firstName) {
        errors.firstName = "First Name cannot be empty";
    } else if (values.firstName.length > 15) {
        errors.firstName = "Must be 15 characters or less";
    }

    if (!values.lastName) {
        errors.lastName = "Last Name cannot be empty";
    } else if (values.lastName.length > 20) {
        errors.lastName = "Must be 20 characters or less";
    }

    if (!values.email) {
        errors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = "Invalid email address";
    }

    if (!values.phone) {
        errors.phone = 'Phone number is required';
    } else if (!/^\+?[0-9]{7,15}$/.test(values.phone)) {
        errors.phone = 'Invalid phone number';
    }

    if (!values.password) {
        errors.password = "Password is required";
    } else if (values.password.length < 8) {
        errors.password = "Password must not be less than 8 characters";
    }

    return errors;
};

function RegisterForm() {
    const formik = useFormik({
        initialValues: {
            firstName: '', // שונה
            lastName: '',  // שונה
            email: '',
            phone: '',
            password: '',
        },
        validate,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    const handleSubmit = (e) => {
        e.preventDefault(); // מניעת שליחה אוטומטית של הטופס

        const form = e.target;

        Array.from(form.elements).forEach((input) => {
            if (input.name && formik.errors[input.name]) {
                input.setCustomValidity(formik.errors[input.name]);
            } else {
                input.setCustomValidity(''); // מנקה שגיאות אם הכל תקין
            }
        });

        if (form.checkValidity()) {
            formik.handleSubmit();
        } else {
            form.reportValidity(); // מציג את הודעות ה-HTML5
        }
    };
    return (
        <MDBContainer className='register-container'>
            <MDBCard className='register-card'>
                <MDBCardBody>
                    <p className="text-center h1 fw-bold mb-5">Sign up</p>
                    <form onSubmit={handleSubmit} noValidate>
                        <div className="input-group">
                            <MDBIcon fas icon="user me-3" size='lg' />
                            <MDBInput label='First Name' name='firstName' id='form1' type='text' className='w-100' onChange={formik.handleChange} value={formik.values.firstName} required />
                        </div>

                        <div className='input-group'>
                            <MDBIcon fas icon="user-circle me-3" size='lg' />
                            <MDBInput label='Last Name' name='lastName' id='form1' type='text' className='w-100' onChange={formik.handleChange} value={formik.values.lastName} required />
                        </div>

                        <div className="input-group">
                            <MDBIcon fas icon="envelope me-3" size='lg' />
                            <MDBInput label='E-mail' name='email' id='form2' type='email' onChange={formik.handleChange} value={formik.values.email} required />
                        </div>

                        <div className="input-group">
                            <MDBIcon fas icon="phone-square-alt me-3" size='lg' />
                            <MDBInput label='Phone' name='phone' id='form2' type='tel' onChange={formik.handleChange} value={formik.values.phone} required />
                        </div>

                        <div className="input-group">
                            <MDBIcon fas icon="lock me-3" size='lg' />
                            <MDBInput label='Password' name='password' id='form3' type='password' onChange={formik.handleChange} value={formik.values.password} required />
                        </div>

                        <MDBBtn className='register-btn' size='lg' type='submit'>Register</MDBBtn>
                    </form>
                </MDBCardBody>
            </MDBCard>
        </MDBContainer>
    );
}

export default RegisterForm;
