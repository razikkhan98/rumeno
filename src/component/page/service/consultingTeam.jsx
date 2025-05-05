import React from "react";

// Common Components
import Navbar from "../../common/navbar/mainnavbar";
import Footer from "../../common/footer";

import Doctor from "../../assets/img/service-img/Group 1171277285.png";
import Sir from "../../assets/img/service-img/Group 1171277284.png";

const Consulting = () => {
    return(
        <>
        <Navbar/>
        <div className="bg-white py-5">
          <div className="container py-3">
            <div className="text-center py-5">
              <p className="service-heading">Our Consulting Team Members</p>
              <p className="heading-description pb-5">
                Your Trusted Partners in Animal Health & Veterinary Care. We
                prioritize the overall health, productivity, and happiness of
                your animals, making us your reliable partner in animal care and
                veterinary excellence. Care.
              </p>
            </div>
          </div>
        </div>
        <div className="position-relative">
          <div className="container py-5">
            <div className="row">
              <div className="col-lg-6 col-md-6 d-flex flex-column align-items-center justify-content-center text-center">
                <img
                  src={Doctor}
                  className="rounded-circle img-fluid team-img"
                  alt="Loading"
                />
                <p className="font-size-28 text-chinese-black-color pt-5">
                  Dr. H. A. Tiwari
                </p>
                <p className="font-size-18 text-gray-color text-center">
                  Chief Consultant Medical Science Management
                </p>
              </div>

              <div className="col-lg-6 col-md-6 d-flex flex-column align-items-center justify-content-center">
                <img
                  src={Sir}
                  className="rounded-circle img-fluid team-img"
                  alt="Loading"
                />
                <p className="font-size-28 text-chinese-black-color pt-5">
                  Mohammed Rizwan
                </p>
                <p className="font-size-18 text-gray-color text-center">
                  Founder & CEO Market and Products Management
                </p>
              </div>
            </div>
          </div>
        </div>
      
    

        <Footer />
        </>
    );
};

export default Consulting;