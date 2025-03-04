import React from "react";
import "./footerCard.css"; // Custom styles

const cards = [
  {
    title: "News",
    content:
      "More than half of Nifty 50 stocks in the green. 7 Nifty sectors ended in the bank and financial service gaining the most.",
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
    title: "Word of the Day",
    content:
      "Additional Surveillance Measur More than half of Nifty 50 stocks in the green. 7 Nifty sectors ended in the bank and financial service gaining the moste",
  },
];

const CollapsingCards = () => {
  return (
    <div className=" card-container">
      {cards?.map((card, index) => (
        <div key={index} className="card custom-card mx-0">
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
        </div>
      ))}
    </div>
  );
};

export default CollapsingCards;
