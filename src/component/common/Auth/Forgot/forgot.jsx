  // import React, { useState } from "react";

  // // Import Third Party Components
  // import { useForm } from "react-hook-form";

  // // Common Components
  // import Navbar from "../../navbar/mainnavbar";
  // import Footer from "../../footer/index";
  // import { ForgotAPI } from "../../APIs/api";
  // // images
  // import LoginImg from "../../../assets/img/Login/login-img.png";
  // import { toast } from "react-toastify";

  // import { FaArrowCircleLeft } from "react-icons/fa";
  // import { NavLink } from "react-router-dom";


  // const Forgot = () => {
  //   const {
  //     register,
  //     handleSubmit,
  //     watch,
  //     formState: { errors },
  //   } = useForm();

  //   // State
  //   const [isOtpVerified, setIsOtpVerified] = useState(false);

  //   const onSubmit = (data) => {
  //     if (!isOtpVerified) {
  //       // OTP Verification
  //       if (data.otp.length === 5) {
  //         setIsOtpVerified(true);
  //       }
  //     } else {
  //       // Password Change
  //       toast("Password changed successfully!");
  //     }
  //   };

  //   return (
  //     <>
  //       {/* Navbar */}
  //       {/* <Navbar /> */}
  //       {/* Main Section  */}
  //       <div className="d-flex align-items-center justify-content-center min-vh-100">
  //         <div className="container">
  //           <div className="row g-0 my-0 login-bg">
  //             {/* Left Section */}
  //             <div className="col-lg-6 col-md-6 text-white position-relative">

  //               <div className="position-absolute top-0 left-0 m-3">
  //                 <NavLink to={"/"} className={"text-white text-decoration-none"}>
  //                   <FaArrowCircleLeft className=" fs-3 text-white" />
  //                   <p>Home</p>
  //                 </NavLink>
  //               </div>
  //               <div className="login-img">
  //                 <img src={LoginImg} alt="Loading" />
  //               </div>
  //               <div className="overlay-text position-absolute bottom-0 start-0 p-5">
  //                 <p className="font-size-32 font-md-size-20 text-uppercase">Welcome to Rumeno</p>
  //                 <p className="font-size-18 font-md-size-12">
  //                   Rumeno Farmotech is a nutrition and feed supplement technologies company offering a wide range of products,
  //                   including Probiotics, milk replacers, Macro & Micro Minerals, Multi Vitamins, Enzymes, Amino Acids, feed additives,
  //                   premixes, concentrates, and specialty products for livestock, poultry, and aquaculture.
  //                 </p>
  //               </div>
  //             </div>

  //             {/* Right Section (Forgot Password Form) */}
  //             <div className="col-lg-6 col-md-6 p-lg-5 p-3">
  //               <div className="container px-lg-5 px-3">
  //                 <div className="text-center">
  //                   <span className="text-uppercase font-size-24 font-md-size-20">Forgot Password?</span>
  //                   <p className="text-color-orange font-size-16 font-md-size-12">No Worries, We help you set a new password</p>
  //                   <p className="font-size-16 font-md-size-12">Enter your registered E-mail ID/ Mobile no and we will send you a verification code</p>
  //                 </div>

  //                 {/* Form */}
  //                 <form onSubmit={handleSubmit(onSubmit)}>
  //                   {!isOtpVerified && (
  //                     <>
  //                       {/* Mobile No. */}
  //                       <div className="py-4">
  //                         <label
  //                           htmlFor="mobile"
  //                           className="form-label text-start mb-2 font-size-12 text-gray-color"
  //                         >
  //                           Mobile No.
  //                         </label>
  //                         <input
  //                           type="text"
  //                           id="mobile"
  //                           {...register("mobile", {
  //                             required: "Mobile number is required",
  //                             pattern: {
  //                               value: /^\d{10}$/,
  //                               message: "Mobile number must be 10 digits",
  //                             },
  //                           })}
  //                           className="form-control p-3 border-0 rounded-3"
  //                           placeholder="Enter your mobile no"
  //                         />
  //                         <p className="text-danger">{errors.mobile?.message}</p>
  //                       </div>

  //                       {/* OTP Inputs */}
  //                       <div className="mb-3 text-start">
  //                         <label className="form-label text-gray-color font-size-12">
  //                           Verification Code
  //                         </label>
  //                         <div className="d-flex justify-content-between">
  //                           {Array(5)
  //                             .fill(0)
  //                             .map((_, index) => (
  //                               <input
  //                                 key={index}
  //                                 type="text"
  //                                 maxLength="1"
  //                                 className="otp-input"
  //                                 {...register(`otp[${index}]`, {
  //                                   required: "All OTP digits are required",
  //                                   pattern: {
  //                                     value: /^[0-9]$/,
  //                                     message: "Only digits allowed",
  //                                   },
  //                                 })}
  //                               />
  //                             ))}
  //                         </div>
  //                         {errors.otp && (
  //                           <p className="text-danger">OTP must be 6 digits</p>
  //                         )}
  //                       </div>
  //                     </>
  //                   )}

  //                   {isOtpVerified && (
  //                     <>
  //                       <div className="mb-5 text-start pt-4">
  //                         <label className="form-label text-gray-color font-size-12">
  //                           New Password
  //                         </label>
  //                         <input
  //                           type="password"
  //                           {...register("newPassword", { required: "Enter new password", minLength: 6 })}
  //                           className="form-control p-3 border-0 rounded-3"
  //                           placeholder="New Password"
  //                         />
  //                         <p className="text-danger">{errors.newPassword?.message}</p>
  //                       </div>

  //                       <div className="mb-3 text-start">
  //                         <label className="form-label text-gray-color font-size-12">
  //                           Confirm Password
  //                         </label>
  //                         <input
  //                           type="password"
  //                           {...register("confirmPassword", {
  //                             required: "Confirm password",
  //                             validate: (value) => value === watch("newPassword") || "Passwords do not match",
  //                           })}
  //                           className="form-control p-3 border-0 rounded-3"
  //                           placeholder="Confirm Password"
  //                         />
  //                         <p className="text-danger">{errors.confirmPassword?.message}</p>
  //                       </div>
  //                     </>
  //                   )}

  //                   {/* Submit Button */}
  //                   <button
  //                     type="submit"
  //                     className="bg-gradient-color border-0 btn text-white w-100 mt-4 py-3"
  //                   >
  //                     {isOtpVerified ? "Change Password" : "Submit"}
  //                   </button>
  //                 </form>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //       {/* Footer */}
  //       {/* <Footer /> */}
  //     </>
  //   );
  // };

  // export default Forgot;


  import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";

