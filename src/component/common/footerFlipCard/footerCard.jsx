import React from "react";
import "./footerCard.css"; // Custom styles
import { NavLink } from "react-router-dom";

const cards = [
  {
    to: "/service",
    title: "Services",
    content:
      "In the dynamic world of animal husbandry, ensuring the well-being and productivity of our beloved creatures is of utmost importance. Proper nutrition and specialized care play pivotal roles in achieving these goals. Enter Rumeno Farmotech, a name synonymous with excellence in animal feed supplements and veterinary services.",
  },
  {
    title: "How to Make Money in Stocks",
    iframe:
      "https://www.theindustryoutlook.com/startups/vendor/rumeno-farmotech-elevating-livestock-health-with-innovative-nutrition-solutions--cid-9975.html#google_vignette",
    content:
      "lorem More than half of Nifty 50 stocks in the green. 7 Nifty sectors ended in the bank and financial service gaining the most",
  },
  {
    title: "Momentum in Stocks",
    iframe:
      "https://www.youtube.com/embed/MgA56V6PdBI?si=3PpvGLqWd1wWSsiI",
    content:
      "lorem More than half of Nifty 50 stocks in the green. 7 Nifty sectors ended in the bank and financial service gaining the most",
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
    <div className=" card-container">
      {cards?.map((card, index) => (
        <div key={index} className="card custom-card mx-0">
          <NavLink to={card.to} className={"text-decoration-none text-dark"}>
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
            <div className="card-body mx-0">
              <h5 className="card-title">{card?.title}</h5>
              <p className="card-text">{card?.content}</p>
            </div>
          )}
          </NavLink>
        </div>
      ))}
    </div>
  );
};

export default CollapsingCards;
