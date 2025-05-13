import React, { useRef, useState } from "react";
import Image1 from "../../assets/img/livestock/livestockimg.png";
import { NavLink } from "react-router-dom";

const Livestock = () => {
  // const [selected, setSelected] = useState("goat");
  const [selectedTab, setSelectedTab] = useState(0); // default first tab
  const imageRef = useRef(null); // Step 1: Create a ref

  const handleTabClick = (index) => {
    setSelectedTab(index);

    // Step 3: Scroll image into view
    if (imageRef.current) {
      imageRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const trainingContents = [
    {
      title: "Ongoing Online and Offline Livestock Public Training and Interaction Information",
      subtitle: "Training Program on Rearing of Goats for 30 days",
      description: [
        "Livestock Farming is becoming an emerging commercial business in India. Youngsters in India are getting very attracted towards the opportunities in the livestock sector. Nowadays, many highly educated people are also doing very well in Ruminant Farming and generating higher incomes from its various products like milk, meat, fiber, and skin. It has been studied that entrepreneurs who are succeeding in this sector have taken proper training from expert professional consultants in their start-ups.",
        "Many successful farmers are benefiting from ZamZam Farmotech training programs and end-to-end support. ZamZam Farmotech is equipped with very experienced Veterinarians for training and consultancies like Dr. H. A. Tiwari M.V.Sc. (Retired Chief Veterinary Officer CIRG), and a very famous personality on social networks, Dr. Ibne Ali M.V.Sc. (Ali Veterinary Wisdom).",
        "Before starting new farming, it is very important to understand and learn scientific techniques and methods of farming for getting higher production and reducing any major risks in livestock. Learning new and advanced techniques in the modern era will give you the competitive edge for success in the business and diminish the chance of failure.",
        "In the 30-day training program, we will cover all the lectures through online sessions over 21 days and reserve 1 day for physical practice at our production goat farm. All lectures will be held daily from 7:00 PM to 9:00 PM for your convenience, so you don’t have to compromise your daily work. A practical program will be held for one full working day from 10:00 AM to..."
      ],
      btnLink: "/training",
      showButton: true,
    },
    {
      subtitle: "Advance Farmhouse Training",
      description: [
        "Livestock farming in India is very common but learning new and advance techniques brings the higher profit in the business. We are conducting Advance Farmhouse Training not to beginners but to the farmers who are already running dairy farms or goat farms. We are expert in Ruminant Rearing Management and give training and consultancy to the serious people. Many farmers had complaints of less milk production, prevalence of different diseases, mastitis, diarrhea, high mortality, silent heat and reproduction . Many clients who were facing problems in their running dairies and farm have taken our Advance training and consultancies which has changed the production and earning in their farms.",
        "Interested people are requested to fill up the below given form for the name of training and date.",],
      showButton: false,
    },

    {
      subtitle: "Pro-Training for Commercial Goat Farming",
      description: [
        "India is continuously growing in the Livestock Farming sector and people are attracting towards commercial livestock farming. Commercial Livestock farming means to run an organized business for getting profit. In the commercial business it is important to make a company and represent a brand for all your products launched in the market. A company needs to obtain all the important permissions, registrations and licenses to run the business in the market. Commercial rearing and farming keeps electronic documentation of everything in a proper organized way and needs software to keep all the records of the business.",
        "Commercial Livestock is completely different from general livestock farming where everyday we learn business from the demand of the customer in the day to day life. Bringing customer's higher satisfaction is one of the key performance indicators. ZamZam Farmotech is helping our clients to build their brand. We have different ways and techniques of surveys and marketing of the brand and products in the market. We help our clients to develop their informative website and social networking for marketing and selling their products.",],
      showButton: true,
      btnLink: "/protraining",
    },
    {
      textclass: "coming-soon-text",
      description: ["Coming Soon . . . . . . . . ."],
      showButton: false,
    },
  ];

  const trainingLinks = [
    {
      label: "Goat Farming Training",
      to: "/",
      className: "livestock-training1",
    },
    {
      label: "Advance Farmhouse Training",
      to: "/advance-farmhouse-training",
      className: "livestock-training2",
    },
    {
      label: "Pro-Training For Commercial Goat Farming",
      to: "/pro-training-commercial-goat-farming",
      className: "livestock-training3",
    },
    {
      label: "Webinar",
      to: "/webinar",
      className: "livestock-training4",
    },
  ];
  return (
    <>
      <div className="livestock-training py-5">
        <div className="container py-lg-5">
          <div className="row m-auto">
            <div className="col-lg-11 m-auto">
              <div className="row livestock-row m-auto">
                <div className="col-lg-4 px-0">
                  <div className="livestock-img" ref={imageRef}>
                    <img src={Image1} alt="Goat farming" className=" " />
                  </div>
                </div>
                {/* <div className="col-lg-1"></div> */}
                <div className="col-lg-8 py-4 ps-lg-4 pe-lg-4">
                  

                  {trainingContents.filter((_, index) => index === selectedTab)?.map((item, index) => (
                    <div className="livestock-content" key={index}>
                      <p className="livestock-title">{item.title}</p>
                      <p className="livestock-subtitle">{item.subtitle}</p>

                      <p className="mb-0 livestock-text">
                        {item.description.map((para, i) => (
                          <span key={i} className={`${item.textclass}`}>
                            {para}
                            <br />
                          </span>
                        ))}
                        {item.showButton && (
                          <NavLink to={item.btnLink} className="text-decoration-none">
                            <button className="livestock-btn mt-2 px-2 py-1 bg-orange-color text-white-color border-0 rounded-2">
                             Read more
                            </button>
                          </NavLink>
                        )}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="container mt-4">
                <div className="row text-center">

                  {trainingLinks.map((tab, index) => (
                    <div className="col-lg-3 col-md-6 mb-3" key={index}>
                      <div className={`${tab.className} m-auto`}>
                        <button
                          className={`text-decoration-none text-color border-0 bg-transparent ${selectedTab === index ? "fw-bold text-decoration-underline" : ""}`}
                          onClick={() => handleTabClick(index)}
                        >
                          {tab.label}
                        </button>
                      </div>
                    </div>
                  ))}

                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Livestock;
