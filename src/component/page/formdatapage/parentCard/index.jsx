// import React from "react";
// import Navbar from "../../../common/navbar";
// import Sidebar from "../../sidebar/index";
// import AnimalCard from "../../../common/animalCard/index"; // Import AnimalCard

// // Define parent animals with their respective details
// // const parentAnimals = [
// //   { name: "Leela", height: "5.2", gender: "Female", age: "3 years", weight: "400kg" },
// //   { name: "Rani", height: "5.5", gender: "Female", age: "4 years", weight: "450kg" },
// //   { name: "Moti", height: "5.0", gender: "Male", age: "3.5 years", weight: "420kg" },
// //   { name: "Ganga", height: "5.3", gender: "Female", age: "4.2 years", weight: "430kg" }
// // ];

// const animalData = {
//   Goat: { height: "3.5", gender: "Male", age: "2 years", weight: "60kg" },
//   Sheep: { height: "3.8", gender: "Female", age: "3 years", weight: "70kg" },
//   Cow: { height: "5.2", gender: "Female", age: "4 years", weight: "400kg" },
//   Buffalo: { height: "5.5", gender: "Male", age: "5 years", weight: "500kg" },
// };

// const Parent = () => (

//   <div className="parent">
//     <Navbar />
//     <div className="row">
//       <div className="col-lg-2">
//         {/* Left Sidebar - Fixed */}
//         <div className="sidebar-container">
//           <Sidebar />
//         </div>
//       </div>
//       <div className="col-lg-10 py-3">
//         {/* Right Content - Scrollable */}
//         <div
//           className="content-container flex-grow-1"
//           style={{
//             overflowY: "auto",
//             height: "calc(100vh - 200px)", // Adjust based on Navbar height
//             padding: "20px",
//           }}
//         >
//           <h4>Parent</h4>
//           <div className="row">
//             {parentAnimals.map((parent, index) => (
//               <div key={index} className="col-lg-3 px-4 pt-4"> 
//                 <AnimalCard 
//                   name={parent.name} 
//                   height={parent.height} 
//                   gender={parent.gender} 
//                   age={parent.age} 
//                   weight={parent.weight} 
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// );

// export default Parent;


import React from "react";
import Navbar from "../../../common/navbar";
import Sidebar from "../../sidebar/index";
import AnimalCard from "../../../common/animalCard/index";

const animalData = {
  Goat: [
    { name: "Billy", height: "3.5", gender: "Male", age: "2 years", weight: "60kg" },
    { name: "Snowy", height: "3.7", gender: "Female", age: "2.5 years", weight: "65kg" },
  ],
  Sheep: [
    { name: "Dolly", height: "3.8", gender: "Female", age: "3 years", weight: "70kg" },
    { name: "Shaun", height: "4.0", gender: "Male", age: "4 years", weight: "75kg" },
  ],
  Cow: [
    { name: "Leela", height: "5.2", gender: "Female", age: "4 years", weight: "400kg" },
    { name: "Rani", height: "5.3", gender: "Female", age: "4.5 years", weight: "410kg" },
  ],
  Buffalo: [
    { name: "Ganga", height: "5.5", gender: "Male", age: "5 years", weight: "500kg" },
    { name: "Moti", height: "5.6", gender: "Female", age: "5.2 years", weight: "510kg" },
  ],
};


const Parent = () => {
  const selectedAnimal = sessionStorage.getItem("animalName") || "Goat"; // Default to Goat
  const selectedAnimalsData = animalData[selectedAnimal] || [];

  return (
    <div className="parent">
      <Navbar />
      <div className="row">
        <div className="col-lg-2">
          <Sidebar />
        </div>
        <div className="col-lg-10 py-3">
          <div
            className="content-container flex-grow-1"
            style={{
              overflowY: "auto",
              height: "calc(100vh - 200px)",
              padding: "20px",
            }}
          >
            <h4>Parent</h4>
            <div className="row">
            {selectedAnimalsData.map((animal, index) => (
                <div key={index} className="col-lg-3 px-4 pt-4">
                  <AnimalCard
                  selectedAnimal={selectedAnimal}
                    name={animal.name}
                    height={animal.height}
                    gender={animal.gender}
                    age={animal.age}
                    weight={animal.weight}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Parent;
