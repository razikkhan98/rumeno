import React, { useEffect, useState } from "react";
import Navbar from "../../../common/navbar";
import Sidebar from "../../sidebar/index";
import AnimalCard from "../../../common/animalCard/index"; // Import AnimalCard
import { toast } from "react-toastify";
import { deleteData, getData } from "../../../common/APIs/api";

// Define child animals with their respective details

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
  const handleDeleteAnimal = async (uniqueId) => {
    setAnimals((prevAnimals) =>
      prevAnimals.filter((animal) => animal.uniqueId !== uniqueId)
    );

    try {
      const response = await deleteData(
        "/user/animaldata/child/delete",
        uniqueId
      );
      console.log("response:------deleteData ", response);
    } catch (error) {}
  };

  return (
    <div className="parent">
      <Navbar />
      <div className="row">
        <div className="col-lg-2 col-md-3">
          <Sidebar />
        </div>
        <div className="col-lg-10 col-md-9 py-3">
          <div
            className="content-container flex-grow-1"
            style={{
              overflowY: "auto",
              height: "calc(100vh - 200px)",
              padding: "20px",
            }}
          >
            <h4 className="text-chinese-black-color">Child</h4>

            {loading ? (
              <p>Loading...</p>
            ) : filteredAnimals?.length > 0 ? (
              <div className="row">
                {filteredAnimals.map((animal, index) => (
                  <div key={index} className="col-lg-3 col-md-6 px-3 pt-4">
                    <AnimalCard
                      selectedAnimal={selectedAnimal}
                      parentId={animal.parentId}
                      height={animal.height}
                      gender={animal.gender}
                      age={animal.ageYear}
                      ageMonth={animal.ageMonth}
                      bodyScore={animal.bodyScore}
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
