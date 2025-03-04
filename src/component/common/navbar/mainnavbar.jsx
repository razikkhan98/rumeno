// import React from "react";
// import Logo from "../../assets/img/logo/logorumneo.svg";
// import { IoSearch } from "react-icons/io5";
// import { PiShoppingCartSimpleFill } from "react-icons/pi";
// import User from "../../assets/img/user/loginuser.svg";
// import { MdOutlineKeyboardArrowDown } from "react-icons/md";

// const Mainnav = () => {
//   return (
//     <>
//       <div>
//         <div style={{ backgroundColor: "#DDF0F8" }}>
//           <div className="container-fluid">
//             <div className="row">
//               <div className="col-lg-12">
//                 <header className="px-5 detail-header">
//                   <div className="d-flex justify-content-between align-items-center p-2">
//                     <div className="header-logo d-flex align-items-center">
//                       <img
//                         src={Logo}
//                         alt="Logo"
//                         className="pe-5"
//                         style={{ width: "100px", height: "68px" }}
//                       />
//                       <ul
//                         className="list-unstyled text-decoration-none mb-0 gap-5 d-flex"
//                         style={{ color: "#707070", fontSize: "14px", fontWeight: "400" }}
//                       >
//                         <li>Home</li>
//                         <li>Veterinary Product</li>
//                         <li>Veterinary Service</li>
//                         <li>Blogs</li>
//                         <li>Contact Us</li>
//                       </ul>
//                     </div>
//                     <div className=" d-flex gap-4">
//                       <button
//                         className="rounded-pill px-4 text-light border-0"
//                         style={{
//                           fontSize: "16px",
//                           fontWeight: "600",
//                           background:
//                             "linear-gradient(to right, #89C9E6, #DD3675, #EC7229)",
//                         }}
//                       >
//                         Form Data
//                       </button>

//                       <div
//                         className="bg-light rounded-circle text-center d-flex align-items-center justify-content-center"
//                         style={{ height: "40px", width: "40px" }}
//                       >
//                         <IoSearch
//                           className="fs-5"
//                           style={{ color: "#FB9038" }}
//                         />
//                       </div>
//                       <div
//                         className="bg-light rounded-circle text-center d-flex align-items-center justify-content-center"
//                         style={{ height: "40px", width: "40px" }}
//                       >
//                         <PiShoppingCartSimpleFill
//                           className="fs-5"
//                           style={{ color: "#FB9038" }}
//                         />
//                       </div>
//                       <div
//                         className="rounded-circle gap-2 text-center d-flex align-items-center justify-content-center"
//                         style={{ height: "40px", width: "70px" }}
//                       >
//                         <img src={User} alt="" />
//                         <MdOutlineKeyboardArrowDown />
//                       </div>
//                     </div>
//                   </div>
//                 </header>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Mainnav;

// import React, { useState } from "react";
// import Logo from "../../assets/img/logo/logorumneo.svg";
// import { IoSearch } from "react-icons/io5";
// import { PiShoppingCartSimpleFill } from "react-icons/pi";
// import User from "../../assets/img/user/loginuser.svg";
// import { MdOutlineKeyboardArrowDown } from "react-icons/md";

// const Mainnav = () => {
//   const [isNavbarOpen, setIsNavbarOpen] = useState(false);

//   const toggleNavbar = () => {
//     setIsNavbarOpen(!isNavbarOpen);
//   };
//   return (
//     <nav
//       className="navbar navbar-expand-lg navbar-light py-2 position-fixed w-100"
//       style={{ backgroundColor: "#DDF0F8" }}
//     >
//       <div className="container-fluid px-5">
//         {/* Logo */}
//         <a className="navbar-brand" href="#">
//           <img
//             src={Logo}
//             alt="Logo"
//             style={{ width: "100px", height: "68px" }}
//           />
//         </a>

