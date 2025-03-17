import React from 'react'

import { useForm } from "react-hook-form";

// Common Components
import Navbar from "../../common/navbar/mainnavbar";
import Footer from "../../common/footer/index";
import { AiFillInstagram } from 'react-icons/ai';
import { FaLinkedin, FaYoutube, FaSquareFacebook } from 'react-icons/fa6';

// images
// import LoginImg from "../../../assets/img/Login/login-img.png";
import Mail from "../../assets/img/Login/mail.png";
import Call from "../../assets/img/Login/call.png";
import Location from "../../assets/img/Login/location.png";

const ContactUs = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log("Forgot Password Data:", data);
    };
    return (
        <>
            <Navbar />
            <div className="container py-5">
                <div className="contact-us-bg-img p-lg-5 p-4">
                    <div>
                        <div className="social-icons text-color-orange mb-5 mb-lg-0">
                            <FaSquareFacebook className="me-lg-5 me-4 fs-3" />
                            <AiFillInstagram className="me-lg-5 me-4 fs-3" />
                            <FaYoutube className="me-lg-5 me-4 fs-3" />
                            <FaLinkedin className="me-lg-5 me- fs-3" />
                        </div>
                    </div>
                    <div className="row g-2">
                        {/* Left Section */}
                        <div className="col-lg-7 col-md-6 text-white d-flex flex-column justify-content-end">
                            <div className='me-lg-5'>
                                <div className='d-flex align-items-center font-md-size-12'>
                                    <img src={Call} className='contact-icon' alt="Loading" />
                                    <p className='fotn-size-16 pt-1'>+91-7355043892</p>
                                </div>
                                <div className='d-flex align-items-center font-md-size-12'>
                                    <img src={Mail} className='contact-icon' alt="Loading" />
                                    <p className='fotn-size-16 pt-1'>rumeno.farmotech@gmail.com</p>
                                </div>
                                <div className='d-flex align-items-center font-md-size-12'>
                                    <img src={Location} className='contact-icon' alt="Loading" />
                                    <div className='fotn-size-16 pt-1'>598 Lala mahaveer Prasad Rd, Sadar bazar,
                                        Lucknow, Uttar pradesh, 226002</div>
                                </div>
                                <button className='border-0 rounded-3 bg-orange-color py-3 px-5 text-white mt-4 mb-4 mb-lg-0'>View Us On Map</button>
                            </div>
                        </div>

                        {/* Right Section (Forgot Password Form) */}
                        <div className="col-lg-5 col-md-6">
                            <div className="bg-white p-lg-5 p-3 border-radius-16">

                                {/* Form */}
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="mb-3 d-flex flex-column col-lg-12">
                                        <label className="form-label font-size-12">Name</label>
                                        <input type="text" className="service-form-input font-size-14" placeholder="Full name"
                                            {...register("fullName", { required: "Full name is required" })}
                                        />
                                        {errors.fullName && <p className="text-danger">{errors.fullName.message}</p>}
                                    </div>
                                    <div className="mb-3 d-flex flex-column col-lg-12">
                                        <label className="form-label font-size-12">E-mail</label>
                                        <input type="email" className="service-form-input font-size-14" placeholder="Your E-mail"
                                            {...register("email", {required: "Email is required" })}
                                        />
                                        {errors.email && <p className="text-danger">{errors.email.message}</p>}
                                    </div>

                                    <div className="mb-4 d-flex flex-column col-lg-12">
                                        <label className="form-label font-size-12">Address</label>
                                        <input type="text" className="service-form-input font-size-14" placeholder="Your Address"
                                            {...register("address" , {required: "Address is required" })}
                                        />
                                        {errors.address && <p className="text-danger">{errors.address.message}</p>}
                                    </div>


                                    {/* Submit Button */}
                                    <button type="submit" className="bg-gradient-color border-0 btn text-white w-100 mt-5 py-3">
                                        Send
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ContactUs