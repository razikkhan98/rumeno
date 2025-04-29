import React, { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../../common/navbar/mainnavbar";
import Faq from "../faq";
import Footer from "../../common/footer/index";
import { CartContext } from "../../common/Context";
import Header from "../../common/Header/header";
import { RiDeleteBin6Line } from "react-icons/ri";

const CartFaq = [
  {
    question: "1. How long will it take to get my orders?",
    answer: "Veterinary Services for Pet Animals: These services, which include medical treatment for pets, are not taxable under the Goods and Services Tax (GST). They fall under the nil rate Category1.Veterinary Services for Livestock: Similar to pet animals, services related to livestock health care are also not taxable and fall under the nil rate Category2. Other Veterinary Services (Not Elsewhere Classified): Services beyond pet animals and livestock, such as specialized treatments or laboratory testing, are subject to an 18% GST rate.",
  },
  {
    question: "2. How to Sell Veterinary Products?",
    answer: "With Rumeno Affiliate program you can sell our veterinary products and get commission on them",
  },
];

const Cart = () => {
  const { cart, incrementQuantity, decrementQuantity, removeFromCart } =
  useContext(CartContext);

  // Calculate total amount correctly
  const totalAmount = cart?.reduce(
    (total, item) => total + item.price * Number(item.quantity) * Number(item.selectedWeight),
    0
  );
  const tax = totalAmount * 0.05; // Example: 15% tax
  const gst = totalAmount * 0.18; // Example: 18% GST
  const amountToPay = totalAmount + tax + gst;

  // useEffect(()=>{},[cart])

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

          {/* Check if cart is empty */}
          {Object.keys(cart).length === 0 ? (
            <div className="text-center">
              <h4 className="text-muted">Your cart is empty! 🛒</h4>
              <NavLink to="/goatproduct">
                <button className="btn btn-warning mt-3">Go to Shop</button>
              </NavLink>
            </div>
          ) : (
            <div className="row">
              <div className="col-lg-12">
                <div className="cart-container bg-skyblue border-radius-16 p-4 m-auto">
                  {/* Header */}
                  <div className="row mb-1 d-none d-sm-flex border-bottom">
                    <div className="col-lg-6 col-sm-6">
                      <p className="font-16-400 text-gray-color">PRODUCTS</p>
                    </div>
                    <div className="col-lg-2 col-sm-3 text-end">
                      <p className="font-16-400 text-gray-color">QUANTITY</p>
                    </div>
                    <div className="col-lg-3 col-sm-3 text-end">
                      <p className="font-16-400 text-gray-color">TOTAL</p>
                    </div>
                    <div className="col-lg-1 col-sm-2 text-end">
                      <p className="font-16-400 text-gray-color">DELETE</p>
                    </div>
                  </div>

                  {/* Product List */}
                  {Object.values(cart).map((item) => (
                    <div className="row align-items-center mb-4" key={item.id}>
                      {/* Product Details */}
                      <div className="col-12 col-sm-6 mb-3 mb-sm-0">
                        <div className="cart-img d-flex align-items-center">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="me-3"
                           
                          />
                          <div>
                            <p className="cart-text-truncate mb-0 font-16-300 font-14-300 text-muted-gray-color text-truncate">
                              {item.name}
                            </p>
                            <p className="mb-0 font-16-500 font-14-500 text-muted-gray-color">
                              ₹ {item.price * Number(item.selectedWeight)} /-
                            </p>
                            <p className="mb-0">
                              <span className="text-color-orange font-12-300">
                                Size:{" "}
                              </span>
                              <span className="font-16-300 text-muted-gray-color">
                                {item.selectedWeight} kg
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Quantity Controls */}
                      <div className="col-5 col-sm-2">
                        <div className="d-flex justify-content-end">
                          <div className="d-flex border bg-white shadow rounded-3">
                            {/* Decrement Button */}
                            <button
                              className="btn py-1 font-24-500 font-14-500 text-chinese-black-color"
                              type="button"
                              onClick={() => decrementQuantity(item.id, item.selectedWeight)}
                              disabled={item.quantity <= 1}
                            >
                              -
                            </button>

                            {/* Quantity Display */}
                            <span className="mx-3 font-24-500 font-14-500 text-color-orange d-flex align-items-center">
                              {item.quantity}
                            </span>

                            {/* Increment Button */}
                            <button
                              className="btn py-1 font-24-500 font-14-500 text-chinese-black-color"
                              type="button"
                              onClick={() => incrementQuantity(item.id, item.selectedWeight)}
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Total Price for Item */}
                      <div className="col-5 col-sm-3 text-end d-flex justify-content-end">
                        <p className="mb-0 font-24-500 font-14-500 text-muted-gray-color">
                          ₹ {item.price * Number(item.selectedWeight) * item.quantity} /-
                        </p>
                      </div>
                      <div className="col-2 col-sm-1 text-end d-flex justify-content-end">
                        
                        <button
                          className="btn fs-4 text-danger p-0"
                          onClick={() => removeFromCart(item.id, item.selectedWeight)}
                        >
                          <RiDeleteBin6Line />
                        </button>
                      </div>
                      
                    </div>
                  ))}

                  {/* Summary Section */}
                  <div className="row justify-content-end mb-2">
                    <div className="col-6 col-md-3 font-12-500 text-center">
                      <span className="font-16-400 font-11-400 text-gray-color me-3">
                        TAX:
                      </span>{" "}
                      ₹ {tax.toFixed(2)} /-
                    </div>
                  </div>

                  <div className="row justify-content-end pb-3 border-bottom">
                    <div className="col-6 col-md-3 font-12-500 text-center">
                      <span className="font-16-400 font-11-400 text-gray-color me-3">
                        GST:
                      </span>{" "}
                      ₹ {gst.toFixed(2)} /-
                    </div>
                  </div>

                  <div className="row justify-content-end mb-2 mt-3">
                    <div className="col-8 col-md-3 text-center px-0 me-lg-5">
                      <span className="font-16-400 font-11-400 text-gray-color me-2">
                        AMOUNT TO PAY:
                      </span>
                      <span className="font-20-500 font-14-500 text-muted-gray-color">
                        {" "}
                        ₹ {amountToPay.toFixed(2)} /-
                      </span>
                    </div>
                  </div>

                  {/* Proceed to Pay Button */}
                  <div className="d-flex justify-content-center">
                    <NavLink to="/payment">
                      <button
                        className="proceed-pay-btn mx-3 border-0 text-white-color font-16-500 font-12-500 bg-orange-color border-radius-8"
                      >
                        Proceed to Pay
                      </button>
                    </NavLink>
                  </div>
                </div>
              </div>

              <div className="col-lg-12">
                <Faq faqs={CartFaq} />
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
