import React, { useContext, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../../common/navbar/mainnavbar";
import { Button, Dropdown } from "react-bootstrap";
import productImage from "../../assets/img/addtocart/addproduct.png";
import { RiDiscountPercentFill } from "react-icons/ri";
import { FiRefreshCw } from "react-icons/fi";
import Footer from "../../common/footer";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { CartContext } from "../../common/Context";
import { CiStar } from "react-icons/ci";
import Header from "../../common/Header/header";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { getData, postData } from "../../common/APIs/api";

const StarRating = ({ rating, onRatingChange }) => {
  const handleClick = (index) => {
    onRatingChange(index + 1);
  };

  return (
    <div className="d-flex gap-1 fs-3 justify-content-center">
      {[...Array(5)].map((_, index) => (
        <span
          key={index}
          onClick={() => handleClick(index)}
          style={{
            cursor: "pointer",
            color: rating > index ? "#EC7229" : "#ccc",
          }}
        >
          <CiStar />
        </span>
      ))}
    </div>
  );
};

const faqs = [
  {
    question: "DOSAGE AND USAGE",
    answer:
      "The purpose of animal feed supplements is to improve the nutritional value of animal diets by the use of specialty items. They supply vital elements such as vitamins, minerals, and amino acids, which may be deficient in ordinary food.",
  },
  {
    question: "PRODUCT DESCRIPTION",
    answer:
      "The All-in-One Mineral Superstar for Goats, Cattle, Dogs, and Cats is Minromix! Pets and livestock both benefit from a well-balanced diet that includes all the necessary vitamins and minerals.Minromix is a veterinarian-recommended mineral mixture for cattle and other animals, Minromix is designed to meet the dietary requirements of different species. For Your Healthy Herd of Cattle: Essential Mineral Blend for Cattle: Minromix offers a wide range of minerals that have been carefully selected to ensure the best possible health for cattle. This includes magnesium for healthy muscle function, phosphorus for appropriate development, and calcium for strong bones and milk production. Encourages Peak Milk Production: Minromix will help dairy farmers ensure that their cows are producing healthy amounts of milk. The yield of your herd can be increased by making sure it is getting enough minerals. Encourages Growth and Development: Minromix supplies the vital minerals required for appropriate growth and development at every stage of life, from robust adult cattle to healthy calves. Enhances General Health of Cattle: Cattle that are deficient in certain minerals may have a range of health issues. By offering a comprehensive and well-balanced mineral mixture, Minromix helps avoid these problems and eventually contributes to a robust and healthy herd. Beyond Cattle: A Mineral Solution Across Species Although Minromix works well as a mineral mixture for cattle, it can also be used for other kinds of animals. Goats: Give your goats this adaptable mineral formula to support good reproductive, strong bones, and general well-being. Canines and Felines: Give your pets extra minerals in their diet to help them thrive, which will promote overall health, energy, and a glossy coat. Why Pick Minromix? Comprehensive and Specific: Minromix provides a mineral combination that is both complete and targeted to meet the unique requirements of goats, dogs, cats, and cattle. Simple to Handle: Minromix's easy-to-use structure makes it simple to incorporate into your pets' daily diet. Encourages General Animal Health: Minromix helps your animals' well-being in many ways, from strong bones and robust reproduction to enhanced immunity and vivid hair. Make an investment in Minromix, the One-Stop Mineral Powerhouse! You can make sure your animals flourish and have the greatest life possible by giving them the vital minerals they require with Minromix!",
  },
];

const Addtocart = () => {
  const { cart, incrementQuantity, decrementQuantity, addToCart } =
    useContext(CartContext);
  const location = useLocation();

  const navigate = useNavigate();
  const isAuthenticated = !!sessionStorage.getItem("token");

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Review form

  const [showReviewForm, setShowReviewForm] = useState(false);
  const [reviewRating, setReviewRating] = useState(0);

  const product = location.state?.product;

  const cartItem = cart?.find((item) => item.id === product?.id);

  const [selectedWeight, setSelectedWeight] = useState(
    product?.productUnit?.[0]
  );
  console.log("selectedWeight: ", selectedWeight);
  const basePrice = product.price;
  const calculatedPrice = parseFloat(selectedWeight) * basePrice;

  const setWeight = (size) => {
    setSelectedWeight(size);
  };
  const decrease = (id) => {
    decrementQuantity();
  };

  // Handle Add to Cart
  const handleAddToCart = async (product) => {
    if (!isAuthenticated) {
      console.log("Redirecting to login...");
      setTimeout(() => {
        navigate("/login");
      }, 100);
      toast.warning("Please login to add items!", { autoClose: 3000 });
      return;
    }
    console.log('selectedWeightHandleAddToCart: ', selectedWeight);
    addToCart(product, selectedWeight);
    console.log('product, selectedWeight: ', product, selectedWeight);

    //  const response = await postData("/addtoCart",);
  };


  const fetchReview = async () => {
      try {
        const response = await getData("user/getReview");
        console.log('response Review: ', response);
  
      } catch (error) {
        toast.error("Error fetching animal data.");
      }
    };

      useEffect(() => {
          fetchReview();
      }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  // Review Form Submit Function Start

  const endpoint = "/user/review";
  const onSubmit = async (data) => {
    const uid = sessionStorage.getItem("uid");
    const formData = { ...data, uid, productid: product?.id, rating: reviewRating };
    try {
      const response = await postData(endpoint, formData);
      console.log('response: ', response);
      console.log('Review submitted:', formData);
      toast.success(response?.data?.message,
        {
          position: "top-right",
          autoClose: 3000,
        }
      );
      setShowReviewForm(false);

      reset();
    } catch (error) {
      toast.error(error.message || "Something went wrong!", {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  return (
    <>
      <Navbar />
      <div className="addtocart pt-5">
        <div className="pt-5">
          <Header title="Goat Suppliment" subtitle={product.name} />
        </div>
        <div className="container pt-lg-5">
          <div className="row pt-3 justify-content-center">
            <div key={product.id} className="row">
              <div className="col-lg-6">
                <div className="addtocart-img">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="img-fluid border rounded-4"
                  />
                </div>
              </div>
              <div className="col-lg-1"></div>
              <div className="col-lg-5">
                <div className="addtocart-content">
                  <p className="addtocart-content-title font-20-400">{product.name}</p>
                  <div className="d-flex align-items-center">
                    <span className="fs-3 me-2 colorEC7229">☆☆☆☆☆</span>
                    <span className="font-14-500 color707070">
                      3.5 (312 Reviews)
                    </span>
                  </div>
                  <p className="mt-2 pb-4 border-bottom font-24-500 font-17-600 d-flex align-items-center">
                    <span> ₹ {calculatedPrice.toFixed(2)} /-{" "} </span>
                    <Dropdown className="ms-2" >
                      <Dropdown.Toggle
                        className="badge p-2 font-14-300 text-white border-0 shadow"
                        style={{ background: "#E32C2B" }}
                      >
                        <RiDiscountPercentFill className="me-1" />
                        5% Off
                      </Dropdown.Toggle>

                      <Dropdown.Menu className="p-3 mt-2 addtocart-dropdown bg-f3fafc border-0 shadow">
                        <p className="mb-0 font-12-400 text-gray-color">Get 5% discount on susbscribing youtube channel & get extra 5% discount on next order by sharing 2 min video product feedback it is for the benefit of yourself in learning innovative ideas of livestock farming by watching youtube channel and your feedback will help new customers to gain the confidence in using products .Your feedback video will also help you to gain more discounts in future orders. If your feedback video gets 100 likes you will earn one loyality point which will equal to Rupees 25 per point. Your points will be counted and redeemed after 60 days.</p>
                      </Dropdown.Menu>
                    </Dropdown>
                  </p>

                  <p
                    className="mt-4 mb-0"
                    style={{
                      fontSize: "14px",
                      fontWeight: "400",
                      color: "#707070",
                    }}
                  >
                    Select Size
                  </p>

                  <div className="d-flex justify-content-between flex-wrap pb-4 border-bottom">
                    {product?.productUnit?.map((size) => (
                      <button
                        key={size}
                        className="addsize-btn d-flex border rounded-3 mt-3"
                        style={{
                          background:
                            selectedWeight === size ? "#E32C2B" : "#ffffff",
                          color:
                            selectedWeight === size ? "#ffffff" : "#111111",
                        }}
                        onClick={() => setSelectedWeight(size)}
                      >
                        <div
                          className="input-group-text border-0"
                          style={{
                            background: "transparent",
                            fontSize: "14px",
                            fontWeight: "400",
                            color:
                              selectedWeight === size ? "#ffffff" : "#707070",
                          }}
                        >
                          ₹ {size * basePrice.toFixed(2)} /-{" "}
                        </div>
                        <div
                          className="input-group-text border-0 product-kg"
                          style={{
                            color:
                              selectedWeight === size ? "#ffffff" : "#111111",
                            fontSize: "14px",
                            fontWeight: "400",
                          }}
                        >
                          {size}kg
                        </div>
                      </button>
                    ))}
                  </div>

                  <p
                    className="mt-3 mb-2"
                    style={{
                      fontSize: "14px",
                      fontWeight: "400",
                      color: "#707070",
                    }}
                  >
                    Delivery
                  </p>
                  <p
                    style={{
                      fontSize: "16px",
                      fontWeight: "500",
                      color: "#111111",
                    }}
                  >
                    4-5 working days
                  </p>
                  <p
                    style={{
                      color: "#EC7229",
                      fontSize: "12px",
                      fontWeight: "400",
                    }}
                  >
                    <FiRefreshCw /> Refundable for any manufacturing defect
                    within 1 week
                  </p>
                  <div className="d-flex align-items-center gap-3 pt-lg-5 mt-lg-5">
                    <div
                      className="buynow-btn d-flex align-items-center justify-content-center"
                      style={{
                        borderColor: "#EC7229",
                      }}
                    >
                      <NavLink to="/cart">
                      <Button
                        // onClick={() => handleAddToCart(product)}
                        className="fs-5 border-0 rounded-3 px-4 py-2 w-100"
                        style={{
                          background: "#ffffff",
                          color: "#EC7229",
                        }}
                      >
                        Buy Now
                      </Button>
                      </NavLink>
                      {/* <Button
                        onClick={() => decrementQuantity(product.id)}
                        className="border-0 rounded-3 fs-3"
                        style={{ background: "#ffffff", color: "#EC7229" }}
                      >
                        -
                      </Button>
                      <span className="mx-3 fs-4">
                        {cartItem?.quantity || 0}
                      </span>
                      <Button
                        // onClick={() => incrementQuantity(product.id)}
                        onClick={() => handleAddToCart(product, selectedWeight)}
                        className="fs-3 border-0 rounded-3"
                        style={{ background: "#ffffff", color: "#EC7229" }}
                      >
                        +
                      </Button> */}
                    </div>
                    <div className="addtocart-btn">
                      {/* <NavLink to="/cart"> */}
                        <Button
                          className=" border-0"
                          onClick={() => handleAddToCart(product)}
                          // style={{
                          //   background: "#EC7229",
                          //   width: "100%",
                          //   height: "56px",
                          //   borderRadius: "8px",
                          // }}
                        >
                          Add To Cart
                        </Button>
                      {/* </NavLink> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 py-5">
              <div className="addtocart-faq">
                <div className="accordion" id="faqAccordion">
                  {faqs.map((faq, index) => (
                    <div className="accordion-item pb-3" key={index}>
                      <h2 className="accordion-header">
                        <button
                          className={`accordion-button  ${openIndex === index
                            ? "addtocart-colapse color-707070"
                            : "collapsed "
                            }`}
                          type="button"
                          // data-bs-toggle="collapse"
                          // data-bs-target={`#collapse${index}`}
                          onClick={() => toggleFAQ(index)}
                          aria-expanded={openIndex === index}
                          aria-controls={`collapse${index}`}
                          style={{
                            fontSize: "16px",
                            fontWeight: "400",
                            borderRadius: "0px",
                            borderTop: "1px solid #E8E8E8",
                            borderBottom: "1px solid #E8E8E8",
                            height: "58px",
                            color: "#707070",
                          }}
                        >
                          {faq.question}{" "}
                          <span
                            className="icon"
                            style={{
                              marginLeft: "auto",
                              color: "#707070",
                              width: "17px",
                              height: "36px",
                              fontSize: "24px",
                              fontWeight: "400",
                            }}
                          >
                            {openIndex === index ? "−" : "+"}
                          </span>
                        </button>
                      </h2>
                      <div
                        id={`collapse${index}`}
                        className={`accordion-collapse collapse ${openIndex === index ? "show" : ""
                          }`}
                        data-bs-parent="#faqAccordion"
                      >
                        <div className="accordion-body text-gray-color">
                          {faq.answer}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-5 py-5">
              {showReviewForm ? (
                // Review Form Start here
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="bg-skyblue border-radius-12 text-center py-5 px-lg-5 px-3"
                >
                  <p className="font-24-400 text-chinese-black-color">
                    Write a review
                  </p>

                  <p className="font-14-400 text-chinese-black-color">Rating</p>
                  <StarRating
                    rating={reviewRating}
                    onRatingChange={setReviewRating}
                  />

                  <label className="text-gray-color font-12-400">
                    Review Title
                  </label>
                  <input
                    type="text"
                    placeholder="Give your review a title"
                    className={`form-control mb-2 border-0 font-14-400 py-2 ${errors.title ? "is-invalid" : ""
                      }`}
                    {...register("title", { required: "Title is required" })}
                  />
                  {errors.title && (
                    <small className="text-danger">
                      {errors.title.message}
                    </small>
                  )}

                  <label className="text-gray-color font-12-400">Review</label>
                  <textarea
                    placeholder="Write your review"
                    className={`form-control mb-2 border-0 py-2 font-14-400 ${errors.review ? "is-invalid" : ""
                      }`}
                    rows="5"
                    {...register("review", { required: "Review is required" })}
                  ></textarea>
                  {errors.review && (
                    <small className="text-danger">
                      {errors.review.message}
                    </small>
                  )}

                  <label className="text-gray-color font-12-400">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Your Name"
                    className={`form-control mb-2 py-2 border-0 font-14-400 ${errors.name ? "is-invalid" : ""
                      }`}
                    {...register("name", { required: "Name is required" })}
                  />
                  {errors.name && (
                    <small className="text-danger">{errors.name.message}</small>
                  )}

                  <label className="text-gray-color font-12-400">E-Mail</label>
                  <input
                    type="email"
                    placeholder="Enter Your E-mail"
                    className={`form-control mb-4 border-0 py-2 font-14-400 ${errors.email ? "is-invalid" : ""
                      }`}
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: "Invalid email address",
                      },
                    })}
                  />
                  {errors.email && (
                    <small className="text-danger">
                      {errors.email.message}
                    </small>
                  )}

                  <p className="font-10-400 color373737 text-start mb-4">
                    How we use your data: We’ll only contact you about the
                    review you left, and only if necessary. By submitting your
                    review, you agree to our terms and conditions and privacy
                    policy.
                  </p>

                  <div className="d-flex justify-content-center gap-3">
                    <button
                      type="button"
                      className="rounded-3 px-3 border-orange text-color-orange font-14-500 font-sm-12 py-2"
                      onClick={() => setShowReviewForm(false)}
                    >
                      Cancel Review
                    </button>
                    <button
                      type="submit"
                      className="rounded-3 border-orange px-3 bg-orange-color text-white-color font-14-500 font-sm-12 py-2"
                    >
                      Submit Review
                    </button>
                  </div>
                </form>
              ) : (
                // Default Review Card
                <div className="addtocart-review m-auto bg-skyblue border-radius-12 text-center py-5">
                  <p className="mb-5 font-24-400 text-chinese-black-color">
                    Customer reviews
                  </p>
                  <StarRating rating={reviewRating} onRatingChange={() => { }} />
                  {/* <p className="fs-3 mb-0 text-chinese-black-color">
                    {[...Array(5)].map((_, index) => (
                      <CiStar key={index} />
                    ))}
                  </p> */}
                  <p className="text-gray-color font-14-400">
                    Be the first to write a review
                  </p>
                  <div className="cart-review-btn m-auto mt-lg-5">
                    <button
                      className="py-2 w-100 h-100 bg-gradient-color text-white-color border-0 border-radius-8"
                      onClick={() => setShowReviewForm(true)}
                    >
                      Write a Review
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Addtocart;
