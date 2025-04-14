import React, { useState } from "react";
import Logo from "../../assets/img/logo/logorumneo.svg";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap CSS is loaded
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Ensure Bootstrap JS is loaded

import { IoSearch } from "react-icons/io5";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  // const addGoat = () => {
  //   localStorage.removeItem("currentIndex");
  // };

  // const location = useLocation();
  // const selectedAnimal = location.state?.animal || "Goat"; // Default: Goat

  const user = sessionStorage?.getItem("animalName");
  const selectedAnimal = user ? user : "Goat";
  return (
    <>
      <div>
        <div style={{ backgroundColor: "#DDF0F8" }}>
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <nav className="navbar navbar-expand-lg px-3 px-md-5">
                  <div className="container-fluid">
                    {/* Logo Section */}
                    <a className="navbar-brand" href="#/">
                      <img
                        src={Logo}
                        alt="Logo"
                        style={{ width: "66px", height: "68px" }}
                      />
                    </a>

                    {/* Navbar Toggler for Mobile */}
                    <button
                      className="navbar-toggler"
                      type="button"
                      aria-expanded={isNavbarOpen}
                      onClick={toggleNavbar}
                      aria-label="Toggle navigation"
                    >
                      <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Collapsible Navbar Content */}
                    <div
                      className={`navbar-collapse custom-collapse ${
                        isNavbarOpen ? "custom-collapse-show" : ""
                      }`}
                      id="navbarContent"
                    >
                      <div className="d-flex flex-column flex-lg-row align-items-lg-center ms-auto">
                        {/* Search Input */}
                        <div className="position-relative navbar-searchbar my-3 my-lg-0 me-lg-4">
                          <IoSearch
                            className="position-absolute"
                            style={{ left: "12px", top: "18px", color: "#999" }}
                          />
                          <input
                            type="search"
                            className="form-control h-100 ps-5"
                            placeholder="Search by unique ID"
                            style={{
                              maxWidth: "310px",
                              borderRadius: "8px",
                            }}
                          />
                        </div>

                        {/* Add Goat Button */}
                        {/* <NavLink to="/parentform">
                          <button
                            className="btn add-animal-btn text-white px-4 border rounded-pill"
                            style={{
                              background:
                                "linear-gradient(to right, #89C9E6, #DD3675, #EC7229)",
                            }}
                            onClick={() => addGoat()}
                          >
                            <span className="me-1">+</span>
                            {`Add ${selectedAnimal}`}
                          </button>
                        </NavLink> */}
                      </div>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <div style={{ background: "#F4FAFD" }}>
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12 px-5">
                <nav aria-label="breadcrumb" className="py-2 px-3">
                  <ol className="breadcrumb mb-0">
                    <li className="breadcrumb-item">Farm Data</li>
                    <li className="breadcrumb-item active">{selectedAnimal}</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
