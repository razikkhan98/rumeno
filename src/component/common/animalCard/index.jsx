import React from "react";
import { Card, Button } from "react-bootstrap";
import { SlArrowRight } from "react-icons/sl";
import { RiRulerFill } from "react-icons/ri";
import {
  PiGenderIntersexFill,
  PiCalendarBlankFill,
  PiPencilSimple,
  PiTrashSimple,
} from "react-icons/pi";
import { GiWeightScale } from "react-icons/gi";
import { NavLink, useNavigate } from "react-router-dom";

const AnimalCard = ({
  name,
  height,
  gender,
  age,
  weight,
  selectedAnimal,
  uniqueId,
  kidId,
}) => {
  const details = [
    { label: "Height (Ft)", value: height, icon: <RiRulerFill /> },
    { label: "Gender", value: gender, icon: <PiGenderIntersexFill /> },
    { label: "Age", value: age, icon: <PiCalendarBlankFill /> },
    { label: "Weight (kg)", value: weight, icon: <GiWeightScale /> },
  ];

  const navigate = useNavigate();

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
            {/* <div style={{ fontSize: "18px" }} className="pb-2">
              Parent: {name}
            </div> */}
            <div style={{ fontSize: "15px" }}>Child: {kidId}</div>
          </div>
        ) : (
          <div>{name}</div>
        )}

        <div className="bg-light p-1 rounded-circle d-flex align-items-center">
          <SlArrowRight className="fs-6 m-auto" style={{ cursor: "pointer" }} />
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
        <Button
          variant="light"
          className="border px-2 py-1"
          style={{ boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)" }}
        >
          <PiPencilSimple className="fs-3 text-primary" />
        </Button>
        <Button
          variant="light"
          className="border px-2 py-1"
          style={{ boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)" }}
        >
          <PiTrashSimple className="fs-3 text-danger" />
        </Button>

        {kidId === undefined ? (
          <>
            
            <Button
              size="sm"
              className="rounded-pill py-2 px-3 border-0"
              style={{ background: "#FB9038", color: "white" }}
              onClick={() =>
                navigate(`/record/${name}/${uniqueId}`, {
                  state: { name, uniqueId },
                })
              }
            >
              Add Details
            </Button>
          </>
        ) : (
          <>
            <Button
              size="sm"
              className="rounded-pill py-2 px-3 border-0"
              style={{ background: "#FB9038", color: "white" }}
              onClick={() =>
                navigate(`/record/${kidId}/${uniqueId}`, {
                  state: { name, uniqueId },
                })
              }
            >
              Add Details
            </Button>
          </>
        )}
      </Card.Footer>
    </Card>
  );
};

export default AnimalCard;
