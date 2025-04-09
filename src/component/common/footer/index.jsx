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
import ReactWhatsapp from "react-whatsapp";

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
                <img src={Image1} alt="Loading" />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="footer-link px-2">
                <p className="footer-heading josefin-sans-font-family-500">
                  Pages
                </p>
                <ul className="list-unstyled footer-ul">
                  <li className="py-1 inter-font-family-400">
                    <NavLink to="/" className="text-light text-decoration-none">
                      Home
                    </NavLink>
                  </li>
                  <li className="py-1 inter-font-family-400">
                    <NavLink
                      to="/blog"
                      className="text-light text-decoration-none py-2"
                    >
                      Blog
                    </NavLink>
                  </li>
                  <li className="py-1 inter-font-family-400">
                    <NavLink
                      to="/products"
                      className="text-light text-decoration-none py-2"
                    >
                      Products
                    </NavLink>
                  </li>
                  <li className="py-1 inter-font-family-400">
                    <NavLink
                      to="/privacypolicy"
                      className="text-light text-decoration-none"
                    >
                      Privacy Policy
                    </NavLink>
                  </li>
                  {/* <li className="py-1 inter-font-family-400">
                    <NavLink
                      to="/terms-conditions"
                      className="text-light text-decoration-none"
                    >
                      Terms & Conditions
                    </NavLink>
                  </li> */}
                </ul>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="footer-contact px-2">
                <p className="footer-heading-contact josefin-sans-font-family-500">
                  Contact Us
                </p>
                <div className="text-light d-flex align-items-center mb-4">
                  <MdLocationOn
                    className=" rounded-circle p-1 me-3"
                    style={{
                      background: "#8BC6E5",
                      height: "24px",
                      width: "28px",
                    }}
                  />

                  <p className="text-light footer-contact mb-0  inter-font-family-400">
                    {" "}
                    598 Lala Mahaveer Prasad Rd, Sadar Bazar, Lucknow, UP 226002
                  </p>
                </div>
                <p className="text-light mb-4  inter-font-family-400">
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
                <a
                  href="mailto:rumeno.farmotech@gmail.com"
                  className="text-light text-decoration-none inter-font-family-400"
                >
                  <PiEnvelopeSimpleFill
                    className="me-2 rounded-circle p-1"
                    style={{
                      background: "#DD3675",
                      height: "24px",
                      width: "24px",
                    }}
                  />
                  rumeno.farmotech@gmail.com
                </a>
              </div>
            </div>
            <div className="col-lg-12 m-auto pt-4">
              <div
                className="row text-center mt-4 d-flex align-items-center justify-content-between py-4"
                style={{
                  background: "rgba(191, 227, 241, 0.1)",
                  borderRadius: "10px",
                }}
              >
                <p
                  className="col-lg-3 text-light mb-1 inter-font-family-400"
                  style={{ fontSize: "12px", fontWeight: "400" }}
                >
                  Copyright @ 2024 Rumeno Farmotech <br />{" "}
                  <span className="inter-font-family-500 font-14-500">
                    All Rights Reserved
                  </span>
                </p>

                {/* Social Icons */}
                <div className="social-icons d-flex justify-content-center col-lg-5 py-3 py-lg-0 " style={{ color: "#DAA51E" }}>
                  <li className="list-unstyled text-decoration-none">
                    <a
                      href="https://www.facebook.com/RumenoFarmotech/"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <IoLogoFacebook
                        className="me-4 text-decoration-none"
                        size={28}
                        style={{ color: "#DAA51E" }}
                      />
                    </a>
                  </li>
                  <li className="list-unstyled text-decoration-none">
                    <a
                      href="https://www.instagram.com/rumenofarmotech/"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <AiFillInstagram
                        className="me-4 text-decoration-none"
                        style={{ color: "#DAA51E" }}
                        size={28}
                      />
                    </a>
                  </li   >

                  <li className="list-unstyled text-decoration-none">
                    <a
                      href="https://www.youtube.com/@RumenoFarmotech-bg5y"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <FaYoutube
                        className="me-4 text-decoration-none"
                        style={{ color: "#DAA51E" }}
                        size={28}
                      />
                    </a>
                  </li>

                  <li className="list-unstyled text-decoration-none">
                    <ReactWhatsapp
                      className="bg-transparent border-0"
                      number="+91 7355043892"
                      message="Hello World"
                    >
                      <FaWhatsapp
                        className="me-4 text-decoration-none"
                        style={{ color: "#DAA51E" }}
                        size={28}
                      />
                    </ReactWhatsapp>
                  </li>
                  <li className="lh-1 list-unstyled">
                    <a
                      href="https://www.tradeindia.com/rumeno-36048586/product-services.html"
                      rel="noreferrer"
                      target="_blank"
                      className="me-3 text-decoration-none"
                    >
                      <svg
                        version="1.0"
                        className="rounded mx-1"
                        width="30px"
                        height="28px"
                        viewBox="0 0 225.000000 225.000000"
                        preserveAspectRatio="xMidYMid meet"
                      >
                        <g
                          transform="translate(0.000000,225.000000) scale(0.100000,-0.100000)"
                          fill="#DAA51E"
                          stroke="none"
                        >
                          <path
                            d="M0 1125 l0 -1125 1125 0 1125 0 0 1125 0 1125 -1125 0 -1125 0 0
                              -1125z m1784 659 c3 -9 6 -69 6 -134 0 -114 -1 -118 -22 -124 -30 -8 -292 -8
                              -312 0 -14 5 -16 27 -16 140 l0 134 169 0 c145 0 170 -2 175 -16z m-846 -206
                               l3 -128 129 0 c113 0 130 -2 139 -17 14 -28 14 -209 -1 -233 -12 -18 -23 -20
                              -140 -20 l-128 0 0 -220 0 -221 25 -24 c32 -32 112 -35 170 -5 22 11 45 20 52
                              20 22 0 33 -47 33 -145 0 -132 4 -130 -245 -130 -158 0 -196 3 -226 17 -89 42
                              -140 116 -159 229 -5 35 -10 159 -10 275 l0 211 -48 -5 c-69 -6 -73 2 -70 144
                                l3 119 58 3 57 3 0 117 c0 117 4 135 27 143 7 2 84 2 170 -1 l158 -5 3 -127z
                             m846 -144 c8 -20 8 -948 0 -968 -5 -14 -30 -16 -175 -16 l-169 0 0 500 0 500
                              169 0 c145 0 170 -2 175 -16z"
                          />
                        </g>
                      </svg>
                    </a>
                  </li>
                  <li className="lh-1 list-unstyled">
                    <a
                      href="https://www.indiamart.com/rumeno-lucknow/?pid=2854059774012&c_id=62&mid=&pn=Pro%20Lac%20Power%20Calf%20Milk%20Replacer"
                      rel="noreferrer"
                      target="_blank"
                      className="me-3 text-decoration-none"
                    >
                      <svg
                        version="1.0"
                        className=" mx-2"
                        width="28px"
                        height="28px"
                        viewBox="0 0 364.000000 369.000000"
                        preserveAspectRatio="xMidYMid meet"
                      >
                        <g
                          transform="translate(0.000000,369.000000) scale(0.100000,-0.100000)"
                          fill="#DAA51E"
                          stroke="none"
                        >
                          <path
                            d="M2311 3551 c-67 -51 -108 -89 -116 -109 -16 -36 -55 -65 -84 -60 -12
                             2 -48 -18 -91 -50 -79 -59 -80 -63 -55 -170 32 -135 117 -252 220 -302 40 -20
                            66 -24 130 -25 70 0 86 4 134 30 93 51 158 155 182 286 29 162 -41 360 -159
                              452 -19 15 -40 27 -46 26 -6 0 -58 -36 -115 -78z"
                          />
                          <path
                            d="M880 3470 c-44 -44 -86 -80 -91 -80 -6 0 -37 -21 -69 -47 -51 -42
                              -59 -53 -59 -84 -2 -95 60 -204 139 -247 60 -32 150 -28 204 8 47 32 93 100
                                113 169 37 127 -16 283 -115 339 l-41 23 -81 -81z"
                          />
                          <path
                            d="M1100 2810 c-263 -33 -489 -109 -670 -228 -428 -279 -543 -787 -293
                              -1287 82 -162 180 -294 341 -459 94 -96 107 -106 110 -85 1 13 25 373 52 799
                               36 580 53 786 64 819 9 24 15 45 13 47 -1 1 -70 -52 -152 -119 -474 -386 -459
                               -375 -482 -366 l-22 8 20 71 c52 189 188 371 372 498 101 70 261 146 376 178
                                103 29 105 29 117 -35 6 -31 3 -38 -30 -69 -26 -23 -31 -32 -17 -27 28 9 84
                              -20 121 -61 45 -51 69 -105 163 -364 90 -245 155 -409 238 -597 l49 -112 -2
                              -218 -3 -218 -48 64 c-97 131 -207 361 -343 723 -43 114 -80 205 -83 202 -3
                              -3 -22 -337 -43 -742 l-36 -737 21 -18 c44 -35 405 -207 522 -247 136 -47 310
                             -92 436 -114 110 -19 347 -41 356 -33 8 9 -59 1171 -99 1686 -10 131 -13 150
                            -24 130 -6 -13 -55 -125 -109 -249 -176 -408 -248 -535 -364 -642 -96 -90 -97
                            -89 -105 70 -12 252 -8 333 15 367 57 83 150 302 239 560 71 207 118 292 210
                           386 98 99 165 133 273 138 72 3 84 0 143 -29 119 -59 208 -172 253 -325 33
                            -111 236 -1313 307 -1815 9 -69 20 -129 24 -133 19 -22 223 107 329 208 216              
                               205 314 489 272 786 -15 100 -75 288 -125 386 -256 510 -854 951 -1528 1128
                               -217 57 -358 76 -583 80 -110 2 -234 0 -275 -5z"
                          />
                        </g>
                      </svg>
                    </a>
                  </li>
                </div>
                <p className="col-lg-4 text-light mb-1 inter-font-family-400 font-12-400">
                  Powered By <br />
                  <span className="inter-font-family-500 font-14-500">
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
