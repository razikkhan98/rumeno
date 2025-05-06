import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Sidebar from "../sidebar";
import Navbar from "../../common/navbar/mainnavbar";
import { getData, postData, updateData } from "../../common/APIs/api";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";
import { CartContext } from "../../common/Context";
import moment from "moment";
import axios from "axios";

const GoatDetailForm = () => {

  const [animalUniqueId, setAnimalUniqueId] = useState()
  const [isPurchased, setIsPurchased] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors },
    clearErrors,
  } = useForm();
  const handlePurchaseClick = () => {
    setIsPurchased(!isPurchased);
    // clearErrors("motherTag");   
  };
  const selectedAnimal = sessionStorage.getItem("animalName");

  const { purchaseDate, birthDate, isPregnant, isChild } = watch();

  const navigate = useNavigate();
  const location = useLocation();
  const uniqueId = location.state?.uniqueId;
  const animalData = location.state; // This will be the full animal object


  // 

  // const tagId = location.state?.tagId;
  const queryParams = new URLSearchParams(location.search);

  const type = queryParams.get("type");




  const storedIndex = localStorage.getItem("currentIndex");

  const onSubmit = async (data) => {
    try {
      const uid = sessionStorage.getItem("uid"); // Retrieve UID from sessionStorage
      const animalName = sessionStorage.getItem("animalName"); // Retrieve animalName from sessionStorage
      const farmHouseName = sessionStorage.getItem("farmHouseName"); // Retrieve animalName from sessionStorage

      // Convert gender value to lowercase

      const formData = {
        ...data,
        selectedAnimal,
        uniqueId,
        uid, // Add UID to the form data
        animalName, // Add animalName to the form data
        // farmName,
        farmHouseName,
      };



      // Determine API endpoint dynamically based on type
      const endpoint =
        type === "edit"
          ? `user/animaldata/newEntity/update` // Edit API
          : "/user/animaldata/newEntity"; // Add API

      // Call the appropriate API method
      const response = await (type === "edit"
        ? updateData(endpoint, animalUniqueId, formData)
        : postData(endpoint, formData));


      if (response.data.message === "success" || response.data.message === "Animal added successfully") {
        toast.success(
          `Animal ${type === "edit" ? "updated" : "added"} successfully`,
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



  const [getAnimalTagIds, setGetAnimalTagIds] = useState([])
  const animalName = sessionStorage.getItem("animalName");
  const uid = sessionStorage.getItem("uid");


  useEffect(() => {
    const fetchAnimals = async () => {
      try {
        const response = await axios.get(
          `https://ab40-2401-4900-8823-f1f0-8820-98b3-d0ac-a93f.ngrok-free.app/rumeno/user/animaldata/newEntity/getTagIdsByGender?animalName=${animalName}&uid=${uid}`,

          // http://localhost:8000/rumeno/user/animaldata/newEntity/getTagIdsByGender?animalName=Goat&uid=RAZ1233
          {
            headers: {
              "ngrok-skip-browser-warning": "true",
              "Content-Type": "application/json",
            },
          }
        );

        setGetAnimalTagIds(response.data);
      } catch (error) {
        toast.error(
          error.message || "Error fetching animal data. Please try again."
        );
      } finally {
        // setLoading(false);
      }
    };
    fetchAnimals();
  }, []); // Fetch only once on mount

  useEffect(() => {
    if (animalData) {
      console.log('animalData: ', animalData);
      // const filteredAnimals = response.data?.filter((animal) => animal?.animalName === selectedAnimal);
      // 
      // const animalData = filteredAnimals[storedIndex];
      setAnimalUniqueId(animalData.uniqueId)
      // localStorage.removeItem("currentIndex");
      setValue("uniqueName", animalData.uniqueId || "");
      setValue("tagId", animalData.tagId || "");
      setValue("fatherTag", animalData.fatherTag || "");
      setValue("motherTag", animalData.motherTag || "");
      setValue("ageYear", animalData.age || "");
      setValue("ageMonth", animalData.ageMonth || "");
      setValue("height", animalData.height || "");
      setValue("purchaseDate", moment(animalData.purchaseDate).format('YYYY-MM-DD') || "");
      setValue("gender", animalData.gender || "");
      setGender(animalData.gender)
      setValue("weightKg", animalData.weightKg || "");
      setValue("birthDate", moment(animalData.birthDate).format('YYYY-MM-DD') || "");
      setValue("dateMading", moment(animalData.dateMading).format('YYYY-MM-DD') || "");
      console.log('animalData.dateMading: ', animalData.dateMading);
      setValue("motherWeanDate", moment(animalData.motherWeanDate).format('YYYY-MM-DD') || "");
      setValue("childWeanDate", moment(animalData.childWeanDate).format('YYYY-MM-DD') || "");
      setValue("vaccineDate", moment(animalData.vaccineDate).format('YYYY-MM-DD') || "");
      setValue("lastVaccineDate", moment(animalData.lastVaccineDate).format('YYYY-MM-DD') || "");
      setValue("lastVaccineName", animalData.lastVaccineName || "");
      setValue("vaccineName", animalData.vaccineName || "");
      setValue("childWeanWeight", animalData.childWeanWeight || "");
      setValue("birthWeight", animalData.birthWeight || "");
      setValue("failed", animalData.failed || "");
      setValue("siblingDetails", animalData.siblingDetails || "");
      setValue("birthType", animalData.birthType || "");
      setValue("pregnancyDetails", animalData.pregnancyDetails || "");
      setValue("maleDetail", animalData.maleDetail || "");
      setValue("bodyScore", animalData.bodyScore || "");
      setValue("comments", animalData.comments || "");
      setValue("currentPregnancyMonth", animalData.currentPregnancyMonth || "");
      setIsPurchased(animalData.purchaseDate ? true : false);
      setValue( "isPregnant", animalData.currentPregnancyMonth ? true : false);
    }
  }, [setValue]); // Fetch only once on mount



  const [gender, setGender] = useState("");
  console.log('gender: ', gender);

  const handleSelect = (e) => {
    setGender(e.target.value);
    setValue("gender", e.target.value || "");
  };

  let today = new Date().toISOString().split('T')[0];
  document.getElementsByName("somedate")[0]?.setAttribute('max', today)





  return (
    <>
      <div className="goat-form">
        <Navbar />
        <div className="row pt-5">
          <div className="col-lg-2 py-5">
            <Sidebar />
          </div>
          <div className="col-lg-10 px-4 py-5">
            <div className="d-flex justify-content-between pt-3">
              <div>
                <p className="detail-head text-chinese-black-color mb-1">
                  Basic Details
                </p>
                <p className="detail-para mb-0">Fill basic details</p>
              </div>

              {/* <div className="d-flex pe-3">
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
              </div>  */}

              <div className="d-flex pe-3">
                <button
                  type="button"
                  className={`me-2 ${isPurchased ? "gender-btn" : "gender-btn-light"} `}
                  onClick={handlePurchaseClick}
                >
                  Purchase
                </button>
                <button
                  type="button"
                  className={` me-2 ${gender === "Male" ? "gender-btn" : "gender-btn-light"}`}
                  onClick={() => handleSelect({ target: { value: "Male" } })}
                >
                  Male
                </button>
                <button
                  type="button"
                  className={`${gender === "Female" ? "gender-btn" : "gender-btn-light"}`}
                  onClick={() => handleSelect({ target: { value: "Female" } })}
                >
                  Female
                </button>
              </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="row mt-3">


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
                    max={today}
                    // disabled={purchaseDate}
                    className="form-control form-control-detail"
                    {...register("birthDate", {
                      required: "Birth Date is required",
                    })}
                  />
                  {errors.birthDate && (
                    <p className="text-danger">{errors.birthDate.message}</p>
                  )}
                </div>
              </div>

              <div className="row mt-3">
                <div className="col-lg-2 lh-lg">
                  <label className="form-lable-detail">Mother Tag Id</label>
                  <select
                    // disabled={purchaseDate}
                    className="form-select form-control-detail"
                    {...register("motherTag", {
                      required: isPurchased ? false : "Mother Tag is required",
                    })}
                  >
                    <option value="">Select Tag Id</option>
                    {getAnimalTagIds?.femaleTagIds?.map((tagId) => (
                      <option key={tagId} value={tagId}>
                        {tagId}
                      </option>
                    ))}
                  </select>
                  {isPurchased ? "" : errors.motherTag && (
                    <p className="text-danger">{errors.motherTag.message}</p>
                  )}
                </div>

                <div className="col-lg-2 lh-lg">
                  <label className="form-lable-detail">Father Tag Id</label>
                  <select
                    // disabled={purchaseDate}
                    className="form-select form-control-detail"
                    {...register("fatherTag", {
                      required: isPurchased ? false : "Father Tag is required",
                    })}
                  >
                    <option value="">Select Tag Id</option>
                    {getAnimalTagIds?.maleTagIds?.map((tagId) => (
                      <option key={tagId} value={tagId}>
                        {tagId}
                      </option>
                    ))}
                  </select>
                  {isPurchased ? "" : errors.fatherTag && (
                    <p className="text-danger">{errors.fatherTag.message}</p>
                  )}
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
                  <input
                    type="number"
                    className="form-control form-control-detail"
                    placeholder="Enter Weight"
                    {...register("birthWeight")}
                  />
                </div>
                {gender &&
                  <div className="col-lg-2 lh-lg">
                    <label className="form-lable-detail">Gender</label>
                    <input
                      type="text"
                      className="form-control form-control-detail"
                      // placeholder="Enter Father Breed"
                      disabled={gender}
                      {...register("gender")}
                    />
                  </div>
                }
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
                    max={today}
                    // disabled={birthDate}
                    className="form-control form-control-detail"
                    {...register("purchaseDate", {
                      required: !isPurchased ? false : "Purchase Date is required",
                    })}
                  />
                  {!isPurchased ? "" : errors.purchaseDate && (
                    <p className="text-danger">{errors.purchaseDate.message}</p>
                  )}
                </div>

                {purchaseDate && (
                  <div className="col-lg-2 lh-lg">
                    <label className="form-lable-detail">
                      Last Vaccine Date
                    </label>
                    <input
                      type="date"
                      max={today}
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

                  {/* <div className="col-lg-2 lh-lg">
                    <div class="form-check d-flex align-items-center gap-2">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                        {...register("isChild")}
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        Child
                      </label>
                    </div>
                  </div> */}
                </div>
              )}

              {isPregnant && gender === "Female" && (
                <div className="row mt-2">
                  <div className="col-lg-2 lh-lg">
                    <label className="form-lable-detail">Date of Mating</label>
                    <input
                      type="date"
                      max={today}
                      className="form-control form-control-detail"
                      {...register("dateMading")}
                    />
                  </div>
                  <div className="col-lg-2 lh-lg">
                    <label className="form-lable-detail">
                      Current Pregnency Month
                    </label>
                    <select
                      className="form-select form-control-detail"
                      {...register("currentPregnancyMonth")}
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
                      {...register("failed")}
                    >
                      <option value="">Select Yes Or No</option>
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                    </select>
                  </div>
                  <div className="col-lg-2 lh-lg">
                    <label className="form-lable-detail">
                      Mother Wean Date
                    </label>
                    <input
                      type="date"
                      max={today}
                      className="form-control form-control-detail"
                      {...register("motherWeanDate")}
                    />
                  </div>
                </div>
              )}

              {/* {isChild && gender === "Female" && (
                <div className="row mt-2">
                  <div className="col-lg-2 lh-lg">
                    <label className="form-lable-detail">Wean Date</label>
                    <input
                      type="date"
                      className="form-control form-control-detail"
                      {...register("childWeanDate")}
                    />
                  </div>
                  <div className="col-lg-2 lh-lg">
                    <label className="form-lable-detail">Wean Weight</label>
                    <input
                      type="number"
                      className="form-control form-control-detail"
                      placeholder="Enter Weight"
                      {...register("childWeanWeight")}
                    />
                  </div>
                  <div className="col-lg-2 lh-lg">
                    <label className="form-lable-detail">
                      Sibling
                    </label>
                    <select
                      className="form-select form-control-detail"
                      {...register("siblingDetails")}
                    >
                      <option value="">Select Sibling</option>
                      <option value="single">Single</option>
                      <option value="double">Double</option>
                      <option value="tripple">Tripple</option>
                    </select>
                  </div>
                </div>
              )} */}

              <div className="row mt-2">
                <p className="detail-para mb-0 lh-lg">Other Disease Vaccine</p>
                <div className="col-lg-2 lh-lg">
                  <label className="form-lable-detail">
                    Vaccine Name
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-detail"
                    {...register("vaccineName")}
                  />
                </div>
                <div className="col-lg-2 lh-lg">
                  <label className="form-lable-detail">
                    Vaccine Date
                  </label>
                  <input
                    type="date"
                    max={today}
                    className="form-control form-control-detail"
                    {...register("vaccineDate")}
                  />
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
                  {type === "edit" ? "Save" : `Add ${selectedAnimal}`}
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
