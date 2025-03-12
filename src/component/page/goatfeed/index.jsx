import React, { useEffect, useRef, useState } from "react";
import Goat from "../../assets/img/goatfeed/goatfeed.png";
import Sheep from "../../assets/img/goatfeed/sheepimg.png";
import Buffalo from "../../assets/img/goatfeed/buffaloimg.png";
import Cow from "../../assets/img/goatfeed/cowimg.png";

const feeddata = [
  {
    id: "#1",
    title: "Goat Feed Supplement",
    content:
      "Rumeno Farmotech provides a premium goat feed supplement that is intended to improve your goats' well-being and output. Our supplement is full of vital vitamins, minerals, and nutrients that support healthy growth, milk production, and general wellbeing. Our feed supplement guarantees that your goats,whether dairy or meat, get the nutrition they need to thrive as a herd.",
  },
  {
    id: "#2",
    title: "Sheep Feed Supplement",
    content:"Rumeno Farmotech offers a high-quality sheep feed supplement specially formulated to improve your flock's health and performance. Packed with essential nutrients, vitamins, and minerals, our supplement supports healthy weight gain, wool quality, and immunity. Whether for meat or wool production, our feed helps your sheep achieve optimal growth and productivity.",
  },
  {
    id: "#3",
    title: "Buffalo Feed Supplement",
    content:"Rumeno Farmotech delivers a nutrient-rich buffalo feed supplement to boost your buffaloes' health and productivity. Our supplement is designed to support high milk production, muscle development, and overall well-being. With a balanced mix of vitamins, minerals, and energy boosters, our feed ensures your buffaloes perform at their best while maintaining good health.",
  },
  {
    id: "#4",
    title: "Cow Feed Supplement",
    content:"Rumeno Farmotech provides a premium cow feed supplement designed to enhance your cows' health, productivity, and overall well-being. Our supplement is enriched with essential vitamins, minerals, and nutrients that promote better milk yield, improved digestion, and healthy growth. Whether for dairy or breeding cows, our feed supplement ensures your cattle receive the best nutrition to thrive.",
  },
];

const images = [Goat, Sheep, Buffalo, Cow];

const Goatfeed = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        const container = scrollContainerRef.current;
        const scrollPosition = container.scrollTop;
        const totalHeight = container.scrollHeight - container.clientHeight;
        const sectionHeight = totalHeight / feeddata.length;
        const index = Math.min(
          Math.floor(scrollPosition / sectionHeight),
          feeddata.length - 1
        );
        setActiveIndex(index);
      }
    };
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <>
      <div className="goat-feed py-5">
        <div className="container py-lg-5 px-lg-5">
          <div className="row py-lg-5">
            <div className="col-lg-5 col-md-12">
              <div className="goatfeed-img m-auto">
                <img src={images[activeIndex]} alt="Feed Supplement" />
              </div>
            </div>
            <div className="col-lg-6 col-md-12 scroll-container" ref={scrollContainerRef}>
              {feeddata.map((item, index) => (
                <div className="goatfeed-content my-auto" key={index}>
                  <p className="goatfeet-head">{item.id}</p>
                  <p className="goatfeet-head">{item.title}</p>
                  <p className="goatfeet-para">{item.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Goatfeed;
