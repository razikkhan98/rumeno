import React, { useContext, useEffect, useState } from "react";
import Logo from "../../assets/img/logo/logorumneo.svg";
import { IoSearch } from "react-icons/io5";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import User from "../../assets/img/user/loginuser.svg";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { CartContext } from "../Context";

const Mainnav = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const { cart } = useContext(CartContext);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsProductsOpen(link === "Products" ? !isProductsOpen : false);
    setIsServicesOpen(link === "Services" ? !isServicesOpen : false);
  };

  useEffect(() => {
    const user = sessionStorage?.getItem("uid");
    if (user) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light py-2 position-fixed w-100 bg-sky-blue-color"
    // style={{ backgroundColor: "#DDF0F8" }}
    >
      <div className="container-fluid px-5">
        <a className="navbar-brand" href="/#">
          <img
            src={Logo}
            alt="Logo"
            style={{ width: "100px", height: "68px" }}
          />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar}
          aria-expanded={isNavbarOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`navbar-collapse custom-collapse ${isNavbarOpen ? "custom-collapse-show" : ""
            }`}
          id="navbarNav"
        >
          {/* Links Section */}
          <ul className="navbar-nav gap-lg-4 me-auto mb-2 mb-lg-0 text-center">
            <li className="nav-item">
              <a
                className={`nav-link ${activeLink === "Home" ? "active" : ""}`}
                href="/"
                onClick={() => handleLinkClick("Home")}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${activeLink === "Products" ? "active" : ""
                  }`}
                onClick={() => handleLinkClick("Products")}
                aria-expanded={isProductsOpen}
              >
                Products
              </a>
              <div
                className={`products-collapse shadow mt-2 w-100 rounded-bottom-5 ${isProductsOpen ? "show" : ""
                  }`}
              >
                <div className="products-collapse-list gap-4 ms-lg-5 py-3">
                  <div className="ms-4">
                    <p className="products-title text-start">
                      VETERINARY PRODUCTS
                    </p>
                    <ul className="list-unstyled products-list text-start">
                      <li>All Animal Supplements</li>
                      <NavLink to="/products" className="text-decoration-none">
                        <li>Goat Supplements</li>
                      </NavLink>
                      <li>Sheep Supplements</li>
                      <li>Buffalo Supplements</li>
                      <li>Cow Supplements</li>
                      {/* <li>Poultry Supplements</li> */}
                    </ul>
                  </div>
                  <div>
                    <p className="products-title text-start">
                      OTHER CATEGORIES
                    </p>
                    <ul className="list-unstyled products-list text-start">
                      <li>Farmhouse Equipments</li>
                      <li>Human Consumable</li>
                      <li>Crop Seeds</li>
                    </ul>
                  </div>
                  <div>
                    <p className="products-title text-start">GOAT FOR SELL</p>
                    <ul className="list-unstyled products-list text-start">
                      <li>Lorem Ipsum</li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            <li className="nav-item">
              <div
                className={`nav-link ${activeLink === "Services" ? "active" : ""
                  }`}
                // href=""
                onClick={() => handleLinkClick("Services")}
              >
                Services
              </div>
              <div
                className={`products-collapse shadow mt-2 w-100 rounded-bottom-5 ${isServicesOpen ? "show" : ""
                  }`}
              >
                <div className="products-collapse-list gap-5 ms-lg-5 py-3">
                  <div className="ms-4">
                    <p className="products-title text-start text-uppercase">
                      VETERINARY Services
                    </p>
                    <ul className="list-unstyled products-list text-start">
                      <li className="cursor">Why Choose US?</li>
                      <NavLink to="/service" className="text-decoration-none">
                        <li className="cursor">Our Consulting team members</li>
                      </NavLink>
                      <li className="cursor">Business Startup Support </li>
                      <li className="cursor">Query Form</li>
                      {/* <li>Poultry Supplements</li> */}
                    </ul>
                  </div>
                  <div>
                    <p className="products-title text-start text-uppercase">
                      Goat Farming Consultant
                    </p>
                    <ul className="list-unstyled products-list text-start">
                      <NavLink
                        to={"/goatfarming"}
                        className="text-decoration-none"
                      >
                        <li>About</li>
                      </NavLink>
                      <li className="cursor">FAQs</li>
                    </ul>
                  </div>
                  <div>
                    <p className="products-title text-start text-uppercase">
                      dairy consultant
                    </p>
                    <ul className="list-unstyled products-list text-start">
                      <NavLink
                        to={"/dairyconsultant"}
                        className="text-decoration-none"
                      >
                        <li>About</li>
                      </NavLink>
                      <li>Dairy Management</li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <NavLink to={"/blog"} className={"text-decoration-none"}>
              <li className="nav-item">
                <div
                  className={`nav-link ${activeLink === "Blogs" ? "active" : ""}`}
                  onClick={() => handleLinkClick("Blogs")}
                >
                  Blogs
                </div>
              </li>
            </NavLink>
            <NavLink to={"/contactus"} className={"text-decoration-none"}>
              <li className="nav-item">
                <div
                  className={`nav-link ${activeLink === "Contact Us" ? "active" : ""
                    }`}
                  onClick={() => handleLinkClick("Contact Us")}
                >
                  Contact Us
                </div>
              </li>
            </NavLink>
          </ul>

          {/* Action Buttons */}

          <div className="d-lg-flex align-items-center gap-4">
            {isLoggedIn ? (
              <>
                {" "}
                <div className="text-center farm-btn">
                  <NavLink to="/farmdata">
                    <button className="btn rounded-pill text-white p-0">
                      Smart Livestock Manager
                    </button>
                  </NavLink>
                </div>
              </>
            ) : (
              <div className="text-center farm-btn px-3">
                <NavLink to="/login">
                  <button className="btn rounded-pill text-white">Login</button>
                </NavLink>
              </div>
            )}

            <div
              className="cursor search-icon bg-light rounded-circle text-center m-auto my-3 d-flex align-items-center justify-content-center"
              style={{ height: "40px", width: "40px" }}
            >
              <IoSearch
                className="fs-5"
                style={{ height: "24px", width: "24px", color: "#FB9038" }}
              />
            </div>

            <NavLink to="/cart">
              <div className="position-relative">
                <div
                  className="cart-icon bg-light rounded-circle text-center m-auto d-flex align-items-center justify-content-center"
                  style={{ height: "40px", width: "40px" }}
                >
                  <PiShoppingCartSimpleFill
                    className="fs-5"
                    style={{ height: "24px", width: "24px", color: "#FB9038" }}
                  />
                </div>
                {cart && Object.keys(cart).length > 0 && (
                  <span
                    className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                    style={{
                      fontSize: "12px",
                      minWidth: "20px",
                      height: "20px",
                    }}
                  >
                    {Object.values(cart).reduce(
                      (total, item) => total + item.quantity,
                      0
                    )}
                  </span>
                )}
              </div>
            </NavLink>
            <div
              className="user-icon my-3 d-flex align-items-center justify-content-center gap-2"
              style={{ cursor: "pointer" }}
            >
              <img
                src={User}
                alt="User"
                className="rounded-circle"
                style={{ height: "40px", width: "40px" }}
              />
              <MdOutlineKeyboardArrowDown />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Mainnav;
