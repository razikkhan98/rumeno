import React from "react";
import { useForm } from "react-hook-form";

// Common Components
import Navbar from "../../navbar/mainnavbar";
import Footer from "../../footer/index";
import { NavLink } from "react-router-dom";

const Login = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        reset();
        console.log("Login Data:", data);
    };

    return (
        <>
            <Navbar />
            <div className="container py-5">
                <div className="login-bg">
                    <div className="row g-0">
                        {/* Left Section */}
                        <div className="col-md-6 login-img text-white p-5 d-flex flex-column justify-content-end align-items-baseline">
                            <p className="font-size-32 text-uppercase">Welcome to Rumeno</p>
                            <p className="font-size-18">
                                Rumeno Farmotech is a nutrition and feed supplement technologies company offering a wide range of products,
                                including Probiotics, milk replacers, Macro & Micro Minerals, Multi Vitamins, Enzymes, Amino Acids, feed additives,
                                premixes, concentrates, and specialty products for livestock, poultry, and aquaculture.
                            </p>
                        </div>

                        {/* Right Section (Login Form) */}
                        <div className="col-md-6 p-5">
                            <div className="form container px-5">
                                <div className="text-center">
                                    <span className="text-uppercase font-size-24">Login</span>
                                    <p>Login to your account to continue</p>
                                    <p className="text-color-orange">Don’t have an account? Create an account</p>
                                </div>

                                {/* Form */}
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    {/* Mobile No. */}
                                    <div className="py-4">
                                        <label htmlFor="mobile" className="form-label text-start mb-2 font-size-12 text-gray-color">
                                            Mobile No.
                                        </label>
                                        <input
                                            type="text"
                                            id="mobile"
                                            {...register("mobile", {
                                                required: "Mobile number is required",
                                                pattern: {
                                                    value: /^\d{10}$/,
                                                    message: "Mobile number must be 10 digits",
                                                },
                                            })}
                                            className="form-control p-3 border-0 rounded-3"
                                            placeholder="Enter your mobile no"
                                        />
                                        <p className="text-danger">{errors.mobile?.message}</p>
                                    </div>

                                    {/* Password */}
                                    <div>
                                        <label htmlFor="password" className="form-label text-start mb-2 font-size-12 text-gray-color">
                                            Enter Password
                                        </label>
                                        <input
                                            type="password"
                                            id="password"
                                            {...register("password", { required: "Password is required" })}
                                            className="form-control p-3 border-0 rounded-3"
                                            placeholder="Enter your password"
                                        />
                                        <p className="text-danger">{errors.password?.message}</p>
                                    </div>

                                    {/* Forgot Password */}
                                   <NavLink to={"/forgot"} className="text-decoration-none">
                                   <p className="text-end font-size-12 text-color-orange mt-2">Forgot Password?</p>
                                   </NavLink>

                                    {/* Submit Button */}
                                    <button type="submit" className="background-blue-pink-orange btn text-white w-100 mt-4 py-3">
                                        Login
                                    </button>
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

export default Login;
