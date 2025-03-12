import React from "react";
import { useForm } from "react-hook-form";

// Common Components
import Navbar from "../../navbar/mainnavbar";
import Footer from "../../footer/index";

// Images
import Google from "../../../assets/img/Login/devicon_google.png";
import { NavLink } from "react-router-dom";

const Register = () => {
    const {
        register,
        handleSubmit,
        reset,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log("Register Data:", data);
        reset();
    };

    return (
        <>
            <Navbar />
            <div className="container py-5">
                <div className="login-bg">
                    <div className="row rounded-3">
                        {/* Left Section */}
                        <div className="col-lg-6 col-md-6 login-img register-img text-white p-5 d-flex flex-column justify-content-end align-items-baseline">
                            <p className="font-size-32 text-uppercase">Welcome to Rumeno</p>
                            <p className="font-size-18">
                                Rumeno Farmotech is a nutrition and feed supplement technologies company offering a wide range of products,
                                including Probiotics, milk replacers, Macro & Micro Minerals, Multi Vitamins, Enzymes, Amino Acids, feed additives,
                                premixes, concentrates, and specialty products for livestock, poultry, and aquaculture.
                            </p>
                        </div>

                        {/* Right Section (Register Form) */}
                        <div className="col-lg-6 col-md-6 py-4 px-5">
                            <div className="form container px-5">
                                <div className="text-center">
                                    <span className="text-uppercase font-size-24">Create an account</span>
                                    <p>Fill these simple details and create an account</p>
                                    <NavLink to={"/login"} className="text-decoration-none">
                                    <p className="text-color-orange">Already have an account? Login</p>
                                    </NavLink>
                                </div>

                                {/* Form */}
                                <form className="row" onSubmit={handleSubmit(onSubmit)}>
                                    {/* Name */}
                                    <div className="col-lg-12">
                                        <label className="form-label mb-2 font-size-12 text-gray-color">Name</label>
                                        <input
                                            type="text"
                                            {...register("name", { required: "Name is required" })}
                                            className="form-control p-3 border-0 rounded-3"
                                            placeholder="Enter your full name"
                                        />
                                        <p className="text-danger">{errors.name?.message}</p>
                                    </div>

                                    {/* Mobile No. */}
                                    <div className="col-lg-6">
                                        <label className="form-label mb-2 font-size-12 text-gray-color">Mobile No.</label>
                                        <input
                                            type="text"
                                            {...register("mobile", {
                                                required: "Mobile number is required",
                                                pattern: {
                                                    value: /^\d{10}$/,
                                                    message: "Mobile number must be 10 digits",
                                                },
                                            })}
                                            className="form-control p-3 border-0 rounded-3"
                                            placeholder="Enter mobile no"
                                        />
                                        <p className="text-danger">{errors.mobile?.message}</p>
                                    </div>

                                    {/* Email */}
                                    <div className="col-lg-6">
                                        <label className="form-label mb-2 font-size-12 text-gray-color">E-mail</label>
                                        <input
                                            type="email"
                                            {...register("email", {
                                                required: "Email is required",
                                                pattern: {
                                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                                    message: "Invalid email format",
                                                },
                                            })}
                                            className="form-control p-3 border-0 rounded-3"
                                            placeholder="Enter email ID"
                                        />
                                        <p className="text-danger">{errors.email?.message}</p>
                                    </div>

                                    {/* Password */}
                                    <div className="col-lg-12">
                                        <label className="form-label mb-2 font-size-12 text-gray-color">Password</label>
                                        <input
                                            type="password"
                                            {...register("password", {
                                                required: "Password is required",
                                                minLength: {
                                                    value: 6,
                                                    message: "Password must be at least 6 characters",
                                                },
                                            })}
                                            className="form-control p-3 border-0 rounded-3"
                                            placeholder="Enter a new password"
                                        />
                                        <p className="text-danger">{errors.password?.message}</p>
                                    </div>

                                    {/* Confirm Password */}
                                    <div className="col-lg-12">
                                        <label className="form-label mb-2 font-size-12 text-gray-color">Confirm Password</label>
                                        <input
                                            type="password"
                                            {...register("confirmPassword", {
                                                required: "Confirm password is required",
                                                validate: (value) => value === watch("password") || "Passwords do not match",
                                            })}
                                            className="form-control p-3 border-0 rounded-3"
                                            placeholder="Re-enter password"
                                        />
                                        <p className="text-danger">{errors.confirmPassword?.message}</p>
                                    </div>

                                    {/* Submit & Google Login Buttons */}
                                    <div className="col-lg-12 d-flex flex-column">
                                        <button type="submit" className="background-blue-pink-orange btn text-white mt-2 py-3">
                                            Create Account
                                        </button>
                                        <button className="btn py-3 text-color-orange border-orange mt-3">
                                            <img src={Google} alt="Google" className="me-2" /> Sign in with Google
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Register;
