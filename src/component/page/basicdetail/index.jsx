import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Sidebar from "../sidebar";
import Navbar from "../../common/navbar/mainnavbar";
import { API_BASE_URL, getData, postData, updateData } from "../../common/APIs/api";
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

  const { purchaseDate, birthDate, isPregnant, isChild, isVaccine, gender } = watch();
  console.log('gender: ', gender);

  const navigate = useNavigate();
  const location = useLocation();
  const uniqueId = location.state?.uniqueId;
  const animalData = location.state; // This will be the full animal object



  // const tagId = location.state?.tagId;
  const queryParams = new URLSearchParams(location.search);

  const type = queryParams.get("type");

  const validation = queryParams.get("validation");
  console.log('validation: ', validation);




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
      console.log('formData: ', formData);



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
  console.log('getAnimalTagIds: ', getAnimalTagIds);
  const animalName = sessionStorage.getItem("animalName");
  const uid = sessionStorage.getItem("uid");


  useEffect(() => {
    const fetchAnimals = async () => {
      try {
        const response = await axios.get(
          `${API_BASE_URL}/user/animaldata/newEntity/getTagIdsByGender?animalName=${animalName}&uid=${uid}`,

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
        // toast.error(
        //   error.message || "Error fetching animal data. Please try again."
        // );
      } finally {
        // setLoading(false);
      }
    };
    // if(type !== "edit"){
    //   fetchAnimals();
    // }
    fetchAnimals();
  }, []); // Fetch only once on mount

  useEffect(() => {
    if (animalData) {
      console.log('animalData.fatherTag: ', animalData.fatherTag);
      // const filteredAnimals = response.data?.filter((animal) => animal?.animalName === selectedAnimal);
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
      // setGender(animalData.gender)
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
      setValue("isPregnant", animalData.currentPregnancyMonth ? true : false);
      console.log('animalData.lastVaccineName: ', animalData.lastVaccineName);
      setValue("isVaccine", animalData.lastVaccineName == "false" ? false : true);
    }
  }, [ setValue]); // Fetch only once on mount

  

  // const [gender, setGender] = useState("");
  // console.log('gender: ', gender);

  const handleSelect = (e) => {
    // setGender(e.target.value);
    setValue("gender", e.target.value || "");
  };
  // const btnDisabled = type === "edit" ? true : false;

  let today = new Date().toISOString().split('T')[0];
  document.getElementsByName("somedate")[0]?.setAttribute('max', today)


  const updateSeriesType = (type) => {
  localStorage.setItem("seriesType", type);
  setSeriesType(type);
};


  const [seriesType, setSeriesType] = useState(() => {
  return localStorage.getItem("seriesType") || null;
  });


  return (
    <>
      <div className="goat-form">
        <Navbar />
        <div className="row pt-5">
          <div className="col-lg-2 py-5">
            <Sidebar />
          </div>
          <div className="col-lg-10 px-4 py-lg-5">
            <div className="basicdetail-heading pt-3">
              <div>
                <p className="detail-head text-chinese-black-color mb-1">
                  Basic Details
                </p>
                <p className="detail-para">Fill basic details</p>
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

              {/* <div className="d-flex pe-3">
                <button
                  type="button"
                  className={`me-2 ${isPurchased ? "gender-btn" : "gender-btn-light"} `}
                  onClick={handlePurchaseClick}
                >
                  Purchase
                </button>
                <button
                  type="button"
                  disabled={btnDisabled}
                  className={` me-2 ${gender === "Male" ? "gender-btn" : "gender-btn-light"}`}
                  onClick={() => handleSelect({ target: { value: "Male" } })}
                >
                  Male
                </button>
                <button
                  type="button"
                  disabled={btnDisabled}
                  className={`${gender === "Female" ? "gender-btn" : "gender-btn-light"}`}
                  onClick={() => handleSelect({ target: { value: "Female" } })}
                >
                  Female
                </button>
              </div>  */}
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="row mt-3">


                <div className="col-lg-2 col-6 lh-lg">
                  <label className="form-lable-detail">Tag ID</label>
                  <input
                    type="text"
                    className="form-control form-control-detail"
                    placeholder="Enter Tag ID"
                    {...register("tagId", {
                      required: "Tag ID is required",
                      validate: (value) => {
                        if (!seriesType) {
                          if (/^0[1-9][0-9]*$/.test(value)) {
                            updateSeriesType("withZero");
                            return true;
                          } else if (/^[1-9][0-9]*$/.test(value)) {
                            updateSeriesType("withoutZero");
                            return true;
                          } else {
                            return "Invalid Tag ID format";
                          }
                        }

                        if (seriesType === "withZero") {
                          return /^0[1-9][0-9]*$/.test(value) || "Use format like 01, 02";
                        } else if (seriesType === "withoutZero") {
                          return /^[1-9][0-9]*$/.test(value) || "Use format like 1, 2 ";
                        }

                        return true;
                      }
                      
                        // value.startsWith("0") && (value.length === 1 || value[1] !== "0")
                        //   ? true
                        //   : "Tag ID must start with 0",
                    })}
                  />
                  {errors.tagId && (
                    <p className="text-danger">{errors.tagId.message}</p>
                  )}
                </div>
                {validation === "a-register" ? false : (
                  <>
                    <div className="col-lg-2 col-6 lh-lg">
                      <label className="form-lable-detail">
                        Date of Purchasing
                      </label>
                      <input
                        type="date"
                        max={today}
                        // disabled={birthDate}
                        className="form-control form-control-detail"
                        {...register("purchaseDate", {
                          required: type === "edit" || validation === "a-register" ? false : "Purchase Date is required",
                        })}
                      />
                      {type === "edit" || validation === "a-register" ? "" : errors.purchaseDate && (
                        <p className="text-danger">{errors.purchaseDate.message}</p>
                      )}
                    </div>
                  </>
                )}

                <div className="col-lg-2 col-6 lh-lg">
                  <label className="form-lable-detail">Age Year</label>
                  <input
                    type="number"
                    className="form-control form-control-detail"
                    placeholder="Enter Age"
                    step="any"
                    {...register("ageYear")}
                  />
                </div>
                <div className="col-lg-2 col-6 lh-lg">
                  <label className="form-lable-detail">Age Month</label>
                  <input
                    type="number"
                    className="form-control form-control-detail"
                    placeholder="Enter Age"
                    step="any"
                    {...register("ageMonth")}
                  />
                </div>

                <div className="col-lg-2 col-6 lh-lg">
                  <label className="form-lable-detail">Height (in Ft)</label>
                  <input
                    type="number"
                    className="form-control form-control-detail"
                    placeholder="Enter Height"
                    step="any"
                    {...register("height")}
                  />
                </div>

                <div className="col-lg-2 col-6 lh-lg">
                  <label className="form-lable-detail">Weight (kg)</label>
                  <input
                    type="number"
                    className="form-control form-control-detail"
                    placeholder="Enter Weight"
                    step="any"
                    {...register("weightKg")}
                  />
                </div>

              </div>

              <div className="row mt-3">
                <div className="col-lg-2 col-6 lh-lg">
                  <label className="form-lable-detail">Birth Date</label>
                  <input
                    type="date"
                    max={today}
                    // disabled={purchaseDate}
                    className="form-control form-control-detail"
                    {...register("birthDate", {
                      required: type === "edit" || validation === "purchase" ? false : "Birth Date is required",
                    })}
                  />
                  {type === "edit" || validation === "purchase" ? "" : errors.birthDate && (
                    <p className="text-danger">{errors.birthDate.message}</p>
                  )}
                </div>

                <div className="col-lg-2 col-6 lh-lg">
                  <label className="form-lable-detail">Mother Tag Id</label>
                  <select
                    // disabled={purchaseDate}
                    className="form-select form-control-detail"
                    {...register("motherTag", {
                      required: type === "edit" || validation === "purchase" ? false : "Mother Tag is required",
                    })}
                  >
                    <option value="">Select Tag Id</option>
                    {/* <option value="not applicable">Not Applicable</option> */}
                    {type !== "edit" ? (
                      <>
                        {getAnimalTagIds?.femaleTagIds?.map((tagId) => (
                          <option key={tagId} value={tagId}>
                            {tagId}
                          </option>
                        ))}
                      </>
                    ) : (
                      <>
                        {animalData?.motherTag && (
                          <option key={animalData.motherTag} value={animalData.motherTag}>
                            {animalData.motherTag}
                          </option>
                        )}
                      </>
                    )}
                  </select>
                  {type === "edit" || validation === "purchase" ? "" : errors.motherTag && (
                    <p className="text-danger">{errors.motherTag.message}</p>
                  )}
                </div>

                <div className="col-lg-2 col-6 lh-lg">
                  <label className="form-lable-detail">Father Tag Id</label>
                  <select
                    // disabled={purchaseDate}
                    className="form-select form-control-detail"
                    {...register("fatherTag")}
                  >
                    <option value="">Select Tag Id</option>
                    
                    <option value="not applicable">Not Applicable</option>
                    {type !== "edit" ? (
                      <>
                        {getAnimalTagIds?.maleTagIds?.map((tagId) => (
                          <option key={tagId} value={tagId}>
                            {tagId}
                          </option>
                        ))}
                      </>
                    ) : (
                      <>
                        {animalData?.fatherTag && (
                          <option key={animalData.fatherTag} value={animalData.fatherTag}>
                            {animalData.fatherTag}
                          </option>
                        )}
                      </>
                    )}
                  </select>
                  {/* {isPurchased ? "" : errors.fatherTag && (
                    <p className="text-danger">{errors.fatherTag.message}</p>
                  )} */}
                </div>


                <div className="col-lg-2 col-6 lh-lg">
                  <label className="form-lable-detail">Birth Type</label>
                  <select
                    // disabled={purchaseDate}
                    className="form-select form-control-detail"
                    {...register("birthType")}
                  >
                    <option value="">Select Type</option>
                    <option value="Natural">Natural</option>
                    <option value="Castration">Castration</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="col-lg-2 col-6 lh-lg">
                  <label className="form-lable-detail">Birth Weight</label>
                  <input
                    type="number"
                    className="form-control form-control-detail"
                    placeholder="Enter Weight"
                    {...register("birthWeight")}
                  />
                </div>
                {/* {gender && */}
                <div className="col-lg-2 col-6 lh-lg">
                  <label className="form-lable-detail">Gender</label>
                  <select
                    className="form-select form-control-detail"
                    onChange={handleSelect}
                    // placeholder="Enter Father Breed"
                    // disabled={gender}
                    {...register("gender")}
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
                {/* } */}
              </div>

              <div className="row mt-3">
                {validation !== "a-register" ? false : (
                  <div className="col-lg-3 col-6 lh-lg">
                    <label className="form-lable-detail">
                      Mother's wean Date
                    </label>
                    <input
                      type="date"
                      // max={today}
                      className="form-control form-control-detail"
                      {...register("motherWeanDate")}
                    />
                  </div>
                )}
                <div className="col-lg-3 col-6 lh-lg">
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

                <div className="col-lg-4 lh-lg">
                  <label className="form-lable-detail">Comments (if any)</label>
                  <input
                    type="text"
                    className="form-control form-control-detail"
                    placeholder="Enter comment"
                    {...register("comments")}
                  />
                </div>

                {/* {purchaseDate && (
                  <div className="col-lg-2 col-6 lh-lg">
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
                  <div className="col-lg-2 col-6 lh-lg">
                    <label className="form-lable-detail">
                      Last Vaccine Name
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-detail"
                      {...register("lastVaccineName")}
                    />
                  </div>
                )} */}
              </div>

              {/* <div className="row mt-3">
              </div> */}

              {/* <div className="row mt-3">
              </div> */}

              <div className="row mt-3">
                {gender === "Female" && (
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
                )}


                <div className="col-lg-2 lh-lg">
                  <div class="form-check d-flex align-items-center gap-2">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                      {...register("isVaccine")}
                    />
                    <label class="form-check-label" for="flexCheckDefault">
                      Vaccine
                    </label>
                  </div>
                </div>
              </div>


              {isPregnant && gender === "Female" && (
                <div className="row mt-2">
                  <div className="col-lg-2 col-6 lh-lg">
                    <label className="form-lable-detail">Date of Mating</label>
                    <input
                      type="date"
                      max={today}
                      className="form-control form-control-detail"
                      {...register("dateMading")}
                    />
                  </div>
                  <div className="col-lg-2 col-6 lh-lg">
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
                    <label className="form-lable-detail">Pregnancy Failed</label>
                    <select
                      className="form-select form-control-detail"
                      {...register("failed")}
                    >
                      <option value="">Select Yes Or No</option>
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                    </select>
                  </div>
                </div>
              )}

              {isVaccine && (
                <div className="row mt-2">
                  <div className="col-lg-2 col-6 lh-lg">
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
                  <div className="col-lg-2 col-6 lh-lg">
                    <label className="form-lable-detail">
                     {validation === "a-register" ?(
                      <>
                      Last Vaccine Name
                      </>
                     ) : (
                       <>
                       Vaccine <span className="font-12-500">(Before Purchase Date)</span>
                      </>
                     )}
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-detail"
                      {...register("lastVaccineName")}
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

              {/* <div className="row mt-2">
                <p className="detail-para mb-0 lh-lg">Other Disease Vaccine</p>
                <div className="col-lg-2 col-6 lh-lg">
                  <label className="form-lable-detail">
                    Vaccine Name
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-detail"
                    {...register("vaccineName")}
                  />
                </div>
                <div className="col-lg-2 col-6 lh-lg">
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
              </div> */}


              <div className="col-lg-3 py-5 pe-5">
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
