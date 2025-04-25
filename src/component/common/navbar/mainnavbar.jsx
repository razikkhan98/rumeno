import React, { useContext, useEffect, useRef, useState } from "react";
import Logo from "../../assets/img/logo/logorumneo.svg";
// import { IoSearch } from "react-icons/io5";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import User from "../../assets/img/user/loginuser.svg";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { NavLink, useLocation } from "react-router-dom";
import { CartContext } from "../Context";
import { RiLogoutBoxRLine } from "react-icons/ri";
import FarmerDetails from "../farmerDetailsModal/farmerDetails";

const Mainnav = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const [username, setUsername] = useState("");
  const [userEmail, setUserEmail] = useState("");
  console.log("activeLink: ", activeLink);
  const { cart } = useContext(CartContext);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const dropdownRef = useRef(null); // Step 1

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false); // Step 3
      }
    };

    document.addEventListener("mousedown", handleClickOutside); // Step 2
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
    setIsProductsOpen(false);
    setIsServicesOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if(isNavbarOpen) {
        setIsNavbarOpen(false);
      }
      if(isProductsOpen) {
        setIsProductsOpen(false);
      }
      if(isServicesOpen) {
        setIsServicesOpen(false)
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  },[isNavbarOpen, isProductsOpen, isServicesOpen]);



  const location = useLocation();
  console.log("location: ", location);

  const handleLinkClick = (link) => {
    setActiveLink(link);
    console.log("link: ", link);
    setIsProductsOpen(link === "Products" ? !isProductsOpen : false);
    setIsServicesOpen(link === "Services" ? !isServicesOpen : false);
  };

  useEffect(() => {
    const user = sessionStorage?.getItem("uid");
    const name = sessionStorage?.getItem("name");
    const email = sessionStorage?.getItem("email");

    if (user) {
      setIsLoggedIn(true);
      setUsername(name || "User");
      setUserEmail(email || "Email12@gmail.com");
    }
  }, []);

  // Dropdown

  const [open, setOpen] = useState(false);

  const toggleDropdown = () => {
    setOpen((prev) => !prev);
  };

  const handleLogout = () => {
    sessionStorage.removeItem("uid");
    setIsLoggedIn(false);
    setOpen(false);
  };

  const isRouteActive = (pathname, routeList = []) => {
    return routeList.some((route) => pathname.includes(route));
  };
  const active = isRouteActive(location.pathname, [
    "/allproducts",
    "/goatproduct",
    "/cattleproduct",
    "/poultryproduct",
    "/dogproduct",
    "productDetails",
  ]);
  console.log("active: ", active);

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light py-2 position-fixed w-100 bg-sky-blue-color"
      // style={{ backgroundColor: "#DDF0F8" }}
    >
      <div className="container-fluid px-lg-5 px-3 d-flex">
        <a className="navbar-brand me-lg-2 me-0" href="/#">
          <img
            src={Logo}
            alt="Logo"
            style={{ width: "68px", height: "68px" }}
          />
        </a>

        {/* Action Buttons  for mobile screen*/}
        <div className="d-lg-none d-flex justify-content-end align-items-center ms-auto">
          <NavLink to="/cart">
            <div className="position-relative">
              <div className="cart-navbar bg-light rounded-circle text-center d-flex align-items-center justify-content-center">
                <PiShoppingCartSimpleFill
                  className="fs-5 cart-icon-nav"
                  // style={{ height: "24px", width: "24px", color: "#FB9038" }}
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

          {!isLoggedIn ? (
            <><NavLink to="/login" className={"farm-btn my-3 mx-2"}>
            <button className="btn rounded-pill text-white">
              Login
            </button>
          </NavLink> </>
          ) : (
            <> </>
          )}

          {/* User Profile PopUp for Mobile Screen */}
          {isLoggedIn ? (
            <div className="position-relative">
              {/* User Icon and Arrow */}
              <div
                className="user-icon my-3 d-flex align-items-center justify-content-center"
                style={{ cursor: "pointer" }}
                onClick={toggleDropdown}
              >
                <img
                  src={User}
                  alt="User"
                  className="rounded-circle user-icon-img"
                />
                <MdOutlineKeyboardArrowDown />
              </div>

              {/* Dropdown user Profile  */}
              {open && (
                <div className="dropdown-menu dropdow-bg py-0 px-3 border-0 rounded-4 show">
                  {isLoggedIn ? (
                    <div>
                      <div
                        className="user-icon mt-3 d-flex align-items-center justify-content-center"
                        style={{ cursor: "pointer" }}
                      >
                        <img
                          src={User}
                          alt="User"
                          className="rounded-circle user-icon-img"
                        />
                      </div>
                      <p className="text-center mb-0 pt-2">{username}</p>
                      <p className="text-center mb-2">{userEmail}</p>

                    </div>
                  ) : (
                    <> </>
                  )}

                  <div className="d-flex justify-content-center border-top border-2 border-dark">
                    {isLoggedIn ? (
                      <div className="farm-btn my-3">
                        <button
                          onClick={handleLogout}
                          className="btn rounded-pill text-white"
                        >
                          {" "}
                          <RiLogoutBoxRLine className="me-2" /> Logout
                        </button>
                      </div>
                    ) : (
                      <> </>
                    )}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <> </>
          )}
        </div>

        <button
          className="navbar-toggler px-1 ms-1"
          type="button"
          onClick={toggleNavbar}
          aria-expanded={isNavbarOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`navbar-collapse custom-collapse ${
            isNavbarOpen ? "custom-collapse-show" : ""
          }`}
          id="navbarNav"
        >
          {/* Links Section */}
          <ul className="navbar-nav gap-lg-4 me-auto mb-2 mb-lg-0 text-center">
            <NavLink to={"/"} className={"text-decoration-none"}>
              <li className="nav-item">
                <a
                  className={`nav-link ${
                    String(location?.pathname) === "/" ? "active" : ""
                  }`}
                  onClick={() => handleLinkClick("Home")}
                >
                  Home
                </a>
              </li>
            </NavLink>

            <li className="nav-item">
              <a
                className={`nav-link ${active ? "active" : ""}`}
                onClick={() => handleLinkClick("Products")}
                aria-expanded={isProductsOpen}
              >
                Products
              </a>
              <div
                //  ref={dropdownRef}
                className={`products-collapse shadow mt-2 w-100 rounded-bottom-5 ${
                  isProductsOpen ? "show" : ""
                }`}
              >
                <div className="products-collapse-list gap-4 ms-lg-5 py-3">
                  <div className="ms-4">
                    <p className="products-title text-start">
                      VETERINARY PRODUCTS
                    </p>
                    <ul className="list-unstyled products-list text-start">
                      <NavLink
                        to={"/allproducts"}
                        className="text-decoration-none"
                      >
                        <li>All Animal Supplements</li>
                      </NavLink>
                      <NavLink
                        to="/goatproduct"
                        className="text-decoration-none"
                      >
                        <li>Goat Supplements</li>
                      </NavLink>
                      <NavLink
                        to="/cattleproduct"
                        className="text-decoration-none"
                      >
                        <li>Cattle Supplements</li>
                      </NavLink>
                      <NavLink
                        to="/poultryproduct"
                        className="text-decoration-none"
                      >
                        <li>Poultry Supplements</li>
                      </NavLink>
                      <NavLink
                        to="/dogproduct"
                        className="text-decoration-none"
                      >
                        <li>Dog Supplements</li>
                      </NavLink>
                      {/* <li>Poultry Supplements</li> */}
                    </ul>
                  </div>
                  <div>
                    <p className="products-title text-start">
                      OTHER CATEGORIES
                    </p>
                    <ul className="list-unstyled products-list text-start">
                      <NavLink
                        to={"/equipment"}
                        className="text-decoration-none"
                      >
                        <li>Farmhouse Equipments</li>
                        <li>Human Consumable</li>
                        <li>Crop Seeds</li>
                      </NavLink>
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
                className={`nav-link ${
                  String(location?.pathname) === "/service" ||
                  String(location?.pathname) === "/equipment" ||
                  String(location?.pathname) === "/goatfarming" ||
                  String(location?.pathname) === "/dairyconsultant"
                    ? "active"
                    : ""
                }`}
                // href=""
                onClick={() => handleLinkClick("Services")}
              >
                Services
              </div>
              <div
                className={`products-collapse shadow mt-2 w-100 rounded-bottom-5 ${
                  isServicesOpen ? "show" : ""
                }`}
              >
                <div className="products-collapse-list gap-5 ms-lg-5 py-3 px-1">
                  <div className="ms-lg-4 ms-2">
                    <p className="products-title text-start text-uppercase">
                      VETERINARY Services
                    </p>
                    <ul className="list-unstyled products-list text-start">
                      <NavLink to="/service" className="text-decoration-none">
                      <li className="cursor">Why Choose US?</li>
                      </NavLink>
                      <NavLink to="/service" className="text-decoration-none">
                        <li className="cursor">Our Consulting team members</li>
                      </NavLink>
                      <NavLink
                        to={"/equipment"}
                        className="text-decoration-none"
                      >
                        <li className="cursor">Business Startup Support </li>
                      </NavLink>
                      <NavLink
                        to={"/equipment"}
                        className="text-decoration-none"
                      >
                        <li className="cursor">Query Form</li>
                      </NavLink>
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
                      <NavLink
                        to={"/goatfarming"}
                        className="text-decoration-none"
                      >
                        <li className="cursor">FAQs</li>
                      </NavLink>
                    </ul>
                  </div>
                  <div className="me-2">
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
                      <NavLink
                        to={"/dairyconsultant"}
                        className="text-decoration-none"
                      >
                        <li>Dairy Management</li>
                      </NavLink>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <NavLink to={"/blog"} className={"text-decoration-none"}>
              <li className="nav-item">
                <div
                  className={`nav-link ${
                    String(location?.pathname) === "/blog" ? "active" : ""
                  }`}
                  onClick={() => handleLinkClick("Blogs")}
                >
                  Blogs
                </div>
              </li>
            </NavLink>
            <NavLink to={"/contactus"} className={"text-decoration-none"}>
              <li className="nav-item">
                <div
                  className={`nav-link ${
                    String(location?.pathname) === "/contactus" ? "active" : ""
                  }`}
                  onClick={() => handleLinkClick("Contact Us")}
                >
                  Contact Us
                </div>
              </li>
            </NavLink>
            <li className="d-lg-none nav-itme mt-2">
              {isLoggedIn ? (
                <>
                  {" "}
                  {/* Smart Live stock button and Open Modal */}
                  <FarmerDetails />
                </>
              ) : (
                <></>
              )}
            </li>
          </ul>
        </div>
        
        {/* Action Buttons for laptop screen */}
        <div className="d-none d-lg-flex justify-content-center align-items-center  gap-lg-4">
          {isLoggedIn ? (
            <>
              {" "}
              {/* Smart Live stock button and Open Modal */}
              <FarmerDetails />
            </>
          ) : (
            <>
              <NavLink to="/login" className={"farm-btn my-3"}>
                <button className="btn rounded-pill text-white">Login</button>
              </NavLink>
            </>
          )}
          <NavLink to="/cart">
            <div className="position-relative">
              <div
                className="cart-navbar bg-light rounded-circle text-center m-auto d-flex align-items-center justify-content-center"
                style={{ height: "40px", width: "40px" }}
              >
                <PiShoppingCartSimpleFill
                  className="fs-5 cart-icon-nav"
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

          {/* User Profile PopUp for Large Screen */}
          {isLoggedIn ? (
            <div className="position-relative">
              {/* User Icon and Arrow */}
              <div
                className="user-icon my-3 d-flex align-items-center justify-content-center"
                style={{ cursor: "pointer" }}
                onClick={toggleDropdown}
              >
                <img
                  src={User}
                  alt="User"
                  className="rounded-circle user-icon-img"
                />
                <MdOutlineKeyboardArrowDown />
              </div>

              {/* Dropdown user Profile  */}
              {open && (
                <div className="dropdown-menu dropdow-bg py-0 px-3 border-0 rounded-4 show">
                  {isLoggedIn ? (
                    <div>
                      <div
                        className="user-icon mt-3 d-flex align-items-center justify-content-center"
                        style={{ cursor: "pointer" }}
                      >
                        <img
                          src={User}
                          alt="User"
                          className="rounded-circle user-icon-img"
                        />
                      </div>
                      <p className="text-center mb-0 pt-2">{username}</p>
                      <p className="text-center mb-2">{userEmail}</p>

                    </div>
                  ) : (
                    <> </>
                  )}

                  <div className="d-flex justify-content-center border-top border-2 border-dark">
                    {isLoggedIn ? (
                      <div className="farm-btn my-3">
                        <button
                          onClick={handleLogout}
                          className="btn rounded-pill text-white"
                        >
                          {" "}
                          <RiLogoutBoxRLine className="me-2" /> Logout
                        </button>
                      </div>
                    ) : (
                      <> </>
                    )}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <> </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Mainnav;
