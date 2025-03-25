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

// import React, { useEffect, useState } from "react";
// import Navbar from "../../../common/navbar";
// import Sidebar from "../../sidebar/index";
// import AnimalCard from "../../../common/animalCard/index";
// import { getData } from "../../../common/APIs/api";
// import { toast } from "react-toastify";



// const Parent = () => {
//   const [animals, setAnimals] = useState([]);
//   console.log('animals: ', animals);
//   const [loading, setLoading] = useState(true);

//   const selectedAnimal = sessionStorage.getItem("animalName") || "Goat"; // Default to Goat
//   console.log('selectedAnimal: ', selectedAnimal);
 

//   const endpoint = "/user/animaldata/parent/getAll";

//   useEffect(() => {
//     const fetchAnimals = async () => {
//       try {
//         const response = await getData(endpoint);
//         setAnimals(response.data);
//       } catch (error) {
//         toast.error(error.message ||"Error fetching animal data. Please try again.");
//       }
//       finally {
//         setLoading(false);
//       }
//     };
//     fetchAnimals();
//   }, [selectedAnimal]);  // Re-fetch if animal type changes

//   return (
  
//     <div className="parent">
//       <Navbar />
//       <div className="row">
//         <div className="col-lg-2">
//           <Sidebar />
//         </div>
//         <div className="col-lg-10 py-3">
//           <div
//             className="content-container flex-grow-1"
//             style={{
//               overflowY: "auto",
//               height: "calc(100vh - 200px)",
//               padding: "20px",
//             }}
//           >
//             <h4>Parent</h4>

//             {loading ? (
//               <p>Loading...</p> // Show a loading state while fetching data
//             ) : (
//               <div className="row">
//                 {animals.length > 0 ? (
//                   animals.map((animal, index) => (
//                     <div key={index} className="col-lg-3 px-4 pt-4">
//                       <AnimalCard
//                         selectedAnimal={selectedAnimal}
//                         name={animal.uniqueId}
//                         height={animal.height}
//                         gender={animal.gender}
//                         age={animal.ageYear}
//                         weight={animal.weightKg}
//                       />
//                     </div>
//                   ))
//                 ) : (
//                   <p>No Parent animals found.</p>
//                 )}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Parent;


import React, { useEffect, useState } from "react";
import Navbar from "../../../common/navbar";
import Sidebar from "../../sidebar/index";
import AnimalCard from "../../../common/animalCard/index";
import { getData } from "../../../common/APIs/api";
import { toast } from "react-toastify";

const Parent = () => {
  const [animals, setAnimals] = useState([]);
  const [loading, setLoading] = useState(true);
console.log("Hello")
  const selectedAnimal = sessionStorage.getItem("animalName") || "Goat"; // Default to Goat
  console.log('selectedAnimal: ', selectedAnimal);

  const endpoint = "/user/animaldata/parent/getAll";

  useEffect(() => {
    const fetchAnimals = async () => {
      try {
        const response = await getData(endpoint);
        console.log('response: ', response);
        setAnimals(response.data);
      } catch (error) {
        toast.error(error.message || "Error fetching animal data. Please try again.");
      } finally {
        setLoading(false);
      }
    };
    fetchAnimals();
  }, []); // Fetch only once on mount

  // Filter animals based on selectedAnimal
  const filteredAnimals = animals?.filter(animal => animal?.animalName === selectedAnimal);
  console.log('filteredAnimals: ', filteredAnimals);

  // Delete Animal Card 
  const handleDeleteAnimal = (uniqueId) => {
    console.log("Deleting animal with ID:", uniqueId);
    // Perform delete operation (e.g., API call, update state)
    setAnimals((prevAnimals) => prevAnimals.filter(animal => animal.uniqueId !== uniqueId));
  };

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

            {loading ? (
              <p>Loading...</p>
            ) : filteredAnimals?.length > 0 ? (
              <div className="row">
                {filteredAnimals?.map((animal, index) => (
                  <div key={index} className="col-lg-3 px-4 pt-4">
                    <AnimalCard
                      selectedAnimal={selectedAnimal}
                      name={animal.parentId}
                      height={animal.height}
                      gender={animal.gender}
                      age={animal.ageYear}
                      ageMonth={animal.ageMonth}
                      bodyScore={animal.bodyScore}
                      weight={animal.weightKg}
                      uniqueId={animal.uniqueId}
                      onDelete={() => handleDeleteAnimal(animal.uniqueId)}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <p>No Parent animals found for {selectedAnimal}.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Parent;
