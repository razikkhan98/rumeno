import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Form, Button, Card, Tab, Tabs } from "react-bootstrap";
import Sidebar from "../sidebar";
import Navbar from "../../common/navbar";
import { getData, postData } from "../../common/APIs/api";
import { Bounce, toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";
import AnimalCard from "../../common/animalCard";

const Record = () => {
  const API_ENDPOINTS = {
    PostWean: "/user/animal/postweandata/add",
    Milk: "/user/animal/milkdata/add",
    Vaccine: "/user/animal/vaccinedata/add",
    Deworm: "/user/animal/dewormdata/add",
    EstrusHeat: "/user/animal/estrusdata/add",
    FarmSanitation: "/user/animal/sanitationdata/add",
    Child: "/user/animaldata/child",
  };

  const fieldConfigs = {
    PostWean: [
      {
        name: "weightKg",
        label: "Kid Weight (Kg)",
        type: "text",
        placeholder: "Enter Weight kg",
      },
      {
        name: "weightGm",
        label: "Kid Weight (Gm)",
        type: "text",
        placeholder: "Enter Weight gm",
      },
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
        label: "Milk Volume",
        type: "text",
        placeholder: "Enter Milk Volume",
      },
      {
        name: "numberKids",
        label: "Number of Kids",
        type: "Number",
        placeholder: "Enter Number of Kids",
      },
      { name: "milkDate", label: "Milk Date", type: "date", required: true },
    ],
    Vaccine: [
      {
        name: "vaccineName",
        label: "Vaccine Name",
        type: "text",
        placeholder: "Enter Vaccine Name",
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
        label: "Heat Date",
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
    FarmSanitation: [
      {
        name: "soilDate",
        label: "Soil Change Date",
        type: "date",
      },
      {
        name: "limesprinkleDate",
        label: "Lime Sprinkle Date",
        type: "date",
      },
      {
        name: "insecticideDate",
        label: "Insecticide Date",
        type: "date",
      },
      {
        name: "insecticide",
        label: "Insecticide Name",
        type: "text",
      },
    ],

    Child: [
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
        option: [
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
  };

  const [activeTab, setActiveTab] = useState("PostWean");
  const [children, setChildren] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isActive, setIsActive] = useState(false);
  const [InputPreFillData, setInputPreFillData] = useState(null);
  const [editActive, setEditActive] = useState(false);

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

  const uid = sessionStorage.getItem("uid"); // Retrieve UID from sessionStorage

  useEffect(() => {
    const fetchAnimals = async () => {
      try {
        const response = await getData("/user/animaldata/parent/getAll");
        console.log('response: ', response);
      } catch (error) {
        toast.error("Error fetching animal data.");
      }
    };

    // child
    const fetchChildren = async () => {
      try {
        const response = await getData("/user/animaldata/child/getAll");
        setChildren(response.data || []);
      } catch (error) {
        toast.error("Error fetching child data.");
      } finally {
        setLoading(false);
      }
    };

    fetchAnimals();
    fetchChildren();
  }, []);

  const filteredChildren = children.filter(
    (child) => child?.parentId === parentId
  );

  const onSubmit = async (data) => {
    const apiUrl = API_ENDPOINTS[activeTab];

    let formData = {}; // Declare once

    if (kidId === undefined) {
      // Parent
      formData = { ...data, parentUniqueId: uniqueId, parentId, uid };
    } else {
      // Child
      formData = { ...data, childUniqueId: uniqueId, parentId, uid };
      console.log("formData: ", formData);
      console.log(parentId, "parentId");
    }

    try {
      const response = await postData(apiUrl, formData);
      if (response.status === 200 || response.status === 201) {
        toast.success(response.data.message, {
          autoClose: 3000,
          transition: Bounce,
        });
        if (kidId === undefined) {
          setTimeout(() => navigate("/farmdata/parent"), 1000);
        } else {
          setTimeout(() => navigate(`/farmdata/child`), 1000);
        }
      } else {
        throw new Error(response.data.message);
      }
    } catch (error) {
      toast.error(error?.message || "Submission failed.");
    }
  };



  const handleEdit = () => {
    setEditActive(true);
  };

  const handleDelete = () => {
    localStorage.removeItem("userForm");
    setInputPreFillData(null);
    reset();
    setEditActive(false);
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
                {/* {Object?.keys(API_ENDPOINTS).map((tab) => (
                  <Tab
                    key={tab}
                    eventKey={tab}
                    title={tab?.replace(/([A-Z])/g, " $1")}
                  />
                ))} */}

                

                {Object.keys(API_ENDPOINTS).map((tab) =>
                  kidId !== undefined && tab === "Child" ? null : (
                    <Tab
                      key={tab}
                      eventKey={tab}
                      title={tab.replace(/([A-Z])/g, " $1")}
                    />
                  )
                )}

                {/* <Tab eventKey="child" title="Child" /> */}
              </Tabs>

              {kidId === undefined && activeTab === "Child" && (
                <>
                  <div className="d-flex justify-content-between align-items-center">
                    <h4>{activeTab?.replace(/([A-Z])/g, " $1")}</h4>
                    <button
                      className="btn text-white px-4 border rounded-pill me-5"
                      style={{
                        background:
                          "linear-gradient(to right, #60A5FA, #EC4899)",
                      }}
                      onClick={() => setIsActive(true)}
                    >
                      <span className="me-1">+</span> Add Child
                    </button>
                  </div>

                  {isActive ? (
                    <>
                      <p className="record-para mb-4">
                        Fill {activeTab} details below
                      </p>
                      <Form onSubmit={handleSubmit(onSubmit)}>
                        <div className="row mb-4">
                          <div className="col-lg-3 pb-3">
                            <Form.Group>
                              <Form.Label>Unique ID</Form.Label>
                              <Form.Control
                                type="text"
                                value={kidId === undefined ? parentId : kidId}
                                readOnly
                              />
                            </Form.Group>
                          </div>

                          {fieldConfigs[activeTab]?.map((field, index) => (
                            <div key={index} className="col-lg-3 pb-3">
                              <Form.Group>
                                <Form.Label>{field.label}</Form.Label>

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
                        </div>
                        <Button type="submit" className="record-btn">
                          Submit
                        </Button>
                       
                      </Form>
                    </>
                  ) : (
                    <>
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
                        <p>No Child animals found.</p>
                      )}
                    </>
                  )}
                </>
              )}

              {activeTab !== "Child" && (
                <>
                  <div className="d-flex justify-content-between align-items-center">
                    <p className="record-para mb-4">
                      Fill {activeTab} details below
                    </p>

                    <button
                      className="btn text-white px-4 border rounded-pill me-5"
                      style={{
                        background:
                          "linear-gradient(to right, #60A5FA, #EC4899)",
                      }}
                    >
                      {" "}
                      <span className="me-1">+</span> {activeTab}
                    </button>
                  </div>

                  <Form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row mb-4">
                      <div className="col-lg-3 pb-3">
                        <Form.Group>
                          <Form.Label>Unique ID</Form.Label>
                          <Form.Control
                            type="text"
                            value={kidId === undefined ? parentId : kidId}
                            readOnly
                          />
                        </Form.Group>
                      </div>
                      {fieldConfigs[activeTab]?.map((field, index) => (
                        <div key={index} className="col-lg-3 pb-3">
                          <Form.Group>
                            <Form.Label>{field.label}</Form.Label>
                            <Form.Control
                              type={field.type}
                              {...register(field.name, {
                                required: field.required,
                              })}
                              disabled={!editActive && InputPreFillData}
                            />
                            {errors[field.name] && (
                              <span className="text-danger">
                                This field is required
                              </span>
                            )}
                          </Form.Group>
                        </div>
                      ))}
                    </div>
                    <Button
                      type="submit"
                      className="record-btn"
                      disabled={editActive ? !isDirty : !!InputPreFillData}
                    >
                      Submit
                    </Button>
                    <Button
                      type="submit"
                      className="btn-success px-4 mx-2"
                      onClick={handleEdit}
                      disabled={!InputPreFillData || editActive}
                    >
                      Edit
                    </Button>
                    <Button
                      type="submit"
                      className="btn-danger px-4"
                      onClick={handleDelete}
                      disabled={!InputPreFillData}
                    >
                      Delet
                    </Button>
                  </Form>
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