// Common Components
import LoginImg from "../../../assets/img/Login/login-img.png";
import { FaArrowCircleLeft } from "react-icons/fa";

const Forgot = () => {
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    setValue,
    formState: { errors },
  } = useForm();

  const [step, setStep] = useState(1); // 1 = mobile, 2 = otp, 3 = change password

  const onSubmit = (data) => {
    if (step === 1) {
      // Normally trigger API to send OTP here
      toast.success("OTP sent to your mobile!");
      setStep(2);
    } else if (step === 2) {
      const otp = Object.values(data.otp || {}).join("");
      if (otp.length === 5) {
        toast.success("OTP Verified!");
        setStep(3);
      } else {
        toast.error("Please enter valid OTP.");
      }
    } else if (step === 3) {
      toast.success("Password changed successfully!");
      // call ForgotAPI here to save password
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100">
      <div className="container">
        <div className="row g-0 my-0 login-bg">
          {/* Left Side */}
          <div className="col-lg-6 col-md-6 text-white position-relative">
            <div className="position-absolute top-0 left-0 m-3">
              <NavLink to="/" className="text-white text-decoration-none">
                <FaArrowCircleLeft className="fs-3 text-white" />
                <p>Home</p>
              </NavLink>
            </div>
            <div className="login-img">
              <img src={LoginImg} alt="Loading" />
            </div>
            <div className="overlay-text position-absolute bottom-0 start-0 p-5">
              <p className="font-size-32 font-md-size-20 text-uppercase">Welcome to Rumeno</p>
              <p className="font-size-18 font-md-size-12">
                Rumeno Farmotech is a nutrition and feed supplement technologies company...
              </p>
            </div>
          </div>

          {/* Right Side */}
          <div className="col-lg-6 col-md-6 p-lg-5 p-3">
            <div className="container px-lg-5 px-3">
              <div className="text-center mb-4">
                <span className="text-uppercase font-size-24 font-md-size-20">Forgot Password?</span>
                <p className="text-color-orange font-size-16 font-md-size-12">
                  {step === 1 && "We’ll send you an OTP to reset your password."}
                  {step === 2 && "Enter the OTP sent to your mobile number."}
                  {step === 3 && "Now set your new password."}
                </p>
                <p className="font-size-16 font-md-size-12">Enter your registered E-mail ID/ Mobile no and we will send you a verification code</p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)}>
                {step === 1 && (
                  <div className="py-4">
                    <label className="form-label text-start mb-2 font-size-12 text-gray-color">
                      Mobile No.
                    </label>
                    <input
                      type="text"
                      {...register("mobile", {
                        required: "Mobile number is required",
                        pattern: {
                          value: /^\d{10}$/,
                          message: "Enter valid 10-digit number",
                        },
                      })}
                      className="form-control p-3 border-0 rounded-3"
                      placeholder="Enter your mobile no"
                    />
                    <p className="text-danger">{errors.mobile?.message}</p>
                  </div>
                )}

                {step === 2 && (
                  <>
                    <label className="form-label text-gray-color font-size-12">OTP</label>
                    <div className="d-flex gap-2 justify-content-between">
                      {Array(5)
                        .fill("")
                        .map((_, index) => (
                          <input
                            key={index}
                            maxLength="1"
                            {...register(`otp.${index}`, {
                              required: true,
                              pattern: {
                                value: /^[0-9]$/,
                                message: "Only digits allowed",
                              },
                            })}
                            onChange={(e) => {
                              setValue(`otp.${index}`, e.target.value);
                            }}
                            className="form-control text-center otp-input"
                            style={{ width: "50px", height: "50px", fontSize: "24px" }}
                          />
                        ))}
                    </div>
                    <p className="text-danger">{errors.otp && "Please enter complete OTP"}</p>
                  </>
                )}

                {step === 3 && (
                  <>
                    <div className="mb-3 text-start">
                      <label className="form-label text-gray-color font-size-12">
                        New Password
                      </label>
                      <input
                        type="password"
                        {...register("newPassword", {
                          required: "New password is required",
                          minLength: {
                            value: 6,
                            message: "Password must be at least 6 characters",
                          },
                        })}
                        className="form-control p-3 border-0 rounded-3"
                        placeholder="New Password"
                      />
                      <p className="text-danger">{errors.newPassword?.message}</p>
                    </div>
                    <div className="mb-3 text-start">
                      <label className="form-label text-gray-color font-size-12">
                        Confirm Password
                      </label>
                      <input
                        type="password"
                        {...register("confirmPassword", {
                          required: "Please confirm your password",
                          validate: (val) =>
                            val === watch("newPassword") || "Passwords do not match",
                        })}
                        className="form-control p-3 border-0 rounded-3"
                        placeholder="Confirm Password"
                      />
                      <p className="text-danger">{errors.confirmPassword?.message}</p>
                    </div>
                  </>
                )}

                <button type="submit" className="btn bg-gradient-color text-white w-100 py-3 mt-4">
                  {step === 1 && "Send OTP"}
                  {step === 2 && "Verify OTP"}
                  {step === 3 && "Change Password"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forgot;
