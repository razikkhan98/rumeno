import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../../common/navbar/mainnavbar";
import Faq from "../faq";
import Footer from "../../common/footer/index";
import { CartContext } from "../../common/Context";
import Header from "../../common/Header/header";

const CartFaq = [
  {
    question: "1. How long will it take to get my orders?",
    answer: "Delivery times vary based on location...",
  },
  {
    question: "2. How to Sell Veterinary Products?",
    answer: "...................",
  },
];

const Cart = () => {
  const { cart, incrementQuantity, decrementQuantity } =
    useContext(CartContext);

  // Calculate total amount correctly
  const totalAmount = cart?.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );
  const tax = totalAmount * 0.05; // Example: 15% tax
  const gst = totalAmount * 0.18; // Example: 18% GST
  const amountToPay = totalAmount + tax + gst;

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
              <NavLink to="/products">
                <button className="btn btn-warning mt-3">Go to Shop</button>
              </NavLink>
            </div>
          ) : (
            <div className="row">
              <div className="col-12">
                <div className="cart-container bg-skyblue border-radius-16 p-4">
                  {/* Header */}
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

                  {/* Product List */}
                  {Object.values(cart).map((item) => (
                    <div className="row align-items-center mb-4" key={item.id}>
                      {/* Product Details */}
                      <div className="col-12 col-sm-6 mb-3 mb-sm-0">
                        <div className="d-flex align-items-center">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="me-3"
                            style={{
                              width: "60px",
                              height: "60px",
                              objectFit: "cover",
                            }}
                          />
                          <div>
                            <p className="mb-0 font-16-300 text-muted-gray-color">
                              {item.name}
                            </p>
                            <p className="mb-0 font-16-500 text-muted-gray-color">
                              ₹ {item.price} /-
                            </p>
                            <p className="mb-0">
                              <span className="text-color-orange font-12-300">
                                Size:{" "}
                              </span>
                              <span className="font-16-300 text-muted-gray-color">
                                {item.selectedWeight}
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Quantity Controls */}
                      <div className="col-6 col-sm-3">
                        <div className="d-flex justify-content-end">
                          <div className="d-flex border bg-white shadow rounded-3">
                            {/* Decrement Button */}
                            <button
                              className="btn py-1 font-24-500 text-chinese-black-color"
                              type="button"
                              onClick={() => decrementQuantity(item.id)}
                              disabled={item.quantity <= 1}
                            >
                              -
                            </button>

                            {/* Quantity Display */}
                            <span className="mx-3 font-24-500 text-color-orange d-flex align-items-center">
                              {item.quantity}
                            </span>

                            {/* Increment Button */}
                            <button
                              className="btn py-1 font-24-500 text-chinese-black-color"
                              type="button"
                              onClick={() => incrementQuantity(item.id)}
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Total Price for Item */}
                      <div className="col-6 col-sm-3 text-end">
                        <p className="mb-0 font-24-500 text-muted-gray-color">
                          ₹ {item.quantity * item.price} /-
                        </p>
                      </div>
                    </div>
                  ))}

                  {/* Summary Section */}
                  <div className="row justify-content-end mb-2">
                    <div className="col-6 col-md-3 text-end">
                      <span className="font-16-400 text-gray-color me-3">
                        TAX:
                      </span>{" "}
                      ₹ {tax} /-
                    </div>
                  </div>

                  <div className="row justify-content-end pb-3 border-bottom">
                    <div className="col-6 col-md-3 text-end">
                      <span className="font-16-400 text-gray-color me-3">
                        GST:
                      </span>{" "}
                      ₹ {gst} /-
                    </div>
                  </div>

                  <div className="row justify-content-end mb-2 mt-3">
                    <div className="col-6 col-md-3 text-end">
                      <span className="font-16-400 text-gray-color me-3">
                        AMOUNT TO PAY:
                      </span>
                      <span className="font-20-500 text-muted-gray-color">
                        {" "}
                        ₹ {amountToPay} /-
                      </span>
                    </div>
                  </div>

                  {/* Proceed to Pay Button */}
                  <div className="d-flex justify-content-center">
                    <NavLink to="/payment">
                      <button
                        className=" mx-3 border-0 text-white-color font-16-500 bg-orange-color border-radius-8"
                        style={{ width: "200px", height: "56px" }}
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

      {/* <div className="addtocartfooter">
        <div className="container">
          <div className="row">
            <Flipcard />
          </div>
        </div>
      </div>  */}
      <Footer />
    </>
  );
};

export default Cart;
