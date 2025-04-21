import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Sidebar from "../sidebar";
import Navbar from "../../common/navbar";
import { getData, postData, updateData } from "../../common/APIs/api";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";
import { CartContext } from "../../common/Context";

const GoatDetailForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors },
  } = useForm();
  // const { setparentId } = useContext(CartContext);
  const selectedAnimal = sessionStorage.getItem("animalName");

  const { purchaseDate, birthDate, isPregnant } = watch();

  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const type = queryParams.get("type");
  const farmerData = location.state?.farmName;
  console.log('farmerData: ', farmerData);
  const storedIndex = localStorage.getItem("currentIndex");
  const onSubmit = async (data) => {
    try {
      const uid = sessionStorage.getItem("uid"); // Retrieve UID from sessionStorage
      const animalName = sessionStorage.getItem("animalName"); // Retrieve animalName from sessionStorage
      // Convert gender value to lowercase

      const formData = {
        ...data,
        selectedAnimal,
        uid, // Add UID to the form data
        animalName, // Add animalName to the form data
        farmerData,
      };

      // Determine API endpoint dynamically based on type
      const endpoint =
        type === "edit"
          ? `/user/animaldata/parent/update` // Edit API
          : "/user/animaldata/parent"; // Add API

      // Call the appropriate API method
      const response = await (type === "edit"
        ? updateData(endpoint, data?.uniqueName, formData)
        : postData(endpoint, formData));
        
        console.log('response cards: ', response);
      if (response.data.message === "success") {
        toast.success(
          `Parent animal ${type === "edit" ? "updated" : "added"} successfully`,
          {
            position: "top-right",
            autoClose: 3000,
          }
        );

        setTimeout(() => navigate("/farmdata/parent"), 100);
      }

      reset();
    } catch (error) {
      toast.error(error.message || "Something went wrong!", {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  const endpoint = "/user/animaldata/parent/getAll";

  useEffect(() => {
    const fetchAnimals = async () => {
      try {
        const response = await getData(endpoint);

        if (response.data && response.data.length > 0) {
          const animalData = response.data[storedIndex];

          localStorage.removeItem("currentIndex");
          // setValue("uniqueName", animalData.uniqueId || "");
          setValue("tagId", animalData.tagId || "");
          setValue("ageYear", animalData.ageYear || "");
          setValue("ageMonth", animalData.ageMonth || "");
          setValue("height", animalData.height || "");
          setValue("purchaseDate", animalData.purchaseDate || "");
          setValue("gender", animalData.gender || "");
          setValue("weightKg", animalData.weightKg || "");
          setValue("pregnancyDetails", animalData.pregnancyDetails || "");
          setValue("maleDetail", animalData.maleDetail || "");
          setValue("bodyScore", animalData.bodyScore || "");
          setValue("comments", animalData.comments || "");
        }
      } catch (error) {
        // toast.error(error.message || "Something went wrong!", {
        //   position: "top-right",
        //   autoClose: 3000,
        // });
      }
    };
    fetchAnimals();
  }, [setValue]); // Fetch only once on mount

  const [gender, setGender] = useState("");

  const handleSelect = (e) => {
    setGender(e.target.value);
    setValue("gender", e.target.value || "");
  };

  return (
    <>
      <div className="goat-form">
        <Navbar />
        <div className="row">
          <div className="col-lg-2">
            <Sidebar />
          </div>
          <div className="col-lg-10 px-4 py-3">
            <div className="d-flex justify-content-between">
              <div>
                <p className="detail-head text-chinese-black-color mb-1">
                  Basic Details
                </p>
                <p className="detail-para mb-0">Fill basic details</p>
              </div>
              <div className="d-flex pe-3">
                <div class="form-check me-2">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="male"
                    value="Male"
                    checked={gender === "Male"}
                    onChange={handleSelect}
                  />
                  <label class="form-check-label" for="flexRadioDefault1">
                    Male
                  </label>
                </div>
                <div class="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="female"
                    value="Female"
                    checked={gender === "Female"}
                    onChange={handleSelect}
                  />
                  <label class="form-check-label" for="flexRadioDefault1">
                    Female
                  </label>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="row mt-3">
                {/* <div className="col-lg-2 lh-lg">
                  <label className="form-lable-detail">Unique ID</label>
                  <input
                    type="text"
                    className="form-control form-control-detail"
                    placeholder="Enter Unique ID"
                    // {...register("uniqueName", {
                    //   required: "Unique ID is required",
                    // })}
                  />
                  {errors.uniqueId && (
                    <p className="text-danger">{errors.uniqueId.message}</p>
                  )}
                </div> */}

                <div className="col-lg-2 lh-lg">
                  <label className="form-lable-detail">Tag ID</label>
                  <input
                    type="text"
                    className="form-control form-control-detail"
                    placeholder="Enter Tag ID"
                    {...register("tagId", {
                      required: "Tag ID is required",
                    })}
                  />
                  {errors.tagId && (
                    <p className="text-danger">{errors.tagId.message}</p>
                  )}
                </div>

                <div className="col-lg-2 lh-lg">
                  <label className="form-lable-detail">Age Year</label>
                  <input
                    type="number"
                    className="form-control form-control-detail"
                    placeholder="Enter Age"
                    {...register("ageYear")}
                  />
                </div>
                <div className="col-lg-2 lh-lg">
                  <label className="form-lable-detail">Age Month</label>
                  <input
                    type="number"
                    className="form-control form-control-detail"
                    placeholder="Enter Age"
                    {...register("ageMonth")}
                  />
                </div>

                <div className="col-lg-2 lh-lg">
                  <label className="form-lable-detail">Height (in Ft)</label>
                  <input
                    type="number"
                    className="form-control form-control-detail"
                    placeholder="Enter Height"
                    {...register("height")}
                  />
                </div>

                <div className="col-lg-2 lh-lg">
                  <label className="form-lable-detail">Weight (kg)</label>
                  <input
                    type="number"
                    className="form-control form-control-detail"
                    placeholder="Enter Weight"
                    {...register("weightKg")}
                  />
                </div>
                <div className="col-lg-2 lh-lg">
                  <label className="form-lable-detail">Birth Date</label>
                  <input
                    type="date"
                    // disabled={purchaseDate}
                    className="form-control form-control-detail"
                    {...register("birthDate")}
                  />
                </div>
              </div>

              <div className="row mt-3">
                <div className="col-lg-2 lh-lg">
                  <label className="form-lable-detail">Mother Unique Id</label>
                  <input
                    type="text"
                    placeholder="Enter Mother tag"
                    className="form-control form-control-detail"
                    {...register("motherUniqueId")}
                  />
                </div>

                <div className="col-lg-2 lh-lg">
                  <label className="form-lable-detail">Father Unique Id</label>
                  <input
                    type="text"
                    placeholder="Enter Father tag"
                    className="form-control form-control-detail"
                    {...register("fatherUniqueId")}
                  />
                </div>

                <div className="col-lg-2 d-flex align-items-center gap-1">
                  <label className="form-lable-detail">Gender</label>
                  <input
                    type="text"
                    className="form-control form-control-detail mt-4"
                    // placeholder="Enter Father Breed"
                    disabled={gender}
                    {...register("gender")}
                  />
                </div>
                <div className="col-lg-2 lh-lg">
                  <label className="form-lable-detail">Birth Type</label>
                  <select
                    // disabled={purchaseDate}
                    className="form-select form-control-detail"
                    {...register("birthType")}
                  >
                    <option value="">Select Birth Type</option>
                    <option value="Natural">Natural</option>
                    <option value="Castration">Castration</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="col-lg-2 lh-lg">
                  <label className="form-lable-detail">Birth Weight</label>
                  <select
                    // disabled={purchaseDate}
                    className="form-select form-control-detail"
                    {...register("birthWeight")}
                  >
                    <option value="">Select Birth Weight</option>
                    <option value="Natural">Natural</option>
                    <option value="Castration">Castration</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div className="row mt-3">

                <div className="col-lg-2 lh-lg">
                  <label className="form-lable-detail">
                    Mother's wean Date
                  </label>
                  <input
                    type="date"
                    className="form-control form-control-detail"
                    {...register("motherWeanDate")}
                  />
                </div>
                <div className="col-lg-3 lh-lg">
                  <label className="form-lable-detail">Body Score</label>
                  <select
                    className="form-select form-control-detail"
                    {...register("bodyScore")}
                  >
                    <option value="">Select body score</option>
                    <option value="1">1: Very slim body</option>
                    <option value="2">2: Skinned body</option>
                    <option value="3">3: Slim body</option>
                    <option value="4">4: Mild fat body</option>
                    <option value="5">5: Fatty bulky body</option>
                  </select>
                </div>
                <div className="col-lg-3 lh-lg">
                  <label className="form-lable-detail">
                    Date of Purchasing
                  </label>
                  <input
                    type="date"
                    // disabled={birthDate}
                    className="form-control form-control-detail"
                    {...register("purchaseDate")}
                  />
                </div>

                {purchaseDate && ( 
                  <div className="col-lg-2 lh-lg">
                    <label className="form-lable-detail">
                      Last Vaccine Date
                    </label>
                    <input
                      type="date"
                      className="form-control form-control-detail"
                      {...register("lastVaccineDate")}
                    />
                  </div>
                )}
                {purchaseDate && (
                  <div className="col-lg-2 lh-lg">
                    <label className="form-lable-detail">
                      Last Vaccine Name
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-detail"
                      {...register("lastVaccineName")}
                    />
                  </div>
                )}
              </div>

              {/* <div className="row mt-3">
              </div> */}

              <div className="row mt-3">
                <div className="col-lg-4 lh-lg">
                  <label className="form-lable-detail">Comments (if any)</label>
                  <input
                    type="text"
                    className="form-control form-control-detail"
                    placeholder="Enter comment"
                    {...register("comments")}
                  />
                </div>
              </div>
              {gender === "Female" && (
                <div className="row mt-3">
                  <div className="col-lg-2 lh-lg">
                    <div class="form-check d-flex align-items-center gap-2">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                        {...register("isPregnant")}
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        Pregnant
                      </label>
                    </div>
                  </div>
                </div>
              )}

              {isPregnant && (
                <div className="row mt-2">
                  <div className="col-lg-2 lh-lg">
                    <label className="form-lable-detail">Date of Mating</label>
                    <input
                      type="date"
                      className="form-control form-control-detail"
                      {...register("matingDate")}
                    />
                  </div>
                  <div className="col-lg-2 lh-lg">
                    <label className="form-lable-detail">
                      Current Pregnency Month
                    </label>
                    <select
                      className="form-select form-control-detail"
                      {...register("pregnancyDetails")}
                    >
                      <option value="">Select Month</option>
                      <option value="1 Month">1 Month</option>
                      <option value="2 Month">2 Month</option>
                      <option value="3 Month">3 Month</option>
                      <option value="4 Month">4 Month</option>
                      <option value="5 Month">5 Month</option>
                    </select>
                  </div>
                  <div className="col-lg-2 lh-lg">
                    <label className="form-lable-detail">Failed</label>
                    <select
                      className="form-select form-control-detail"
                      {...register("pregnencyFail")}
                    >
                      <option value="">Select Yes Or No</option>
                      <option value="1">Yes</option>
                      <option value="2">No</option>
                    </select>
                  </div>
                  <div className="col-lg-2 lh-lg">
                    <label className="form-lable-detail">
                      Mother Wean Date
                    </label>
                    <input
                      type="date"
                      className="form-control form-control-detail"
                      {...register("weanDate")}
                    />
                  </div>
                </div>
              )}

              <div className="row mt-2">
                <p className="detail-para mb-0 lh-lg">Other Disease Vaccine</p>
                <div className="col-lg-2 lh-lg">
                  <label className="form-lable-detail">
                    Vaccine Name
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-detail"
                    {...register("weanDate")}
                  />
                </div>
                <div className="col-lg-2 lh-lg">
                  <label className="form-lable-detail">
                    Vaccine Date
                  </label>
                  <input
                    type="date"
                    className="form-control form-control-detail"
                    {...register("weanDate")}
                  />
                </div>
                <div className="col-lg-2 lh-lg">
                  <label className="form-lable-detail">Farm Name</label>
                  <input
                    type="text"
                    className="form-control form-control-detail"
                    placeholder="Enter Farm Name"
                    {...register("farmName", {
                      required: "Farm Name is required",
                    })}
                  />
                  {errors.farmName && (
                    <p className="text-danger">{errors.farmName.message}</p>
                  )}
                </div>
              </div>


              <div className="col-lg-3 pt-5 pe-5">
                <button
                  type="submit"
                  className="btn w-100 text-white py-2 rounded-pill"
                  style={{
                    backgroundColor: "#F4863E",
                    fontSize: "14px",
                    fontWeight: "600",
                  }}
                >
                  {type === "edit" ? "Edit" : `Add ${selectedAnimal}`}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default GoatDetailForm;
