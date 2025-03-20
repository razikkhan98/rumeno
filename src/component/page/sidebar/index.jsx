// import React from "react";
// import { FaRegQuestionCircle } from "react-icons/fa";
// import { RiLogoutBoxRLine } from "react-icons/ri";
// import Image from "../../assets/img/sidebarimg/goatsidebar.png";

// const Sidebar = () => {
//   return (
//     <>
//       <div className="side">
//         <div className="row">
//           <div className="col-lg-12">
//             {/* Sidebar */}
//             <div className="sidebar bg-white border-end p-4">
//               <div className="text-center mb-3">
//                 <div className="sidebar-img mx-auto mb-1 d-flex align-items-center justify-content-center">
//                   <img src={Image} alt="Loading" />
//                 </div>
//                 <p
//                   className=" mb-1"
//                   style={{ fontSize: "20px", fontWeight: "500" }}
//                 >
//                   Goat
//                 </p>
//                 <p
//                   className="text-muted mb-0"
//                   style={{ fontSize: "12px", fontWeight: "500" }}
//                 >
//                   8 Goats • 3 Babies
//                 </p>
//               </div>
//               <div className="border border-1 mb-4"></div>
//               <div className="nav flex-column gap-3">
//                 <button
//                   className="rounded-3 border-0 py-2"
//                   style={{
//                     backgroundColor: "#B8E0F7",
//                   }}
//                 >
//                   Home
//                 </button>
//                 <button
//                   className="rounded-3 border-0 py-2"
//                   style={{
//                     backgroundColor: "#B8E0F7",
//                   }}
//                 >
//                   Parent
//                 </button>
//                 <button
//                   className="rounded-3 border-0 py-2"
//                   style={{
//                     backgroundColor: "#B8E0F7",
//                   }}
//                 >
//                   Child
//                 </button>
//               </div>

//               <div className="mt-4 pt-3 border-top">
//                 <button className="btn w-100 text-start mb-2 text-muted">
//                   <FaRegQuestionCircle className="me-2" />
//                   Help
//                 </button>
//                 <button className="btn w-100 text-start text-danger">
//                   <RiLogoutBoxRLine className="me-2" />
//                   Logout
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Sidebar;

// // import React, { useState } from "react";
// // import { FaRegQuestionCircle } from "react-icons/fa";
// // import { RiLogoutBoxRLine } from "react-icons/ri";
// // import Image from "../../../assets/img/sidebarimg/goatsidebar.png";
// // import "bootstrap/dist/css/bootstrap.min.css";

// // const Sidebar = () => {
// //   const [isSidebarOpen, setSidebarOpen] = useState(false);
// //   const [expandedIndex, setExpandedIndex] = useState(null); // For accordion-like behavior

// //   const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);
// //   const toggleSection = (index) => {
// //     setExpandedIndex(index === expandedIndex ? null : index); // Expand/collapse section
// //   };

// //   return (
// //     <>
// //       {/* Sidebar Layout */}
// //       <div className="container-fluid">
// //         <div className="row">
// //           {/* Desktop Sidebar */}
// //           <div className="col-lg-12 d-none d-lg-flex flex-column p-4 bg-white border-end">
// //             {/* User Info */}
// //             <div className="text-center mb-3">
// //               <div className="sidebar-img mx-auto mb-1 d-flex align-items-center justify-content-center">
// //                 <img src={Image} alt="Goat" width={100} />
// //               </div>
// //               <p
// //                 className="mb-1"
// //                 style={{ fontSize: "20px", fontWeight: "500" }}
// //               >
// //                 Goat
// //               </p>
// //               <p
// //                 className="text-muted mb-0"
// //                 style={{ fontSize: "12px", fontWeight: "500" }}
// //               >
// //                 8 Goats • 3 Babies
// //               </p>
// //             </div>
// //             <div className="border-bottom mb-3"></div>

// //             {/* Navigation Buttons */}
// //             <div className="nav flex-column gap-3">
// //               <button
// //                 className="rounded-3 border-0 py-2 text-center"
// //                 style={{ backgroundColor: "#B8E0F7" }}
// //               >
// //                 Home
// //               </button>
// //               <button
// //                 className="rounded-3 border-0 py-2 text-center"
// //                 style={{ backgroundColor: "#B8E0F7" }}
// //               >
// //                 Parent
// //               </button>
// //               <button
// //                 className="rounded-3 border-0 py-2 text-center"
// //                 style={{ backgroundColor: "#B8E0F7" }}
// //               >
// //                 Child
// //               </button>
// //             </div>

// //             {/* Help and Logout */}
// //             <div className="mt-4 pt-3 border-top">
// //               <button className="btn w-100 text-start mb-2 text-muted">
// //                 <FaRegQuestionCircle className="me-2" /> Help
// //               </button>
// //               <button className="btn w-100 text-start text-danger">
// //                 <RiLogoutBoxRLine className="me-2" /> Logout
// //               </button>
// //             </div>
// //           </div>

