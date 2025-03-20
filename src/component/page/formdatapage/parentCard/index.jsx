import React from "react";
import Navbar from "../../../common/navbar";
import Sidebar from "../../sidebar/index";
import AnimalCard from "../../../common/animalCard/index"; // Import AnimalCard

const Parent = () => (
  <div className="parent">
    <Navbar />
    <div className="row">
      <div className="col-lg-2">
        {/* Left Sidebar - Fixed */}
        <div className="sidebar-container">
          <Sidebar />
        </div>
      </div>
      <div className="col-lg-10 py-3">
        {/* Right Content - Scrollable */}
        <div
          className="content-container flex-grow-1"
          style={{
            overflowY: "auto",
            height: "calc(100vh - 200px)", // Adjust based on Navbar height
            padding: "20px",
          }}
        >
          <h4>Parent</h4>
          <div className="col-lg-3 pe-5">
            <AnimalCard name="Leela" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Parent;
