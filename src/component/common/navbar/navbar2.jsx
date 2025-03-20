import React from "react";
import Logo from "../../assets/img/logo/logorumneo.svg";
import { IoSearch } from "react-icons/io5";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import User from "../../assets/img/user/loginuser.svg";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";


const Navbar2 = () => {
  return (
    <>
      <div>
        <div style={{ backgroundColor: "#DDF0F8" }}>
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <header className="px-5 detail-header">
                  <div className="d-flex justify-content-between align-items-center p-2">
                    <div className="header-logo">
                      <img src={Logo} alt="Logo" />
                    </div>
                    <div className=" d-flex gap-4">
                      <div
                        className="bg-light rounded-circle text-center d-flex align-items-center justify-content-center"
                        style={{ height: "40px", width: "40px" }}
                      >
                        <IoSearch
                          className="fs-5"
                          style={{ color: "#FB9038" }}
                        />
                      </div>
                      <div
                        className="bg-light rounded-circle text-center d-flex align-items-center justify-content-center"
                        style={{ height: "40px", width: "40px" }}
                      >
                        <PiShoppingCartSimpleFill
                          className="fs-5"
                          style={{ color: "#FB9038" }}
                        />
                      </div>
                      <div
                        className="rounded-circle gap-2 text-center d-flex align-items-center justify-content-center"
                        style={{ height: "40px", width: "70px" }}
                      >
                        <img src={User} alt="Loading" />
                        <MdOutlineKeyboardArrowDown />
                      </div>
                      
                    </div>
                  </div>
                </header>
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
                    <li className="breadcrumb-item">Home</li>
                    <li className="breadcrumb-item active">Farm Data</li>
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

export default Navbar2;
