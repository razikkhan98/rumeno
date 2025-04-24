import React from "react";
import caroimg1 from "../../assets/home/homecaro1.jpg";
import caroimg2 from "../../assets/home/homecaro2.jpg";
import caroimg3 from "../../assets/home/homecaro3.jpg";
import caroimg4 from "../../assets/home/homecaro4.jpg";
import caroimg5 from "../../assets/home/homecaro5.jpg";
import caroimg6 from "../../assets/home/homecaro6.jpg";
import mobcaroimg1 from "../../assets/home/dog.png";
import mobcaroimg2 from "../../assets/home/cat.png";
import mobcaroimg3 from "../../assets/home/goat.png";
import mobcaroimg4 from "../../assets/home/homecaromob2.png";
import mobcaroimg5 from "../../assets/home/homecaromob3.png";
import mobcaroimg6 from "../../assets/home/hen.png";
import Carousel from "react-bootstrap/Carousel";
import Prdimg1 from "../../assets/img/animals/prdaml1.png";
import Prdimg2 from "../../assets/img/animals/prdaml2.png";
import Prdimg3 from "../../assets/img/animals/prdaml3.png";
import Prdimg4 from "../../assets/img/animals/prdaml4.png";
import Prdimg5 from "../../assets/img/animals/prdaml5.png";
import Prdimg6 from "../../assets/img/animals/prdaml6.png";
import Prdimg7 from "../../assets/img/animals/prdaml7.png";
import Prdimg8 from "../../assets/img/animals/pigrabbit.png";
import { NavLink } from "react-router-dom";

const animals = [
  { id: "cow", imgSrc: Prdimg1 },
  { id: "goat", imgSrc: Prdimg2 },
  { id: "dog", imgSrc: Prdimg3 },
  { id: "poultry", imgSrc: Prdimg4 },
  { id: "fish", imgSrc: Prdimg5 },
  { id: "horse", imgSrc: Prdimg6 },
  { id: "pigeon", imgSrc: Prdimg7 },
  { id: "pig", imgSrc: Prdimg8 },
];

const Home = () => {
  return (
    <>
      <div className="home z-n1 ">
        <div className="container-fluid header-sect px-0 mx-0">
          <div className="row header-txt position-relative">
            <div className=" video-section overflow-hidden">
              <div
                className="col-lg-10 px-2 py-5 text-center video-content position-absolute top-50 start-50 translate-middle"
                data-aos="fade-right"
              >
                <p>
                  <span className="text-white home-heading font-size-48">
                    SMART SOLUTIONS FOR SUSTAINABLE FARMING
                  </span>
                </p>
                <p className=" h4 text-white home-title">We Solve All Animals Problems</p>
              </div>
            </div>
            <Carousel
              className="header-carousel bg-block black"
              fade
              interval={3000}
              pause={false}
            >
              <Carousel.Item>
                <picture>
                  <source
                    className="d-block mx-auto w-100"
                    media="(min-width:320px) and (max-width:645px)"
                    srcSet={mobcaroimg1}
                  />
                  <img
                    className="d-block mx-auto w-100 "
                    src={caroimg5}
                    alt="Rumeno-Veterinary-Product"
                  />
                </picture>
              </Carousel.Item>
              <Carousel.Item>
                <picture>
                  <source
                    className="d-block mx-auto w-100"
                    media="(min-width:320px) and (max-width:645px)"
                    srcSet={mobcaroimg2}
                  />
                  <img
                    className="d-block mx-auto w-100 "
                    src={caroimg2}
                    alt="Rumeno-Veterinary-Product"
                  />
                </picture>
              </Carousel.Item>
              <Carousel.Item>
                <picture>
                  <source
                    className="d-block mx-auto w-100"
                    media="(min-width:320px) and (max-width:645px)"
                    srcSet={mobcaroimg3}
                  />
                  <img
                    className="d-block mx-auto w-100 "
                    src={caroimg3}
                    alt="Rumeno-Veterinary-Product"
                  />
                </picture>
              </Carousel.Item>
              <Carousel.Item>
                <picture>
                  <source
                    className="d-block mx-auto w-100"
                    media="(min-width:320px) and (max-width:645px)"
                    srcSet={mobcaroimg4}
                  />
                  <img
                    className="d-block mx-auto w-100 "
                    src={caroimg4}
                    alt="Rumeno-Veterinary-Product"
                  />
                </picture>
              </Carousel.Item>
              <Carousel.Item>
                <picture>
                  <source
                    className="d-block mx-auto w-100"
                    media="(min-width:320px) and (max-width:645px)"
                    srcSet={mobcaroimg5}
                  />
                  <img
                    className="d-block mx-auto w-100 "
                    src={caroimg1}
                    alt="Rumeno-Veterinary-Product"
                  />
                </picture>
              </Carousel.Item>
              <Carousel.Item>
                <picture>
                  <source
                    className="d-block mx-auto w-100"
                    media="(min-width:320px) and (max-width:645px)"
                    srcSet={mobcaroimg6}
                  />
                  <img
                    className="d-block mx-auto w-100 "
                    src={caroimg6}
                    alt="Rumeno-Veterinary-Product"
                  />
                </picture>
              </Carousel.Item>
            </Carousel>
            {/* <a href="#training">
              <div className="training-sect">
                <button className="btn gradient-custom-2 border-0 text-white btn--shockwave is-active">
                  TRAINING
                </button>
              </div>
            </a>
            <ReactWhatsapp
              className="whatsapp-sect w-auto px-1"
              number="+91 7355043892"
              message="Hello Rumeno"
            >
              <FontAwesomeIcon
                icon={faWhatsapp}
                className="text-white btn--shockwave is-active"
              />
            </ReactWhatsapp>
            <small className="whatsapp-sects w-auto scroll-text">
              chat here
            </small> */}
          </div>
        </div>
      </div>

      <div className="container-fluid py-5">
        <div className="text-center pt-lg-5 px-lg-5">
          <div
            className="d-flex my-3 align-items-center"

          >
            <div className="label-title mt-3">
              Our Products According To Species
            </div>
            <div>
              <div className="about-line-large"></div>
              <div className="about-line-small"></div>
            </div>
          </div>
        </div>

        <div className="row px-lg-5 align-items-end">
          <div className="col-lg-6">
            <div className=" text-start mb-3">
              <p className="section-header">Rumeno Products For Animals</p>
            </div>
          </div>
        </div>
        <div className="row px-5">
          {animals?.map((animal) => (
            <div key={animal?.id} className="col-lg-3 col-md-6 col-sm-6">
              <NavLink to={"/goatproduct"}>
                <div className="card-box my-2 ">
                  <div className="card1 border-radius-20 shadow-2">
                    <img
                      src={animal?.imgSrc}
                      alt="Rumeno-Veterinary-Product"
                      className="card-img"
                    />
                  </div>
                </div>
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
