import React, { useEffect } from "react";
import { Form, Button, Card, Tab, Tabs } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { getData, postData, updateData } from "../../common/APIs/api";
import { useLocation, useParams } from "react-router-dom";
import Navbar from "../../common/navbar";
import Sidebar from "../sidebar";
import { Bounce, toast } from "react-toastify";
// Json
const fieldConfigs = {
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

const ChildEditBasicDetailForm = () => {
  // ========
  // States
  // ========
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    formState: { isDirty },
  } = useForm();

  const params = useParams();

  // END POINT
  //   const endpointGetChild = "/user/animaldata/child/getAll/:uniId"; //get api
  const endpointEditChild = "user/animaldata/child/update"; //get api

  // ========
  // Functions
  // ========

  // Handle form submission
  const onSubmit = async (data) => {
    try {
      const payload = {
        ...data,
        uniqueId: params?.uniqueId,
        kidId: params?.kidId,
        parentId: params?.parentId,
      };
      const response = await updateData(
        endpointEditChild,
        params?.uniqueId,
        payload
      );
      toast.success(response.data.message, {
        autoClose: 3000,
        transition: Bounce,
      });
    } catch (error) {
      console.log("error: ", error);
    }
  };

  useEffect(() => {
    const fetchAnimals = async () => {
      try {
        const response = await getData(
          `user/animaldata/child/getAll/${params?.uniqueId}`
        );
        // ==============
        reset({
          ageyear: response.data.ageyear || "",
          heightft: response.data.heightft || "",
          kidweight: response.data.kidweight || "",
          motherage: response.data.motherage || "",
          breed: response.data.breed || "",
          dob: response.data.dob || "",
          gender: response.data.gender || "",
          kidcode: response.data.kidcode || "",
          bodyscore: response.data.bodyScore || "",
          dobtype: response.data.dobtype || "",
          dobweight: response.data.dobweight || "",
          pregnancydetail: response.data.pregnancydetail || "",
          maledetail: response.data.maledetail || "",
          weanweight: response.data.weanweight || "",
          castration: response.data.castration || "",
          motherweandate: response.data.motherweandate || "",
          motherweandateweight: response.data.motherweandateweight || "",
        });
      } catch (error) {
        console.error("Error fetching animals:", error);
      }
    };
    fetchAnimals();
  }, [params.uniqueId, reset]);

  return (
    <>
      <div>
        <div className="goat-form">
          <Navbar />
          <div className="row">
            <div className="col-lg-2">
              <Sidebar />
            </div>
            <div className="col-lg-10 px-4 py-3">
              <p className="record-para mb-4">Edit Child details below</p>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <div className="row mb-4">
                  <div className="col-lg-3 pb-3">
                    <Form.Group>
                      <Form.Label>Unique ID</Form.Label>
                      <Form.Control
                        type="text"
                        value={params?.uniqueId}
                        readOnly
                      />
                    </Form.Group>
                  </div>

                  {/* ============== */}
                  {fieldConfigs.Child?.map((field, index) => (
                    <div key={index} className="col-lg-3 pb-3">
                      <Form.Group>
                        <Form.Label>{field.label}</Form.Label>
                        {field.type === "radio" ? (
                          <div className="d-flex gap-3">
                            {field.options.map((option, idx) => (
                              <Form.Check
                                key={idx}
                                type="radio"
                                label={option}
                                value={option}
                                {...register(field.name, {
                                  required: field.required,
                                })}
                                name={field.name}
                              />
                            ))}
                          </div>
                        ) : field.type === "select" ? (
                          <Form.Select
                            {...register(field.name, {
                              required: field.required,
                            })}
                          >
                            <option value="">Select an option</option>
                            {field.options?.map((option, idx) => (
                              <option key={idx} value={option}>
                                {option}
                              </option>
                            ))}
                          </Form.Select>
                        ) : (
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChildEditBasicDetailForm;
