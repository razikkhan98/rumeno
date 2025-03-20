import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import Navbar from "../../common/navbar/mainnavbar";
import Image from "../../assets/img/payment/qrcode.png";
import { Card } from "react-bootstrap";
import Faq from "../faq/index";
import Footer from "../../common/footer/index";
import Flipcard from "../../common/footerFlipCard/footerCard";
import { CartContext } from "../../common/Context";
import axios from "axios";
import { postData } from "../../common/APIs/api";
import { Bounce, toast } from "react-toastify";

const CartFaq = [
  {
    question: "1. How long it will take to get my orders?",
    answer:
      "Veterinary Services for Pet Animals: These services, which include medical treatment for pets, are not taxable under the Goods and Services Tax (GST). They fall under the nil rate Category1.Veterinary Services for Livestock: Similar to pet animals, services related to livestock health care are also not taxable and fall under the nil rate Category2. Other Veterinary Services (Not Elsewhere Classified): Services beyond pet animals and livestock, such as specialized treatments or laboratory testing, are subject to an 18% GST rate.",
  },
  {
    question: "2. How to Sell Veterinary Products?",
    answer: "...................",
  },
];

const Payment = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const cartContext = useContext(CartContext);

  const cart = cartContext?.cart || [];
  const setuid = cartContext?.setuid || (() => {});

  // Retrieve UID from sessionStorage or use setuid
  const storedUid = sessionStorage?.getItem("uid");
  const uid = storedUid || (setuid && setuid());

  // Calculate total amount correctly
  const totalAmount = cart?.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );
  const tax = totalAmount * 0.05; // Example: 5% tax
  const gst = totalAmount * 0.18; // Example: 18% GST
  const amountToPay = totalAmount + tax + gst;

  // API endpoint

  const endpoint = "/user/transaction";

  // Handle Form Submission
  const onSubmit = async (data) => {
    const orderDetails = {
      ...data,
      total: amountToPay,
      items: cart,
      uid: uid,
    };
    console.log("Order Details:", orderDetails); // Debugging

    try {
      // const response = await axios.post("/api/orders", orderDetails);
      const response = await postData(endpoint, orderDetails);

      if (response?.status === 201) {
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
      } else {
        toast.error("Something went wrong. Please try again.", {
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
    } catch (error) {
      console.error("Order error:", error);

      // Extract error message safely
      const errorMessage =
        error.response?.data?.message ||
        "Failed to place order. Please try again.";

      toast.error(errorMessage, {
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
      <Navbar />
      <div className="payment py-5">
        <div className="container pt-lg-5">
          <div className="row pt-lg-5">
            <div className="text-center">
              <p className="text-chinese-black-color font-24-400">
                Payment process
              </p>
              <p className="text-chinese-black-color font-16-300">
                Transaction details
              </p>
            </div>
            <div className="col-lg-11 p-5 border-radius-16 m-auto  bg-skyblue">
              <div className="row">
                <div className="col-lg-5">
                  <div className="">
                    <form onSubmit={handleSubmit(onSubmit)}>
                      {/* Name Field */}
                      <div className="mb-3">
                        <label className="font-14-400 text-gray-color">
                          Name
                        </label>
                        <input
                          type="text"
                          placeholder="Enter your full name"
                          {...register("name", {
                            required: "Name is required",
                            minLength: {
                              value: 3,
                              message: "Name must be at least 3 characters",
                            },
                          })}
                          className="form-control form-control-detail"
                        />
                        <p className="text-danger">{errors.name?.message}</p>
                      </div>

                      {/* Mobile Field */}
                      <div className="row">
                        <div className="col-lg-5">
                          <label className="font-14-400 text-gray-color">
                            Mobile No
                          </label>
                          <input
                            type="text"
                            placeholder="Enter Mobile No"
                            {...register("mobile", {
                              required: "Mobile number is required",
                              pattern: {
                                value: /^\d{10}$/,
                                message: "Enter a valid 10-digit mobile number",
                              },
                            })}
                            className="form-control form-control-detail"
                          />
                          <p className="text-danger">
                            {errors.mobile?.message}
                          </p>
                        </div>

                        <div className="col-lg-2"></div>

                        {/* Email Field */}
                        <div className="col-lg-5">
                          <label className="font-14-400 text-gray-color">
                            Email
                          </label>
                          <input
                            type="email"
                            placeholder="Enter E-mail ID"
                            {...register("email", {
                              required: "Email is required",
                              pattern: {
                                value:
                                  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                message: "Enter a valid email",
                              },
                            })}
                            className="form-control form-control-detail"
                          />
                          <p className="text-danger">{errors.email?.message}</p>
                        </div>
                      </div>

                      {/* Address Field */}
                      <div className="mb-3">
                        <label className="font-14-400 text-gray-color">
                          Address
                        </label>
                        <textarea
                          rows={2}
                          placeholder="Type full address here"
                          {...register("address", {
                            required: "Address is required",
                          })}
                          className="form-control form-control-detail"
                        ></textarea>
                        <p className="text-danger">{errors.address?.message}</p>
                      </div>

                      {/* Payment Method */}
                      <div className="mb-3">
                        <div className="row">
                          <div className="col-lg-6">
                            <p className="mb-0 text-gray-color font-12-500">
                              COD
                            </p>
                            <div className="payment-radio-btn">
                              <input
                                type="radio"
                                value="COD"
                                {...register("payment", {
                                  required: "Please select a payment method",
                                })}
                              />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <p className="mb-0 text-gray-color font-12-500">
                              Pay Via UPI
                            </p>
                            <div className="payment-radio-btn">
                              <input
                                type="radio"
                                value="UPI"
                                {...register("payment", {
                                  required: "Please select a payment method",
                                })}
                              />
                            </div>
                          </div>
                        </div>
                        <p className="text-danger">{errors.payment?.message}</p>
                      </div>

                      {/* Submit Button */}
                      <button
                        className="w-100 btn bg-gradient-color border-0 py-3 font-16-500 text-white-color"
                        type="submit"
                      >
                        Submit
                      </button>

                      <p className="text-center mt-2">
                        <span className="font-12-400 text-color-orange">
                          Transaction issue?
                        </span>
                        <a
                          href="#/"
                          className="text-decoration-none font-14-500 text-color-orange"
                        >
                          Click here
                        </a>
                      </p>
                    </form>
                  </div>
                </div>
                <div className="col-lg-3"></div>
                <div className="col-lg-4">
                  <div className="">
                    <Card className="border-radius-12 text-center border-orange">
                      <div className="d-flex justify-content-between text-white bg-orange-color rounded-top-3 p-2">
                        <span className="text-start">To Pay:</span>{" "}
                        <span className="text-end">₹ {amountToPay} /-</span>
                      </div>
                      <div className="py-5">
                        <img
                          src={Image}
                          alt="QR Code"
                          className="img-fluid mx-auto d-block"
                        />
                      </div>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <Faq faqs={CartFaq} />
            </div>
          </div>
        </div>
      </div>

      <div className="addtocartfooter">
        <div className="container">
          <div className="row">
            <Flipcard />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Payment;

// import React from "react";
// import { useForm } from "react-hook-form";

// const MyForm = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = (data) => {
//     console.log(data);
//   };

//   return (
//     <div className="payment-form">
//       <div className="container pt-lg-5">
//         <div className="text-center">
//           <p className="form-heading">Fill in Your Details</p>
//           <p className="heading-description">
//             Please provide accurate information to proceed with your request.
//           </p>
//         </div>
//         <div className="row my-5 g-0 bg-white form-border">
//           <div className="col-lg-5 p-4">

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MyForm;
