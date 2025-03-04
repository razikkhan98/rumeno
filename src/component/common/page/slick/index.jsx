import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Slick = () => {
  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    arrows: true,
    dots: false,
    speed: 300,
    centerPadding: "0px",
    infinite: true,
    // autoplaySpeed: 2000,
    // autoplay: true,
  };

  return (
    <>
      <div className="slick bg-dark">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 m-auto">
              <div className="wrapper">
                <Slider {...settings} className="center-slider">
                  <div className="slide">Slide 1</div>
                  <div className="slide">Slide 2</div>
                  <div className="slide">Slide 3</div>
                  <div className="slide">Slide 4</div>
                  <div className="slide ">Slide 5</div>
                  <div className="slide">Slide 6</div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slick;