// //           {/* Mobile Sidebar Button */}
// //           <div className="col-lg-10">
// //             <button
// //               className="btn btn-primary d-lg-none my-3"
// //               onClick={toggleSidebar}
// //             >
// //               {isSidebarOpen ? "Close Sidebar" : "Open Sidebar"}
// //             </button>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Mobile Sidebar */}
// //       {isSidebarOpen && (
// //         <div
// //           className="position-fixed top-0 start-0 vh-100 vw-100 bg-white shadow"
// //           style={{ zIndex: 1050, overflowY: "auto" }}
// //         >
// //           <div className="p-3">
// //             <button className="btn btn-danger mb-3" onClick={toggleSidebar}>
// //               Close
// //             </button>

// //             {/* User Info */}
// //             <div className="text-center mb-3">
// //               <div className="sidebar-img mx-auto mb-1 d-flex align-items-center justify-content-center">
// //                 <img src={Image} alt="Goat" width={100} />
// //               </div>
// //               <p
// //                 className="mb-1"
// //                 style={{ fontSize: "20px", fontWeight: "500" }}
// //               >
// //                 Goat
// //               </p>
// //               <p
// //                 className="text-muted mb-0"
// //                 style={{ fontSize: "12px", fontWeight: "500" }}
// //               >
// //                 8 Goats • 3 Babies
// //               </p>
// //             </div>
// //             <div className="border-bottom mb-3"></div>

// //             {/* Navigation Buttons */}
// //             <div className="nav flex-column gap-3">
// //               <button
// //                 className="rounded-3 border-0 py-2 text-center"
// //                 style={{ backgroundColor: "#B8E0F7" }}
// //               >
// //                 Home
// //               </button>
// //               <button
// //                 className="rounded-3 border-0 py-2 text-center"
// //                 style={{ backgroundColor: "#B8E0F7" }}
// //               >
// //                 Parent
// //               </button>
// //               <button
// //                 className="rounded-3 border-0 py-2 text-center"
// //                 style={{ backgroundColor: "#B8E0F7" }}
// //               >
// //                 Child
// //               </button>
// //             </div>

// //             <div className="mt-4 pt-3 border-top">
// //               <button className="btn w-100 text-start mb-2 text-muted">
// //                 <FaRegQuestionCircle className="me-2" /> Help
// //               </button>
// //               <button className="btn w-100 text-start text-danger">
// //                 <RiLogoutBoxRLine className="me-2" /> Logout
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       )}
// //     </>
// //   );
// // };

// // export default Sidebar;


import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FaRegQuestionCircle } from "react-icons/fa";
import { RiLogoutBoxRLine } from "react-icons/ri";

// Sample animal data (imported or stored)
import Goat from "../../assets/formdata/goat.png";
import Sheep from "../../assets/formdata/sheep.png";
import Cow from "../../assets/formdata/cow.png";
import Buffalo from "../../assets/formdata/buffalo.png";

const animalImages = {
  Goat: Goat,
  Sheep: Sheep,
  Cow: Cow,
  Buffalo: Buffalo,
};

const Sidebar = () => {
  const location = useLocation();
  const selectedAnimal = location.state?.animal || "Goat"; // Default: Goat

  return (
    <div className="side">
      <div className="row">
        <div className="col-lg-12">
          <div className="sidebar bg-white border-end p-4">
            <div className="text-center mb-3">
              <div className="sidebar-img mx-auto mb-1 d-flex align-items-center justify-content-center">
                <img src={animalImages[selectedAnimal]} alt="Animal" />
              </div>
              <p className="mb-1" style={{ fontSize: "20px", fontWeight: "500" }}>
                {selectedAnimal}
              </p>
              <p className="text-muted mb-0" style={{ fontSize: "12px", fontWeight: "500" }}>
                8 {selectedAnimal}s • 3 Babies
              </p>
            </div>

            <div className="border border-1 mb-4"></div>

            {/* Navigation Links */}
            <div className="nav flex-column gap-3">
              <NavLink
                to="/farmdata/dashboard"
                className="rounded-3 border-0 py-2 text-decoration-none text-dark text-center"
                style={({ isActive }) => ({
                  backgroundColor: isActive ? "#85C1E9" : "#B8E0F7",
                  fontWeight: isActive ? "600" : "500",
                })}
              >
                Home
              </NavLink>

              <NavLink
                to="/farmdata/parent"
                className="rounded-3 border-0 py-2 text-decoration-none text-dark text-center"
                style={({ isActive }) => ({
                  backgroundColor: isActive ? "#85C1E9" : "#B8E0F7",
                  fontWeight: isActive ? "600" : "500",
                })}
              >
                Parent
              </NavLink>

              <NavLink
                to="/farmdata/child"
                className="rounded-3 border-0 py-2 text-decoration-none text-dark text-center"
                style={({ isActive }) => ({
                  backgroundColor: isActive ? "#85C1E9" : "#B8E0F7",
                  fontWeight: isActive ? "600" : "500",
                })}
              >
                Child
              </NavLink>
            </div>

            <div className="mt-4 pt-3 border-top">
              <button className="btn w-100 text-start mb-2 text-muted">
                <FaRegQuestionCircle className="me-2" />
                Help
              </button>
              <button className="btn w-100 text-start text-danger">
                <RiLogoutBoxRLine className="me-2" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
