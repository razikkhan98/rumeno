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


const Record = () => {
  const animalName = sessionStorage.getItem("animalName");

  const API_ENDPOINTS = {
    BasicDetails: "user/animaldata/newEntity",
    PostWean: "/post-wean/post-wean-add",
    Milk: "/milk-record/create-milk-record",
    Vaccine: "/vaccine/register-animal-vaccine",
    Deworm: "/user/animal/dewormdata/add",
    EstrusHeat: "/estrus-heat/create-heat-record",
    // FarmSanitation: "/user/animal/sanitationdata/add",
    Kid: "/user/animaldata/child",
  };

  const TabItems = ["BasicDetails", "PostWean", "Milk", "Vaccine", "Deworm", "EstrusHeat", "Kid", `${animalName} stauts`]

  const GET_API_ENDPOINTS ={
    PostWean: "/post-wean/get-all-post-wean",
    Milk: "/milk-record/get-all-milk-records",
    Vaccine: "/vaccine/get-all-register-animal-vaccine",
    // Deworm: "/user/animal/dewormdata/add",
    EstrusHeat: "/estrus-heat/get-all-create-heat-record",   
  }

  const API_UPDATEENDPOINTS = {
    PostWean: "/post-wean/update-post-wean-by-id/:id",
    Milk: "/milk-record/update-milk-record/:id",
    Vaccine: "/user/animal/vaccinedata/update",
    Deworm: "/user/animal/dewormdata/update",
    EstrusHeat: "/estrus-heat/update-heat-record/:id",
    // FarmSanitation: "/user/animal/sanitationdata/update",
    Kid: "/user/animaldata/child",
  };

  const API_DELETEENDPOINTS = {
    PostWean: "/post-wean/delete-post-wean-by-id",
    Milk: "/milk-record/delete-milk-record-by-id/:id",
    Vaccine: "/user/animal/vaccinedata/delete",
    Deworm: "/user/animal/dewormdata/delete",
    EstrusHeat: "/estrus-heat/delete-heat-record-by-id/:id",
    // FarmSanitation: "/user/animal/sanitationdata/delete",
    Kid: "/user/animaldata/child",
  };

  const fieldConfigs = {
    BasicDetails: [
      { label: "Tag ID", name: "tagId", type: "text", required: true },
      { label: "Age Year", name: "age", type: "number" },
      { label: "Age Month", name: "ageMonth", type: "number" },
      { label: "Height (in Ft)", name: "height", type: "number" },
      { label: "Weight (kg)", name: "weightKg", type: "number" },
      { label: "Birth Date", name: "birthDate", type: "date", required: true },
      { label: "Mother Unique Id", name: "motherUniqueId", type: "text" },
      { label: "Father Unique Id", name: "fatherUniqueId", type: "text" },
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
        name: "matingDate",
        type: "date",
        conditional: "isPregnant",
      },
      {
        label: "Current Pregnancy Month",
        name: "pregnancyDetails",
        type: "select",
        options: ["1 Month", "2 Month", "3 Month", "4 Month", "5 Month"],
        conditional: "isPregnant",
      },
      {
        label: "Failed",
        name: "pregnencyFail",
        type: "select",
        options: ["Yes", "No"],
        conditional: "isPregnant",
      },
      {
        label: "Mother Wean Date",
        name: "weanDate",
        type: "date",
        conditional: "isPregnant",
      },
      { label: "Other Vaccine Name", name: "otherVaccineName", type: "text" },
      { label: "Other Vaccine Date", name: "otherVaccineDate", type: "date" },
      {
        label: "Farm Name",
        name: "farmName",
        type: "text",
        required: true,
      },
    ],
    PostWean: [
      // {
      //   name: "tagId",
      //   label: "Tag Id",
      //   type: "text",
      //   placeholder: "Enter Tag Id",
      // },
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
      // {
      //   name: "tagId",
      //   label: "Tag Id",
      //   type: "text",
      //   placeholder: "Enter Tag Id",
      // },
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
        label: "Last Delivery Date",
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
      // {
      //   name: "tagId",
      //   label: "Tag Id",
      //   type: "text",
      //   placeholder: "Enter Tag Id",
      // },
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
      // {
      //   name: "tagId",
      //   label: "Tag Id",
      //   type: "text",
      //   placeholder: "Enter Tag Id",
      // },
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
        name: "breederName",
        label: "Breeder Name",
        type: "text",
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
      // {
      //   name: "tagId",
      //   label: "Tag Id",
      //   type: "text",
      //   placeholder: "Enter Tag Id",
      // },
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
    [`${animalName}Status`]: [
      {
        name: `${animalName}Status`,
        label: `${animalName} Status`,
        type: "select",
        options: ["Sell", "Death"],
      },
      {
        label: "Date",
        name: `${animalName}StatusDate`,
        type: "date",
      },
    ],

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
      const response = await getData(GET_API_ENDPOINTS[activeTab]);
      setSubmittedData(response?.data || []);

    } catch (error) {
      // toast.error("Error fetching animal data.");
    }
  };
  useEffect(() => {
    fetchRecordDetails();
  }, [activeTab]);

  // const fetchAnimals = async () => {
  //   try {
  //     const response = await getData("user/animaldata/newEntity/getAllById");
  //     console.log('response basic: ', response);
  //     setAnimals(response.data || []);
  //   } catch (error) {
      
  //   }
  // };

  // const fetchAnimal = async () => {
    
  //   try {
  //     const response = await axios.get(
  //       "https://3ea7-2401-4900-8822-ffcf-fd70-b384-8ddc-b6d.ngrok-free.app/rumeno/user/animaldata/newEntity/getAllById",
  //       {
  //         params: { animalName: selectedAnimal, uid },
  //         headers: {
  //           "ngrok-skip-browser-warning": "true", // Required for ngrok
  //           "Content-Type": "application/json",   // Adjust as needed
  //         },
  //       }
  //     );
  //     console.log('response: ', response,);
  //     setAnimals(response.data.animals || []);
  //     if(response.data.animals) {
  //       setLoading(false)
  //     }
  //   } catch (err) {
  //     setError("Error fetching data");
  //   }
  // };


  // Show Basic Details Data
  // useEffect(() => {
  //   if (!selectedAnimal) {
  //     fetchAnimal();
  //   }
  // }, [selectedAnimal, uniqueId]);

  // useEffect(() => {
  //   fetchAnimals();
  // }, []);

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

  const filteredChildren = children.filter(
    (child) => child?.parentId === parentId
  );

  const onSubmit = async (data) => {
    const apiUrl = API_ENDPOINTS[activeTab];

    let formData = {}; // Declare once

    if (kidId === undefined) {
      // Parent
      formData = { ...data, parentUniqueId: uniqueId, parentId, uid, tagId };
    } else {
      // Child
      formData = { ...data, childUniqueId: uniqueId, parentId, uid, tagId };
      console.log("formData: ", formData);
      console.log(parentId, "parentId");
    }

    try {
      const response = await postData(apiUrl, formData);
      if (response.status) {
        toast.success(response.data.message, {
          autoClose: 3000,
          transition: Bounce,
        });
        if (kidId === undefined) {
          setTimeout(() => navigate("/record/:name/:uniqueId"), 1000);
        } else {
          setTimeout(() => navigate(`/farmdata/child`), 1000);
        }
      } else {
        throw new Error(response.data.message);
      }
    } catch (error) {
      toast.error(error?.message || "Submission failed.");
    }

    setSubmittedData(formData);
    setShowForm(false);
    // fetchAnimal();
  };

  // ====================================================


  //  APi Edit Form Data Function
  const handleUpdateApi = async (index) => {
  
    console.log("submittedData[index]: ", submittedData[index]);

    // Call Update Api
    const apiUrl = API_UPDATEENDPOINTS[activeTab];

    // Dynamically get the ID key based on the active tab
    const idKeyMap = {
      PostWean: "postWeanId",
      Milk: "milkId",
      Vaccine: "vaccineId",
      Deworming: "dewormingId",
      EstrusHeat: "estrusId",
    };

    const idKey = idKeyMap[activeTab];
    const dataToUpdate = submittedData[index];

    try {
      const response = await updateData(apiUrl, dataToUpdate[idKey], dataToUpdate)
      if (response.status === 200 || response.status === 201) {
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
    const idKey = activeTab === "PostWean" ? "postWeanId" : "vaccineId";
    const itemToDelete = submittedData[index];
    try {
      const response = await deleteData(
        apiUrl,
        itemToDelete[idKey]
      );
      console.log("responseupdate: ", response);
      if (response.status === 200 || response.status === 201) {
        toast.success(response.data.message, {
          autoClose: 3000,
          transition: Bounce,
        });
        setSubmittedData((prev) => prev.filter((_, i) => i !== index));
      } else {
        throw new Error(response.data.message);
      }
    } catch (error) {
      toast.error(error?.message || "Submission failed.");
    }
  };


  // const handleDeleteApi = async (index) => {
  //   // Call Delete Api
  //   const apiUrl = API_DELETEENDPOINTS[activeTab];
  //   const idField = submittedData?.postWeanId
  //   ? "postWeanId"
  //   : submittedData[index].milkId
  //   ? "milkId"
  //   : submittedData[index].weaningId
  //   ? "weaningId"
  //   : "id"; 
  //   console.log('submittedData[index].postWeanId: ', submittedData?.postWeanId);

  // const id = submittedData[index][idField];
  //   try {
  //     const response = await deleteData(apiUrl, id);
  //     console.log("responseupdate: ", response);
  //     if (response.status === 200 || response.status === 201) {
  //       toast.success(response.data.message, {
  //         autoClose: 3000,
  //         transition: Bounce,
  //       });

  //       await fetchAnimals();
  //     } else {
  //       throw new Error(response.data.message);
  //     }
  //   } catch (error) {
  //     toast.error(error?.message || "Submission failed.");
  //   }
  // };

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
                {TabItems.map((tab) =>
                  kidId !== undefined && tab === "Kid" ? null : (
                    <Tab
                      key={tab}
                      eventKey={tab}
                      title={tab.replace(/([A-Z])/g, " $1")}
                    />
                  )
                )}
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
                            value={selectedAnimal[field.name] || ""}
                            readOnly
                            disabled
                          />
                        </Form.Group>
                      </div>
                    ))}
                  </div>
                )}

              </div>

              {kidId === undefined && activeTab === "Kid" && (
                <>
                  {/* <div className="d-flex justify-content-between align-items-center">
                    <h4>{activeTab?.replace(/([A-Z])/g, " $1")}</h4>
                    <button
                      className="btn text-white px-4 border rounded-pill me-5"
                      style={{
                        background:
                          "linear-gradient(to right, #60A5FA, #EC4899)",
                      }}
                      onClick={() => setIsActive(true)}
                    >
                      <span className="me-1">+</span> Add Kid
                    </button>
                  </div> */}

                  {loading ? (
                    <p>Loading...</p>
                  ) : filteredChildren.length > 0 ? (
                    <div className="row">
                      {filteredChildren.map((animal, index) => (
                        <div key={index} className="col-lg-3 px-3 pt-4">
                          <AnimalCard {...animal} />
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
                        <p className="record-para mb-4">
                          Fill {activeTab} details below
                        </p>
                        <button
                          className="btn text-white px-4 border rounded-pill me-5 mb-2"
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
                          <span className="me-1">+</span> {activeTab}
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
                       {activeTab ===  `${animalName} stauts` && (
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
                        disabled={editActive ? !isDirty : !!InputPreFillData}
                      >
                        Submit
                      </Button>
                    </Form>
                  )}

                  {/* Show Prefillled form Data */}
                  {editIndex !== null && (
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
                              <th scope="col" className="heading">#</th>
                              <th className="heading">Tag Id</th>
                              {fieldConfigs[activeTab]?.map((field, i) => (
                                <th key={i} className="heading">{field.label}</th>
                              ))}
                              <th className="heading">Actions</th>
                            </tr>
                          </thead>
                          <tbody>
                            {submittedData.map((data, index) => (
                              <tr onClick={() => {
                                setEditIndex(index);     // open the form and load data
                                setShowForm(false);      // hide blank form if open
                              }} key={index} className={`row-border row-shadow ${index % 2 === 0 ? "bg-light-blue" : "bg-light-gray"
                                }`}>
                                <td>{index + 1}</td>
                                <td>{data?.tagId}</td>
                                {fieldConfigs[activeTab]?.map((field, i) => (
                                  <td key={i}>{data?.[field.name] || "-"}</td>
                                ))}
                                <td className="d-flex align-items-center justify-content-center">
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
