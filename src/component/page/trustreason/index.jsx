import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image1 from "../../assets/img/curvecard/science.svg";
import Image2 from "../../assets/img/curvecard/network.svg";
import Image3 from "../../assets/img/curvecard/review.svg";


const Trust = () => {
  // const [activeIndex, setActiveIndex] = useState(0);
  // const sliderRef = useRef(null);

  // const slidesToShow = 8;
  // const slidesToScroll = 8;
  // const totalDots = Math.ceil(speciesData.length / slidesToScroll);

  // const settings = {
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow,
  //   slidesToScroll,
  //   arrows: false,
  //   // dots: true,
  //   beforeChange: (_, next) =>
  //     setActiveIndex(Math.floor(next / slidesToScroll)),
  //   responsive: [
  //     { breakpoint: 1200, settings: { slidesToShow: 6, slidesToScroll: 3 } },
  //     { breakpoint: 1024, settings: { slidesToShow: 4, slidesToScroll: 2 } },
  //     { breakpoint: 768, settings: { slidesToShow: 3, slidesToScroll: 1 } },
  //     { breakpoint: 576, settings: { slidesToShow: 2, slidesToScroll: 1 } },
  //   ],
  // };

  return (
    <>
      <div className="trust-card py-5">
        <div className="container pt-lg-5">
          <div className="row">
            {/* <div className="col-lg-12 species-col rounded">
              <div
                className="species-section shadow text-center pt-3"
                style={{ background: "rgba(255, 255, 255, 1)" }}
              >
                <p
                  className="mb-0 pt-3 pb-4"
                  style={{
                    fontSize: "24px",
                    fontWeight: "500",
                    lineHeight: "25px",
                    color: "#373737",
                  }}
                >
                  EXPLORE OUR PRODUCTS ACCORDING TO SPECIES
                </p>
                <div className="mx-lg-5 mt-lg-3 species-img-section">
                  <div className="species-card text-center">
                    <div className="species-img">
                      <img src={Goat} />
                    </div>
                    <p className="mt-2 species-name">Goat</p>
                  </div>

                  <div className="species-card text-center">
                    <div className="species-img">
                      <img src={Buffalo} />
                    </div>
                    <p className="mt-2 species-name">Buffalo</p>
                  </div>

                  <div className="species-card text-center">
                    <div className="species-img">
                      <img src={Cow} />
                    </div>
                    <p className="mt-2 species-name">Cow</p>
                  </div>

                  <div className="species-card text-center">
                    <div className="species-img">
                      <img src={Sheep} />
                    </div>
                    <p className="mt-2 species-name">Sheep</p>
                  </div>
                </div>
                
                 <div className="d-flex align-items-center justify-content-between">
                  <button
                    className="slider-btn-left rounded-circle p-0 ms-4"
                    onClick={() => sliderRef.current.slickPrev()}
                  >
                    <TfiArrowCircleLeft size={36} />
                  </button>

                  <div className="species-slider m-auto">
                    <Slider ref={sliderRef} {...settings}>
                      {speciesData.map((species, index) => (
                        <div key={index} className="species-card text-center">
                          <div
                            className="species-img"
                            onClick={() => sliderRef.current.slickGoTo(index)}
                          >
                            <img src={species.img} alt={species.name} />
                          </div>
                          <p className="mt-2 species-name">{species.name}</p>
                        </div>
                      ))}
                    </Slider>
                  </div>

                  <button
                    className="slider-btn-right rounded-circle p-0 me-4"
                    onClick={() => sliderRef.current.slickNext()}
                  >
                    <TfiArrowCircleRight size={36} />
                  </button>
                </div>

                <div className="mt-2">
                  {Array.from({ length: totalDots }).map((_, dotIndex) => (
                    <span
                      key={dotIndex}
                      onClick={() =>
                        sliderRef.current.slickGoTo(dotIndex * slidesToScroll)
                      }
                      className="mx-1 custom-dot"
                      style={{
                        width: activeIndex === dotIndex ? "34px" : "10px",
                        height: "10px",
                        borderRadius: activeIndex === dotIndex ? "8px" : "50%",
                        backgroundColor:
                          activeIndex === dotIndex ? "#FB9038" : "#EFF5F4",
                      }}
                    ></span>
                  ))}
                </div> 
              </div>
            </div> */}

            <div className=" pb-5">
              <p className="trust-heading text-uppercase text-center">
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
