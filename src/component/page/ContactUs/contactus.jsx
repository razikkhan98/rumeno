import React from 'react'

// Import third Party Components
import { useForm } from "react-hook-form";
import { Bounce, toast } from "react-toastify";

// Common Components
import Navbar from "../../common/navbar/mainnavbar";
import Footer from "../../common/footer/index";
import { postData } from "../../common/APIs/api";


// Import React Icons
import { AiFillInstagram } from 'react-icons/ai';
import { FaYoutube, FaSquareFacebook, FaWhatsapp } from 'react-icons/fa6';

// images
// import LoginImg from "../../../assets/img/Login/login-img.png";
import Mail from "../../assets/img/Login/mail.png";
import Call from "../../assets/img/Login/call.png";
import Location from "../../assets/img/Login/location.png";
import { NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import ReactWhatsapp from "react-whatsapp";

const ContactUs = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    // API endpoint

    const endpoint = "/user/contactus";

    const onSubmit = async (data) => {
        console.log("Data:", data);
        try {
            const response = await postData(endpoint, data);

            // store data in session for  later use
            toast.success(response.data.message, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
        } catch (error) {
            toast.error(error?.message, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
        }
    };
    return (
        <>
            {/* Navbar */}
            <Navbar />

            {/* Main Section */}
            <div className="container py-5">
                <div className="contact-us-bg-img p-lg-5 p-4">
                    <div>
                        <div className="social-icons text-color-orange mb-5 mb-lg-0">
                            <a href='https://www.facebook.com/RumenoFarmotech/'
                                rel="noreferrer"
                                target="_blank"
                                className='text-color-orange'>
                                <FaSquareFacebook className="me-lg-5 me-4 fs-3" />
                            </a>
                            <a href="https://www.instagram.com/rumenofarmotech/"
                                rel="noreferrer"
                                target="_blank"
                                className='text-color-orange'>
                                <AiFillInstagram className="me-lg-5 me-4 fs-3" />
                            </a>
                            <a href='https://www.youtube.com/@RumenoFarmotech-bg5y'
                                rel="noreferrer"
                                target="_blank"
                                className='text-color-orange'>
                                <FaYoutube className="me-lg-5 me-4 fs-3" />
                            </a>
                            {/* <a href='/#' className='text-color-orange'> */}
                            <ReactWhatsapp
                                className="bg-transparent border-0 text-color-orange"
                                number="+91 7355043892"
                                message="Hello World"
                            >
                                <FaWhatsapp className="me-lg-5 me- fs-3" />
                            </ReactWhatsapp>
                            {/* </a> */}
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
                                <div className='d-flex align-items-center font-md-size-12 mb-4'>
                                    <img src={Location} className='contact-icon' alt="Loading" />
                                    <div className='fotn-size-16 pt-1'>598 Lala mahaveer Prasad Rd, Sadar bazar,
                                        Lucknow, Uttar pradesh, 226002</div>
                                </div>
                                <div>
                                    <a href='https://www.google.com/maps/place/Rumeno+%7C+Animal+feed+supplement+manufacturer+%26+goat+farming+consultant/@26.827793,80.946912,15z/data=!4m6!3m5!1s0x399bfcf919137107:0xaafc9fdde5fc4bdc!8m2!3d26.8277929!4d80.9469123!16s%2Fg%2F11v0z5t4q1?hl=en&entry=ttu&g_ep=EgoyMDI1MDMzMS4wIKXMDSoASAFQAw%3D%3D'
                                        rel="noreferrer"
                                        target="_blank"
                                        className='border-0 rounded-3 bg-orange-color text-decoration-none py-3 px-5 text-white mt-5 mb-4 mb-lg-0'
                                    >
                                        View Us On Map
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Right Section (Forgot Password Form) */}
                        <div className="col-lg-5 col-md-6">
                            <div className="bg-white p-lg-5 p-3 border-radius-16">

                                {/* Form */}
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="mb-3 d-flex flex-column col-lg-12">
                                        <label className="form-label font-size-12">Name</label>
                                        <input type="text" className="service-form-input font-size-14" placeholder="Full Name"
                                            {...register("name", { required: "Name is required" })}
                                        />
                                        {errors.name && <p className="text-danger">{errors.name.message}</p>}
                                    </div>
                                    <div className="mb-3 d-flex flex-column col-lg-12">
                                        <label className="form-label font-size-12">E-mail</label>
                                        <input type="email" className="service-form-input font-size-14" placeholder="Your E-mail"
                                            {...register("email", { required: "Email is required" })}
                                        />
                                        {errors.email && <p className="text-danger">{errors.email.message}</p>}
                                    </div>

                                    <div className="mb-4 d-flex flex-column col-lg-12">
                                        <label className="form-label font-size-12">Message</label>
                                        <input type="text" className="service-form-input font-size-14" placeholder="Enter Message"
                                            {...register("message", { required: "Message is required" })}
                                        />
                                        {errors.message && <p className="text-danger">{errors.message.message}</p>}
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
            {/* Footer */}
            <Footer />
        </>
    )
}

export default ContactUs