//         {/* Navbar Toggler for Mobile */}
//         <button
//           className="navbar-toggler"
//           type="button"
//           onClick={toggleNavbar}
//           aria-expanded={isNavbarOpen}
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         {/* Navbar Links and Actions */}
//         <div
//           className={`navbar-collapse custom-collapse ${isNavbarOpen ? "custom-collapse-show" : ""}`}
//           id="navbarNav"
//         >
//           {/* Links Section */}
//           <ul className="navbar-nav gap-lg-4 me-auto mb-2 mb-lg-0 text-center">
//             <li className="nav-item">
//               <a
//                 className="nav-link text-muted"
//                 href="#"
//                 style={{ fontSize: "14px" }}
//               >
//                 Home
//               </a>
//             </li>
//             <li className="nav-item">
//               <a
//                 className="nav-link text-muted"
//                 href="#"
//                 style={{ fontSize: "14px" }}
//               >
//                 Veterinary Product
//               </a>
//             </li>
//             <li className="nav-item">
//               <a
//                 className="nav-link text-muted"
//                 href="#"
//                 style={{ fontSize: "14px" }}
//               >
//                 Veterinary Service
//               </a>
//             </li>
//             <li className="nav-item">
//               <a
//                 className="nav-link text-muted"
//                 href="#"
//                 style={{ fontSize: "14px" }}
//               >
//                 Blogs
//               </a>
//             </li>
//             <li className="nav-item">
//               <a
//                 className="nav-link text-muted"
//                 href="#"
//                 style={{ fontSize: "14px" }}
//               >
//                 Contact Us
//               </a>
//             </li>
//           </ul>

//           {/* Action Buttons */}
//           <div className="d-lg-flex align-items-center gap-4">
//             {/* Form Data Button */}
//             <div className="text-center">
//               <button
//                 className="btn rounded-pill text-white "
//                 style={{
//                   fontSize: "16px",
//                   fontWeight: "600",
//                   background:
//                     "linear-gradient(to right, #89C9E6, #DD3675, #EC7229)",
//                     width: "160px",
//                     height: "52px"
//                 }}
//               >
//                 Form Data
//               </button>
//             </div>

//             {/* Icons */}
//             <div
//               className="bg-light rounded-circle text-center m-auto my-1 d-flex align-items-center justify-content-center"
//               style={{ height: "40px", width: "40px" }}
//             >
//               <IoSearch className="fs-5" style={{ color: "#FB9038" }} />
//             </div>

//             <div
//               className="bg-light rounded-circle text-center my-1 m-auto d-flex align-items-center justify-content-center"
//               style={{ height: "40px", width: "40px" }}
//             >
//               <PiShoppingCartSimpleFill
//                 className="fs-5"
//                 style={{ color: "#FB9038" }}
//               />
//             </div>

//             {/* User Profile Section */}
//             <div
//               className="my-1 d-flex align-items-center justify-content-center gap-2"
//               style={{ cursor: "pointer" }}
//             >
//               <img
//                 src={User}
//                 alt="User"
//                 className="rounded-circle"
//                 style={{ height: "40px", width: "40px" }}
//               />
//               <MdOutlineKeyboardArrowDown />
//             </div>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Mainnav;

import React, { useState } from "react";
import Logo from "../../assets/img/logo/logorumneo.svg";
import { IoSearch } from "react-icons/io5";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import User from "../../assets/img/user/loginuser.svg";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Mainnav = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light py-2 position-fixed w-100"
      style={{ backgroundColor: "#DDF0F8" }}
    >
      <div className="container-fluid px-5">
        <a className="navbar-brand" href="#">
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
          className={`navbar-collapse custom-collapse ${
            isNavbarOpen ? "custom-collapse-show" : ""
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
                className={`nav-link ${
                  activeLink === "Veterinary Product" ? "active" : ""
                }`}
                href="#"
                onClick={() => handleLinkClick("Veterinary Product")}
              >
                Veterinary Product
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${
                  activeLink === "Veterinary Service" ? "active" : ""
                }`}
                href="#"
                onClick={() => handleLinkClick("Veterinary Service")}
              >
                Veterinary Service
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${activeLink === "Blogs" ? "active" : ""}`}
                href="#"
                onClick={() => handleLinkClick("Blogs")}
              >
                Blogs
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${
                  activeLink === "Contact Us" ? "active" : ""
                }`}
                href="#"
                onClick={() => handleLinkClick("Contact Us")}
              >
                Contact Us
              </a>
            </li>
          </ul>

          {/* Action Buttons */}
          <div className="d-lg-flex align-items-center gap-4">
            <div className="text-center farm-btn">
              <button className="btn rounded-pill text-white p-0">
                Farm Data
              </button>
            </div>

            <div
              className="search-icon bg-light rounded-circle text-center m-auto my-3 d-flex align-items-center justify-content-center"
              style={{ height: "40px", width: "40px" }}
            >
              <IoSearch
                className="fs-5"
                style={{ height: "24px", width: "24px", color: "#FB9038" }}
              />
            </div>

            <div
              className="cart-icon bg-light rounded-circle text-center m-auto d-flex align-items-center justify-content-center"
              style={{ height: "40px", width: "40px" }}
            >
              <PiShoppingCartSimpleFill
                className="fs-5"
                style={{ height: "24px", width: "24px", color: "#FB9038" }}
              />
            </div>

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
