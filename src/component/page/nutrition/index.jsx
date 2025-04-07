import React, { useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image1 from "../../assets/img/nutrition/puzzle.svg";
import Image2 from "../../assets/img/nutrition/chart.svg";
import Image3 from "../../assets/img/nutrition/energy.svg";
import Image4 from "../../assets/img/nutrition/security.svg";
import Image5 from "../../assets/img/nutrition/lotus.svg";
import Slider from "react-slick";

const Nutrition = () => {
  const sliderRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    {
      para: "Animals may still have nutritional gaps even with the best feeding procedures. By supplying vital vitamins, minerals, amino acids, and other elements that may be absent from their regular diet, feed supplements fill up these nutritional gaps.",
      title: "Nutritional Gaps",
      img: Image1,
    },
    {
      para: "Chart a may still have nutritional gaps even with the best feeding procedures. By supplying vital vitamins, minerals, amino acids, and other elements that may be absent from their regular diet, feed supplements fill up these nutritional gaps.",
      title: "Growth And Development",
      img: Image2,
    },
    {
      para: "Energy may still have nutritional gaps even with the best feeding procedures. By supplying vital vitamins, minerals, amino acids, and other elements that may be absent from their regular diet, feed supplements fill up these nutritional gaps.",
      title: "Increasing Output",
      img: Image3,
    },
    {
      para: "Secures may still have nutritional gaps even with the best feeding procedures. By supplying vital vitamins, minerals, amino acids, and other elements that may be absent from their regular diet, feed supplements fill up these nutritional gaps.",
      title: "Health And Immunity",
      img: Image4,
    },
    {
      para: "Flowers may still have nutritional gaps even with the best feeding procedures. By supplying vital vitamins, minerals, amino acids, and other elements that may be absent from their regular diet, feed supplements fill up these nutritional gaps.",
      title: "Stress Management",
      img: Image5,
    },
  ];

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: false,
    beforeChange: (current, next) => setActiveIndex(next),
  };

  return (
    <>
      <div className="nutrition" style={{ backgroundColor: "#373737" }}>
        <div className="container text-center text-white pt-5 pb-4">
          <div className="row">
            <div className="col-lg-12 col-md-10 m-auto">
              <p className="nutrition-heading pb-lg-4">
                THE ROLE OF ANIMAL FEED SUPPLEMENTS
              </p>

              {/* Slick Slider for Content */}
              <Slider
                ref={sliderRef}
                {...settings}
                className="nutrition-slider"
              >
                {slides.map((slide, index) => (
                  <div key={index}>
                    <p className="nutrition-para m-auto">{slide.para}</p>
                  </div>
                ))}
              </Slider>

              {/* Dots Navigation */}
              <div className="mt-5">
                {slides.map((_, index) => (
                  <span
                    key={index}
                    onClick={() => sliderRef.current.slickGoTo(index)}
                    className="mx-1"
                    style={{
                      cursor: "pointer",
                      display: "inline-block",
                      width: activeIndex === index ? "34px" : "10px",
                      height: "10px",
                      borderRadius: activeIndex === index ? "8px" : "50%",
                      backgroundColor:
                        activeIndex === index ? "#89C9E6" : "#EFF5F4",
                    }}
                  ></span>
                ))}
              </div>

              {/* Image Cards */}
              <div className="nutrition-cards mt-4">
                {slides.map((slide, index) => (
                  <div
                    key={index}
                    className="p-3 text-center mx-2 nutrition-card"
                    style={{ cursor: "pointer" }}
                    onClick={() => sliderRef.current.slickGoTo(index)}
                  >
                    <div
                      style={{
                        fontSize: "2rem",
                        height: "120px",
                        width: "134px",
                        borderRadius: "24px",
                        backgroundColor:
                          activeIndex === index ? "#89C9E6" : "#89C9E6",
                      }}
                      className={`d-flex align-items-center justify-content-around ${
                        activeIndex === index ? "bg-lightblue" : "bg-opacity"
                      }`}
                    >
                      <img src={slide.img} alt="" />
                    </div>
                    <div>
                      <p
                        className={`mt-4 font-20-500 ${
                          activeIndex === index ? "text-white" : "text-second"
                        }`}
                        style={{
                          width: "134px",
                        }}
                      >
                        {slide.title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nutrition;
