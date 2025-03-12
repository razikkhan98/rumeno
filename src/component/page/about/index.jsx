import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image1 from "../../assets/img/about/aboutimg.png";
import Slide1 from "../../assets/img/about/slide1.png";
import Slide2 from "../../assets/img/about/slide2.png";
import Slide3 from "../../assets/img/about/slide3.png";
import Slider from "react-slick";

const About = () => {
  const slide = [
    {
      id: 1,
      image: Slide1,
      alt: "Slide 1 - Rumeno Farmotech",
    },
    {
      id: 2,
      image: Slide2,
      alt: "Slide 2 - Rumeno Farmotech",
    },
    {
      id: 3,
      image: Slide3,
      alt: "Slide 3 - Rumeno Farmotech",
    },
  ];

  const sliderSettings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    // slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    arrows: false,
    swipeToSlide: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
  };

  return (
    <>
      <div className="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="row gap-3">
                <div className="col-lg-7 py-5">
                  <div className="about-content py-5">
                    <p className="text-uppercase about-heading">
                      About Rumeno Farmotech
                    </p>
                    <p className="about-para py-3">
                      Rumeno Farmotech is a nutrition and feed supplement
                      technologies company <br /> Rumeno Farmotech offers a wide
                      range of products, including Probiotics, milk replacer,
                      Macro & Micro Minerals, Multi Vitamins, Enzymes, Amino
                      Acids, feed additives, premixes, concentrates, and
                      specialty products for livestock, poultry, and
                      aquaculture. These products are designed to address
                      specific nutritional needs and challenges faced by farmers
                      and producers, such as improving growth rates, enhancing
                      immune function, increasing feed efficiency, and reducing
                      environmental impact.
                    </p>
                    <div className="about-btn">
                      <button>Know More</button>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-md-6 m-auto px-0">
                  <div className="about-img m-auto">
                    <img src={Image1} alt="" />
                  </div>
                </div>
                <div className="col-lg-2 col-md-6 m-auto px-0">
                  <div className="about-slideimg m-auto">
                    <Slider {...sliderSettings}>
                      {slide.map((item) => (
                        <div key={item.id} className="about-slide">
                          <img src={item.image} alt={item.alt} />
                        </div>
                      ))}
                    </Slider>
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

export default About;
