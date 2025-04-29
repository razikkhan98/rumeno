import React from "react";

// Import Third Party Components
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import { Bounce, toast } from "react-toastify";

// Common Components
import Navbar from "../../navbar/mainnavbar";
import Footer from "../../footer/index";
import { postData } from "../../APIs/api";

// Images
import Google from "../../../assets/img/Login/devicon_google.png";
import RegisterImg from "../../../assets/img/Login/Register-img.png";
import { FaArrowCircleLeft } from "react-icons/fa";

const Register = () => {
  const {
    register,
    handleSubmit,

    watch,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  // API endpoint
  const endpoint = "/user/register";

  // Handle form submission
  const onSubmit = async (data) => {
    try {
      const response = await postData(endpoint, data);
      toast.success(response?.data?.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      setTimeout(() => navigate("/login"), 1000);
    } catch (error) {
      toast.error(error?.data?.message || "Failed to create account!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
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
      {/* <Navbar /> */}

      {/* Main Section */}
      <div className="min-vh-100 d-flex align-items-center justify-content-center">
        <div className="container py-1">
          <div className="row g-0 my-0 login-bg">
            {/* Left Section */}
            <div className="col-lg-6 col-md-12 text-white position-relative">
              {/* Go Back to Home on this button */}
              <div className="position-absolute top-0 left-0 m-3">
                <NavLink to={"/"} className={"text-white text-decoration-none"}>
                  <FaArrowCircleLeft className=" fs-3 text-white" />
                  <p>Home</p>
                </NavLink>
              </div>
              <div className="login-img">
              <img src={RegisterImg}  alt="Loading" />
              </div>
              <div className="overlay-text position-absolute bottom-0 start-0 p-5">
                <p className="font-size-32 font-md-size-20 text-uppercase">
                  Welcome to Rumeno
                </p>
                <p className="font-size-18 font-md-size-12">
                  Rumeno Farmotech is a nutrition and feed supplement
                  technologies company offering a wide range of products,
                  including Probiotics, milk replacers, Macro & Micro Minerals,
                  Multi Vitamins, Enzymes, Amino Acids, feed additives,
                  premixes, concentrates, and specialty products for livestock,
                  poultry, and aquaculture.
                </p>
              </div>
            </div>

            {/* Right Section (Register Form) */}
            <div className="col-lg-6 col-md-12 py-4 px-lg-5">
              <div className="form container px-lg-5 px-3">
                <div className="text-center">
                  <span className="text-uppercase font-size-24 font-md-size-20">
                    Create an account
                  </span>
                  <p className="font-size-16 font-md-size-12">
                    Fill these simple details and create an account
                  </p>
                  <NavLink to={"/login"} className="text-decoration-none">
                    <p className="text-color-orange font-size-16 font-md-size-12">
                      Already have an account? Login
                    </p>
                  </NavLink>
                </div>

                {/* Form */}
                <form className="row" onSubmit={handleSubmit(onSubmit)}>
                  {/* Name */}
                  <div className="col-lg-12">
                    <label className="form-label mb-2 font-size-12 text-gray-color">
                      Name
                    </label>
                    <input
                      type="text"
                      {...register("firstName", {
                        required: "Name is required",
                      })}
                      className="form-control p-3 border-0 rounded-3"
                      placeholder="Enter your full name"
                    />
                    <p className="text-danger">{errors.firstName?.message}</p>
                  </div>

                  {/* Mobile No. */}
                  <div className="col-lg-6 col-md-12">
                    <label className="form-label mb-2 font-size-12 text-gray-color">
                      Mobile No.
                    </label>
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
                  <div className="col-lg-6 col-md-12">
                    <label className="form-label mb-2 font-size-12 text-gray-color">
                      E-mail
                    </label>
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
                    <label className="form-label mb-2 font-size-12 text-gray-color">
                      Password
                    </label>
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
                    <label className="form-label mb-2 font-size-12 text-gray-color">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      {...register("confirmPassword", {
                        required: "Confirm password is required",
                        validate: (value) =>
                          value === watch("password") ||
                          "Passwords do not match",
                      })}
                      className="form-control p-3 border-0 rounded-3"
                      placeholder="Re-enter password"
                    />
                    <p className="text-danger">
                      {errors.confirmPassword?.message}
                    </p>
                  </div>

                  {/* Submit & Google Login Buttons */}
                  <div className="col-lg-12 d-flex flex-column">
                    <button
                      type="submit"
                      className="bg-gradient-color border-0 btn text-white mt-2 py-3"
                    >
                      Create Account
                    </button>
                    <button className="btn py-3 text-color-orange border-orange mt-3">
                      <img src={Google} alt="Google" className="me-2" /> Sign in
                      with Google
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      {/* <Footer /> */}
    </>
  );
};

export default Register;
