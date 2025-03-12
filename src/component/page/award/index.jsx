import React from "react";
import Image1 from "../../assets/img/award/awardimg.png";
import { Link } from "react-router-dom";

const Award = () => {
  return (
    <>
      <div className="award py-5">
        <div className="container py-lg-5">
          <div className="row award-row m-auto py-lg-5">
            <div className="col-lg-6 py-lg-2">
              <div className="award-img ms-lg-5">
                <img src={Image1} alt="" />
              </div>
            </div>
            {/* <div className="col-lg-1"></div> */}
            <div className="col-lg-6 py-lg-4">
              <div className="award-content ms-lg-5">
                <p className="award-heading">
                  Awards & <br /> Recognition
                </p>
                <p className="award-head">Rumeno Farmtech</p>
                <p className="award-para">
                  One of India's top producers of animal feed supplements is
                  Rumeno Farmotech. The company, which was founded in 2016, has
                  advanced veterinary research significantly.
                </p>
                <p className="award-para">
                  A wide variety of feed supplements are available from Rumeno
                  Farmotech to suit different types of animals.
                </p>
                <div className="award-btn">
                  <Link
                    to="https://www.theindustryoutlook.com/startups/vendor/rumeno-farmotech-elevating-livestock-health-with-innovative-nutrition-solutions--cid-9975.html"
                    target="_blank"
                  >
                    <button>More Information</button>
                  </Link>
                </div>
              </div>
            </div>
            {/* <div className="col-lg-1"></div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Award;
