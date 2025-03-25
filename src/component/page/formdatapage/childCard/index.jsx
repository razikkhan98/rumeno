import React, { useEffect, useState } from "react";
import Navbar from "../../../common/navbar";
import Sidebar from "../../sidebar/index";
import AnimalCard from "../../../common/animalCard/index"; // Import AnimalCard
import { toast } from "react-toastify";
import { getData } from "../../../common/APIs/api";

// Define child animals with their respective details
const childAnimals = [
  {
    name: "Munna",
    height: "3.5",
    gender: "Male",
    age: "1 year",
    weight: "150kg",
  },
  {
    name: "Chintu",
    height: "3.8",
    gender: "Male",
    age: "1.2 years",
    weight: "170kg",
  },
  {
    name: "Babloo",
    height: "4.0",
    gender: "Male",
    age: "1.5 years",
    weight: "190kg",
  },
  {
    name: "Golu",
    height: "3.7",
    gender: "Female",
    age: "1.3 years",
    weight: "160kg",
  },
];

const Child = () => {
  const [animals, setAnimals] = useState([]);

  const [loading, setLoading] = useState(true);

  const selectedAnimal = sessionStorage.getItem("animalName") || "Goat"; // Default to Goat

  const endpoint = "/user/animaldata/child/getAll";

  useEffect(() => {
    const fetchAnimals = async () => {
      try {
        const response = await getData(endpoint);
        setAnimals(response.data);
      } catch (error) {
        toast.error(
          error.message || "Error fetching animal data. Please try again."
        );
      } finally {
        setLoading(false);
      }
    };
    fetchAnimals();
  }, []); // Fetch only once on mount

  // Filter animals based on selectedAnimal
  const filteredAnimals = animals?.filter(
    (animal) => animal?.animalName === selectedAnimal
  );
  console.log("filteredAnimals: ", filteredAnimals);

  const handleDeleteAnimal = (uniqueId) => {
    console.log("Deleting animal with ID:", uniqueId);
    // Perform delete operation (e.g., API call, update state)
    setAnimals((prevAnimals) => prevAnimals.filter(animal => animal.uniqueId !== uniqueId));
  };

  return (
    // <div className="parent">
    //   <Navbar />
    //   <div className="row">
    //     <div className="col-lg-2">
    //       {/* Left Sidebar - Fixed */}
    //       <div className="sidebar-container">
    //         <Sidebar />
    //       </div>
    //     </div>
    //     <div className="col-lg-10 py-3">
    //       {/* Right Content - Scrollable */}
    //       <div
    //         className="content-container flex-grow-1"
    //         style={{
    //           overflowY: "auto",
    //           height: "calc(100vh - 200px)", // Adjust based on Navbar height
    //           padding: "20px",
    //         }}
    //       >
    //         <h4>Child</h4>
    //         <div className="row">
    //           {childAnimals.map((child, index) => (
    //             <div key={index} className="col-lg-3 px-4 pt-4">
    //               <AnimalCard
    //                 name={child.name}
    //                 height={child.height}
    //                 gender={child.gender}
    //                 age={child.age}
    //                 weight={child.weight}
    //               />
    //             </div>
    //           ))}
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
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
            <h4>Child</h4>

            {loading ? (
              <p>Loading...</p>
            ) : animals?.length > 0 ? (
              <div className="row">
                {animals.map((animal, index) => (
                  <div key={index} className="col-lg-3 px-3 pt-4">
                    <AnimalCard
                      selectedAnimal={selectedAnimal}
                      name={animal.parentId}
                      height={animal.height}
                      gender={animal.gender}
                      age={animal.ageYear}
                      weight={animal.weightKg}
                      uniqueId={animal.uniqueId}
                      kidId={animal.kidId}
                      
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

export default Child;
