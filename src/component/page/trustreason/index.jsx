import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image1 from "../../assets/img/curvecard/science.svg";
import Image2 from "../../assets/img/curvecard/network.svg";
import Image3 from "../../assets/img/curvecard/review.svg";

const Trust = () => {
  return (
    <>
      <div className="trust-card py-5">
        <div className="container pt-lg-5">
          <div className="row">
            <div className=" pb-5">
              <p className="trust-heading responsive-heading text-uppercase text-center">
                Rumeno Farmotech is trusted by Indian farmers for a number of
                reasons:
              </p>
              <div className="row d-flex align-items-center justify-content-center">
                <div className="col-lg-4 mt-5">
                  <div className="card-1">
                    <div className="curved-card-bs-wrapper">
                      <div className="curved-card-bs ms-lg-auto">
                        <div className="curved-card-bs-notch d-flex align-items-center justify-content-center">
                          <div className="card-top img1 d-flex align-items-center justify-content-center rounded-circle">
                            <img src={Image1} alt="" />
                          </div>
                        </div>
                        <div className="curved-card-bs-content text-center">
                          <p className="trust-card-heading">
                            Scientific Excellence
                          </p>
                          <p className="trust-card-para">
                            Rumeno exemplifies scientific excellence in animal
                            husbandry through innovative research and
                            sustainable practices that enhance livestock health,
                            productivity, and welfare, while advancing the
                            understanding of animal nutrition and digestive
                            efficiency.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 mt-5">
                  <div className="card-1">
                    <div className="curved-card-bs-wrapper">
                      <div className="curved-card-bs">
                        <div className="curved-card-bs-notch d-flex align-items-center justify-content-center">
                          <div className="card-top img2 d-flex align-items-center justify-content-center rounded-circle">
                            <img src={Image2} alt="" />
                          </div>
                        </div>
                        <div className="curved-card-bs-content text-center">
                          <p className="trust-card-heading">
                            Factory Direct Network
                          </p>
                          <p className="trust-card-para">
                            Our nationwide delivery system ensures premium
                            quality and affordability by delivering products
                            directly from the factory to your farm, eliminating
                            middlemen for better price control, transparency,
                            and guaranteed freshness.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 mt-5">
                  <div className="card-1">
                    <div className="curved-card-bs-wrapper">
                      <div className="curved-card-bs me-lg-auto">
                        <div className="curved-card-bs-notch d-flex align-items-center justify-content-center">
                          <div className="card-top img3 d-flex align-items-center justify-content-center rounded-circle">
                            <img src={Image3} alt="" />
                          </div>
                        </div>
                        <div className="curved-card-bs-content text-center">
                          <p className="trust-card-heading">
                            Customer Satisfaction
                          </p>
                          <p className="trust-card-para">
                            At Rumeno , we prioritize customer satisfaction by
                            offering top-quality products and expert services
                            directly to your farm. From premium supplies to
                            personalized support, we ensure your livestock
                            thrives. Your trust inspires us to deliver
                            excellence every day.
                          </p>
                        </div>
                      </div>
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

export default Trust;
