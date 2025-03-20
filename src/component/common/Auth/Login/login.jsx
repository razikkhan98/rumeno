import React, { useContext } from "react";

// Import Third Party Components
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import { Bounce, toast } from "react-toastify";

// Common Components
import Navbar from "../../navbar/mainnavbar";
import Footer from "../../footer/index";
import { postData } from "../../APIs/api";

// Images
import LoginImg from "../../../assets/img/Login/login-img.png";
import { CartContext } from "../../Context";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { setuid } = useContext(CartContext);
  const navigate = useNavigate();

  // API endpoint

  const endpoint = "/user/login";

  // Handle form submission
  const onSubmit = async (data) => {
    try {
      const response = await postData(endpoint, data);
      if (response?.data?.user?.uid) {
        setuid(response?.data?.user?.uid);
        // local storage data setItem
        sessionStorage.setItem("uid", response?.data?.user?.uid);
      }

      if (response?.data?.token) {
        sessionStorage.setItem("token", response?.data?.token);
      }

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
      setTimeout(() => navigate("/"), 1000);
    } catch (error) {
      toast.error(error?.message || "Login failed!", {
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
        <div className="">
          <div className="row g-0 login-bg">
            {/* Left Section */}
            <div className="col-md-6 text-white  position-relative">
              <img src={LoginImg} className="login-img" alt="Loading" />
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

            {/* Right Section (Login Form) */}
            <div className="col-md-6 p-lg-5 p-3 d-flex justify-content-center">
              <div className="form container px-lg-5 p-x-2">
                <div className="text-center">
                  <span className="text-uppercase font-size-24 font-md-size-20">
                    Login
                  </span>
                  <p className="font-size-16 font-md-size-12">
                    Login to your account to continue
                  </p>
                  <NavLink to={"/register"} className="text-decoration-none">
                    <p className="text-color-orange font-size-16 font-md-size-12">
                      Don’t have an account? Create an account
                    </p>
                  </NavLink>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit(onSubmit)}>
                  {/* Mobile No. */}
                  <div className="py-4">
                    <label
                      htmlFor="mobile"
                      className="form-label text-start mb-2 font-size-12 text-gray-color"
                    >
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
                    <label
                      htmlFor="password"
                      className="form-label text-start mb-2 font-size-12 text-gray-color"
                    >
                      Enter Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      {...register("password", {
                        required: "Password is required",
                      })}
                      className="form-control p-3 border-0 rounded-3"
                      placeholder="Enter your password"
                    />
                    <p className="text-danger">{errors.password?.message}</p>
                  </div>

                  {/* Forgot Password */}
                  <NavLink to={"/forgot"} className="text-decoration-none">
                    <p className="text-end font-size-12 text-color-orange mt-2">
                      Forgot Password?
                    </p>
                  </NavLink>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="bg-gradient-color border-0 btn text-white w-100 mt-4 py-3"
                  >
                    Login
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

export default Login;
