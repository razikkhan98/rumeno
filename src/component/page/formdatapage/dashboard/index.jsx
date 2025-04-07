import React, { useState } from "react";
import Navbar from "../../../common/navbar";
import Sidebar from "../../sidebar/index";
import { Card } from "react-bootstrap";
import DashboardTable from "../dashboardTable";

const cardData = [
  { title: "Total", value: "350" },
  { title: "Parent", value: "200" },
  { title: "Child", value: "150" },
  { title: "Post Wean", value: "10" },
  {
    title: "Milk",
    value: "50",
    data: [{ uid: "M001", parent: "Cow", handle: "John" }],
  },
  { title: "Vaccine", value: "35" },
  { title: "Deworn", value: "40" },
  { title: "Estrus Heat", value: "350" },
  { title: "Farm Sanitation", value: "350" },
];

const Dashboard = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  return (
    <div className="parent">
      <Navbar />
      <div className="row">
        <div className="col-lg-2 col-md-3">
          {/* Left Sidebar - Fixed */}
          <div className="sidebar-container">
            <Sidebar />
          </div>
        </div>
        <div className="col-lg-10 col-md-9  py-3">
          {/* Right Content - Scrollable */}
          <div
            className="content-container flex-grow-1"
            style={{
              overflowY: "auto",
              height: "calc(100vh - 200px)", // Adjust based on Navbar height
              padding: "20px",
            }}
          >
            <h4 className="text-chinese-black-color">
              Dashboard
              {selectedCard && (
                <>
                  {" > "}
                  {selectedCard.title}
                </>
              )}
            </h4>
            <div className="row">
              {!selectedCard && (
                <>
                  {cardData.map((card, index) => (
                    <div key={index} className="col-lg-4 px-4 pt-4">
                      <Card
                        className="mb-3 card-hover"
                        onClick={() => setSelectedCard(card)}
                        style={{
                          borderRadius: "12px",
                          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
                          cursor: "pointer",
                          transition:
                            "transform 0.3s ease, box-shadow 0.3s ease",
                        }}
                      >
                        <Card.Header
                          className="d-flex justify-content-center align-items-center px-4 py-3"
                          style={{
                            backgroundColor: "#B8E0F7",
                            borderRadius: "10px 10px 0px 0px",
                          }}
                        >
                          <div className="text-chinese-black-color">
                            {card.title}
                          </div>
                        </Card.Header>
                        <Card.Body>
                          <div
                            className="py-2 d-flex align-items-center justify-content-center px-2"
                            style={{ color: "#707070" }}
                          >
                            <div
                              className="card-content"
                              style={{ fontSize: "20px" }}
                            >
                              {card.value}
                            </div>
                          </div>
                        </Card.Body>
                      </Card>
                    </div>
                  ))}
                </>
              )}
            </div>
            {selectedCard && (
              <div className="mt-4">
                {/* <h5>{selectedCard.title} Details</h5> */}
                <DashboardTable data={selectedCard.data} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

// Add this to your CSS file or within a <style> tag
const styles = `
.card-hover:hover {
  transform: scale(1.08);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}`;

document.head.insertAdjacentHTML("beforeend", `<style>${styles}</style>`);
