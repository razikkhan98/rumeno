import React from "react";
import "./footerCard.css"; // Custom styles
import { NavLink } from "react-router-dom";
import { IoLogoYoutube } from "react-icons/io5";
import Image2 from "../../assets/img/flipcard/youtube.png";

const cards = [
  {
    to: "/service",
    title: "Services",
    content:
      "In the dynamic world of animal husbandry, ensuring the well-being and productivity of our beloved creatures is of utmost importance. Proper nutrition and specialized care play pivotal roles in achieving these goals. Enter Rumeno Farmotech, a name synonymous with excellence in animal feed supplements and veterinary services.",
  },
  {
    title: "News",
    to: "https://www.theindustryoutlook.com/startups/vendor/rumeno-farmotech-elevating-livestock-health-with-innovative-nutrition-solutions--cid-9975.html",
    // iframe:
    //   "https://www.theindustryoutlook.com/startups/vendor/rumeno-farmotech-elevating-livestock-health-with-innovative-nutrition-solutions--cid-9975.html#google_vignette",
    content:
    "Rumeno Farmotech: Elevating Livestock Health With Innovative Nutrition Solutions Starting Rumeno Farmotech was like following a personal journey from my small goat farm in rural India.",
  },
  {
    to:"https://www.youtube.com/watch?v=MgA56V6PdBI",
    // title: "YouTube Video",
    // iframe: "https://www.youtube.com/embed/MgA56V6PdBI?si=3PpvGLqWd1wWSsiI",
    // content:"Click here to Watch on our Youtube Channel....",
    icon: Image2,
  },
  {
    to: "/blog",
    title: "Blogs",
    content:
      "Ever heard about Mutual Rescue? It's an innovative concept that proves when we extend our hearts to rescue animals, they rescue us right back! It's deeply rooted in the symbiotic relationship between humans and animals—a relationship that is incredibly heartwarming...",
  },
];

const CollapsingCards = () => {
  return (
    <div className="card-container">
      {cards?.map((card, index) => (
        <div key={index} className="card custom-card mx-0">
          <NavLink to={card.to} target="_blank" className={"text-decoration-none text-dark"}>
            {card?.iframe ? (
              <iframe
                //   width="560"
                height="220"
                src={card?.iframe}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            ) : (
              <div className="card-body mx-0 ">
                <h5 className="card-title">{card?.title}</h5>
                <p className="card-text mb-0">{card?.content}</p>
                <img src={card?.icon} className=" w-100 h-100" alt="Loading" />
              </div>
            )}
          </NavLink>
        </div>
      ))}
    </div>
  );
};

export default CollapsingCards;
