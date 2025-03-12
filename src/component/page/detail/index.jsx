import React, { useState } from "react";
import { IoSearch, IoChevronDown, IoChevronUp } from "react-icons/io5";
import { FaRegQuestionCircle } from "react-icons/fa";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { GiGoat } from "react-icons/gi";
import Logo from "../../../assets/img/logo/logorumneo.svg";
import Sidebar from "../sidebar";
import Navbar from "../../navbar";

const FarmManagement = () => {
  const [expandedItem, setExpandedItem] = useState("Leela");

  const goats = [
    {
      name: "Leela",
      children: ["Munna", "Chiku", "Nannu"],
    },
    {
      name: "Kammo",
      children: [],
    },
    {
      name: "Basanti",
      children: [],
    },
    {
      name: "Sheila",
      children: [],
    },
    {
      name: "Suman",
      children: [],
    },
  ];

  return (
    <div className="farm-management">
      {/* Header */}
      {/* <div className="row">
        <div className="col-lg-12">
          <header
            className="px-5 detail-header"
            style={{ backgroundColor: "#DDF0F8" }}
          >
            <div className="d-flex justify-content-between align-items-center p-2">
              <div className="header-logo">
                <img src={Logo} alt="Logo" />
              </div>
              <div className="d-flex gap-4">
                <div className="position-relative">
                  <IoSearch
                    className="position-absolute"
                    style={{ left: "12px", top: "10px", color: "#999" }}
                  />
                  <input
                    type="search"
                    className="form-control ps-5"
                    placeholder="Search by unique ID"
                    style={{ width: "300px", borderRadius: "8px" }}
                  />
                </div>
                <button
                  className="btn text-white px-4 border rounded-pill"
                  style={{
                    background: "linear-gradient(to right, #60A5FA, #EC4899)",
                  }}
                >
                  <span className="me-1">+</span> Add Parent
                </button>
              </div>
            </div>
          </header>
        </div>
      </div>
      <div style={{ background: "#F4FAFD" }}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 px-5">
              <nav aria-label="breadcrumb" className="py-2 px-3">
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">Farm Data</li>
                  <li className="breadcrumb-item active">Goat</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div> */}
      <Navbar/>

      <div className="row">
        <div className="col-lg-2">
          {/* Sidebar */}
          {/* <div className="sidebar bg-white border-end">
            <div className="p-4">
              <div className="text-center mb-4">
                <div
                  className="mx-auto mb-3 rounded-circle border-4 border d-flex align-items-center justify-content-center"
                  style={{ width: "100px", height: "100px", padding: "8px" }}
                >
                  <GiGoat size={60} color="#666" />
                </div>
                <h2 className="h5 mb-1">Goat</h2>
                <p className="text-muted small mb-0">8 Goats • 3 Babies</p>
              </div>

              <div className="nav flex-column">
                {goats.map((goat) => (
                  <div key={goat.name} className="mb-1">
                    <button
                      className={`btn w-100 text-start d-flex align-items-center justify-content-between p-2 rounded-3 ${
                        expandedItem === goat.name ? "bg-light" : ""
                      }`}
                      onClick={() =>
                        setExpandedItem(
                          expandedItem === goat.name ? "" : goat.name
                        )
                      }
                    >
                      <span>🐐 {goat.name}</span>
                      {expandedItem === goat.name ? (
                        <IoChevronUp />
                      ) : (
                        <IoChevronDown />
                      )}
                    </button>
                    {expandedItem === goat.name && goat.children.length > 0 && (
                      <div className="ms-4 mt-1">
                        {goat.children.map((child) => (
                          <button
                            key={child}
                            className="btn w-100 text-start p-2 text-muted small"
                          >
                            {child}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
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
          </div> */}
          <Sidebar/>
        </div>

        {/* Main Content */}
        <div className="col-lg-10 bg-white px-2 py-3">
          <div className="">
            <p className="detail-head mb-1">Basic Details</p>
            <p className="detail-para mb-0">Fill basic details to add a Child</p>
          </div>

          <form>
            <div className="row g-4">
              {/* First Row */}
              <div className="row pt-5">
                <div className="col-lg-3">
                  <div className="form-group">
                    <label className="form-label form-lable-detail">
                      Unique Name
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-detail"
                      placeholder="Enter Unique Name"
                    />
                  </div>
                </div>
                <div className="col-lg-2">
                  <div className="form-group">
                    <label className="form-label form-lable-detail" >
                      Kid Age
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-detail"
                      placeholder="Enter Age"
                    />
                  </div>
                </div>
                <div className="col-lg-2">
                  <div className="form-group">
                    <label className="form-label form-lable-detail">
                      Kid Weight
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-detail"
                      placeholder="Enter Weight"
                    />
                  </div>
                </div>
                <div className="col-lg-2">
                  <div className="form-group">
                    <label className="form-label text-muted small">
                      Mother's Age
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-detail"
                      placeholder="Enter Age"
                    />
                  </div>
                </div>
              </div>

              {/* Second Row */}
              <div className="row pt-3">
                <div className="col-lg-2">
                  <div className="form-group">
                    <label className="form-label form-lable-detail">Breed</label>
                    <select className="form-select form-control-detail">
                      <option>Select Breed</option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="form-group">
                    <label className="form-label form-lable-detail">
                      Date Of Purchasing
                    </label>
                    <input
                      type="date"
                      className="form-control form-control-detail"
                      placeholder="dd-mm-yyyy"
                    />
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="form-group">
                    <label className="form-label form-lable-detail">Select Gender</label>
                    <div className="d-flex gap-4 mt-2">
                      {["Male", "Female", "Other"].map((type) => (
                        <div key={type} className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="animalType"
                            id={type.toLowerCase()}
                          />
                          <label
                            style={{ fontSize: "16px", fontWeight: "400", color: "#707070"}}
                            className="form-check-label "
                            htmlFor={type.toLowerCase()}
                          >
                            {type}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Third Row */}
              <div className="row pt-3">
                <div className="col-lg-2">
                  <div className="form-group">
                    <label className="form-label form-lable-detail">
                      Kid Code
                    </label>
                    <select className="form-select form-control-detail">
                      <option>Select details</option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-2">
                  <div className="form-group">
                    <label className="form-label form-lable-detail">
                      Kid Score
                    </label>
                    <select className="form-select form-control-detail">
                      <option>Select details</option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-2">
                  <div className="form-group">
                    <label className="form-label form-lable-detail">
                      Birth Type
                    </label>
                    <select className="form-select form-control-detail">
                      <option>Select details</option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-2">
                  <div className="form-group">
                    <label className="form-label form-lable-detail">
                      Birth Weight
                    </label>
                    <select className="form-select form-control-detail">
                      <option>Select details</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Fourth Row */}
              <div className="row pt-3">
                <div className="col-lg-3">
                  <div className="form-group">
                    <label className="form-label form-lable-detail">
                      Wean Weight
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-detail"
                      placeholder="Enter Weight"
                    />
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="form-group">
                    <label className="form-label form-lable-detail">
                      Castration Date (not able to reproduce)
                    </label>
                    <input
                      type="date"
                      className="form-control form-control-detail"
                      placeholder="dd-mm-yyyy"
                    />
                  </div>
                </div>
              </div>

              {/* Fifth Row */}
              <div className="row pt-3">
                <div className="col-lg-3">
                  <div className="form-group">
                    <label className="form-label form-lable-detail">
                      Mother Wean Date (when child starts eating food)
                    </label>
                    <input
                      type="date"
                      className="form-control form-control-detail"
                      placeholder="dd-mm-yyyy"
                    />
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="form-group">
                    <label className="form-label form-lable-detail">
                      Mother's Weight At Wean (weight of mother goat when child
                      starts eating food)
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-detail"
                      placeholder="Enter Weight"
                    />
                  </div>
                </div>
              </div>

              <div className="col-lg-3 pt-2 pe-5">
                <button
                  type="submit"
                  className="btn w-100 text-white py-2 rounded-pill"
                  style={{ backgroundColor: "#F4863E", fontSize: "14px", fontWeight: "600" }}
                >
                  Add Parent
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FarmManagement;
