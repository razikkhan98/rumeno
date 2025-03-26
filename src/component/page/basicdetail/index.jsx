import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import Sidebar from "../sidebar";
import Navbar from "../../common/navbar";
import { postData } from "../../common/APIs/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../common/Context";

const GoatDetailForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  // const { setparentId } = useContext(CartContext);

  const endpoint = "/user/animaldata/parent";
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const uid = sessionStorage.getItem("uid"); // Retrieve UID from sessionStorage
      const animalName = sessionStorage.getItem("animalName"); // Retrieve animalName from sessionStorage
      // Convert gender value to lowercase

      const formData = {
        ...data,
        uid, // Add UID to the form data
        animalName, // Add animalName to the form data
      };

      const response = await postData(endpoint, formData);

      if (response.data.message === "success") {
      //   const parentIds = response.data.data.parentId; // Expecting an array or a single ID

    
        toast.success("Parent animal added successfully", {
          position: "top-right",
          autoClose: 3000, // Closes the toast after 3 seconds
        });
        setTimeout(() => navigate("/farmdata/parent"),100);
      }

      reset(); // Reset form after successful submission
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error(error.message || "Something went wrong!", {
        position: "top-right",
        autoClose: 3000,
      });
    }
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
            <p className="detail-head text-chinese-black-color mb-1">Basic Details</p>
            <p className="detail-para mb-0">
              Fill basic details to add a parent
            </p>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="row mt-3">
                <div className="col-lg-3 lh-lg">
                  <label className="form-lable-detail">Unique ID</label>
                  <input
                    type="text"
                    className="form-control form-control-detail"
                    placeholder="Enter Unique ID"
                    {...register("uniqueName", {
                      required: "Unique ID is required",
                    })}
                  />
                  {errors.uniqueId && (
                    <p className="text-danger">{errors.uniqueId.message}</p>
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
              </div>

              <div className="row mt-3">
                <div className="col-lg-3 lh-lg">
                  <label className="form-lable-detail">
                    Date of Purchasing
                  </label>
                  <input
                    type="date"
                    className="form-control form-control-detail"
                    {...register("purchaseDate")}
                  />
                </div>

                <div className="col-lg-4">
                  <label className="form-lable-detail">Gender</label>
                  <div className="d-flex gap-4">
                    {["Male", "Female", "Other"].map((type) => (
                      <div key={type} className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          value={type}
                         
                          {...register("gender", {
                            required: "Gender is required",
                          })}
                        />
                        <label className="form-check-label">{type}</label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="row mt-3">
                <div className="col-lg-2 lh-lg">
                  <label className="form-lable-detail">Weight (kg)</label>
                  <input
                    type="number"
                    className="form-control form-control-detail"
                    placeholder="Enter Weight"
                    {...register("weightKg")}
                  />
                </div>

                <div className="col-lg-3 lh-lg">
                  <label className="form-lable-detail">
                    Female Pregnancy Details
                  </label>
                  <select
                    className="form-select form-control-detail"
                    {...register("pregnancyDetails")}
                  >
                    <option value="">Select pregnancy detail</option>
                    <option value="1 Month">1 Month</option>
                    <option value="2 Month">2 Month</option>
                    <option value="3 Month">3 Month</option>
                    <option value="4 Month">4 Month</option>
                    <option value="5 Month">5 Month</option>
                  </select>
                </div>

                <div className="col-lg-2 lh-lg">
                  <label className="form-lable-detail">Male Detail</label>
                  <select
                    className="form-select form-control-detail"
                    {...register("maleDetail")}
                  >
                    <option value="">Select if male</option>
                    <option value="wether">Wether</option>
                    <option value="breeder">Breeder</option>
                  </select>
                </div>
              </div>

              <div className="row mt-3">
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
                  Add Parent
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
