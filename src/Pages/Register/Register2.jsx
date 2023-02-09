import React, { useEffect } from 'react'
import "./Register.css"
import { Container, Row, Col } from "react-bootstrap"
import { json, Link } from 'react-router-dom';
import User3 from "./../../Images/user3.jpg"
import { AiFillEye } from "react-icons/ai"
import { AiFillEyeInvisible } from "react-icons/ai"
import { useState } from 'react';
import axios from 'axios';
import { FaUserAlt } from "react-icons/fa"
import { GrMail } from "react-icons/gr"
import LoadingAnimation from '../../Component/LoadingAnimation/LoadingAnimation';
const Register2 = () => {
    const delay = (delayInms) => {
        return new Promise(resolve => setTimeout(resolve, delayInms));
    }
    const [passwordVisiblity, setPasswordVisiblity] = useState("password");
    const [confirmPasswordVisiblity, setConfirmPasswordVisiblity] = useState("password");
    const [registerData, setRegisterData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});
    const [values, setValues] = useState({
        user_Id: '',
        sponsor_Id: '',
        name: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
    });

    const ChangeVisiblity = (str) => {
        if (str === "password") {
            if (passwordVisiblity === "password") {
                setPasswordVisiblity("text")
            } else {
                setPasswordVisiblity("password")
            }
        } else {
            if (confirmPasswordVisiblity === "password") {
                setConfirmPasswordVisiblity("text")
            } else {
                setConfirmPasswordVisiblity("password")
            }
        }
    }
    const GetData = async () => {
        setLoading(true);
        const rawResponse = await fetch('http://192.168.1.12:3000/register', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        });
        const content = await rawResponse.json();
        setRegisterData(content);
        console.log(content);
        localStorage.setItem('AuthToken', content.accessToken);
        console.log(content.message);
        setLoading(false)
    }
    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        });
    };

    const validateForm = () => {
        let newErrors = {};
        if (!values.phone) {
            newErrors.phone = 'Mobile number is required';
        } else if (values.phone.length < 10) {
            newErrors.phone = 'Enter valid mobile number';
        }
        if (!values.user_Id) {
            newErrors.user_Id = 'User Id is required';
        }
        if (!values.sponsor_Id) {
            newErrors.sponsor_Id = 'Sponsor Id is required';
        }
        if (!values.name) {
            newErrors.name = 'Name is required';
        }
        if (!values.email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(values.email)) {
            newErrors.email = 'Email is not valid';
        }
        if (!values.password) {
            newErrors.password = 'Password is required';
        } else if (values.password.length < 6) {
            newErrors.password = 'Password should be atleast 6 characters';
        }
        if (values.password !== values.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (event) => {

        event.preventDefault();
        if (validateForm()) {
            console.log('Form is valid. Submitting...');
            console.log(values)
            GetData();
            console.log("myToken", localStorage.getItem('AuthToken'));
        }
    };
    return (
        <React.Fragment>
            <Row>
                {loading === true ? <LoadingAnimation /> : null}
                <Col md="6" className="loginLeft">
                    <div className="loginContent">
                        <h5>Nice to see you</h5>
                        <h1>Welcome</h1>
                        <hr></hr>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem voluptatum officiis quo quasi repudiandae aut fugit necessitatibus, est saepe quas.</p>
                    </div>
                </Col>
                <Col md="6" className="loginCol">
                    <div className="loginFormDiv">
                        {/* <img src={User3}></img> */}
                        <h1>Register Account</h1>
                        {/* <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem accusamus ea magni iste reprehenderit nobis!</p> */}
                        <form onSubmit={handleSubmit} className="registerForm">
                            <div >
                                <label htmlFor="sponsor_Id">Sponsor id:</label>
                                <input
                                    type="text"
                                    name="sponsor_Id"
                                    placeholder='Sponsor Id'
                                    value={values.sponsor_Id}
                                    onChange={handleChange}
                                />
                                {errors.sponsor_Id && <div className="formError">{errors.sponsor_Id}</div>}
                            </div>
                            <div>
                                <label htmlFor="user_Id">User id:</label>
                                <input
                                    type="text"
                                    name="user_Id"
                                    placeholder='User Id'
                                    value={values.user_Id}
                                    onChange={handleChange}
                                />
                                {errors.user_Id && <div className="formError">{errors.user_Id}</div>}
                            </div>
                            <div>
                                <label htmlFor="name">Name:</label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder='Name'
                                    value={values.name}
                                    onChange={handleChange}
                                />
                                {errors.name && <div className="formError">{errors.name}</div>}
                            </div>
                            <div>
                                <label htmlFor="email">Email:</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder='Email'
                                    value={values.email}
                                    onChange={handleChange}
                                />
                                {errors.email && <div className="formError">{errors.email}</div>}
                            </div>
                            <div>
                                <label htmlFor="phone">Mobile:</label>
                                <input
                                    type="number"
                                    name="phone"
                                    placeholder='Mobile Number'
                                    value={values.phone}
                                    onChange={handleChange}
                                />
                                {errors.phone && <div className="formError">{errors.phone}</div>}
                            </div>
                            <div className='passwordDiv'>
                                <label htmlFor="password">Password:</label>
                                <input
                                    type={passwordVisiblity}
                                    name="password"
                                    placeholder="Password"
                                    value={values.password}
                                    onChange={handleChange}
                                />
                                <i style={{ top: "36px" }} onClick={() => ChangeVisiblity("password")} > {passwordVisiblity === "password" ? <AiFillEye /> : <AiFillEyeInvisible />} </i>
                                {errors.password && (
                                    <div className="formError">{errors.password}</div>
                                )}
                            </div>
                            <div className='passwordDiv'>
                                <label htmlFor="confirmPassword">Confirm Password:</label>
                                <input
                                    type={confirmPasswordVisiblity}
                                    name="confirmPassword"
                                    placeholder='Confirm Password'
                                    value={values.confirmPassword}
                                    onChange={handleChange}
                                />
                                <i style={{ top: "36px" }} onClick={() => ChangeVisiblity("confirmPassword")} > {confirmPasswordVisiblity === "password" ? <AiFillEye /> : <AiFillEyeInvisible />} </i>
                                {errors.confirmPassword && (
                                    <div className="formError">{errors.confirmPassword}</div>)}
                            </div>
                            <div>
                                <input className="btnLogin" type="submit" value="Sign In" onClick={handleSubmit} />
                            </div>
                        </form>
                        <div className="loginLinkDiv">
                            <p>Already have account?</p>
                            <Link to="/login" className="loginLink">Login</Link>
                        </div>
                    </div>
                </Col>
            </Row>
        </React.Fragment >
    )
}

export default Register2