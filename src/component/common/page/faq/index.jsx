import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const faqs = [
  {
    question: "1. What is Semantic HTML and how does it work?",
    answer:
      "The purpose of animal feed supplements is to improve the nutritional value of animal diets by the use of specialty items. They supply vital elements such as vitamins, minerals, and amino acids, which may be deficient in ordinary food.",
  },
  {
    question: "2. What do you know about the Box Sizing property?",
    answer:
      "The Box Sizing property in CSS defines how developers should calculate the width and height of a box.",
  },
  {
    question: "3. Define the ways in which you can hide an element using CSS.",
    answer:
      "display:none, visibility:hidden, and position:absolute are the three ways to hide elements with CSS.",
  },
  {
    question: "4. What does Callback mean in JavaScript?",
    answer:
      "Callback is a JavaScript function that developers send as a parameter or argument to other functions.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <div className="faq py-5">
        <div className="container py-lg-5">
          <div className="row">
            <div className="col-lg-12">
              <p className="faq-heading text-center">
                Frequently Asked Questions
              </p>
              <p className="faqsub-heading text-center">FAQ’s</p>
              <div className="accordion pt-lg-3" id="faqAccordion">
                {faqs.map((faq, index) => (
                  <div className="accordion-item" key={index}>
                    <h2 className="accordion-header">
                      <button
                        className={`accordion-button ${
                          openIndex === index ? "" : "collapsed"
                        }`}
                        type="button"
                        // data-bs-toggle="collapse"
                        // data-bs-target={`#collapse${index}`}
                        onClick={() => toggleFAQ(index)}
                        aria-expanded={openIndex === index}
                        aria-controls={`collapse${index}`}
                        style={{
                          fontSize: "18px",
                          fontWeight: "500",
                          borderBottom: "1px solid #E8E8E8",
                          height: "58px"
                        }}
                      >
                        {faq.question}{" "}
                        <span
                          className="icon"
                          style={{
                            marginLeft: "auto",
                            color: "#707070",
                            width: "17px",
                            height: "36px",
                            fontSize: "24px",
                            fontWeight: "400",
                          }}
                        >
                          {openIndex === index ? "−" : "+"}
                        </span>
                      </button>
                    </h2>
                    <div
                      id={`collapse${index}`}
                      className={`accordion-collapse collapse ${
                        openIndex === index ? "show" : ""
                      }`}
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">{faq.answer}</div>
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

export default Faq;
