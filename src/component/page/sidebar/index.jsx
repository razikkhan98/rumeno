import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FaRegQuestionCircle } from "react-icons/fa";
import { RiLogoutBoxRLine } from "react-icons/ri";

// Sample animal data (imported or stored)
import Goat from "../../assets/img/sidebarimg/goatsidebar.png";
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
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const location = useLocation();
  // const selectedAnimal = location.state?.animal; // Default: Goat
  const user = sessionStorage?.getItem("animalName");
  const selectedAnimal = user ? user : "Goat";

  const location = useLocation();

  const handleClick = (e) => {
    if (location.pathname === '/farmdata/dashboard') {
      // Force reload if already on the same page
      window.location.reload();
    }
  };

  
    useEffect(() => {
      const user = sessionStorage?.getItem("uid");
  
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false); 
      }
    }, []);

  const handleLogout = () => {
    sessionStorage.removeItem("uid");
    setIsLoggedIn(false);
    
  };
  return (
    <div className="side">
      <div className="row">
        <div className="col-lg-12">
          <div className="sidebar bg-white border-end p-4">
            <div className="text-center mb-3">
              <div className="sidebar-img mx-auto mb-1 d-flex align-items-center justify-content-center">
                
                <NavLink to={"/farmdata"}>
                <img src={animalImages[selectedAnimal]} alt="Animal" />
                </NavLink>
              </div>
              <p
                className="mb-1 text-chinese-black-color"
                style={{ fontSize: "20px", fontWeight: "500" }}
              >
                {selectedAnimal}
              </p>
              <p
                className="text-muted-gray-color mb-0"
                style={{ fontSize: "12px", fontWeight: "500" }}
              >
                8 {selectedAnimal}s • 3 Babies
              </p>
            </div>

            <div className="border border-1 mb-4"></div>

            {/* Navigation Links */}
            <div className="nav flex-column gap-3">
              <NavLink
              onClick={ handleClick }
                to="/farmdata/dashboard"
                className="rounded-3 border-0 py-2 text-decoration-none text-chinese-black-color text-center"
                style={({ isActive }) => ({
                  backgroundColor: isActive ? "#85C1E9" : "#B8E0F7",
                  fontWeight: isActive ? "600" : "500",
                })}
              >
                Dashboard
              </NavLink>

              <NavLink
                to="/farmdata/parent"
                className="rounded-3 border-0 py-2 text-decoration-none text-chinese-black-color text-center"
                style={({ isActive }) => ({
                  backgroundColor: isActive ? "#85C1E9" : "#B8E0F7",
                  fontWeight: isActive ? "600" : "500",
                })}
              >
               {selectedAnimal}
              </NavLink>

              {/* <NavLink
                to="/farmdata/child"
                className="rounded-3 border-0 py-2 text-decoration-none text-chinese-black-color text-center"
                style={({ isActive }) => ({
                  backgroundColor: isActive ? "#85C1E9" : "#B8E0F7",
                  fontWeight: isActive ? "600" : "500",
                })}
              >
                Child
              </NavLink> */}
            </div>

            <div className="mt-4 pt-3 border-top">
              {/* <button className="btn w-100 text-start mb-2 text-muted">
                <FaRegQuestionCircle className="me-2" />
                Help
              </button>
              <button onClick={handleLogout} className="btn w-100 text-start text-danger">
                <RiLogoutBoxRLine className="me-2" />
                Logout
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
