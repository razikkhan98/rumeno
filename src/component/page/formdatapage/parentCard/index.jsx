

import React, { useEffect, useState } from "react";
import Navbar from "../../../common/navbar/mainnavbar";
import Sidebar from "../../sidebar/index";
import AnimalCard from "../../../common/animalCard/index";
import { deleteData, getData } from "../../../common/APIs/api";
import { toast } from "react-toastify";
import { NavLink } from "react-router-dom";
import axios from "axios";

const Parent = () => {
  const [animals, setAnimals] = useState([]);
  const [loading, setLoading] = useState(true);
  const uid = sessionStorage.getItem("uid");
  const selectedAnimal = sessionStorage.getItem("animalName") || "Goat"; // Default to Goat
  const [error, setError] = useState("");

  const fetchAnimal = async () => {
    try {
      const response = await axios.get(
        "https://8dc9-2401-4900-8820-262c-7495-e9ae-6b7e-82d5.ngrok-free.app/rumeno/user/animaldata/newEntity/getAllById",
        {
          params: { animalName: selectedAnimal, uid },
          headers: {
            "ngrok-skip-browser-warning": "true", // Required for ngrok
            "Content-Type": "application/json",   // Adjust as needed
          },
        }
      );
      setAnimals(response.data.animals || []);
      if (response.data.animals) {
        setLoading(false)
      }
    } catch (err) {
      setError("Error fetching data");
    }
  };

  useEffect(() => {
    fetchAnimal()
  }, []);

  // Filter animals based on selectedAnimal
  const filteredAnimals = animals?.filter(
    (animal) => animal?.animalName === selectedAnimal
  );
  console.log('filteredAnimals: ', filteredAnimals);


  // Add Goat 
  const addGoat = () => {
    localStorage.removeItem("currentIndex");
  };
 




  // Delete  Animal Card
  const handleDeleteAnimal = async (uniqueId, childrenCount) => {
    if (childrenCount > 0) {
      toast.error("Cannot delete parent. It has child records associated.");
      return;
    }

    setAnimals((prevAnimals) => prevAnimals.filter(animal => animal.uniqueId !== uniqueId));

    try {
      await deleteData("/user/animaldata/newEntity/delete", uniqueId);
      toast.success("Animal deleted successfully.");
    } catch (error) {
      toast.error(error.message || "Error deleting animal. Please try again.");
    }
  };

  return (
    <div className="parent">
      <Navbar />
      <div className="row pt-5">
        <div className="col-lg-2 col-md-3 pt-5">
          <Sidebar />
        </div>
        <div className="col-lg-10 col-md-9 pt-5">
          <div
            className="content-container flex-grow-1"
            style={{
              overflowY: "auto",
              // height: "calc(100vh - 200px)",
              padding: "0px 20px",
            }}
          >
            <div className="d-flex justify-content-between align-items-center mt-2">
              <p className="font-18-500 text-chinese-black-color ps-lg-3">Animal</p>
              {/* Add Goat Button */}
              <NavLink to="/parentform">
                <button
                  className="btn add-animal-btn text-white px-4 border rounded-pill"
                  style={{
                    background:
                      "linear-gradient(to right, #89C9E6, #DD3675, #EC7229)",
                  }}
                  onClick={() => addGoat()}
                >
                  <span className="me-1">+</span>
                  {`Add ${selectedAnimal}`}
                </button>
              </NavLink>
            </div>

            {loading ? (
              <p>Loading...</p>
            ) : filteredAnimals?.length > 0 ? (
              <div className="row">
                {filteredAnimals?.map((animal, index) => 
                
                {
                  console.log("animal.vaccineName==",animal)
                  return(
                    <div key={index} className="width-20 px-3 pt-1">
                    <AnimalCard
                      showDetailsButton={true}
                      selectedAnimal={selectedAnimal}
                      parentId={animal.parentId}
                      tagId={animal.tagId}
                      height={animal.height}
                      gender={animal.gender}
                      age={animal.ageYear}
                      weightKg={animal.weightKg}
                      fatherTag={animal.fatherTag}
                      motherTag={animal.motherTag}
                      birthWeight={animal.birthWeight}
                      birthType={animal.birthType}
                      birthDate={animal.birthDate}
                      failed={animal.failed}
                      siblingDetails={animal.siblingDetails}
                      childWeanDate={animal.childWeanDate}
                      childWeanWeight={animal.childWeanWeight}
                      comments={animal.comments}
                      motherWeanDate={animal.motherWeanDate}
                      purchaseDate={animal.purchaseDate}
                      lastVaccineDate={animal.lastVaccineDate}
                      lastVaccineName={animal.lastVaccineName}
                      isPregnant={animal.isPregnant}
                      dateMading={animal.dateMading}
                      pregnencyFail={animal.pregnencyFail}
                      weanDate={animal.weanDate}
                      vaccineName={animal.vaccineName}
                      vaccineDate={animal.vaccineDate}
                      farmName={animal.farmName}
                      ageMonth={animal.ageMonth}
                      bodyScore={animal.bodyScore}
                      pregnancyDetails={animal.pregnancyDetails}
                      currentPregnancyMonth={animal.currentPregnancyMonth}
                      maleDetail={animal.maleDetail}
                      uniqueId={animal.uniqueId}
                      children={animal.children?.length > 0 ? animal.children?.length : "No Children"}
                      postweight={animal.postWeight?.length > 0 ? animal.postWeight?.length : "No Post Weight"}
                      milk={animal.milk?.length > 0 ? animal.milk?.length : "No Milk"}
                      vaccine={animal.vaccine?.length > 0 ? animal.vaccine?.length : "No Vaccine"}
                      deworm={animal.deworm?.length > 0 ? animal.deworm?.length : "No Deworm"}
                      estrusHeat={animal.estrusHeat?.length > 0 ? animal.estrusHeat.length : "No Estrus Heat"}
                      farmSanitation={animal.farmSanitation?.length > 0 ? animal.farmSanitation.length : "No Farm Sanitation"}
                      onDelete={() => handleDeleteAnimal(animal.uniqueId, animal.children?.length || 0)}
                      currentIndex={index}
                    />
                  </div>
                  )
                })}
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
