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
                <div className="d-lg-none col-md-12 m-auto">
                  <div className="about-mobile-img d-flex justify-content-center pt-4">
                    <img src={Slide2} alt="" />
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="about-content py-2">
                    <p className="text-uppercase responsive-heading about-heading">
                      About Rumeno Farmotech
                    </p>
                    <p className="about-para">
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
                      <br />
                      The company's team of experts includes veterinarians, nutritionists, and other professionals with extensive experience in
                      animal nutrition and health. They work closely with customers to understand their specific needs and develop customized
                      solutions that meet their goals and objectives.Rumeno Farmotech also places a strong emphasis on quality and sustainability.
                      All products are manufactured using the highest quality ingredients and are rigorously tested to ensure safety and efficacy.
                      The company is committed to minimizing its environmental impact by utilizing sustainable production methods and reducing waste.
                      Rumeno Farmotech is a trusted partner for farmers and producers seeking high-quality nutrition and feed supplement technologies
                      to improve animal health, welfare, and productivity.
                    </p>
                    {/* <div className="about-btn">
                      <button>Know More</button>
                    </div> */}
                  </div>
                </div>

                <div className="d-none d-lg-flex justify-content-center align-items-center col-lg-2 col-md-6 m-auto px-0">
                  <div className="about-img m-auto">
                    <img src={Image1} alt="Loading" />
                  </div>
                </div>
                <div className="d-none d-lg-flex justify-content-center align-items-center col-lg-2 col-md-6 m-auto px-0">
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
