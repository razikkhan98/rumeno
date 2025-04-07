import React from "react";

// Common Components
import Navbar from "../../common/navbar/mainnavbar";
import Footer from "../../common/footer";
import Faq from "../faq";
import ServiceForm from "../../common/ServiceForm/serviceform";

// Images
import Service1 from "../../assets/img/service-img/Premium Photo _ Farmer giving food to cattle at his farm 1.png";
import Service2 from "../../assets/img/service-img/close-up-scientific-analyzing-sample.png";
import Service3 from "../../assets/img/service-img/sheep-grazing-field.png";
import Doctor from "../../assets/img/service-img/Group 1171277285.png";
import Sir from "../../assets/img/service-img/Group 1171277284.png";
import Header from "../../common/Header/header";

// FAQ Json
const BusinessFqa = [
  {
    question: "1. Are Vet Services Taxable?",
    answer:
      "Veterinary Services for Pet Animals: These services, which include medical treatment for pets, are not taxable under the Goods and Services Tax (GST). They fall under the nil rate Category1.Veterinary Services for Livestock: Similar to pet animals, services related to livestock health care are also not taxable and fall under the nil rate Category2. Other Veterinary Services (Not Elsewhere Classified): Services beyond pet animals and livestock, such as specialized treatments or laboratory testing, are subject to an 18% GST rate.",
  },
  {
    question: "2. What Does Veterinary Services Mean?",
    answer: "...................",
  },
  {
    question: "3. What Are Veterinary Services?",
    answer: "...................",
  },
];
const VeterinaryService = () => {
  return (
    <>
      {/* Navbar Start */}
      <Navbar />
      <div className="service-bg-color products">
        <div className="pt-4">
          <Header title="Services" subtitle="Veteriniary Services" />
        </div>
        <div className="container pt-lg-5">
          <div className="text-center">
            <p className="service-heading">
              Why Choose Our Veterinary Services?
            </p>
            <p className="heading-description">
              In the dynamic world of animal husbandry, ensuring the well-being
              and productivity of our beloved creatures is of utmost importance.
              Proper nutrition and specialized care play pivotal roles in
              achieving these goals. Enter Rumeno Farmotech, a name synonymous
              with excellence in animal feed supplements and veterinary
              services.
            </p>
          </div>
          <div className="row my-5 g-0 bg-white service-border">
            <div className="col-lg-6 ">
              <img
                src={Service1}
                className="service-img img-fluid w-100"
                alt="Loading"
              />
            </div>
            <div className="col-lg-6 px-5 p-4 d-flex align-items-center">
              <div className="">
                <p className="content-heading">Comprehensive Product Range</p>
                <span className="service-inner-text">Goat Feed Supplement</span>
                <p className="service-inner-text">
                  Rumeno Farmotech's premium goat feed supplement enhances your
                  goats' well-being and productivity. Packed with essential
                  vitamins, minerals, and nutrients, it supports healthy growth,
                  milk production, and overall health — ensuring your goats
                  thrive, whether for dairy or meat.
                </p>

                <span className="service-inner-text">
                  Sheep Feed Supplement
                </span>
                <p className="service-inner-text">
                  Rumeno Farmotech's high-quality sheep feed supplement boosts
                  your flock's health and performance. Rich in essential
                  nutrients, it promotes weight gain, wool quality, and immunity
                  — ensuring optimal growth for meat or wool production.
                </p>

                <div className="service-inner-text">
                  <span>Buffalo Feed Supplement</span>
                  <p>
                    Rumeno Farmotech's buffalo feed supplement enhances buffalo
                    health and productivity. Rich in vitamins, minerals, and
                    energy boosters, it supports high milk production, muscle
                    growth, and overall well-being.
                  </p>
                </div>
                <div className="service-inner-text">
                  <span>Cow Feed Supplement</span>
                  <p>
                    Rumeno Farmotech's premium cow feed supplement boosts cow
                    health and productivity. Enriched with essential vitamins
                    and minerals, it promotes better milk yield, digestion, and
                    healthy growth — ensuring your cattle thrive.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row my-5 g-0 bg-white service-border">
            {/* secong img */}
            <div className="col-lg-6">
              <img
                src={Service2}
                className="service-img img-fluid w-100"
                alt="Loading"
              />
            </div>
            <div className="col-lg-6 p-lg-5 p-4">
              <div className="">
                <p className="content-heading">Nationwide Range</p>
                <p className="service-inner-text">
                  With operations across India, Rumeno Farmotech ensures that
                  its products and veterinary services are accessible to farmers
                  and livestock owners in every corner of the country.
                </p>

                <p className="content-heading">Research Driven Approach</p>
                <p className="service-inner-text">
                  The Rumeno Farmotech team is committed to continuous research
                  and development. We create new formulations to address
                  evolving challenges faced by farmers. Their solutions,
                  including growth promoters and disease preventatives, are
                  backed by scientific research.
                </p>
              </div>
            </div>
          </div>

          <div className="row my-5 g-0 bg-white service-border">
            {/* Third img */}
            <div className="col-lg-6">
              <img
                src={Service3}
                className="service-img img-fluid w-100"
                alt="Loading"
              />
            </div>
            <div className="col-lg-6 p-lg-5 p-4">
              <div className="">
                <p className="content-heading">
                  Committed to Animal Well-being Through Quality Products
                </p>

                <span className="service-inner-text">Quality Control</span>
                <p className="service-inner-text">
                  All of our animal products come from reliable suppliers and
                  have undergone safety and effectiveness testing.
                </p>

                <span className="service-inner-text">Expert Suggestions</span>
                <p className="service-inner-text">
                  Our group of skilled vets makes sure that every animal product
                  satisfies the highest requirements.
                </p>

                <span className="service-inner-text">Client Testimonials</span>
                <p className="service-inner-text">
                  View the reviews left by other pet owners regarding our animal
                  goods. Their contentment says it all.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Team Member section Start */}

        <div className="bg-white py-5">
          <div className="container py-5">
            <div className="text-center py-5">
              <p className="service-heading">Our Consulting Team Members</p>
              <p className="heading-description pb-5">
                Your Trusted Partners in Animal Health & Veterinary Care. We
                prioritize the overall health, productivity, and happiness of
                your animals, making us your reliable partner in animal care and
                veterinary excellence. Care.
              </p>
            </div>
          </div>
        </div>
        <div className="position-relative">
          <div className="container py-5">
            <div className="row">
              <div className="col-lg-6 col-md-6 d-flex flex-column align-items-center justify-content-center text-center">
                <img
                  src={Doctor}
                  className="rounded-circle img-fluid team-img"
                  alt="Loading"
                />
                <p className="font-size-28 text-chinese-black-color pt-5">
                  Dr. H. A. Tiwari
                </p>
                <p className="font-size-18 text-gray-color text-center">
                  Chief Consultant Medical Science Management
                </p>
              </div>

              <div className="col-lg-6 col-md-6 d-flex flex-column align-items-center justify-content-center">
                <img
                  src={Sir}
                  className="rounded-circle img-fluid team-img"
                  alt="Loading"
                />
                <p className="font-size-28 text-chinese-black-color pt-5">
                  Mohammed Rizwan
                </p>
                <p className="font-size-18 text-gray-color text-center">
                  Founder & CEO Market and Products Management
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Business Section Start */}
      <div className="business">
        <div className="container text-center py-5">
          <p className="service-heading pt-4">Business Start-Up Support</p>
          <p className="text-justify lh-base py-4">
            Livestock farming is not new in this era it has been in prevalence
            since ages however the new era Livestock farming is based on strong
            scientific methods, innovative farming techniques, management,
            analyzing and calculation methods. livestock farming business in
            India is very promising. Let’s dig deep and find out how you will
            start when you are a complete beginner in livestock farming.
            Besides, A proper raising technique can save your time and money.
            <br />
            As with any livestock farming business, you must have a proper
            business plan in your hand. You must decide the breed, with how many
            animals you will start, accommodation, feeding, health issues, etc.
            Accordingly, you will need to get the financial calculations with
            ROI. Return on investment is the most important factor because on
            that basis you will need to assess the financial investment.
            <br />
            Starting up a new business is not easy without having any expert's
            support. It is full of risk in the competitive market. So this is
            therefore, it is advised to take the support from us we already
            working on the advance technology. ZamZam Ruminant Farmtech has a
            team of great experienced professional who are expert in the
            ruminant livestock farming for many many years. Our main aim is to
            bring the profit for the new start up by helping to organize the
            Farming management by sharing farming techniques, business model,
            Business Income and Outcome, Marketing, ROI etc.
            <br />
            You must have proper skill and knowledge about livestock farming,
            before starting the business. If you are not aware of the skills, it
            is advised to contact us for training.
          </p>

          <hr className="border-orange" />
          <p className="pt-4">
            We generally conduct training sessions and workshops for small
            business entrepreneurs on
          </p>

          <div className="row pb-5">
            {["Goat Farming", "Sheep Farming", "Cattle Dairy Farming"].map(
              (items, index) => (
                <div className="col-lg-4 text-center" key={index}>
                  <p className="font-size-24 text-color-orange">{items}</p>
                </div>
              )
            )}
          </div>
        </div>
      </div>

      <div className="bg-white py-5">
        {/* FAQ Start */}
        <Faq faqs={BusinessFqa} showHeading={false} />

        {/* Service Form Section Start */}
        <ServiceForm />
      </div>

      {/* Footer Start */}
      <Footer />
    </>
  );
};

export default VeterinaryService;
