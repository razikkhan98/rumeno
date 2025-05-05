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
import Navbar from "../../../common/navbar/mainnavbar";
import Sidebar from "../../sidebar/index";
import { Card, InputGroup } from "react-bootstrap";
import DashboardTable from "../dashboardTable";
import axios from "axios";

// Import Images
// import Animal from "../../../assets/img/dashboard/animals.svg";
// import Parent from "../../../assets/img/dashboard/parent.svg";
// import Child from "../../../assets/img/dashboard/animals.svg";
// import Postwean from "../../../assets/img/dashboard/post wean.svg";
// import MilkCount from "../../../assets/img/dashboard/milk production.svg";
// import Heat from "../../../assets/img/dashboard/heat.svg";
// import Deworm from "../../../assets/img/dashboard/deworming.svg";
// import Sanitation from "../../../assets/img/dashboard/sanitation.svg";
// import Vaccine from "../../../assets/img/dashboard/vaccine.svg";

import Animal from "../../../assets/img/dashboard/animals1.svg";
import Parent from "../../../assets/img/dashboard/parent1.svg";
import Child from "../../../assets/img/dashboard/baby1.svg";
import Postwean from "../../../assets/img/dashboard/postwean1.svg";
import MilkCount from "../../../assets/img/dashboard/milk1.svg";
import Heat from "../../../assets/img/dashboard/heat1.svg";
import Deworm from "../../../assets/img/dashboard/dewarming1.svg";
import Sanitation from "../../../assets/img/dashboard/sanitation1.svg";
import Vaccine from "../../../assets/img/dashboard/vaccine1.svg";
import Pregnant from "../../../assets/img/dashboard/pregnantgoat.svg";
import Header from "../../../common/Header/header";

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
    PregnantCount: 0,
  });
  console.log("stats: ", stats);

  const [selectedCard, setSelectedCard] = useState(null);
  console.log("selectedCard: ", selectedCard);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [data, setdata] = useState([]);

  // const {farmName} =JSON.parse(localStorage?.getItem("farmerDetail")) ;
  const setfarmHouseName = sessionStorage?.getItem("farmHouseName");
  const user = sessionStorage?.getItem("animalName");
  const selectedAnimal = user ? user : "Goat";

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
          "https://ab40-2401-4900-8823-f1f0-8820-98b3-d0ac-a93f.ngrok-free.app/rumeno/user/animaldata/parentchild/getAllCount",
          {
            params: { uid, animalName },
            headers: {
              "ngrok-skip-browser-warning": "true", // Required for ngrok
              "Content-Type": "application/json", // Adjust as needed
            },
          }
        );

        console.log("response: ", response);
        setStats(response.data);
        setdata(response.data);
      } catch (err) {
        setError("Error fetching data");
      } finally {
        setLoading(false);
      }
    };

    fetchAnimalData();
  }, []);

  const cardData = [
    {
      title: "Total Goat",
      cardborder: "card-orange-border",
      cardcircle: "card-orange-circle",
      img: Animal,
      value: stats.TotalAnimals || " ",
    },

    // {
    //   title: "Total Parents",
    //   cardborder: "card-blue-border",
    //   img: Parent,
    //   value: stats.TotalParents,
    // },
    // {
    //   title: "Total Children",
    //   cardborder: "card-orange-border",
    //   img: Child,
    //   value: stats.TotalChildren,
    // },
    {
      title: "Vaccines",
      cardborder: "card-blue-border",
      cardcircle: "card-blue-circle",
      img: Vaccine,
      value: stats.VaccineCount || " ",
      details: stats.VaccineData || [],
    },
    // {
    //   title: "Post Wean",
    //   cardborder: "card-orange-border",
    //   img: Postwean,
    //   value: stats.PostWeanCount,
    //   details: stats.PostWeanData,
    // },
    // {
    //   title: "Milk Production",
    //   cardborder: "card-blue-border",
    //   img: MilkCount,
    //   value: stats.MilkCount,
    //   details: stats.MilkData,
    // },
    // {
    //   title: "Astrus Heat",
    //   cardborder: "card-orange-border",
    //   img: Heat,
    //   value: stats.HeatCount,
    //   details: stats.HeatData,
    // },
    {
      title: "Deworming",
      cardborder: "card-blue-border",
      cardcircle: "card-blue-circle",
      img: Deworm,
      value: stats.DewormCount || " ",
      details: stats.DewormData || [],
    },
    // {
    //   title: "Farm Sanitation",
    //   cardborder: "card-orange-border",
    //   img: Sanitation,
    //   value: stats.SanitationCount,
    //   details: stats.SanitationData,
    // },
    // {
    //   title: "Pregnant Goat",
    //   cardborder: "card-blue-border",
    //   img: Pregnant,
    //   value: stats.PregnantCount,
    //   details: stats.PregnantData,
    // },
  ];


  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <Navbar />
      <div className="parent pt-5">
        <div className="pt-5">
          <Header title={setfarmHouseName} subtitle={selectedAnimal} />
        </div>
        <div className="row">
          <div className="col-lg-2 col-md-3">
            {/* Left Sidebar - Fixed */}
            <div className="sidebar-container">
              <Sidebar />
            </div>
          </div>
          <div className="col-lg-10 col-md-9">
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
                <span onClick={() => setSelectedCard(null)} role="button">
                  Dashboard
                </span>
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
                      <div key={index} className="col-lg-3 col-md-6 px-4 pt-4">
                        {/* <Card
                        className="mb-3 card-hover"
                        onClick={() => setSelectedCard(card)}
                        style={{
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
                      </Card> */}

                        <Card
                          className={`dashboard-cards card-hover rounded-3 shadow px-lg-4 py-4 ${card.cardborder}`}
                          onClick={() => setSelectedCard(card)}
                        >
                          <div className="row gap-2 align-items-center justify-content-between">
                            <div className="col-lg-3 col-3">
                              <div
                                className={`card-img-circle rounded-circle d-flex align-items-center justify-content-center ${card.cardcircle}`}
                              >
                                <img src={card.img} alt="Loading" />
                              </div>
                            </div>
                            <div className="col-lg-7 col-7">
                              <Card.Title>{card.value}</Card.Title>
                              <Card.Subtitle className="mb-2 text-muted dashboard-card-title">
                                {" "}
                                {card.title}
                              </Card.Subtitle>
                              {/* <Card.Body>This is some text within a card body.</Card.Body> */}
                            </div>
                          </div>
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
    </>
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
