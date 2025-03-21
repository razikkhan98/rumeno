import React from "react";
import Navbar from "../../../common/navbar";
import Sidebar from "../../sidebar/index";
import AnimalCard from "../../../common/animalCard/index"; // Import AnimalCard

// Define child animals with their respective details
const childAnimals = [
  { name: "Munna", height: "3.5", gender: "Male", age: "1 year", weight: "150kg" },
  { name: "Chintu", height: "3.8", gender: "Male", age: "1.2 years", weight: "170kg" },
  { name: "Babloo", height: "4.0", gender: "Male", age: "1.5 years", weight: "190kg" },
  { name: "Golu", height: "3.7", gender: "Female", age: "1.3 years", weight: "160kg" }
];

const Child = () => (
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
          <h4>Child</h4>
          <div className="row">
            {childAnimals.map((child, index) => (
              <div key={index} className="col-lg-3 px-4 pt-4">
                <AnimalCard
                  name={child.name}
                  height={child.height}
                  gender={child.gender}
                  age={child.age}
                  weight={child.weight}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Child;
