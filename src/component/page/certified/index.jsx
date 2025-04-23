import React from "react";
import Image1 from "../../assets/img/certifi/gvtgem.png";
import Image2 from "../../assets/img/certifi/certimg2.svg";
import Image3 from "../../assets/img/certifi/idmart.png";
import Image4 from "../../assets/img/certifi/certimg4.svg";
import Image5 from "../../assets/img/certifi/certimg5.svg";
import Image6 from "../../assets/img/certifi/certimg6.svg";

const Certified = () => {
  return (
    <>
      <div className="certified">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 m-auto">
              <p className="certified-heading text-center mb-0">
                An ISO 9001:2015 recognized by International Accredited Forum
                Certified Company
              </p>
              <div className="certified-images gap-3">
                <div className="certified-img d-flex align-items-center">
                  <img src={Image1} alt="" className="h-75" />
                </div>
                <div className="certified-img">
                  <img src={Image2} alt="" />
                </div>
                <div className="certified-img">
                  <img src={Image6} alt="" />
                </div>
                <div className="certified-img">
                  <img src={Image5} alt="" />
                </div>
                {/* <div className="certified-img">
                  <img src={Image4} alt="" />
                </div> */}
                <div className="certified-img">
                  <img src={Image3} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Certified;
