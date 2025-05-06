import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { RiRulerFill } from "react-icons/ri";
import {
  PiGenderIntersexFill,
  PiCalendarBlankFill,
  PiPencilSimple,
  PiTrashSimple,
} from "react-icons/pi";
import { GiWeightScale } from "react-icons/gi";
import { NavLink, useNavigate } from "react-router-dom";
import { Modal } from "react-bootstrap";
import { toast } from "react-toastify";
import { deleteData, postData } from "../APIs/api";
import Dropdown from "react-bootstrap/Dropdown";
import { FilePlus, Pencil, Trash } from "react-bootstrap-icons"; // Import icons

const AnimalCard = ({
  parentId,
  tagId,
  height,
  gender,
  hasKid,
  age,
  _id,
  birthDate,
  fatherTag,
  motherTag,
  birthWeight,
  birthType,
  motherWeanDate,
  purchaseDate,
  lastVaccineDate,
  lastVaccineName,
  isPregnant,
  dateMading,
  pregnencyFail,
  weanDate,
  vaccineName,
  vaccineDate,
  farmHouseName,
  ageMonth,
  weightKg,
  bodyScore,
  pregnancyDetails,
  maleDetail,
  selectedAnimal,
  uniqueId,
  kidId,
  onDelete,
  children,
  postweight,
  milk,
  vaccine,
  deworm,
  estrusHeat,
  farmSanitation,
  currentIndex,
  comments,
  showDetailsButton,
  failed,
  childWeanDate,
  childWeanWeight,
  siblingDetails,
  currentPregnancyMonth,
}) => {
  const details = [
    // { label: "Height (Ft)", value: height, icon: <RiRulerFill /> },
    { label: "Gender", value: gender, icon: <PiGenderIntersexFill /> },
    { label: "Age", value: age, icon: <PiCalendarBlankFill /> },
    // { label: "Weight (kg)", value: weight, icon: <GiWeightScale /> },
  ];
  console.log('age: ', age);

  const modalDetails = [
    { label: "Tag Id", value: tagId, icon: <RiRulerFill /> },
    { label: "Height (Ft)", value: height, icon: <RiRulerFill /> },
    { label: "Gender", value: gender, icon: <PiGenderIntersexFill /> },
    { label: "Year", value: age, icon: <PiCalendarBlankFill /> },
    { label: "Month", value: ageMonth, icon: <PiCalendarBlankFill /> },
    { label: "Weight (kg)", value: weightKg, icon: <GiWeightScale /> },
    { label: "Body Score", value: bodyScore, icon: <RiRulerFill /> },
    {
      label: "Pregnancy Details",
      value: pregnancyDetails,
      icon: <RiRulerFill />,
    },
    { label: "children", value: children, icon: <GiWeightScale /> },

    { label: "Male Detail", value: maleDetail, icon: <GiWeightScale /> },
    { label: "Post Wean", value: postweight, icon: <GiWeightScale /> },
    { label: "Milk", value: milk, icon: <GiWeightScale /> },
    { label: "Vaccine", value: vaccine, icon: <GiWeightScale /> },
    { label: "Deworm", value: deworm, icon: <GiWeightScale /> },
    { label: "Estrus Heat", value: estrusHeat, icon: <GiWeightScale /> },
    {
      label: "Farm Sanitation",
      value: farmSanitation,
      icon: <GiWeightScale />,
    },
  ];

  const navigate = useNavigate();

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const handleShowDelete = () => setShowDeleteModal(true);
  const handleCloseDelete = () => setShowDeleteModal(false);

  const editForm = () => {
    localStorage.setItem("currentIndex", currentIndex);
    console.log('currentIndex: ', currentIndex);
  };

  const handleConfirmDelete = () => {
    if (kidId) {
      handleConfirmDeleteChild();
    } else {
      handleConfirmDeleteParent();
    }
  };

  const handleConfirmDeleteChild = async () => {
    if (children?.length > 0) {
      toast.error("Cannot delete parent. It has child records associated.");
      return;
    }

    // setAnimals((prevAnimals) => prevAnimals.filter(animal => animal.uniqueId !== uniqueId));

    try {
      await deleteData("/user/animaldata/child/delete", uniqueId);
      toast.success("Child deleted successfully.");
      handleCloseDelete();
      setTimeout(() => navigate("/farmdata/dashboard"), 100);
    } catch (error) {
      toast.error(error.message || "Error deleting animal. Please try again.");
      handleCloseDelete();
    }
  };

  const handleConfirmDeleteParent = async () => {
    try {
      await deleteData("user/animaldata/newEntity/delete", uniqueId);
      toast.success("Parent deleted successfully.");
      handleCloseDelete();
      setTimeout(() => {
        window.location.reload();
      }, 10);
    } catch (error) {
      toast.error(error.message || "Error deleting animal. Please try again.");
      handleCloseDelete();
    }
  };

  const handleConvertParent = async () => {
    // const apiUrl = /user/animaldata/child/; // Append kidId to the URL
    try {
      const response = await postData(`/user/animaldata/child/${_id}`); // No need to send kidId in body

      if (response?.data?.success === 200) {
        toast.success("Child Converted To Parent Successfully.");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error(error.message || "Child does not convert. Please try again.");
    }
  };

  // const editForm = () => {
  //   localStorage.setItem("currentIndex", currentIndex);
  // };

  return (
    <Card
      className="mb-3"
      style={{
        borderRadius: "12px",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
      }}
    >
      <Card.Header
        className="d-flex justify-content-between align-items-center px-4 py-3"
        style={{
          backgroundColor: "#B8E0F7",
          borderRadius: "10px 10px 0px 0px",
        }}
      >
        {kidId ? (
          <div>
            <div
              style={{ fontSize: "16px" }}
              className="pb-2 text-chinese-black-color"
            >
              Parent: {parentId}
            </div>
            <div
              className="text-chinese-black-color"
              style={{ fontSize: "15px" }}
            >
              Child: {kidId}
            </div>
          </div>
        ) : (
          <div className="text-chinese-black-color">Tag Id: {tagId}</div>
        )}

        {/* Button to open modal */}
        <div
          className="bg-light pb-1 rounded-circle d-flex align-items-center d-flex align-items-center justify-content-center"
          style={{ width: "24px", height: "24px" }}
        >
          <button
            onClick={() =>
              navigate(`/record/${parentId}/${uniqueId}`, {
                state: {
                  parentId,
                  uniqueId,
                  tagId,
                  motherTag,
                  fatherTag,
                  defaultForm: "BasicDetails", // 👈 send this to show BasicDetails
                  animalData: {
                    parentId,
                    tagId,
                    height,
                    gender,
                    age,
                    _id,
                    birthDate,
                    ageMonth,
                    weightKg,
                    bodyScore,
                    pregnancyDetails,
                    maleDetail,
                    uniqueId,
                    kidId,
                    postweight,
                    comments,
                    fatherTag,
                    motherTag,
                    birthWeight,
                    birthType,
                    motherWeanDate,
                    purchaseDate,
                    lastVaccineDate,
                    lastVaccineName,
                    isPregnant,
                    dateMading,
                    pregnencyFail,
                    weanDate,
                    vaccineName,
                    vaccineDate,
                    farmHouseName,
                    failed,
                    childWeanDate,
                    childWeanWeight,
                    siblingDetails,
                    currentPregnancyMonth,
                  },
                },
              })
            }
            className="border-0 bg-transparent"
          >
            <SlArrowRight
              className="fs-6 m-auto"
              style={{ cursor: "pointer" }}
            />
          </button>
        </div>
      </Card.Header>
      <Card.Body>
        {details.map((item, idx) => (
          <React.Fragment key={idx}>
            <div
              className="py-2 d-flex justify-content-between align-items-center px-2"
              style={{ color: "#707070" }}
            >
              <div className="d-flex align-items-center">
                <div
                  className="rounded-2 p-1 d-flex"
                  style={{ boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)" }}
                >
                  {item.icon}
                </div>
                <div className="card-content ms-2">{item.label}:</div>
              </div>
              <div>
                <strong> {item.value}</strong>
              </div>
            </div>
            {idx !== details.length - 1 && (
              <div className="py-2">
                <div className="border border-1"></div>
              </div>
            )}
          </React.Fragment>
        ))}
      </Card.Body>

      <Card.Footer className="d-flex justify-content-between align-items-center py-3">
        <>
          {/* <NavLink to="/parentform?type=edit">
              <Button
               onClick={editForm}
                variant="light"
                className="border px-1 py-0"
                style={{ boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)" }}
              >
                <PiPencilSimple className="fs-6 text-primary" />
              </Button>
            </NavLink> */}

          <Button
            onClick={() => {
              navigate("/parentform?type=edit", {
                state: {
                  parentId,
                  uniqueId,
                  tagId,
                  height,
                  gender,
                  age,
                  _id,
                  birthDate,
                  ageMonth,
                  weightKg,
                  bodyScore,
                  pregnancyDetails,
                  maleDetail,
                  postweight,
                  comments,
                  fatherTag,
                  motherTag,
                  birthWeight,
                  birthType,
                  motherWeanDate,
                  purchaseDate,
                  lastVaccineDate,
                  lastVaccineName,
                  isPregnant,
                  dateMading,
                  pregnencyFail,
                  weanDate,
                  vaccineName,
                  vaccineDate,
                  farmHouseName,
                  failed,
                  childWeanDate,
                  childWeanWeight,
                  siblingDetails,
                  currentPregnancyMonth,
                },
              });
              editForm() 
            }}
            variant="light"
            className="border px-1 py-0"
            style={{ boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)" }}
          >
            <PiPencilSimple className="fs-6 text-primary" />
          </Button>

          <Button
            variant="light"
            className="border px-1 py-0"
            style={{ boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)" }}
            onClick={handleShowDelete}
          >
            <PiTrashSimple className="fs-6 text-danger" />
          </Button>
        </>

        <Modal show={showDeleteModal} onHide={handleCloseDelete} centered>
          <Modal.Header closeButton>
            <Modal.Title>Confirm Deletion</Modal.Title>
          </Modal.Header>
          <Modal.Body className="mx-auto">
            Are you sure you want to delete this item?
          </Modal.Body>
          <Modal.Footer className="d-flex justify-content-center">
            <Button variant="secondary" onClick={handleCloseDelete}>
              Cancel
            </Button>
            <Button variant="danger" onClick={handleConfirmDelete}>
              Delete
            </Button>
          </Modal.Footer>
        </Modal>
        {showDetailsButton && (
           kidId === undefined ? (
          <>
            <Button
              size="sm"
              className="rounded-pill font-12-400 py-1 px-2 border-0"
              style={{ background: "#FB9038", color: "white" }}
              onClick={() =>
                navigate(`/record/${parentId}/${uniqueId}`, {
                  state: {
                    parentId,
                    uniqueId,
                    tagId,
                    motherTag,
                    hasKid,
                    fatherTag,
                    defaultForm: "BasicDetails", // 👈 send this to show BasicDetails
                    animalData: {
                      parentId,
                      tagId,
                      height,
                      gender,
                      age,
                      _id,
                      birthDate,
                      ageMonth,
                      weightKg,
                      bodyScore,
                      pregnancyDetails,
                      maleDetail,
                      uniqueId,
                      kidId,
                      postweight,
                      comments,
                      fatherTag,
                      motherTag,
                      birthWeight,
                      birthType,
                      motherWeanDate,
                      purchaseDate,
                      lastVaccineDate,
                      lastVaccineName,
                      isPregnant,
                      dateMading,
                      pregnencyFail,
                      weanDate,
                      vaccineName,
                      vaccineDate,
                      farmHouseName,
                      failed,
                      childWeanDate,
                      childWeanWeight,
                      siblingDetails,
                      currentPregnancyMonth,
                    },
                  },
                })
              }
            >
              + Details
            </Button>
          </>
        ) : (
          <>
            <Dropdown>
              <Dropdown.Toggle
                size="sm"
                className="rounded-pill py-2 px-3 border-0 d-flex align-items-center gap-2"
                style={{ background: "#FB9038", color: "white" }}
              >
                More
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item
                  onClick={() => navigate("/parentform")}
                  className="d-flex align-items-center gap-3 py-2"
                >
                  <FilePlus size={16} /> Add Details
                </Dropdown.Item>
                <Dropdown.Item
                  // onClick={() => console.log("Edit Clicked")}
                  onClick={() =>
                    navigate(`/record/${kidId}/${uniqueId}`, {
                      state: { kidId, uniqueId },
                    })
                  }
                  className="d-flex align-items-center gap-3 py-2"
                >
                  <Pencil size={16} /> Edit
                </Dropdown.Item>
                <Dropdown.Item
                  // onClick={() => console.log("Delete Clicked")}
                  onClick={handleShowDelete}
                  className="d-flex align-items-center gap-3 text-danger py-2"
                >
                  <Trash size={16} /> Delete
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </>
        )
        )}
      </Card.Footer>
    </Card>
  );
};

export default AnimalCard;
