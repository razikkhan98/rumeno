import React from "react";

// Import third Party Components
import { useForm } from "react-hook-form";
import { Bounce, toast } from "react-toastify";

// Common Components
import Navbar from "../../common/navbar/mainnavbar";
import Footer from "../../common/footer/index";
import { postData } from "../../common/APIs/api";

// Import React Icons
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin, FaYoutube, FaSquareFacebook } from "react-icons/fa6";

// images
import Mail from "../../assets/img/Login/mail.png";
import Call from "../../assets/img/Login/call.png";
import Location from "../../assets/img/Login/location.png";

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // API endpoint

  const endpoint = "/user/contactus";

  const onSubmit = async (data) => {
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
              <FaSquareFacebook className="me-lg-5 me-4 fs-3" />
              <AiFillInstagram className="me-lg-5 me-4 fs-3" />
              <FaYoutube className="me-lg-5 me-4 fs-3" />
              <FaLinkedin className="me-lg-5 me- fs-3" />
            </div>
          </div>
          <div className="row g-2">
            {/* Left Section */}
            <div className="col-lg-7 col-md-6 text-white d-flex flex-column justify-content-end">
              <div className="me-lg-5">
                <div className="d-flex align-items-center font-md-size-12">
                  <img src={Call} className="contact-icon" alt="Loading" />
                  <p className="fotn-size-16 pt-1">+91-7355043892</p>
                </div>
                <div className="d-flex align-items-center font-md-size-12">
                  <img src={Mail} className="contact-icon" alt="Loading" />
                  <p className="fotn-size-16 pt-1">
                    rumeno.farmotech@gmail.com
                  </p>
                </div>
                <div className="d-flex align-items-center font-md-size-12">
                  <img src={Location} className="contact-icon" alt="Loading" />
                  <div className="fotn-size-16 pt-1">
                    598 Lala mahaveer Prasad Rd, Sadar bazar, Lucknow, Uttar
                    pradesh, 226002
                  </div>
                </div>
                <button className="border-0 rounded-3 bg-orange-color py-3 px-5 text-white mt-4 mb-4 mb-lg-0">
                  View Us On Map
                </button>
              </div>
            </div>

            {/* Right Section (Forgot Password Form) */}
            <div className="col-lg-5 col-md-6">
              <div className="bg-white p-lg-5 p-3 border-radius-16">
                {/* Form */}
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="mb-3 d-flex flex-column col-lg-12">
                    <label className="form-label font-size-12">Name</label>
                    <input
                      type="text"
                      className="service-form-input font-size-14"
                      placeholder="Full Name"
                      {...register("name", { required: "Name is required" })}
                    />
                    {errors.name && (
                      <p className="text-danger">{errors.name.message}</p>
                    )}
                  </div>
                  <div className="mb-3 d-flex flex-column col-lg-12">
                    <label className="form-label font-size-12">E-mail</label>
                    <input
                      type="email"
                      className="service-form-input font-size-14"
                      placeholder="Your E-mail"
                      {...register("email", { required: "Email is required" })}
                    />
                    {errors.email && (
                      <p className="text-danger">{errors.email.message}</p>
                    )}
                  </div>

                  <div className="mb-4 d-flex flex-column col-lg-12">
                    <label className="form-label font-size-12">Message</label>
                    <input
                      type="text"
                      className="service-form-input font-size-14"
                      placeholder="Enter Message"
                      {...register("message", {
                        required: "Message is required",
                      })}
                    />
                    {errors.message && (
                      <p className="text-danger">{errors.message.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="bg-gradient-color border-0 btn text-white w-100 mt-5 py-3"
                  >
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
  );
};

export default ContactUs;
