import React, { useState } from "react";
import Navbar from "../../common/navbar";
import { IoSearch } from "react-icons/io5";
import { FaRegQuestionCircle } from "react-icons/fa";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { SlArrowRight } from "react-icons/sl";
import Logo from "../../assets/img/logo/logorumneo.svg";
import { Card, Button} from "react-bootstrap";
import { RiRulerFill } from "react-icons/ri";
import {
  PiGenderIntersexFill,
  PiCalendarBlankFill,
  PiPencilSimple,
  PiTrashSimple,
} from "react-icons/pi";
import { GiWeightScale } from "react-icons/gi";
// import Image from "../../../assets/homeimage/goat.png";
import Sidebar from "../sidebar/index";
import { NavLink } from "react-router-dom";
import Header from "../../common/Header/header";

const Parent = () => {

  return (
    <>
      <div className="parent">
     
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
        <div className="">
          <Header title="Smart Farming" subtitle="Goat" />
        </div>
        <div className="row">
          <div className="col-lg-2">
            {/* Sidebar */}
            {/* <div className="sidebar bg-white border-end">
              <div className="p-4">
                <div className="text-center mb-3">
                  <div
                    className="mx-auto mb-1 d-flex align-items-center justify-content-center"
                    style={{ width: "120px", height: "120px" }}
                  >
                    <img src={Image} className="w-100 h-100" color="#666" />
                  </div>
                  <p
                    className=" mb-1"
                    style={{ fontSize: "20px", fontWeight: "500" }}
                  >
                    Goat
                  </p>
                  <p
                    className="text-muted mb-0"
                    style={{ fontSize: "12px", fontWeight: "500" }}
                  >
                    8 Goats • 3 Babies
                  </p>
                </div>
                <div className="border border-1 mb-4"></div>
                <div className="nav flex-column gap-3">
                  <button
                    className="rounded-3 border-0 py-2"
                    style={{
                      backgroundColor: "#B8E0F7",
                    }}
                  >
                    Home
                  </button>
                  <button
                    className="rounded-3 border-0 py-2"
                    style={{
                      backgroundColor: "#B8E0F7",
                    }}
                  >
                    Parent
                  </button>
                  <button
                    className="rounded-3 border-0 py-2"
                    style={{
                      backgroundColor: "#B8E0F7",
                    }}
                  >
                    Child
                  </button>
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
            <Sidebar />
          </div>
          <div className="col-lg-10 py-3">
            <div className="row">
              <div className="pb-3">
                <h4>Parent</h4>
              </div>
              <div className="col-lg-3 pe-5">
                <Card
                  style={{
                    borderRadius: "12px",
                    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  <Card.Header
                    style={{
                      backgroundColor: "#B8E0F7",
                      borderRadius: "10px 10px 0px 0px",
                    }}
                    className=" d-flex align-items-center justify-content-between px-4 py-3"
                  >
                    <div className="card-header p-0">Leela</div>

                    <div className="bg-light p-1 rounded-circle d-flex align-items-center">
                      <SlArrowRight
                        className="fs-6 m-auto"
                        style={{ cursor: "pointer" }}
                      />
                    </div>
                  </Card.Header>
                  <Card.Body>
                    <div
                      className="pb-3 gap-2 d-flex align-items-center px-2"
                      style={{ color: "#707070" }}
                    >
                      <div
                        className="rounded-2 p-1 d-flex"
                        style={{
                          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
                        }}
                      >
                        <RiRulerFill />
                      </div>

                      <div className="card-content">
                        Height<b className="text-light">ft</b>(Ft)
                      </div>
                    </div>
                    <div className="border border-1"></div>
                    <div
                      className="py-3 gap-2 d-flex align-items-center px-2"
                      style={{ color: "#707070" }}
                    >
                      <div
                        className="rounded-2 p-1 d-flex"
                        style={{
                          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
                        }}
                      >
                        <PiGenderIntersexFill />
                      </div>

                      <div className="card-content">Gender</div>
                    </div>
                    <div className="border border-1"></div>
                    <div
                      className="py-3 gap-2 d-flex align-items-center px-2"
                      style={{ color: "#707070" }}
                    >
                      <div
                        className="rounded-2 p-1 d-flex"
                        style={{
                          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
                        }}
                      >
                        <PiCalendarBlankFill />
                      </div>

                      <div className="card-content">Age</div>
                    </div>
                    <div className="border border-1"></div>
                    <div
                      className="pt-3 gap-2 d-flex align-items-center px-2"
                      style={{ color: "#707070" }}
                    >
                      <div
                        className="rounded-2 p-1 d-flex"
                        style={{
                          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
                        }}
                      >
                        <GiWeightScale />
                      </div>

                      <div className="card-content">
                        Weight<b className="text-light">k</b>(kg)
                      </div>
                    </div>
                  </Card.Body>
                  <Card.Footer className="d-flex justify-content-between align-items-center py-3">
                    <Button
                      variant="light"
                      className="border px-2 py-1"
                      style={{
                        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                      }}
                    >
                      <PiPencilSimple className="fs-3 text-primary" />
                    </Button>
                    <Button
                      variant="light"
                      className="border px-2 py-1"
                      style={{
                        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                      }}
                    >
                      <PiTrashSimple className="fs-3 text-danger" />
                    </Button>
                    <NavLink to="/record">
                    <Button
                      size="sm"
                      style={{ color: "white", background: "#FB9038" }}
                      className="rounded-pill py-2 px-3 border-0"
                    >
                      Add Details
                    </Button>
                    </NavLink>
                  </Card.Footer>
                </Card>
              </div>
            </div>
            <div
              className="border border-1"
              style={{ marginTop: "35px" }}
            ></div>
            <div className="row">
              <div className="py-3">
                <h4>Child</h4>
              </div>
              <div className="col-lg-3 pe-5">
                <Card
                  style={{
                    borderRadius: "12px",
                    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
                  }}
                  className="child-card"
                >
                  <Card.Header
                    style={{
                      // backgroundColor: "#F6F6F6",
                      borderRadius: "10px 10px 0px 0px",
                    }}
                    className="child-header d-flex align-items-center justify-content-between px-4 py-3"
                  >
                    <div className="card-header p-0">Munna</div>

                    <div className="bg-light p-1 rounded-circle d-flex align-items-center">
                      <SlArrowRight
                        className="fs-6 m-auto"
                        style={{ cursor: "pointer" }}
                      />
                    </div>
                  </Card.Header>
                  <Card.Body>
                    <div
                      className="pb-3 gap-2 d-flex align-items-center px-2"
                      style={{ color: "#707070" }}
                    >
                      <div
                        className="rounded-2 p-1 d-flex"
                        style={{
                          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
                        }}
                      >
                        <RiRulerFill />
                      </div>

                      <div className="card-content">
                        Height<b className="text-light">ft</b>(Ft)
                      </div>
                    </div>
                    <div className="border border-1"></div>
                    <div
                      className="py-3 gap-2 d-flex align-items-center px-2"
                      style={{ color: "#707070" }}
                    >
                      <div
                        className="rounded-2 p-1 d-flex"
                        style={{
                          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
                        }}
                      >
                        <PiGenderIntersexFill />
                      </div>

                      <div className="card-content">Gender</div>
                    </div>
                    <div className="border border-1"></div>
                    <div
                      className="py-3 gap-2 d-flex align-items-center px-2"
                      style={{ color: "#707070" }}
                    >
                      <div
                        className="rounded-2 p-1 d-flex"
                        style={{
                          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
                        }}
                      >
                        <PiCalendarBlankFill />
                      </div>

                      <div className="card-content">Age</div>
                    </div>
                    <div className="border border-1"></div>
                    <div
                      className="pt-3 gap-2 d-flex align-items-center px-2"
                      style={{ color: "#707070" }}
                    >
                      <div
                        className="rounded-2 p-1 d-flex"
                        style={{
                          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
                        }}
                      >
                        <GiWeightScale />
                      </div>

                      <div className="card-content">
                        Weight<b className="text-light">k</b>(kg)
                      </div>
                    </div>
                  </Card.Body>
                  <Card.Footer className="d-flex justify-content-between align-items-center py-3">
                    <Button
                      variant="light"
                      className="border px-2 py-1"
                      style={{
                        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                      }}
                    >
                      <PiPencilSimple className="fs-3 text-primary" />
                    </Button>
                    <Button
                      variant="light"
                      className="border px-2 py-1"
                      style={{
                        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                      }}
                    >
                      <PiTrashSimple className="fs-3 text-danger" />
                    </Button>

                    <Button
                      size="sm"
                      style={{ color: "white", background: "#FB9038" }}
                      className="rounded-pill py-2 px-3 border-0"
                    >
                      Add Details
                    </Button>
                  </Card.Footer>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Parent;
