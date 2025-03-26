// import React from "react";
// import Navbar from "../../../common/navbar";
// import Sidebar from "../../sidebar/index";
// import { Card } from "react-bootstrap";

// const cardData = [
//   { title: "Total", value: "350" },
//   { title: "Parent", value: "200" },
//   { title: "Child", value: "150" },
// ];

// const Dashboard = () => (
//   <div className="parent">
//     <Navbar />
//     <div className="row">
//       <div className="col-lg-2">
//         {/* Left Sidebar - Fixed */}
//         <div className="sidebar-container">
//           <Sidebar />
//         </div>
//       </div>
//       <div className="col-lg-10 py-3">
//         {/* Right Content - Scrollable */}
//         <div
//           className="content-container flex-grow-1"
//           style={{
//             overflowY: "auto",
//             height: "calc(100vh - 200px)", // Adjust based on Navbar height
//             padding: "20px",
//           }}
//         >
//           <h4>Dashboard</h4>
//           <div className="row">
//             {cardData.map((card, index) => (
//               <div key={index} className="col-lg-3 px-4 pt-4">
//                 <Card
//                   className="mb-3"
//                   style={{
//                     borderRadius: "12px",
//                     boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
//                     cursor: "pointer",
//                   }}
//                 >
//                   <Card.Header
//                     className="d-flex justify-content-center align-items-center px-4 py-3"
//                     style={{
//                       backgroundColor: "#B8E0F7",
//                       borderRadius: "10px 10px 0px 0px",
//                     }}
//                   >
//                     <div>{card.title}</div>
//                   </Card.Header>
//                   <Card.Body>
//                     <div
//                       className="py-2 d-flex align-items-center justify-content-center px-2"
//                       style={{ color: "#707070" }}
//                     >
//                       <div className="card-content" style={{ fontSize: "20px" }}>
//                         {card.value}
//                       </div>
//                     </div>
//                   </Card.Body>
//                 </Card>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// );

// export default Dashboard;

import React, { useEffect, useState } from "react";
import Navbar from "../../../common/navbar";
import Sidebar from "../../sidebar/index";
import { Card } from "react-bootstrap";
import DashboardTable from "../dashboardTable";
import axios from "axios";

const Dashboard = () => {
  const [stats, setStats] = useState({
    TotalAnimals: 0,
    TotalParents: 0,
    TotalChildren: 0,
    VaccineCount: 0,
    PostWeanCount: 0,
    MilkCount: 0,
    HeatCount: 0,
    DewormCount: 0,
    SanitationCount: 0,
  });
  const [selectedCard, setSelectedCard] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    // Get UID and animalName from sessionStorage
    const uid = sessionStorage.getItem("uid");
    const animalName = sessionStorage.getItem("animalName");

    if (!uid || !animalName) {
      setError("User data not found in session.");
      setLoading(false);
      return;
    }

    const fetchAnimalData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/rumeno/user/animaldata/parentchild/getAllCount",
          {
            params: { uid, animalName },
          }
        );
        setStats(response.data);
      } catch (err) {
        setError("Error fetching data");
      } finally {
        setLoading(false);
      }
    };

    fetchAnimalData();
  }, []);

  const cardData = [
    { title: "Total Animals", value: stats.TotalAnimals },
    { title: "Total Parents", value: stats.TotalParents },
    { title: "Total Children", value: stats.TotalChildren },
    {
      title: "Vaccines",
      value: stats.VaccineCount,
      details: stats.VaccineData,
    },
    {
      title: "Post Wean",
      value: stats.PostWeanCount,
      details: stats.PostWeanData,
    },
    {
      title: "Milk Production",
      value: stats.MilkCount,
      details: stats.MilkData,
    },
    { title: "Heat", value: stats.HeatCount, details: stats.HeatData },
    { title: "Deworming", value: stats.DewormCount, details: stats.DewormData },
    {
      title: "Sanitation",
      value: stats.SanitationCount,
      details: stats.SanitationData,
    },
  ];

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

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
                  {selectedCard?.title}
                </>
              )}
            </h4>
            <div className="row">
              {!selectedCard && (
                <>
                  {cardData?.map((card, index) => (
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
                <DashboardTable data={selectedCard?.details} />
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
