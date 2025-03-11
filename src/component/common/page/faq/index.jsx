import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";


const Faq = ({faqs,  showHeading = true }) => {
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
            {showHeading && (
              <>
                <p className="faq-heading text-center">
                  Frequently Asked Questions
                </p>
                <p className="faqsub-heading text-center">FAQ’s</p>
              </>
            )}
              <div className="accordion pt-lg-3" id="faqAccordion">
                {faqs?.map((faq, index) => (
                  <div className="accordion-item p-2" key={index}>
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
