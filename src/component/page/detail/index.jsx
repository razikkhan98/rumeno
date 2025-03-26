import React from "react";
import { useForm } from "react-hook-form";
import Navbar from "../../navbar";
import Sidebar from "../sidebar";

const FarmManagement = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="farm-management">
      <Navbar />
      <div className="row">
        <div className="col-lg-2">
          <Sidebar />
        </div>
        <div className="col-lg-10 bg-white px-2 py-3">
          <p className="detail-head mb-1">Basic Details</p>
          <p className="detail-para mb-0">Fill basic details to add a Child</p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row g-4">
              <div className="row pt-5">
                <div className="col-lg-3">
                  <label className="form-label">Unique Name</label>
                  <input
                    {...register("uniqueName", { required: true })}
                    type="text"
                    className="form-control"
                    placeholder="Enter Unique Name"
                  />
                  {errors.uniqueName && (
                    <span className="text-danger">This field is required</span>
                  )}
                </div>
                <div className="col-lg-2">
                  <label className="form-label">Kid Age</label>
                  <input
                    {...register("kidAge", { required: true })}
                    type="text"
                    className="form-control"
                    placeholder="Enter Age"
                  />
                  {errors.kidAge && (
                    <span className="text-danger">This field is required</span>
                  )}
                </div>
                <div className="col-lg-2">
                  <label className="form-label">Kid Weight</label>
                  <input
                    {...register("kidWeight", { required: true })}
                    type="text"
                    className="form-control"
                    placeholder="Enter Weight"
                  />
                  {errors.kidWeight && (
                    <span className="text-danger">This field is required</span>
                  )}
                </div>
              </div>
              <div className="row pt-3">
                <div className="col-lg-2">
                  <label className="form-label">Breed</label>
                  <select
                    {...register("breed", { required: true })}
                    className="form-select"
                  >
                    <option value="">Select Breed</option>
                    <option value="Boer">Boer</option>
                    <option value="Nubian">Nubian</option>
                  </select>
                  {errors.breed && (
                    <span className="text-danger">This field is required</span>
                  )}
                </div>
                <div className="col-lg-4">
                  <label className="form-label">Date Of Purchasing</label>
                  <input
                    {...register("purchaseDate", { required: true })}
                    type="date"
                    className="form-control"
                  />
                  {errors.purchaseDate && (
                    <span className="text-danger">This field is required</span>
                  )}
                </div>
              </div>
              <div className="col-lg-3 pt-2 pe-5">
                <button
                  type="submit"
                  className="btn w-100 text-white py-2 rounded-pill"
                  style={{ backgroundColor: "#F4863E" }}
                >
                  Add Parent
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FarmManagement;
