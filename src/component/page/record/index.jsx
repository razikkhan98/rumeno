import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Form, Button, Card, Tab, Tabs } from "react-bootstrap";
import Sidebar from "../sidebar";
import Navbar from "../../common/navbar";
import {
  getData,
  postData,
  deleteData,
  updateData,
} from "../../common/APIs/api";
import { Bounce, toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";
import AnimalCard from "../../common/animalCard";
import { RiDeleteBinFill } from "react-icons/ri";
// import { FaPencil } from "react-icons/fa6";
import { PiTrashSimpleBold } from "react-icons/pi";
import { GoPencil } from "react-icons/go";
import axios from "axios";
import moment from "moment";


const Record = () => {
  const animalName = sessionStorage.getItem("animalName");
  const fieldConfigs = {
    BasicDetails: [
      { label: "Tag ID", name: "tagId", type: "text", required: true },
      { label: "Age Year", name: "age", type: "number" },
      { label: "Age Month", name: "ageMonth", type: "number" },
      { label: "Height (in Ft)", name: "height", type: "number" },
      { label: "Weight (kg)", name: "weightKg", type: "number" },
      { label: "Birth Date", name: "birthDate", type: "date", required: true },
      { label: "Mother Tag Id", name: "motherTag", type: "text" },
      { label: "Father Tag Id", name: "fatherTag", type: "text" },
      { label: "Gender", name: "gender", type: "text", disabled: true },
      {
        label: "Birth Type",
        name: "birthType",
        type: "select",
        options: ["Natural", "Castration", "Other"],
      },
      {
        label: "Birth Weight",
        name: "birthWeight",
        type: "select",
        options: ["Natural", "Castration", "Other"],
      },
      { label: "Mother's wean Date", name: "motherWeanDate", type: "date" },
      {
        label: "Body Score",
        name: "bodyScore",
        type: "select",
        options: [
          "1: Very slim body",
          "2: Skinned body",
          "3: Slim body",
          "4: Mild fat body",
          "5: Fatty bulky body",
        ],
      },
      { label: "Date of Purchasing", name: "purchaseDate", type: "date" },
      { label: "Last Vaccine Date", name: "lastVaccineDate", type: "date", conditional: "purchaseDate" },
      { label: "Last Vaccine Name", name: "lastVaccineName", type: "text", conditional: "purchaseDate" },
      { label: "Comments (if any)", name: "comments", type: "text" },
      { label: "Pregnant", name: "isPregnant", type: "checkbox", conditional: "gender === 'Female'" },
      {
        label: "Date of Mating",
        name: "dateMading",
        type: "date",
        conditional: "isPregnant",
      },
      {
        label: "Current Pregnancy Month",
        name: "currentPregnancyMonth",
        type: "select",
        options: ["1 Month", "2 Month", "3 Month", "4 Month", "5 Month"],
        conditional: "isPregnant",
      },
      {
        label: "Failed",
        name: "failed",
        type: "select",
        options: ["Yes", "No"],
        conditional: "isPregnant",
      },
      {
        label: "Mother Wean Date",
        name: "motherWeanDate",
        type: "date",
        conditional: "isPregnant",
      },
      { label: "Other Vaccine Name", name: "vaccineName", type: "text" },
      { label: "Other Vaccine Date", name: "vaccineDate", type: "date" },
    ],
    PostWean: [
      {
        name: "kidWeight",
        label: "Kid Weight (Kg.Gm)",
        type: "text",
        placeholder: "Enter Weight kg",
      },
      // {
      //   name: "weightGm",
      //   label: "Kid Weight (Gm)",
      //   type: "text",
      //   placeholder: "Enter Weight gm",
      // },
      {
        name: "bodyScore",
        label: "Wean Body Score",
        type: "select",
        options: ["1", "2"],
      },
      { name: "weanDate", label: "Wean Date", type: "date", required: true },
      {
        name: "weanComment",
        label: "Comments (if any)",
        type: "textarea",
        placeholder: "Enter comment",
      },
    ],
    Milk: [
      {
        name: "milkvolume",
        label: "Milk Liter",
        type: "text",
        placeholder: "Enter Milk Volume",
      },
      {
        name: "numberOfKidsSuckingMilk",
        label: "Number of Kids Sucking Milk",
        type: "Number",
        placeholder: "Enter Number of Kids",
      },
      // {
      //   name: "milkDate",
      //   label: "Milk Date",
      //   type: "date",
      //   required: true
      // },
      {
        name: "kiddingDeliveryDate",
        label: "Last Delivery Date (kidding)",
        type: "date",
        required: true
      },
    ],
    Vaccine: [
      {
        name: "vaccineName",
        label: "Vaccine Name",
        type: "select",
        options: ["Deworming (Internal)", "Deworming (External)", "PPR", "Enterotoxaemia (ET) + (TT)", "Hemorrhagic septicaemia (HS)", "Foot and Mouth Disease (FMD)", "Goat Pox", "Booster (ET) + (TT)", "Booster (HS)", "Booster (FMD)", "Booster Goat Pox", "Repeat PPR", "Repeat ET + TT", "Repeat HS", "Repeat FMD", "Repeat Goat Pox"],
      },
      {
        name: "vaccineDate",
        label: "Vaccine Date",
        type: "date",
      },
    ],
    Deworm: [
      {
        name: "report",
        label: "Worms Examination Report",
        type: "text",
        placeholder: "Enter Worms Examination Report",
      },
      {
        name: "date",
        label: "Deworm Date",
        type: "date",
        placeholder: "Enter Deworm Date",
      },
      {
        name: "endoName",
        label: "Deworm Name (Endo Parasite) ",
        type: "text",
        placeholder: "Enter Deworm Name",
      },
      {
        name: "ectoName",
        label: "Deworm Name (Ecto Parasite) ",
        type: "text",
        placeholder: "Enter Deworm Name ",
      },
      {
        name: "endoDate",
        label: "Endo Date",
        type: "date",
        placeholder: "Endo Date",
      },
      {
        name: "ectoDate",
        label: "Ecto Date",
        type: "date",
        placeholder: "Ecto Date",
      },
      {
        name: "endoType",
        label: "Endo Type",
        type: "select",
        options: [
          "Open this and select endo type",
          "1. Tablet",
          "2. Liquid",
          "3. Injection",
        ],
      },
      {
        name: "ectoType",
        label: "Ecto Type",
        type: "select",
        options: [
          "Open this and select ecto type",
          "1.Oral",
          "2. Backline",
          "3. Injection",
          "4.Rubbing on skin",
        ],
      },
      {
        name: "animalDate",
        label: "Animal Bath Ectoparasite Date",
        type: "date",
      },
    ],
    EstrusHeat: [
      {
        name: "maleId",
        label: "Male Tag Id",
        type: "select",
        options: [
          "1",
          "2",
          "3",
          "4",
          "5",
        ],
      },
      {
        name: "heat",
        label: "Heat Number",
        type: "select",
        options: [
          "Open this and select heat number",
          "heat 1",
          "heat 2",
          "heat 3",
          "heat 4",
          "heat 5",
        ],
      },

      {
        name: "heatDate",
        label: "Estrus Heat Date",
        type: "date",
      },
      {
        name: "matingDate",
        label: "Mating Date",
        type: "date",
      },
      {
        name: "heatNextDate",
        label: "Estrus Heat Next Date",
        type: "date",
      },
      {
        name: "heatResult",
        label: "heat Result",
        type: "select",
        options: [
          "Open this and select heat result",
          "Meet",
          "Left for Next cycle",
        ],
      },
      {
        name: "breedDate",
        label: "Date of Breed",
        type: "date",
      },
      {
        name: "dueDate",
        label: "Birth Due Date",
        type: "date",
      },
    ],
    Kid: [
      {
        name: "ageyear",
        label: "Kid Age",
        type: "number",
      },
      {
        name: "heightft",
        label: "Height ( in ft )",
        type: "number",
      },

      {
        name: "kidweight",
        label: "Kid Weight",
        type: "number",
      },
      {
        name: "motherage",
        label: "Mother Age",
        type: "number",
      },
      {
        name: "breed",
        label: "Breed",
        type: "text",
      },
      {
        name: "dob",
        label: "Date Of Purchasing",
        type: "date",
      },
      {
        name: "gender",
        label: "Select Gender",
        type: "radio",
        options: ["Male", "Female", "Other"],
        required: "true",
      },
      {
        name: "kidcode",
        label: "Kid code",
        type: "text",
      },
      {
        name: "bodyscore",
        label: "Body Score",
        type: "select",
        options: [
          "1: Very slim body",
          "2: Skinnde body",
          "3: Slim body",
          "4: Mild fat body",
          "5: Fatty bulky body",
        ],
      },
      {
        name: "dobtype",
        label: "Birth Type",
        type: "select",
        options: ["Natural", "Castration", "Other"],
      },
      {
        name: "dobweight",
        label: "Birth Weight",
        type: "select",
        options: ["Natural", "Castration", "Other"],
      },
      {
        name: "pregnancydetail",
        label: "Female Pregnancy Details",
        type: "select",
        options: ["1 Month", "2 Month", "3 Month"],
      },
      {
        name: "maledetail",
        label: "Male Details",
        type: "select",
        options: ["Wether", "Breeder"],
      },
      {
        name: "weanweight",
        label: "Wean Weight",
        type: "text",
      },
      {
        name: "castration",
        label: "Castration Date (not able to reproduce)",
        type: "date",
      },
      {
        name: "motherweandate",
        label: "Mother Wean Date (when child starts eating food)",
        type: "date",
      },
      {
        name: "motherweandateweight",
        label:
          "Mother's Weight At Wean (weight of mother goat when child starts eating food)",
        type: "date",
      },
    ],
    AnimalStatus: [
      {
        name: "animalStatus",
        label: `${animalName} Status`,
        type: "select",
        options: ["Sale out", "Death"],
      },
      {
        label: `${animalName} Date`,
        name: `date`,
        type: "date",
      },
    ],
  };

  const API_ENDPOINTS = {
    BasicDetails: "user/animaldata/newEntity",
    PostWean: "/post-wean/post-wean-add",
    Milk: "/milk-record/create-milk-record",
    Vaccine: "/vaccine/add-vaccine",
    Deworm: "/dewormdata/addDeworm",
    EstrusHeat: "/estrus-heat/create-heat-record",
    // FarmSanitation: "/user/animal/sanitationdata/add",
    AnimalStatus: "/user/animaldata/transferAnimal",
  };

  const TabItems = [{ label: "Basic Details", key: "BasicDetails" },
  { label: "Post Wean", key: "PostWean" },
  { label: "Milk", key: "Milk" },
  { label: "Vaccine", key: "Vaccine" },
  { label: "Deworm", key: "Deworm" },
  { label: "Estrus Heat", key: "EstrusHeat" },
  { label: "Kid", key: "Kid" },
  { label: `${animalName} Status`, key: "AnimalStatus" },]

  const GET_API_ENDPOINTS = {
    PostWean: "/post-wean/get-all-post-wean",
    Milk: "/milk-record/get-all-milk-records",
    Vaccine: "/vaccine/reminders/:userId",
    Deworm: "/dewormdata/getAllDeworm",
    EstrusHeat: "/estrus-heat/get-all-heat-records",
    Kid: "/user/animaldata/newEntity/getAllById",
    AnimalStatus: "/user/animaldata/getAllTransferAnimal"
  }

  const API_UPDATEENDPOINTS = {
    PostWean: "/post-wean/update-post-wean-by-id",
    Milk: "/milk-record/update-milk-record",
    Vaccine: "/user/animal/vaccinedata/update",
    Deworm: "/dewormdata/update",
    EstrusHeat: "/estrus-heat/update-heat-record",
    // FarmSanitation: "/user/animal/sanitationdata/update",
    // Kid: "/user/animaldata/child",
  };

  const API_DELETEENDPOINTS = {
    PostWean: "/post-wean/delete-post-wean-by-id",
    Milk: "/milk-record/delete-milk-record-by-id",
    // Vaccine: "/user/animal/vaccinedata/delete",
    Deworm: "/dewormdata/delete",
    EstrusHeat: "/estrus-heat/delete-heat-record-by-id",
    // FarmSanitation: "/user/animal/sanitationdata/delete",
    // Kid: "/user/animaldata/child",
  };


  const [animals, setAnimals] = useState([]);
  // const [postWean, setPostWean] = useState();
  const [children, setChildren] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isActive, setIsActive] = useState(false);
  const [InputPreFillData, setInputPreFillData] = useState(null);
  const [editActive, setEditActive] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [submittedData, setSubmittedData] = useState([]); // To store submitted data
  const [editIndex, setEditIndex] = useState(null);
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    formState: { isDirty },
  } = useForm();
  const location = useLocation();
  const parentId = location.state?.parentId;
  const motherTag = location?.state?.motherTag;
  console.log('motherTag: ', motherTag);
  const uniqueId = location.state?.uniqueId;
  const kidId = location.state?.kidId;
  const tagId = location.state?.tagId;
  const { animalData = {}, defaultForm = "BasicDetails" } = location.state || {};
  const [activeTab, setActiveTab] = useState(defaultForm || "PostWean");
  const [selectedAnimal, setSelectedAnimal] = useState(animalData);
  // console.log('selectedAnimal: ', selectedAnimal);



  const uid = sessionStorage.getItem("uid");
 

  // Show all Records Postwean, milk etc.....
  const fetchRecordDetails = async () => {
    try {
      let endpoint = GET_API_ENDPOINTS[activeTab];
      if (activeTab === "Vaccine" || activeTab === "Deworm" || activeTab === "PostWean") {
        endpoint += `?uid=${uid}`;
      } else if (activeTab === "Kid") {
        endpoint += `?animalName=${animalName}&uid=${uid}`;
      }
      const response = await getData(endpoint);
      console.log('response: asdf', response);

      if (activeTab === "Kid") {
        const allAnimals = response.animals || [];
        console.log("response.data.animals: ", allAnimals);

        // Filter kids (having both motherTag and fatherTag)
        const Kids = allAnimals.filter(
          (animal) =>
            animal?.motherTag === selectedAnimal?.tagId ||
            animal?.fatherTag === selectedAnimal?.tagId
        );

        setAnimals(Kids);
        // if (Kids.length > 0)
           setLoading(false);
      }

      setSubmittedData(response?.data || []);

    } catch (error) {
      // toast.error("Error fetching animal data.");
    }
  };

  useEffect(() => {
    if (activeTab === "Kid" && kidId) {
      setActiveTab("BasicDetails"); // fallback to a safe tab
      return;
    }
    fetchRecordDetails();
  }, [activeTab]);


  // Get All Animal API Start Here
  // const fetchAnimal = async () => {
  //   try {
  //     const response = await axios.get(
  //       "https://3ea7-2401-4900-8822-ffcf-fd70-b384-8ddc-b6d.ngrok-free.app/rumeno/user/animaldata/newEntity/getAllById",
  //       {
  //         params: { animalName, uid },
  //         headers: {
  //           "ngrok-skip-browser-warning": "true",
  //           "Content-Type": "application/json",   
  //         },
  //       }
  //     );

  //     const allAnimals = response.data.animals || [];
  //     console.log('response.data.animals: ', response.data.animals);

  //     //  Filter kids (having both motherTag and fatherTag)
  //     const Kids = allAnimals.filter(
  //       (animal) => animal.motherTag && animal.fatherTag
  //     );

  //     setAnimals(Kids);

  //     if (Kids.length > 0) {
  //       setLoading(false);
  //     }
  //   } catch (err) {
  //     setError("Error fetching data");
  //   }
  // };

  // useEffect(() => {
  //   if (activeTab === "Kid" && kidId === undefined) {
  //     fetchAnimal();
  //   }
  // }, [activeTab , kidId]);


  // Show Basic Details Data
  // useEffect(() => {
  //   if (!selectedAnimal) {
  //     fetchAnimal();
  //   }
  // }, [selectedAnimal, uniqueId]);


  useEffect(() => {
    const tabMapping = {
      PostWean: "postWean",
      Milk: "milk",
      Vaccine: "vaccine",
      Deworming: "deworming",
      Breeding: "breeding",
      // add more if needed
    };

    const key = tabMapping[activeTab];
    const weanData = animals.flatMap((i) => {
      const dataToUse = i[key];
      return Array.isArray(dataToUse)
        ? dataToUse.map((entry) => ({
          ...entry,
          uid: entry.uid || i.uid || uid,
          tagId: entry.tagId || i.tagId || tagId,
          parentId: entry.parentId || i.parentId || parentId,
        }))
        : [];
    }
    );
    console.log("weanData: ", weanData);

    setSubmittedData(weanData);
  }, [animals, activeTab]);

  // const filteredChildren = children.filter(
  //   (child) => child?.parentId === parentId
  // );

  const onSubmit = async (data) => {
    const apiUrl = API_ENDPOINTS[activeTab];
    let formData = {}; // Declare once

    if (kidId === undefined) {
      // Parent
      formData = { ...data, uniqueId, parentId, uid, tagId };
    } else {
      // Child
      formData = { ...data, childUniqueId: uniqueId, parentId, uid, tagId };
      console.log("formData: ", formData);
      // console.log(parentId, "parentId");
    }

    try {
      const response = await postData(apiUrl, formData);
      console.log('response: ', response);
      if (response.status) {
        toast.success(response.data.message, {
          autoClose: 3000,
          transition: Bounce,
        });

        // Update submittedData after form submission
        setSubmittedData((prevData) => [
          ...prevData,
          formData,
        ]);

        // if (kidId === undefined) {
        //   setTimeout(() => navigate("/record/:name/:uniqueId"), 1000);
        // } else {
        //   setTimeout(() => navigate(`/farmdata/child`), 1000);
        // }
      } else {
        throw new Error(response.data.message);
      }
    } catch (error) {
      toast.error(error?.message || "Submission failed.");
    }

    setShowForm(false);
    // fetchAnimal();
  };

  // ====================================================


  //  APi Edit Form Data Function
  const handleUpdateApi = async (index) => {
    const dataToUpdate = submittedData[index];
    console.log("submittedData[index]: ", submittedData[index]);

    // Call Update Api
    const apiUrl = API_UPDATEENDPOINTS[activeTab];

    const recordId = dataToUpdate?._id;

    if (!recordId || !apiUrl) {
      toast.error("Missing ID or API endpoint for update.");
      return;
    }


    try {
      const response = await updateData(apiUrl, recordId, dataToUpdate)
      console.log('response: edit', response);
      if (response.status === 200 || response.status === 201) {

        const updatedData = [...submittedData];
        updatedData[index] = { ...updatedData[index], ...response.data }; // Update data with API response
        setSubmittedData(updatedData);

        toast.success(response.data.message, {
          autoClose: 3000,
          transition: Bounce,
        });
      } else {
        throw new Error(response.data.message);
      }
    } catch (error) {
      toast.error(error?.message || "Submission failed.");
    }
  };

  //  APi Delete Form Data Function
  const handleDeleteApi = async (index) => {
    // Call Delete Api
    const apiUrl = API_DELETEENDPOINTS[activeTab];
    const itemToDelete = submittedData[index];
    const recordId = itemToDelete?._id;

    if (!recordId || !apiUrl) {
      toast.error("Missing ID or API endpoint for deletion.");
      return;
    }

    try {
      const response = await deleteData(apiUrl, recordId);

      console.log("responsedetel: ", response);
      if (response?.success) {
        toast.success(response?.data?.message, {
          autoClose: 3000,
          transition: Bounce,
        });

        setSubmittedData(prev =>
          prev.filter(item => item._id !== recordId));

        setTimeout(fetchRecordDetails, 1000);
      } else {
        // throw new Error(response.data.message);
      }
    } catch (error) {
      toast.error(error?.message || "Submission failed.");
    }
  };


  const isShowForm = showForm[activeTab] || false;

  const toggleFormForActiveTab = () => {
    setShowForm((prev) => ({
      ...prev,
      [activeTab]: !prev[activeTab],
    }));
    setEditIndex(null);
    reset();
  };

  return (

    <>
      <Navbar />
      <div className="row">
        <div className="col-lg-2">
          <Sidebar />
        </div>
        <div className="col-lg-10 p-2">
          <Card className="border-0 border-bottom">
            <Card.Body>
              <Tabs
                activeKey={activeTab}
                onSelect={(k) => setActiveTab(k)}
                className="mb-4"
              >
                {TabItems.map((tab) => {
                  if (tab.key === "Kid") {
                    const hasKid = submittedData?.some(
                      (animal) =>
                        animal?.motherTag === selectedAnimal?.tagId ||
                        animal?.fatherTag === selectedAnimal?.tagId
                    );
                    if (!hasKid) return null;
                  }

                  return (
                    <Tab key={tab.key} eventKey={tab.key} title={tab.label} />
                  );
                })}

              </Tabs>

              {/* Show  Basic Details Form  Data  */}
              <div>
                {activeTab === "BasicDetails" && selectedAnimal && (
                  <div className="row mb-4">
                    {/* <div className="col-lg-3 pb-3">
                          <Form.Group>
                            <Form.Label>Tag ID</Form.Label>
                            <Form.Control type="text" value={selectedAnimal.tagId} readOnly />
                          </Form.Group>
                        </div> */}

                    {fieldConfigs["BasicDetails"]?.map((field, idx) => (
                      <div key={idx} className="col-lg-3 pb-3">
                        <Form.Group>
                          <Form.Label>{field.label}</Form.Label>
                          <Form.Control
                            type="text"
                            value={ field?.type == "date" ? new Date(selectedAnimal[field.name]).toLocaleDateString("en-GB").replace(/\//g,"-") : selectedAnimal[field.name] || "-"}
                            readOnly
                            disabled
                          />
                        </Form.Group>
                      </div>
                    ))}
                  </div>
                )}

              </div>

              {kidId === undefined && animals.length > 0 && (
                <>

                  {loading ? (
                    <p>Loading...</p>
                  ) : animals.length > 0 ? (
                    <div className="row">
                      {animals.map((animal, index) => (
                        <div key={index} className="col-lg-3 width-20 px-3 pt-4">
                          <AnimalCard {...animal} showDetailsButton={false} />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p>No Kid animals found.</p>
                  )}
                </>

              )}



              {activeTab !== "Kid" && (
                <>
                  <div className="d-flex justify-content-between align-items-center">


                    {/* Show blank form  through  add buttons */}
                    {activeTab !== "BasicDetails" && (
                      <>
                        <p className="record-para">
                          Fill {activeTab} details below
                        </p>
                        <button
                          className="btn text-white px-4 border font-sm-12 rounded-pill me-lg-5 mb-2"
                          style={{
                            background: "linear-gradient(to right, #60A5FA, #EC4899)",
                          }}
                          onClick={toggleFormForActiveTab}
                        // onClick={() => {
                        //   setShowForm((prev) => !prev);
                        //   setEditIndex(null);
                        //   reset();
                        // }}
                        >
                          <span className="me-1">+</span> {TabItems.find((tab) => tab.key === activeTab)?.label || activeTab
                          }
                        </button>
                      </>
                    )}
                  </div>

                  {isShowForm && (
                    <Form
                      onSubmit={handleSubmit(onSubmit)}
                    // className={showForm ? "d-block" : "d-none"}
                    >
                      <div className="row mb-4">
                        <div className="col-lg-3 pb-3">
                          <Form.Group>
                            <Form.Label>Tag ID</Form.Label>
                            <Form.Control
                              type="text"
                              value={tagId}
                              readOnly
                            />
                          </Form.Group>
                        </div>
                        {activeTab === "PostWean" && (
                          <div className="col-lg-3 pb-3">
                            <Form.Group>
                              <Form.Label>Mother ID</Form.Label>
                              <Form.Control
                                type="text"
                                value={motherTag}
                                readOnly
                              />
                            </Form.Group>
                          </div>
                        )}
                        {fieldConfigs[activeTab]?.map((field, index) => (
                          <div key={index} className="col-lg-3 pb-3">
                            <Form.Group>
                              <Form.Label>{field.label}</Form.Label>
                              {/* <Form.Control
                              type={field.type}
                              {...register(field.name, {
                                required: field.required,
                              })}
                              disabled={!editActive && InputPreFillData}
                            /> */}

                              {field?.type === "radio" ? (
                                // Radio buttons
                                <div className="d-flex gap-3">
                                  {field?.options?.map((option, idx) => (
                                    <Form.Check
                                      key={idx}
                                      type="radio"
                                      label={option}
                                      value={option}
                                      {...register(field.name, {
                                        required: field.required,
                                      })}
                                      disabled={
                                        !editActive && InputPreFillData
                                      }
                                      name={field.name} // Radio ke liye name zaroori hai
                                    />
                                  ))}
                                </div>
                              ) : field?.type === "select" ? (
                                // ✅ Corrected Select Field
                                <Form.Select
                                  {...register(field.name, {
                                    required: field.required,
                                  })}
                                  disabled={!editActive && InputPreFillData}
                                >
                                  <option value="">Select an option</option>{" "}
                                  {/* Placeholder */}
                                  {field?.options?.map((option, idx) => (
                                    <option key={idx} value={option}>
                                      {option}
                                    </option>
                                  ))}
                                </Form.Select>
                              ) : (
                                // Normal input fields
                                <Form.Control
                                  type={field.type}
                                  {...register(field.name, {
                                    required: field.required,
                                  })}
                                  disabled={!editActive && InputPreFillData}
                                />
                              )}

                              {errors[field.name] && (
                                <span className="text-danger">
                                  This field is required
                                </span>
                              )}
                            </Form.Group>
                          </div>
                        ))}

                        {/* Animal Stauts Form  */}
                        {activeTab === `${animalName} stauts` && (
                          <>
                            {fieldConfigs[`${animalName}Status`]?.map((field, index) => (
                              <div key={index} className="col-lg-3 pb-3">
                                <Form.Group>
                                  <Form.Label>{field.label}</Form.Label>

                                  {field?.type === "select" ? (
                                    // ✅ Corrected Select Field
                                    <Form.Select
                                      {...register(field.name, {
                                        required: field.required,
                                      })}
                                      disabled={!editActive && InputPreFillData}
                                    >
                                      <option value="">Select an option</option>{" "}

                                      {field?.options?.map((option, idx) => (
                                        <option key={idx} value={option}>
                                          {option}
                                        </option>
                                      ))}
                                    </Form.Select>
                                  ) : (

                                    <Form.Control
                                      type={field.type}
                                      {...register(field.name, { required: field.required })}
                                    />
                                  )}
                                </Form.Group>
                              </div>
                            ))}
                          </>
                        )


                        }

                      </div>
                      <Button
                        type="submit"
                        className="record-btn"
                      // disabled={editActive ? !isDirty : !!InputPreFillData}
                      >
                        Submit
                      </Button>
                    </Form>
                  )}

                  {/* Show Prefillled form Data */}
                  {editIndex !== null && activeTab !== "AnimalStatus" && (
                    <>
                      <div>
                        <h4>Submitted Data</h4>
                        <Form className="my-3">
                          <div className="row mb-4">
                            <div className="col-lg-3 pb-3">
                              <Form.Group>
                                <Form.Label>Tag ID</Form.Label>
                                <Form.Control
                                  type="text"
                                  value={submittedData[editIndex]?.tagId}
                                  readOnly
                                />
                              </Form.Group>
                            </div>

                            {fieldConfigs[activeTab]?.map((field, fieldIndex) => (
                              <div key={fieldIndex} className="col-lg-3 pb-3">
                                <Form.Group>
                                  <Form.Label>{field?.label}</Form.Label>
                                  <Form.Control
                                    type={field?.type}
                                    value={submittedData[editIndex]?.[field.name] || ""}
                                    onChange={(e) => {
                                      const newValue = e.target.value;

                                      const updatedData = [...submittedData];
                                      updatedData[editIndex] = {
                                        ...updatedData[editIndex],
                                        [field.name]: newValue,
                                      };
                                      setSubmittedData(updatedData);
                                    }}
                                  />
                                </Form.Group>
                              </div>
                            ))}
                          </div>

                          <Button
                            type="button"
                            className="btn-success px-4"
                            onClick={() => handleUpdateApi(editIndex)}
                          >
                            Update
                          </Button>

                          <Button
                            type="button"
                            className="btn-danger mx-2"
                            onClick={() => handleDeleteApi(editIndex)}
                          >
                            Delete
                          </Button>
                        </Form>
                      </div>
                    </>
                  )}

                  {/* ============================= */}
                  <div className="mt-4">
                    {submittedData.length > 0 ? (
                      // submittedData.map((data, index) => (
                      <div className="table-responsive">
                        <table class="table table-hover text-center align-middle">
                          <thead >
                            <tr>
                              <th scope="col" className="heading text-nowrap">S No.</th>
                              <th className="heading text-nowrap px-2">Tag Id</th>
                              {fieldConfigs[activeTab]?.map((field, i) => (
                                <th key={i} className="heading text-nowrap px-4">{field.label}</th>
                              ))}
                              <th className="heading text-nowrap">Actions</th>
                            </tr>
                          </thead>
                          <tbody>
                            {submittedData.map((data, index) => (
                              <tr onClick={() => {
                                setEditIndex(index);     // open the form and load data
                                setShowForm(false);      // hide blank form if open
                              }}
                                key={index} role="button" className={`row-border row-shadow ${index % 2 === 0 ? "bg-light-blue" : "bg-light-gray"
                                  }`}>
                                <td className="text-nowrap">{index + 1}</td>
                                <td className="text-nowrap">{data?.tagId}</td>
                                {fieldConfigs[activeTab]?.map((field, i) => {
                                  return (
                                    <td key={i}>{field?.type == "date" ? new Date(data?.[field.name]).toLocaleDateString("en-GB").replace(/\//g, "-") : data?.[field.name] || "-"}</td>
                                  )
                                })}
                                <td className="d-flex align-items-center justify-content-center text-nowrap px-4">
                                  <div
                                    className="me-3"
                                    onClick={() => handleUpdateApi(index)}
                                  >
                                    <GoPencil className="text-primary fs-5" />

                                  </div>

                                </td>
                              </tr>
                            ))}

                          </tbody>
                        </table>
                      </div>

                    ) : (
                      <div>
                        {activeTab !== "BasicDetails" && (
                          <>
                            <p className={!showForm ? "d-block" : "d-none"}>No Data Found .....</p>
                          </>
                        )}
                      </div>
                    )}

                  </div>


                </>
              )}
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Record;
