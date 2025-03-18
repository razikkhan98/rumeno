import React, { useState } from "react";
import Navbar from "../../common/navbar/mainnavbar";
import Image from "../../assets/img/products/productimage.png";
import Faq from "../faq";
import Footer from "../../common/footer/index";
import Flipcard from "../../common/footerFlipCard/footerCard";
import { NavLink } from "react-router-dom";
import Header from "../../common/Header/header";

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

const Cart = () => {
  const [quantity, setQuantity] = useState(0);

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  // Product details

  return (
    <>
      <Navbar />
      <div className="cart pt-5">
      <div className="pt-5">
      <Header title="Minromix.." subtitle="Cart" />
      </div>
        <div className="container pt-md-3 pt-lg-5">
          <div className="row pt-5">
            <div className="col-lg-12 text-center mb-3 mb-md-4">
              <p className="font-24-400 text-chinese-black-color">CART</p>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div className="cart-container m-auto bg-skyblue border-radius-16 p-3 p-4">
                {/* Header row - hidden on mobile, visible from sm up */}
                <div className="row mb-1 d-none d-sm-flex border-bottom">
                  <div className="col-lg-6 col-sm-6">
                    <p className="font-16-400 text-gray-color">PRODUCTS</p>
                  </div>
                  <div className="col-lg-3 col-sm-3 text-end">
                    <p className="font-16-400 text-gray-color">QUANTITY</p>
                  </div>
                  <div className="col-lg-3 col-sm-3 text-end">
                    <p className="font-16-400 text-gray-color">TOTAL</p>
                  </div>
                </div>

                {/* Product row - stacks on mobile */}
                <div className="row align-items-center mb-4">
                  {/* Product info - full width on mobile */}
                  <div className="col-12 col-sm-6 mb-3 mb-sm-0">
                    <div className="d-flex align-items-center gap-3">
                      <div className="cart-img">
                      <img
                        src={Image}
                        alt=""
                        className=""
                        // style={{
                        //   width: "60px",
                        //   height: "60px",
                        //   objectFit: "cover",
                        // }}
                      />
                      </div>
                      <div>
                        <p className="mb-0 font-16-300 text-muted-gray-color">
                          Minromix 1 Mineral mixture
                        </p>
                        <p className="mb-0 font-16-500 text-muted-gray-color">₹ 285 /-</p>
                        <p className="mb-0">
                          <span className="text-color-orange font-12-300">
                            Size:{" "}
                          </span>
                          <span className="font-16-300 text-muted-gray-color">1 KG</span>
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Quantity - centered on mobile */}
                  <div className="col-6 col-sm-3">
                    <div className="d-flex justify-content-end">
                      <div
                        className="input-group border bg-white shadow rounded-3"
                        style={{ width: "fit-content" }}
                      >
                        <button
                          className="btn py-1 font-24-500 text-chinese-black-color"
                          type="button"
                          onClick={decreaseQuantity}
                        >
                          −
                        </button>
                        <span className="mx-3 font-24-500 text-color-orange d-flex align-items-center">
                          {quantity}
                        </span>
                        <button
                          className="btn py-1 font-24-500 text-chinese-black-color"
                          type="button"
                          onClick={increaseQuantity}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Total - right aligned on mobile */}
                  <div className="col-6 col-sm-3 text-end">
                    <p className="mb-0 font-24-500 text-muted-gray-color">₹ 285 /-</p>
                  </div>
                </div>

                {/* Summary section - always right aligned */}
                <div className="row justify-content-end mt-5 mb-2">
                  <div className="col-6 col-md-3 text-end">
                    {" "}
                    <span className="font-16-400 text-gray-color me-3">
                      TAX:{" "}
                    </span>₹{" "}
                    <span className="font-20-400 text-muted-gray-color">15 /-</span>
                  </div>
                </div>

                <div className="row justify-content-end pb-3 border-bottom">
                  <div className="col-6 col-md-3 text-end">
                    <span className="font-16-400 text-gray-color me-3">GST: </span>₹{" "}
                    <span className="font-20-400 text-muted-gray-color">85 /-</span>
                  </div>
                </div>

                <div className="row justify-content-end mb-2 mt-3">
                  <div className="col-lg-6 col-md-3 p-0 text-end">
                    <span className="font-16-400 text-gray-color me-3">
                      AMOUNT TO PAY:{" "}
                    </span>
                    <span className="font-24-500 text-muted-gray-color">₹ 285 /-</span>
                  </div>
                </div>
                <div className="d-flex justify-content-center">
                  <NavLink to="/payment">
                    <button
                      className=" mx-3 border-0 text-white-color font-16-500 bg-orange-color border-radius-8"
                      style={{
                        width: "200px",
                        height: "56px",
                      }}
                    >
                      Procced to pay
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>

            <div className="col-lg-12">
              <Faq faqs={CartFaq} />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="addtocartfooter">
        <div className="container">
          <div className="row">
            <Flipcard />
          </div>
        </div>
      </div> */}
      <Footer />
    </>
  );
};

export default Cart;
