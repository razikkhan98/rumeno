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
  // const handleDeleteAnimal = async (uniqueId) => {
  //   setAnimals((prevAnimals) =>
  //     prevAnimals.filter((animal) => animal.uniqueId !== uniqueId)
  //   );

  //   try {
  //     const response = await deleteData(
  //       "/user/animaldata/child/delete",
  //       uniqueId
  //     );
  //     console.log("response:------deleteData ", response);
  //   } catch (error) {}
  // };

    const handleDeleteAnimal = async (uniqueId, childrenCount) => {
      if (childrenCount > 0) {
        toast.error("Cannot delete parent. It has child records associated.");
        return;
      }
  
      setAnimals((prevAnimals) => prevAnimals.filter(animal => animal.uniqueId !== uniqueId));
  
      try {
        await deleteData("/user/animaldata/parent/delete", uniqueId);
        toast.success("Animal deleted successfully.");
      } catch (error) {
        toast.error(error.message || "Error deleting animal. Please try again.");
      }
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
                      _id={animal._id}
                      height={animal.height}
                      gender={animal.gender}
                      age={animal.ageYear}
                      ageMonth={animal.ageMonth}
                      bodyScore={animal.bodyScore}
                      weight={animal.weightKg}
                      uniqueId={animal.uniqueId}
                      kidId={animal.kidId}
                      postweight={animal.postWeight?.length > 0 ? animal.postWeight?.length : "No Post Weight"}
                      milk={animal.milk?.length > 0 ? animal.milk?.length : "No Milk"}
                      vaccine={animal.vaccine?.length > 0 ? animal.vaccine?.length : "No Vaccine"}
                      deworm={animal.deworm?.length > 0 ? animal.deworm?.length : "No Deworm"}
                      estrusHeat={animal.estrusHeat?.length > 0 ? animal.estrusHeat.length : "No Estrus Heat"}
                      farmSanitation={animal.farmSanitation?.length > 0 ? animal.farmSanitation.length :"No Farm Sanitation"}
                      // onDelete={() => handleDeleteAnimal(animal.uniqueId)}
                      // onDelete={() => handleDeleteAnimal(animal.uniqueId, animal.children?.length || 0)}

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
