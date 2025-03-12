import React from "react";
import Mainnav from "../../common/navbar/mainnavbar";
import Image1 from "../../assets/img/goattraining/goattraining.png";

const Training = () => {
  return (
    <>
      <Mainnav />
      <div className="training pt-5">
        <div className=" pt-lg-5">
          <div className="row">
            <div style={{ background: "#F4FAFD" }}>
              <div className="container-fluid">
                <div className="row">
                  <div className="col-lg-12 px-5">
                    <nav aria-label="breadcrumb" className="py-2 px-3">
                      <ol className="breadcrumb mb-0">
                        <li className="breadcrumb-item">Home</li>
                        <li className="breadcrumb-item active">
                          Goat farming training
                        </li>
                      </ol>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-9 py-4 pe-lg-5 ps-lg-5">
              <div className="goattraining-content ps-lg-4 px-2">
                <p className="goattraining-title">
                  Ongoing Online and Offline Livestock Public Training and
                  Interaction Information
                </p>
                <p className="goattraining-subtitle">
                  Training Program on Rearing of Goats for 30 days
                </p>
                <div className="goattraining-text">
                  <p>
                    Livestock Farming is becoming an emerging commercial
                    business in India. Youngster in India are getting very
                    attractive towards the opportunities in the livestock
                    sector. Now a days many higher educated people are also
                    doing very good in the Ruminant Farming and generating
                    higher incomes from its various products like milk, meat,
                    fiber and skin . It has been studied that entrepreneurs who
                    are working good in this sector has taken proper training
                    from an expert professional consultant in their start-up.
                    Many successful farmers are benefited by ZamZam Farmotech
                    training programs and end to end support. ZamZam Farmotech
                    is equipped with very experienced Veterinarians for the
                    training and consultancies like Dr. H. A. Tiwari M.V.Sc.
                    (Retired Chief Veterinary Officer CIRG) , and a very famous
                    on social network Dr. Ibne Ali M.V.Sc. (Ali Veterinary
                    Wisdom) Before starting up a new farming it is very
                    important to understand and learn Scientific techniques and
                    methods of farming for getting higher productions and
                    reducing any higher risk in the livestock. Learning new and
                    advanced techniques in the modern era will give you the
                    competitive edge for the success in the business and
                    diminishes any failure. In the 30 days training program we
                    will cover all the lectures through online facility in 21
                    days and 1 day will be kept reserved for physical practical
                    on our production goat farm. All the lectures will be held
                    daily from 7:00 pm to 9:00 pm for your convenience so that
                    you do not need to loose your daily work.
                  </p>
                </div>
                <div className="goattraining-list">
                  <p className="goattraining-subtitle2">
                    A practical program will be held for 1 full working day from
                    10:00 am to 5:00 pm at our production unit.
                  </p>
                  <ul>
                    <li>Types of Goat's rearing</li>
                    <li>Popular Goats' breed of India</li>
                    <li>Selection of breed for business purpose</li>
                    <li>Goat Shed design</li>
                    <li>Floor Management</li>
                    <li>Shed disinfectant</li>
                    <li>Selection of New Goats</li>
                    <li>Selection of Farm Breeder</li>
                    <li>Breed improvement</li>
                    <li>Goat Transportation</li>
                    <li>Goat quarantine </li>
                    <li>Feed and water Management</li>
                    <li>Importance of Animal Supplements</li>
                    <li>Types of important diseases</li>
                    <li>Vaccination</li>
                    <li>Disease control management</li>
                    <li>Mastitis</li>
                    <li>Control on Abortion</li>
                    <li>Ecto and Endoparasite</li>
                    <li>Goat Reproduction</li>
                    <li>Breeding Management</li>
                    <li>Artificial Insemination</li>
                    <li>Birth Management</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="goattraining-img">
                <img src={Image1} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Training;
