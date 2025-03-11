import React, { useState } from "react";
import Image1 from "../../../assets/img/livestock/livestockimg.png";
import { NavLink } from "react-router-dom";

const Livestock = () => {
  // const [selected, setSelected] = useState("goat");

  return (
    <>
      <div className="livestock-training py-5">
        <div className="container py-lg-5">
          <div className="row m-auto">
            <div className="col-lg-11 m-auto">
              <div className="row livestock-row m-auto">
                <div className="col-lg-4 px-0">
                  <div className="livestock-img">
                    <img src={Image1} alt="Goat farming" className=" " />
                  </div>
                </div>
                {/* <div className="col-lg-1"></div> */}
                <div className="col-lg-8 py-4 ps-lg-4 pe-lg-4">
                  <div className="livestock-content">
                    <p className="livestock-title">
                      Ongoing Online and Offline Livestock Public Training and
                      Interaction Information
                    </p>
                    <p className="livestock-subtitle">
                      Training Program on Rearing of Goats for 30 days
                    </p>

                    <p className="mb-0 livestock-text">
                      Livestock Farming is becoming an emerging commercial
                      business in India. Youngster in India are getting very
                      attractive towards the opportunities in the livestock
                      sector. Now a days many higher educated people are also
                      doing very good in the Ruminant Farming and generating
                      higher incomes from its various products like milk, meat,
                      fiber and skin. It has been studied that entrepreneurs who
                      are working good in this sector has taken proper training
                      from an expert professional consultant in their start-up.
                      Many successful farmers are benefited by ZamZam Farmotech
                      training programs and end to end support. ZamZam Farmotech
                      is equipped with very experienced Veterinarians for the
                      training and consultancies like Dr. H. A. Tiwari M.V.Sc.
                      (Retired Chief Veterinary Officer CIRG) , and a very
                      famous on social network Dr. Ibne Ali M.V.Sc. (Ali
                      Veterinary Wisdom)
                      <br />
                      Before starting up a new farming it is very important to
                      understand and learn Scientific techniques and methods of
                      farming for getting higher productions and reducing any
                      higher risk in the livestock. Learning new and advanced
                      techniques in the modern era will give you the competitive
                      edge for the success in the business and diminishes any
                      failure.
                      <br />
                      In the 30 days training program we will cover all the
                      lectures through online facility in 21 days and 1 day will
                      be kept reserved for physical practical on our production
                      goat farm. All the lectures will be held daily from 7:00
                      pm to 9:00 pm for your convenience so that you do not need
                      to loose your daily work. A practical program will be held
                      for 1 full working day from 10:00 am to...
                      <NavLink
                        to="/training"
                        className="text-decoration-none ms-2"
                        style={{ color: "rgba(236, 114, 41, 1)" }}
                      >
                        Read more
                      </NavLink>
                    </p>
                  </div>
                </div>
              </div>
              <div className="container mt-4">
                <div className="row text-center">
                  {/* Goat Farming Training - Default Active */}
                  <div className="col-lg-3 col-md-6 mb-3">
                    <div className="livestock-training1 m-auto">
                      <NavLink
                        to="/"
                        className={({ isActive }) =>
                          `text-decoration-none text-color ${
                            isActive ? "active text-decoration-underline" : ""
                          }`
                        }
                      >
                        Goat Farming Training
                      </NavLink>
                    </div>
                  </div>

                  {/* Advance Farmhouse Training */}
                  <div className="col-lg-3 col-md-6 mb-3">
                    <div className="livestock-training2 m-auto">
                      <NavLink
                        to="/advance-farmhouse-training"
                        className={({ isActive }) =>
                          `text-decoration-none text-color ${
                            isActive ? "active text-decoration-underline" : ""
                          }`
                        }
                      >
                        Advance Farmhouse Training
                      </NavLink>
                    </div>
                  </div>

                  {/* Pro-Training For Commercial Goat Farming */}
                  <div className="col-lg-3 col-md-6 mb-3">
                    <div className="livestock-training3 m-auto">
                      <NavLink
                        to="/pro-training-commercial-goat-farming"
                        className={({ isActive }) =>
                          `text-decoration-none text-color ${
                            isActive ? "active text-decoration-underline" : ""
                          }`
                        }
                      >
                        Pro-Training For Commercial Goat Farming
                      </NavLink>
                    </div>
                  </div>

                  {/* Webinar */}
                  <div className="col-lg-3 col-md-6 mb-3">
                    <div className="livestock-training4 m-auto">
                      <NavLink
                        to="/webinar"
                        className={({ isActive }) =>
                          `text-decoration-none text-color ${
                            isActive ? "active text-decoration-underline" : ""
                          }`
                        }
                      >
                        Webinar
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Livestock;
