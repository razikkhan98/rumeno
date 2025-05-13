import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";

// Import Images
import Goat from "../../assets/img/goatfeed/goatfeed.png";
import Cattle from "../../assets/img/goatfeed/cattle-imgg.jpg";
import Dog from "../../assets/img/goatfeed/dog.jpg";
import Poultry from "../../assets/img/goatfeed/poultry-1.jpg";
import Fish from "../../assets/img/goatfeed/FISH1.webp";
import Pigeon from "../../assets/img/goatfeed/pigeon.jpg";


// Json
const feeddata = [
  {
    // id: "#1",
    title: "Goat Feed Supplement",
    content: "Rumeno Farmotech provides a premium goat feed supplement that is intended to improve your goats' well-being and output. Our supplement is full of vital vitamins, minerals, and nutrients that support healthy growth, milk production, and general wellbeing. Our feed supplement guarantees that your goats, whether dairy or meat, get the nutrition they need to thrive as a herd.",
  },
  {
    // id: "#2",
    title: "Cattle Feed Supplement",
    content: " These goods help cattle grow and develop. Your cows and buffaloes will be well-nourished thanks to Rumeno Farmotech's mineral combinations and calcium supplements.",
  },
  {
    // id: "#3",
    title: "Dog Feed Supplement",
    content: " Rumeno, an Indian veterinary company, offers dog feed supplements designed to improve digestion, immunity, and overall health. These supplements come in powder form and can be easily mixed with your dog's regular food.",
  },
  {
    // id: "#4",
    title: "Poultry Feed Supplement",
    content: " Rumeno Farmotech is a reliable source of high-quality supplements that improve the general health and well-being of chickens, ducks, and other fowl.",
  },
  {
    // id: "#5",
    title: "Aqua Feed Supplement",
    content: "Specialized nutrition is required for aquaculture. Fish and other aquatic creatures can benefit from high-quality supplements from Rumeno Farmotech.",
  },
  {
    // id: "#6",
    title: "Pigeon Feed Supplement",
    content: "Avian enthusiasts can rely on Rumeno Farmotech to provide their feathered companions with the proper nourishment. Rumeno Farmotech takes great satisfaction in the effectiveness and high quality of its feed supplements. Every product is painstakingly designed to meet particular dietary needs. The goal of all products, including liver tonics, digestive powders, and toxin binders, is to improve animal health.",
  },
];

const images = [Goat, Cattle, Dog, Poultry, Fish, Pigeon];

const Goatfeed = () => {
  // const [activeIndex, setActiveIndex] = useState(0);
  // const scrollContainerRef = useRef(null);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (scrollContainerRef.current) {
  //       const container = scrollContainerRef.current;
  //       const scrollPosition = container.scrollTop;
  //       const totalHeight = container.scrollHeight - container.clientHeight;
  //       const sectionHeight = totalHeight / feeddata.length;
  //       const index = Math.min(
  //         Math.floor(scrollPosition / sectionHeight),
  //         feeddata.length - 1
  //       );
  //       setActiveIndex(index);
  //     }
  //   };
  //   const container = scrollContainerRef.current;
  //   if (container) {
  //     container.addEventListener("scroll", handleScroll);
  //   }

  //   return () => {
  //     if (container) {
  //       container.removeEventListener("scroll", handleScroll);
  //     }
  //   };
  // }, []);

  const settings = {
    dots: true,
    // fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <>
      {/* <div className="goat-feed py-5">
        <div className="container py-lg-5 px-lg-5">
          <div className="row py-lg-5">
            <div className="col-lg-5 col-md-12">
              <div className="goatfeed-img m-auto">
                <img src={images[activeIndex]} alt="Feed Supplement" />
              </div>
            </div>
            <div
              className="col-lg-6 col-md-12 scroll-container"
              ref={scrollContainerRef}
            >
              {feeddata.map((item, index) => (
                <div className="goatfeed-content my-auto" key={index}>
                  <p className="goatfeet-head">{item.title}</p>
                  <p className="goatfeet-para">{item.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div> */}

<div className="goat-feed py-5">
      <div className="container py-lg-5 px-3">
        <Slider {...settings}>
          {feeddata.map((item, index) => (
            <div key={index}>
              <div className="row align-items-center justify-content-center">
                {/* Image Column */}
                <div className="col-lg-5 col-md-12 mb-4 mb-lg-0 d-flex justify-content-center">
                  <div className="goatfeed-img text-center">
                    <img
                      src={images[index]}
                      alt={item.title}
                      className="img-fluid rounded shadow"
                      style={{ maxHeight: "300px", objectFit: "cover" }}
                    />
                  </div>
                </div>

                {/* Text Column */}
                <div className="col-lg-7 col-md-12 d-flex justify-content-center">
                  <div className="goatfeed-content">
                    <h4 className="goatfeet-head">{item.title}</h4>
                    <p className="goatfeet-para">{item.content}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>

    </>
  );
};

export default Goatfeed;
