import React, { useState } from "react";
import { Form, Button, Card, Tab, Tabs } from "react-bootstrap";
// import Logo from "../../../assets/img/logo/logorumneo.svg";
// import { IoSearch } from "react-icons/io5";
// import { FaRegQuestionCircle } from "react-icons/fa";
// import { RiLogoutBoxRLine } from "react-icons/ri";
// import Image from "../../../assets/formdata/goat.png";
import Sidebar from "../sidebar";
import Navbar from "../../navbar";

const Record = () => {
  const [activeTab, setActiveTab] = useState("postWean");
  return (
    <>
      <div>
        <Navbar />
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
        <div className="row">
          <div className="col-lg-2">
            {/* Sidebar */}
            <Sidebar />
          </div>

          {/* Main Content */}
          <div className="col-lg-10 p-2">
            <Card className="border-0 border-bottom">
              <Card.Body>
                <Tabs
                  activeKey={activeTab}
                  onSelect={(k) => setActiveTab(k)}
                  className="mb-4"
                >
                  <Tab eventKey="postWean" title="Post Wean" />
                  <Tab eventKey="milk" title="Milk" />
                  <Tab eventKey="vaccine" title="Vaccine" />
                  <Tab eventKey="deworm" title="Deworm" />
                  <Tab eventKey="estrusHeat" title="Estrus Heat" />
                  <Tab eventKey="farmSanitation" title="Farm Sanitation" />
                  <Tab eventKey="child" title="Child" />
                </Tabs>

                <div className="tab-content-area">
                  {activeTab === "postWean" && (
                    <>
                      <p className="mb-2 record-head">Post Wean</p>
                      <p className="record-para mb-4">
                        Fill Post Wean details below
                      </p>

                      <Form>
                        <div className="row mb-4">
                          <div className="col-lg-2">
                            <Form.Group>
                              <Form.Label className="form-lable-record">
                                Kid Weight (Kg)
                              </Form.Label>
                              <Form.Control
                                className="form-control-record py-2"
                                type="text"
                                placeholder="Enter Weight"
                              />
                            </Form.Group>
                          </div>
                          <div className="col-lg-2">
                            <Form.Group>
                              <Form.Label className="form-lable-record">
                                Wean Body Score
                              </Form.Label>
                              <Form.Select className="form-control-record py-2">
                                <option>Select details</option>
                              </Form.Select>
                            </Form.Group>
                          </div>
                          <div className="col-md-3">
                            <Form.Group>
                              <Form.Label className="form-lable-record">
                                Wean Date
                              </Form.Label>
                              <Form.Control
                                className="form-control-record py-2"
                                type="date"
                                placeholder="dd-mm-yyyy"
                              />
                            </Form.Group>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <Form.Group className="mb-4">
                            <Form.Label className="form-lable-record">
                              Comments (if any)
                            </Form.Label>
                            <Form.Control
                              className="form-control-record pt-2"
                              as="textarea"
                              placeholder="Enter comment"
                            />
                          </Form.Group>
                        </div>

                        <Button className="record-btn">Submit</Button>
                      </Form>
                    </>
                  )}

                  {activeTab === "milk" && (
                    <>
                      <p className="mb-2 record-head">Milk</p>
                      <p className="record-para mb-4">Fill Milk Record below</p>

                      <Form>
                        <div className="row mb-4">
                          <div className="col-lg-2">
                            <Form.Group>
                              <Form.Label className="form-lable-record">
                                Milk Volume (Ltr)
                              </Form.Label>
                              <Form.Control
                                className="form-control-record py-2"
                                type="text"
                                placeholder="Enter Volume"
                              />
                            </Form.Group>
                          </div>
                          <div className="col-lg-2 col-md-4">
                            <Form.Group>
                              <Form.Label className="form-lable-record">
                                No of Kids
                              </Form.Label>
                              <Form.Select className="form-control-record py-2">
                                <option>Enter no of kids</option>
                              </Form.Select>
                            </Form.Group>
                          </div>
                          <div className="col-lg-3 col-md-4">
                            <Form.Group>
                              <Form.Label className="form-lable-record">
                                Date
                              </Form.Label>
                              <Form.Control
                                className="form-control-record py-2"
                                type="date"
                                placeholder="dd-mm-yyyy"
                              />
                            </Form.Group>
                          </div>
                        </div>

                        <Button className="record-btn">Submit</Button>
                      </Form>
                    </>
                  )}

                  {activeTab === "vaccine" && (
                    <>
                      <p className="mb-2 record-head">Vaccine</p>
                      <p className="record-para mb-4">
                        Fill Vaccine details below
                      </p>

                      <Form>
                        <div className="row mb-4">
                          <div className="col-lg-3 col-md-6">
                            <Form.Group>
                              <Form.Label className="form-lable-record">
                                Vaccine Name
                              </Form.Label>
                              <Form.Control
                                className="form-control-record py-2"
                                type="text"
                                placeholder="Enter Vaccine Name"
                              />
                            </Form.Group>
                          </div>
                          <div className="col-lg-3 col-md-6">
                            <Form.Group>
                              <Form.Label className="form-lable-record">
                                Date
                              </Form.Label>
                              <Form.Control
                                className="form-control-record py-2"
                                type="date"
                                placeholder="dd-mm-yyyy"
                              />
                            </Form.Group>
                          </div>
                        </div>

                        <Button className="record-btn">Submit</Button>
                      </Form>
                    </>
                  )}

                  {activeTab === "child" && (
                    <>
                      <p className="mb-2 record-head">Child</p>
                      <p className="record-para mb-4">
                        Fill Child details below
                      </p>

                      <form>
                        <div className="row g-4">
                          {/* First Row */}
                          <div className="row pt-3">
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
                                <label className="form-label form-lable-detail">
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
                                <label className="form-label form-lable-detail">
                                  Breed
                                </label>
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
                                <label className="form-label form-lable-detail">
                                  Select Gender
                                </label>
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
                                  Mother Wean Date (when child starts eating
                                  food)
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
                                  Mother's Weight At Wean (weight of mother goat
                                  when child starts eating food)
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
                              style={{
                                backgroundColor: "#F4863E",
                                fontSize: "14px",
                                fontWeight: "600",
                              }}
                            >
                              Submit
                            </button>
                          </div>
                        </div>
                      </form>
                    </>
                  )}
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default Record;
