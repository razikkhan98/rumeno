import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
// import Goat from "../../../assets/homeimage/goat.png";
// import Logo from "../../../assets/img/logo/logorumneo.svg";
import Sidebar from "../sidebar";
import { IoSearch } from "react-icons/io5";
import Navbar from "../../common/navbar";

const GoatDetailForm = () => {
  return (
    <>
      <div className="goat-form">
        <div className="">
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
                        background:
                          "linear-gradient(to right, #60A5FA, #EC4899)",
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
            <div className="col-lg-2 ">
              <Sidebar />
            </div>
            <div className="col-lg-10 px-4 py-3">
              <p className="detail-head mb-1">Basic Details</p>
              <p className="detail-para mb-0">
                Fill basic details to add a parent
              </p>
              <form>
                <div className="row mt-3">
                  <div className="col-lg-3 lh-lg">
                    <label className="form-lable-detail">Unique Name</label>
                    <input
                      type="text"
                      className="form-control form-control-detail"
                      placeholder="Enter Unique Name"
                    />
                  </div>
                  <div className="col-lg-2 lh-lg">
                    <label className="form-lable-detail">Age</label>
                    <input
                      type="number"
                      className="form-control form-control-detail"
                      placeholder="Enter Age"
                    />
                  </div>
                  <div className="col-lg-2 lh-lg">
                    <label className="form-lable-detail">Height (in Ft)</label>
                    <input
                      type="number"
                      className="form-control form-control-detail"
                      placeholder="Enter Height"
                    />
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-lg-3 lh-lg">
                    <label className="form-lable-detail">
                      Date of Purchasing
                    </label>
                    <input
                      type="date"
                      className="form-control form-control-detail"
                    />
                  </div>
                  <div className="col-lg-4">
                    <div className="form-group">
                      {/* <label className="form-label fs-6 text-light">
                        Select Gender
                      </label> */}
                      <div className="d-flex gap-4 mt-lg-4 pt-2">
                        {["Male", "Female", "Other"].map((type) => (
                          <div key={type} className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="animalType"
                              id={type.toLowerCase()}
                            />
                            <label
                              style={{
                                fontSize: "16px",
                                fontWeight: "400",
                                color: "#707070",
                              }}
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

                <div className="row mt-3">
                  <div className="col-lg-2 lh-lg">
                    <label className="form-lable-detail">Weight (kg)</label>
                    <input
                      type="number"
                      className="form-control form-control-detail"
                      placeholder="Enter Weight"
                    />
                  </div>
                  <div className="col-lg-3 lh-lg">
                    <label className="form-lable-detail">Female Pregnancy Details</label>
                    <select
                      className="form-select form-control-detail"
                      aria-label="Default select example"
                    >
                      <option selected value="">
                        select pregnancy Detail
                      </option>
                      <option value="1 Month">1 Month</option>
                      <option value="2 Month">2 Month</option>
                      <option value="3 Month">3 Month</option>
                      <option value="4 Month">4 Month</option>
                      <option value="5 Month">5 Month</option>
                    </select>
                  </div>
                  <div className="col-lg-2 lh-lg">
                    <label className="form-lable-detail">Male Detail</label>
                    <select
                      className="form-select form-control-detail"
                      aria-label="Default select example"
                    >
                      <option selected value="">
                        Select if male
                      </option>
                      <option value="1">wether</option>
                      <option value="2">breeder</option>
                    </select>
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-lg-3 lh-lg">
                    <label className="form-lable-detail">Body Score</label>
                    <select
                      className="form-select form-control-detail"
                      aria-label="Default select example"
                    >
                      <option selected>Open this and select body score</option>
                      <option value="Very slim Skinned body with entire skeleton appearing on skins">
                        1: Very slim Skinned body with entire skeleton appearing
                        on skins
                      </option>
                      <option value="Skinned body with appearing sharp bones of chest on skin ">
                        2: Skinned body with appearing sharp bones of chest on
                        skin{" "}
                      </option>
                      <option value="Slimmed body but chest bone does not appear with having a little muscles on body">
                        3: Slimmed body but chest bone does not appear with
                        having a little muscles on body
                      </option>
                      <option value="Mild fat with having good muscles on body and less fat">
                        4: Mild fat with having good muscles on body and less
                        fat
                      </option>
                      <option value="Fatty bulky Body. Without appearing any bones on body">
                        5: Fatty bulky Body. Without appearing any bones on body
                      </option>
                    </select>
                  </div>
                  <div className="col-lg-4 lh-lg">
                    <label className="form-lable-detail">Comments (if any)</label>
                    <input
                      type="text"
                      className="form-control form-control-detail"
                      placeholder="Enter comment"
                    />
                  </div>
                </div>

                <div className="col-lg-3 pt-5 pe-5">
                <button
                  type="submit"
                  className="btn w-100 text-white py-2 rounded-pill"
                  style={{ backgroundColor: "#F4863E", fontSize: "14px", fontWeight: "600" }}
                >
                  Add Parent
                </button>
              </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GoatDetailForm;
