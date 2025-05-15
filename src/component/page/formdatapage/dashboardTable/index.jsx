import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { API_BASE_URL } from "../../../common/APIs/api";
import axios from "axios";

const DashboardTable = ({ data, title,
  parentId,
  height,
  gender,
  age,
  _id,
  birthDate,
  fatherTag,
  motherTag,
  birthWeight,
  birthType,
  motherWeanDate,
  purchaseDate,
  lastVaccineDate,
  lastVaccineName,
  isPregnant,
  dateMading,
  pregnencyFail,
  weanDate,
  vaccineName,
  vaccineDate,
  farmHouseName,
  ageMonth,
  weightKg,
  bodyScore,
  pregnancyDetails,
  maleDetail,
  selectedAnimal,
  uniqueId,
  kidId,
  onDelete,
  children,
  postweight,
  milk,
  vaccine,
  deworm,
  estrusHeat,
  farmSanitation,
  currentIndex,
  comments,
  failed,
  childWeanDate,
  childWeanWeight,
  siblingDetails,
  currentPregnancyMonth,
}) => {
  console.log("data: ", data);
  const uid = sessionStorage.getItem("uid");
    const location = useLocation();
  const { tagId } = location.state || {}; // ✅ yeh `tagId` dashboard se aaya hai
  const [animalData, setAnimalData] = useState(null);
  const fetchAnimal = async () => {
    try {
      const response = await axios.get(
        `${API_BASE_URL}/user/animaldata/newEntity/getAllById`,
        {
          params: { animalName: selectedAnimal, uid },
          headers: {
            "ngrok-skip-browser-warning": "true", // Required for ngrok
            "Content-Type": "application/json",   // Adjust as needed
          },
        }
      );

      const allAnimals = response.data?.data || [];

      const matchedAnimal = allAnimals.find(animal => animal.tagId === tagId);

      if (matchedAnimal) {
        setAnimalData(matchedAnimal);
      } else {
        console.warn("No matching animal found for tagId:", tagId);
      }
      console.log('response: dashboard', response);

    } catch (err) {
      // setError("Error fetching data");
    }
  };
  useEffect(() => {
    fetchAnimal()
  }, []);

  const isVaccine = title === "Vaccine";
  console.log('isVaccine: ', isVaccine);
  return (
    <div className="dashboard-table">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <table className="table">
              <thead>
                <tr className="heads">
                  <th scope="col" className="text-chinese-black-color">
                    S No.
                  </th>
                  <th scope="col" className="text-chinese-black-color">
                    TagId
                  </th>
                  {isVaccine && <th>Vaccine Name</th>}
                  {/* <th scope="col" className="text-chinese-black-color">
                    Animal
                  </th> */}
                  <th scope="col" className="text-chinese-black-color">
                    Status
                  </th>
                  <th scope="col" className="text-chinese-black-color">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {data?.map((parent, index) => (
                  <tr
                    key={index}
                    className={`row-border row-shadow ${index % 2 === 0 ? "table-info" : "table-secondary"
                      }`}
                  >
                    <th scope="row">{index + 1}</th>
                    <td>{parent.tagId}</td>
                    {isVaccine && <td>{parent?.vaccineName || "N/A"}</td>}
                    {/* <td>{parent.parentId}</td> */}
                    <td>
                      <span
                        style={{
                          backgroundColor:
                            parent?.status?.toLowerCase() === "completed"
                              ? "lightgreen"
                              : parent?.status?.toLowerCase() === "pending"
                                ? "lightcoral"
                                : "lightgray",
                          color: "white", // Ensures text is visible on all backgrounds
                          textAlign: "center", // Centers the text
                          borderRadius: "8px", // Optional: Adds rounded corners
                          padding: "5px 10px", // Adjusts spacing inside the cell
                        }}
                      >
                        {parent.status || parent.type}
                      </span>
                    </td>


                    <td>
                      <NavLink to={`/record/${parentId}/${uniqueId}`} state={{
                        tab: title,
                        tagId,
                        uniqueId,
                        uid: parent.uid,
                        defaultForm: "BasicDetails",
                        motherTag,
                        fatherTag,
                        animalData: {
                          parentId,
                          tagId,
                          height,
                          gender,
                          age,
                          _id,
                          birthDate,
                          ageMonth,
                          weightKg,
                          bodyScore,
                          pregnancyDetails,
                          maleDetail,
                          uniqueId,
                          kidId,
                          postweight,
                          comments,
                          fatherTag,
                          motherTag,
                          birthWeight,
                          birthType,
                          motherWeanDate,
                          purchaseDate,
                          lastVaccineDate,
                          lastVaccineName,
                          isPregnant,
                          dateMading,
                          pregnencyFail,
                          weanDate,
                          vaccineName,
                          vaccineDate,
                          farmHouseName,
                          failed,
                          childWeanDate,
                          childWeanWeight,
                          siblingDetails,
                          currentPregnancyMonth,
                        },
                      }}>
                        <button
                          className="dashboard-table-btn shadow"
                        >
                          Add
                        </button>
                      </NavLink>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardTable;
