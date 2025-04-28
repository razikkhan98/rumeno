import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { postData } from "../APIs/api";
import { toast } from "react-toastify";

const FarmerDetails = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const navigate = useNavigate();

  const uid = sessionStorage.getItem("uid");
  const onSubmit = async (data) => {
    const ApiUrl = "/user/farmdata"
    const payload = {
      ...data, 
      uid: uid,   
    };

    try {
      const response = await postData(ApiUrl, payload);
      toast.success(response?.data?.message, {
        position: "top-right",
        autoClose: 5000,
      });
      sessionStorage.setItem("farmHouseName", data.farmHouseName);
      reset(); // clear the form
      handleClose(); // close the modal
      navigate("/farmdata", { state: data });
    } catch (error) {
      toast.error(error?.data?.message || "Failed to create account!", {
        position: "top-right",
        autoClose: 5000,
      });
    }
  };


  const handleShow = () => {
    const setfarmHouseName = sessionStorage?.getItem("farmHouseName");
    console.log('setfarmHouseName: ', setfarmHouseName);
    if (setfarmHouseName && setfarmHouseName.trim() !== "") {
      navigate("/farmdata", { state: { farmHouseName: setfarmHouseName } });
    }
    else {
      setShow(true);
    }

  };

  return (
    <>
      <div className="text-center farm-btn">
        <Button
          className="btn rounded-pill text-white p-0"
          onClick={handleShow}
        >
          {/* Smart Livestock Manager */}
          My Smart Farm Manager
        </Button>
      </div>

      <Modal
        show={show}
        size="lg"
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton className="farmer-modal">
          <Modal.Title>Farmer Details</Modal.Title>
        </Modal.Header>
        <Modal.Body className="farmer-modal">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row p-3">
              <div className="col-lg-6 mt-3 mt-lg-0">
                <label className="form-lable-detail text-dark">
                  Farmer Name
                </label>
                <input
                  type="text"
                  className="form-control form-control-detail shadow"
                  placeholder="Enter Farmer Name"
                  {...register("farmerName", {
                    required: "Farmer Name is required",
                  })}
                />
                {errors.farmerName && (
                  <p className="text-danger">{errors.farmerName.message}</p>
                )}
              </div>
              <div className="col-lg-6 mt-3 mt-lg-0">
                <label className="form-lable-detail text-dark">
                  Mobile Number
                </label>
                <input
                  type="number"
                  className="form-control form-control-detail shadow"
                  placeholder="Enter Mobile No."
                  {...register("mobileNumber", {
                    required: "Mobile Number is required",
                    pattern: {
                      value: /^\d{10}$/,
                      message: "Mobile number must be 10 digits",
                    },
                  })}
                />
                {errors.mobileNumber && (
                  <p className="text-danger">{errors.mobileNumber.message}</p>
                )}
              </div>

              <div className="col-lg-6 mt-3">
                <label className="form-lable-detail text-dark">
                  Farm House Name
                </label>
                <input
                  type="text"
                  className="form-control form-control-detail shadow"
                  placeholder="Enter Farm House Name"
                  {...register("farmHouseName", {
                    required: "Farm House Name is required",
                  })}
                />
                {errors.farmHouseName && (
                  <p className="text-danger">{errors.farmHouseName.message}</p>
                )}
              </div>

              <div className="col-lg-6 mt-3">
                <label className="form-lable-detail text-dark">
                  Farm House Type
                </label>
                <input
                  type="text"
                  className="form-control form-control-detail shadow"
                  placeholder="Enter Farm House Type"
                  {...register("farmHouseType", {
                    required: "Farm House Type is required",
                  })}
                />
                {errors.farmHouseType && (
                  <p className="text-danger">{errors.farmHouseType.message}</p>
                )}
              </div>

              <div className="col-lg-6 mt-3">
                <label className="form-lable-detail text-dark">Address</label>
                <input
                  type="text"
                  className="form-control form-control-detail shadow"
                  placeholder="Enter Address"
                  {...register("farmAddress", {
                    required: "Address is required",
                  })}
                />
                {errors.farmAddress && (
                  <p className="text-danger">{errors.farmAddress.message}</p>
                )}
              </div>

              <div className="col-lg-6 mt-3">
                <label className="form-lable-detail text-dark">
                  Number of Animals
                </label>
                <input
                  type="number"
                  className="form-control form-control-detail shadow"
                  placeholder="Enter Number of Animals"
                  {...register("animalsNumber", {
                    required: "Number of Animal is required",
                  })}
                />
                {errors.animalsNumber && (
                  <p className="text-danger">{errors.animalsNumber.message}</p>
                )}
              </div>
            </div>
            <br />
            <div className="text-end border-top pt-3">
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <span className={"farm-btn"}>
                <button
                  className="btn rounded-pill text-white p-0 ms-3"
                  type="submit"
                >
                  Submit
                </button>
              </span>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default FarmerDetails;
