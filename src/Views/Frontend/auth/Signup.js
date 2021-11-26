import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { UseAuth } from "../../../Hooks/UseAuth";

export default function Signup() {
    console.log(UseAuth());
    const [Errors, setErrors] = useState({ error: false, errors: {} })
    let { set_user, register_user } = UseAuth();
    // const handleLogin = () => {
    //     login_with_google();
    // }
    const user_register = (e) => {
        e.preventDefault();
        console.log(e.target);
        let form_data = new FormData(e.target);
        console.log(e.target.password.value);

        let errors = {};
        (e.target.password.value !== e.target.confirm_password.value) ? errors.password = true : (delete errors.password);
        (!e.target.first_name.value.length > 0) ? errors.first_name = true : (delete errors.first_name);
        (!e.target.last_name.value.length > 0) ? errors.last_name = true : (delete errors.last_name);
        (!e.target.email.value.length > 0) ? errors.email = true : (delete errors.email);
        (!e.target.contact_number.value.length > 0) ? errors.contact_number = true : (delete errors.contact_number);
        (!e.target.zip_code.value.length > 0) ? errors.zip_code = true : (delete errors.zip_code);
        (!e.target.city.value.length > 0) ? errors.city = true : (delete errors.city);
        (!e.target.country.value.length > 0) ? errors.country = true : (delete errors.country);

        console.log(errors);
        if (!Object.keys(errors).length) {
            axios.post(`${process.env.REACT_APP_API_URL}/user-register`, form_data)
                .then(res => {
                    console.log(res.data);
                    localStorage.setItem('auth_user',JSON.stringify(res.data))
                    set_user(res.data);
                    register_user(e.target.email.value, e.target.password.value);
                })
                .catch(err => {
                    console.log(err.response);
                })
        } else {
            setErrors({ error: true, errors: errors })
            window.toaster('error', 'check errors')
        }
    }

    return (
        <div className="page-wrapper">
            <div className="auth-bg">
                <div className="authentication-box">
                    <div className="text-center">
                        {/* <img src="/tlogo.png" style={{ height: 120 }} alt="site-logo" /> */}
                        <Link to="/"><h1 className="text-danger">CamHaat</h1></Link>
                    </div>
                    <h4 className="text-center">SIGNUP</h4>
                    {/* <h6 className="text-center">Enter your Username and Password For Login</h6> */}
                    <div className="card mt-4 p-4 mb-0">
                        <form className="theme-form" onSubmit={(e) => { user_register(e) }} name="signin_form" id="signin_form">
                            <div className="mb-3">
                                <label className="col-form-label pt-0">First Name</label>
                                <input type="text" name="first_name" className="form-control" />
                                {
                                    Errors.errors.first_name &&
                                    <span className="d-block text-danger"> first_name field required</span>
                                }
                            </div>
                            <div className="mb-3">
                                <label className="col-form-label pt-0">Last Name</label>
                                <input type="text" name="last_name" className="form-control" />
                                {
                                    Errors.errors.last_name &&
                                    <span className="d-block text-danger"> last_name field required</span>
                                }
                            </div>
                            <div className="mb-3">
                                <label className="col-form-label pt-0">Email</label>
                                <input type="email" name="email" className="form-control" />
                                {
                                    Errors.errors.email &&
                                    <span className="d-block text-danger"> email field required</span>
                                }
                            </div>
                            <div className="mb-3">
                                <label className="col-form-label pt-0">Contact Number</label>
                                <input type="text" name="contact_number" className="form-control" />
                                {
                                    Errors.errors.contact_number &&
                                    <span className="d-block text-danger"> contact_number field required</span>
                                }
                            </div>
                            <div className="mb-3">
                                <label className="col-form-label pt-0">Zip Code</label>
                                <input type="text" name="zip_code" className="form-control" />
                                {
                                    Errors.errors.zip_code &&
                                    <span className="d-block text-danger"> zip_code field required</span>
                                }
                            </div>
                            <div className="mb-3">
                                <label className="col-form-label pt-0">City</label>
                                <input type="text" name="city" className="form-control" />
                                {
                                    Errors.errors.city &&
                                    <span className="d-block text-danger"> city field required</span>
                                }
                            </div>
                            <div className="mb-3">
                                <label className="col-form-label pt-0">Country</label>
                                <input type="text" name="country" className="form-control" />
                                {
                                    Errors.errors.country &&
                                    <span className="d-block text-danger"> country field required</span>
                                }
                            </div>
                            <div className="mb-3">
                                <label className="col-form-label">Password</label>
                                <input type="password" name="password" className="form-control" placeholder="Password"></input>
                                {
                                    Errors.errors.password &&
                                    <span className="d-block text-danger"> password not matched</span>
                                }
                            </div>
                            <div className="mb-3">
                                <label className="col-form-label">Confirm Password</label>
                                <input type="password" name="confirm_password" className="form-control" placeholder="Password"></input>

                            </div>
                            <div className="row g-2">
                                <div className="col-lg-3 col-md-4">
                                    <button type="submit" className="btn btn-secondary">Sign Up</button>
                                </div>
                                <div className="col-md-8">
                                    <div className="text-start mt-2 m-l-20">
                                        Already have an account?&nbsp;&nbsp;
                                        <Link to="/signin" className="btn-link text-capitalize">SignIn</Link>
                                    </div>
                                </div>

                            </div>
                            {/* <div className="row mt-3">
                                <div className="col-md-4">
                                    <button type="submit" className="btn btn-primary">LOGIN</button>
                                    <button type="button" onClick={() => handleLogin()}>login with google</button>
                                </div>
                            </div> */}
                        </form>
                    </div>
                </div>
            </div>
            <div className="auth-bg-effect">
                <div className="first-effect"></div>
                <div className="second-effect"></div>
                <div className="third-effect"></div>
                <div className="fourth-effect"></div>
            </div>

        </div>
    )
}

