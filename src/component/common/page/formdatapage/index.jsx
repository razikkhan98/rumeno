import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import Goat from "../../../assets/formdata/goat.png";
import Sheep from "../../../assets/formdata/sheep.png";
import Cow from "../../../assets/formdata/cow.png";
import Buffalo from "../../../assets/formdata/buffalo.png";
import Navbar2 from "../../navbar/navbar2";
import { NavLink } from "react-router-dom";

const Formdata = () => {
  return (
    <>
      <div className="form-data">
        <Navbar2/>
        <div className="container">
          <div className="row">
            {/* <div className="col-lg-12 pt-lg-5">
              <div className="form-data-btn">
                <button className="bg-white border border-0 d-flex align-items-center fs-5">
                  <IoIosArrowBack /> Back
                </button>
              </div>
            </div> */}
            <div className="col-lg-12 py-5">
              <div className="form-data-content text-center pt-lg-5">
                <h2>Please select an animal to proceed</h2>
                <div className="animal-images d-flex justify-content-around pt-lg-5">
                  <div className="goat-image">
                    <NavLink to="/parentcard" className="text-decoration-none">
                    <div className="form-data-img">
                      <img src={Goat} alt="" />
                    </div>
                    <h3 className="text-dark">Goat</h3>
                    </NavLink>
                  </div>
                  <div className="sheep-image">
                    <div className="form-data-img">
                      <img src={Sheep} alt="" />
                    </div>

                    <h3>Sheep</h3>
                  </div>
                  <div className="cow-image">
                    <div className="form-data-img">
                      <img src={Cow} alt="" />
                    </div>

                    <h3>Cow</h3>
                  </div>
                  <div className="buffalo-image">
                    <div className="form-data-img">
                      <img src={Buffalo} alt="" />
                    </div>

                    <h3>Buffalo</h3>
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

export default Formdata;
