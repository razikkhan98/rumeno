import React from "react";
import Image1 from "../../../component/assets/img/footer/footerimg.svg";
import { NavLink } from "react-router-dom";
import { MdLocationOn } from "react-icons/md";
import { FaPhone, FaYoutube } from "react-icons/fa6";
import Flipcard from "../../common/footerFlipCard/footerCard";
import { PiEnvelopeSimpleFill } from "react-icons/pi";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoFacebook } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="addtocartfooter">
        <div className="container">
          <div className="row">
            <Flipcard />
          </div>
        </div>
      </div>
      <div className="footer py-5">
        <div className="container pt-lg-5">
          <div className="row">
            <div className="col-lg-4">
              <div className="footer-img">
                <img src={Image1} alt="" />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="footer-link ">
                <p className="footer-heading">Pages</p>
                <ul className="list-unstyled footer-ul">
                  <li>
                    <NavLink to="/" className="text-light text-decoration-none">
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/blog"
                      className="text-light text-decoration-none"
                    >
                      Blog
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/products"
                      className="text-light text-decoration-none"
                    >
                      Products
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/privacy-policy"
                      className="text-light text-decoration-none"
                    >
                      Privacy Policy
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/terms-conditions"
                      className="text-light text-decoration-none"
                    >
                      Terms & Conditions
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="footer-contact">
                <p className="footer-heading-contact">Contact Us</p>
                <div className="text-light d-flex align-items-center mb-4">
                  <MdLocationOn
                    className=" rounded-circle p-1 me-3"
                    style={{
                      background: "#8BC6E5",
                      height: "24px",
                      width: "28px",
                    }}
                  />

                  <p className="text-light footer-contact mb-0">
                    {" "}
                    598 Lala Mahaveer Prasad Rd, Sadar Bazar, Lucknow, UP 226002
                  </p>
                </div>
                <p className="text-light mb-4">
                  <FaPhone
                    className="me-2 rounded-circle p-1"
                    style={{
                      background: "#EC7229",
                      height: "24px",
                      width: "24px",
                    }}
                  />{" "}
                  +91-7355043892
                </p>
                <p className="text-light">
                  <PiEnvelopeSimpleFill
                    className="me-2 rounded-circle p-1"
                    style={{
                      background: "#DD3675",
                      height: "24px",
                      width: "24px",
                    }}
                  />{" "}
                  rumeno.farmotech@gmail.com
                </p>
              </div>
            </div>
            <div className="col-lg-12 m-auto pt-4">
              <div
                className="text-center mt-4 d-flex align-items-center justify-content-between px-4 py-4"
                style={{
                  background: "rgba(191, 227, 241, 0.1)",
                  borderRadius: "10px",
                }}
              >
                <p
                  className="text-light mb-1"
                  style={{ fontSize: "12px", fontWeight: "400" }}
                >
                  Copyright @ 2024 Rumeno Farmotech <br />{" "}
                  <span style={{ fontSize: "14px", fontWeight: "500" }}>
                    All Rights Reserved
                  </span>
                </p>

                {/* Social Icons */}
                <div className="social-icons d-flex" style={{ color: "#DAA51E" }}>
                  <li className="list-unstyled text-decoration-none">
                    <a href="">
                      <IoLogoFacebook
                        className="me-3 text-decoration-none"
                        size={28}
                      />
                    </a>
                  </li>
                  <li className="list-unstyled text-decoration-none">
                    <a href="">
                      <AiFillInstagram className="me-3 text-decoration-none" size={28} />
                    </a>
                  </li>

                  <li className="list-unstyled text-decoration-none">
                    <a href="">
                      <FaYoutube className="me-3 text-decoration-none" size={28} />
                    </a>
                  </li>

                  <li className="list-unstyled text-decoration-none">
                    <a href="">
                      <FaWhatsapp  className="me-3 text-decoration-none" size={28} />
                    </a>
                  </li>

                </div>
                <p
                  className="text-light mb-1"
                  style={{ fontSize: "12px", fontWeight: "400" }}
                >
                  Powered By <br />
                  <span style={{ fontSize: "14px", fontWeight: "500" }}>
                    Intelligence Fusion Technologies
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
