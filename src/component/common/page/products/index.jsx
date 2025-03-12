import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Image1 from "../../../assets/img/products/productimage.png";
import Image2 from "../../../assets/img/products/productimage2.png";
import Virus from "../../../assets/img/products/antivirus.svg";
import Medicine from "../../../assets/img/products/medicine.svg";
import Medical from "../../../assets/img/products/medical.svg";
import Firstaid from "../../../assets/img/products/sterilization.svg";
import Star from "../../../assets/img/products/star.svg";
import Flipcard from "../../footerFlipCard/footerCard";
import Navbar from "../../navbar/mainnavbar";

import Footer from "../../footer";
import { NavLink } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Neonato Veterinary products for Goat, Cow, and Buf...",
    image: Image1,
    price: 180.0,
    inStock: true,
  },
  {
    id: 2,
    name: "Neonato Veterinary products for Goat, Cow, and Buf...",
    image: Image1,
    price: 180.0,
    inStock: true,
  },
  {
    id: 3,
    name: "Neonato Veterinary products for Goat, Cow, and Buf...",
    image: Image1,
    price: 180.0,
    inStock: true,
  },
  {
    id: 4,
    name: "Neonato Veterinary products for Goat, Cow, and Buf...",
    image: Image2,
    price: 180.0,
    inStock: true,
  },
  {
    id: 5,
    name: "Neonato Veterinary products for Goat, Cow, and Buf...",
    image: Image1,
    price: 180.0,
    inStock: true,
  },
  {
    id: 6,
    name: "Neonato Veterinary products for Goat, Cow, and Buf...",
    image: Image1,
    price: 180.0,
    inStock: true,
  },
  {
    id: 7,
    name: "Neonato Veterinary products for Goat, Cow, and Buf...",
    image: Image1,
    price: 180.0,
    inStock: true,
  },
  {
    id: 8,
    name: "Neonato Veterinary products for Goat, Cow, and Buf...",
    image: Image2,
    price: 180.0,
    inStock: false,
  },
  {
    id: 9,
    name: "Neonato Veterinary products for Goat, Cow, and Buf...",
    image: Image1,
    price: 180.0,
    inStock: true,
  },
  {
    id: 10,
    name: "Neonato Veterinary products for Goat, Cow, and Buf...",
    image: Image2,
    price: 180.0,
    inStock: false,
  },
  {
    id: 11,
    name: "Neonato Veterinary products for Goat, Cow, and Buf...",
    image: Image1,
    price: 180.0,
    inStock: true,
  },
  {
    id: 12,
    name: "Neonato Veterinary products for Goat, Cow, and Buf...",
    image: Image2,
    price: 180.0,
    inStock: true,
  },
  {
    id: 13,
    name: "Neonato Veterinary products for Goat, Cow, and Buf...",
    image: Image1,
    price: 180.0,
    inStock: true,
  },
];

const faqs = [
  {
    question: "1. What are Veterinary Products?",
    answer:
      "Veterinary products are essential tools in the prevention and control of animal diseases. The definition of veterinary products may vary from one country to another, but for the purposes of the World Organisation for Animal Health (WOAH), they include:Vaccines: Used for disease prevention.Veterinary Medicines: Including antimicrobial agents for treatment.Diagnostic Kits: Used for disease detection and monitoring.Governments regulate the authorization, manufacturing, distribution, and use of veterinary products through veterinary legislation",
  },
  {
    question: "2. How to Sell Veterinary Products?",
    answer:
      "Animal feed supplements are important because they help ensure animals get the nutrients they need to be healthy and productive.",
  },
  {
    question: "3. Veterinary Products and Services?",
    answer:
      "Many types of animals benefit from feed supplements, including cattle, poultry, pigs, sheep, horses, and goats.",
  },
  {
    question: "4. Veterinary Products Manufacturers in India?",
    answer:
      "You can contact Rumeno Farmotech by calling +91 73550 43892 or emailing rumeno.farmotech@gmail.com. You can also visit their website.",
  },
];

const Products = () => {
  const [cart, setCart] = useState({});

  const handleAddClick = (productId) => {
    setCart((prevCart) => ({ ...prevCart, [productId]: 1 }));
  };

  const handleIncrement = (productId) => {
    setCart((prevCart) => ({
      ...prevCart,
      [productId]: prevCart[productId] + 1,
    }));
  };

  const handleDecrement = (productId) => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };
      if (updatedCart[productId] === 1) {
        delete updatedCart[productId];
      } else {
        updatedCart[productId] -= 1;
      }
      return updatedCart;
    });
  };

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(12);

  // Calculate pagination
  const indexOfLastProduct = currentPage * rowsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - rowsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const totalPages = Math.ceil(products.length / rowsPerPage);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Handle rows per page change
  const handleRowsPerPageChange = (e) => {
    setRowsPerPage(Number.parseInt(e.target.value));
    setCurrentPage(1);
  };

  //  faq's

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Navbar />
      <div className="products">
        <div className="container pt-lg-5">
          <div className="row pt-lg-3">
            {currentProducts.map((product) => (
              <div key={product.id} className="col-lg-3 col-sm-3 mb-lg-4">
                <div className="products-card">
                  <div className="products-img-top">
                    <NavLink to="/addtocart">
                      <img src={product.image} alt={product.name} />
                      <div class="overlay">
                        {cart[product.id] ? (
                          <NavLink
                            className="text-decoration-none"
                            to={"/products"}
                          >
                            <div className="product-counter bg-light rounded d-flex align-items-center justify-content-between me-3 mb-3">
                              <button
                                className="btn product-quantity-btn btn-light btn-sm"
                                onClick={() => handleDecrement(product.id)}
                              >
                                -
                              </button>
                              <span
                                className="bg-light px-2"
                                style={{ color: "#EC7229" }}
                              >
                                {cart[product.id]}
                              </span>
                              <button
                                className="btn btn-light product-quantity-btn btn-sm"
                                onClick={() => handleIncrement(product.id)}
                              >
                                +
                              </button>
                            </div>
                          </NavLink>
                        ) : (
                          <NavLink
                            className="text-decoration-none"
                            to={"/products"}
                          >
                            <button
                              className="product-add-btn btn-sm btn btn-light me-3 mb-3 fw-bold"
                              onClick={() => handleAddClick(product.id)}
                            >
                              +
                            </button>
                          </NavLink>
                        )}
                      </div>
                    </NavLink>
                  </div>
                  <div className="card-body d-flex flex-column justify-content-center">
                    <p className="products-card-text text-center mb-2">
                      {product.name}
                    </p>
                    <p className="products-card-price text-center mt-auto">
                      ₹ {product.price.toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="row mt-4">
            <div className="col-lg-7">
              <div className="pagination-button mb-0 me-lg-4">
                <div
                  className={`page-item mx-2 d-flex align-items-center ${
                    currentPage === 1
                      ? "disabled disable-page-bg border"
                      : "active-page-bg"
                  }`}
                >
                  <button
                    className="page-link  py-1 px-2"
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                  >
                    Previous
                  </button>
                </div>
                <div
                  className={`page-item d-flex align-items-center ${
                    currentPage === totalPages
                      ? "disabled disable-page-bg border"
                      : "active-page-bg"
                  }`}
                >
                  <button
                    className="page-link py-1 px-2 m-auto"
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="products-perpage">
                <span
                  className="me-2"
                  style={{
                    fontSize: "12px",
                    fontWeight: "500",
                    color: "#373737",
                  }}
                >
                  Rows per page
                </span>
                <select
                  className="form-select form-select-sm"
                  value={rowsPerPage}
                  onChange={handleRowsPerPageChange}
                  style={{ width: "60px", color: "#707070" }}
                >
                  <option value="4">4</option>
                  <option value="8">8</option>
                  <option value="12">12</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="col-lg-12 my-5 text-center d-flex align-items-center justify-content-center"
        style={{ background: "#F4FAFD", color: "#EC7229", height: "56px" }}
      >
        <p className=" mb-0" style={{ fontSize: "18px", fontWeight: "400" }}>
          Veterinary Products: Keeping Your Animals Happy and Healthy
        </p>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-10 text-center m-auto">
            <p
              style={{ color: "#373737", fontSize: "18px", fontWeight: "400" }}
            >
              In the dynamic world of animal husbandry, ensuring the well-being
              and productivity of our beloved creatures is of utmost importance.
              Proper nutrition and specialized care play pivotal roles in
              achieving these goals. Enter Rumeno Farmotech, a name synonymous
              with excellence in veterinary products and veterinary services.
            </p>
          </div>
        </div>
        <div className="row justify-content-center mt-3">
          <div
            className="col-lg-12"
            style={{ background: "rgba(255, 255, 255, 1)" }}
          >
            <p
              className=" text-center mb-4"
              style={{ color: "#111111", fontSize: "24px", fontWeight: "400" }}
            >
              PRODUCT CATEGORIES
            </p>
            <div className="row text-center mt-3">
              <div className="col-md-3 mb-4">
                <div className="p-3">
                  <img src={Virus} size={44} className="mb-3" />
                  <p
                    style={{
                      fontSize: "14px",
                      fontWeight: "400",
                      color: "#707070",
                    }}
                  >
                    CONTROL OF FLEAS AND TICKS
                  </p>
                  <p
                    style={{
                      fontSize: "14px",
                      fontWeight: "400",
                      color: "#373737",
                    }}
                  >
                    Our veterinarian-approved tick and flea solutions offer
                    strong defense against these bothersome parasites. Select
                    from collars, oral pills, and topical treatments. Preserve
                    your animal friends' health and prevent illness in them.
                  </p>
                </div>
              </div>
              <div className="col-md-3 mb-4">
                <div className="p-3">
                  <img src={Medicine} size={44} className="mb-3" />
                  <p
                    style={{
                      fontSize: "14px",
                      fontWeight: "400",
                      color: "#707070",
                    }}
                  >
                    SUPPLEMENTAL NUTRITION
                  </p>
                  <p
                    style={{
                      fontSize: "14px",
                      fontWeight: "400",
                      color: "#373737",
                    }}
                  >
                    Give your pets the finest with our nutrients made just for
                    them. Their whole vitality is improved by our veterinary
                    products, which address everything from joint health to skin
                    and coat care. Examine our selection of probiotics,
                    minerals, and vitamins.
                  </p>
                </div>
              </div>
              <div className="col-md-3 mb-4">
                <div className="p-3">
                  <img src={Firstaid} size={44} className="mb-3" />
                  <p
                    style={{
                      fontSize: "14px",
                      fontWeight: "400",
                      color: "#707070",
                    }}
                  >
                    SUPPLIES FOR PET GROOMING
                  </p>
                  <p
                    style={{
                      fontSize: "14px",
                      fontWeight: "400",
                      color: "#373737",
                    }}
                  >
                    Take care of your pet's hygiene with our essential grooming
                    products. Shampoos, brushes, nail clippers, dental care
                    supplies—all you need to maintain the greatest possible
                    appearance and well-being for your pets.
                  </p>
                </div>
              </div>
              <div className="col-md-3 mb-4">
                <div className="p-3">
                  <img src={Medical} size={44} className="mb-3" />
                  <p
                    style={{
                      fontSize: "14px",
                      fontWeight: "400",
                      color: "#707070",
                    }}
                  >
                    FIRST AID PACKAGES
                  </p>
                  <p
                    style={{
                      fontSize: "14px",
                      fontWeight: "400",
                      color: "#373737",
                    }}
                  >
                    Our pet first aid kits can help you be ready for any
                    emergency. When mishaps occur, being equipped with the
                    appropriate materials might be crucial. Bandages,
                    antiseptics, and wound care supplies are all included in our
                    kits.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row pt-lg-4 pb-lg-5 px-2">
          <div
            className="col-lg-12 p-4"
            style={{
              background: "rgba(253, 199, 158, 0.1)",
              borderRadius: "16px",
            }}
          >
            <p
              style={{
                fontSize: "18px",
                fontWeight: "400",
                color: "#373737",
              }}
            >
              A wide selection of veterinary equipment from Rumeno are available
              to improve the care of animals. Their goods are made with great
              care and attention to detail, from the strength of surgical tools
              for delicate procedures to the precision of microscopes for
              thorough examinations. Among their offerings are: Instruments for
              diagnosis: X-ray machines, ultrasound scanners, and microscopes.
              Surgical instruments: a broad range of implements for diverse
              operations. Vital signs and anesthetic devices are examples of
              patient monitoring equipment. Dental supplies: for hygienic and
              oral care. Rumeno's dedication to excellence guarantees that
              veterinarians have the resources needed to give their patients the
              best care possible.
            </p>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <div className="row text-center justify-content-center py-lg-5">
          <div className="col-lg-4 mb-5">
            <div
              className="product-contant-card p-4 rounded"
              style={{ background: "rgba(253, 199, 158, 0.2)" }}
            >
              <div className="product-star-img">
                <img src={Star} className="text-warning" />
              </div>
              <p className="product-star-title pt-5">
                Pet Dental Kit Description
              </p>
              <p className="product-star-content">
                Use our dental kit to maintain the health and cleanliness of
                your pet's teeth. It contains toothpaste, mouthwash, and mouth
                rinse.
              </p>
            </div>
          </div>
          <div className="col-lg-4 mb-5">
            <div
              className="product-contant-card p-4 rounded"
              style={{ background: "rgba(191, 227, 241, 0.2)" }}
            >
              <div className="product-star-img">
                <img src={Star} className="text-warning mb-3" />
              </div>
              <p className="product-star-title pt-5">
                Joint Health Supplement Description
              </p>
              <p className="product-star-content">
                Our organic joint supplement will provide your senior pet with
                the necessary support. It lessens discomfort and encourages
                movement.
              </p>
            </div>
          </div>
          <div className="col-lg-4 mb-5">
            <div
              className="product-contant-card p-4 rounded"
              style={{ background: "rgba(244, 166, 191, 0.2)" }}
            >
              <div className="product-star-img">
                <img src={Star} className="text-warning mb-3" />
              </div>
              <p className="product-star-title pt-5">
                Premium Flea and Tick Collar
              </p>
              <p className="product-star-content">
                This durable collar keeps out fleas, ticks, and mosquitoes for
                up to eight months. It is odorless and resistant to water.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-9 col-md-12 product-rumeno-heading m-auto text-center">
            <p className="product-rumeno-title">
              RUMENO - A PREMIER VETERINARY PRODUCTS MANUFACTURER
            </p>
            <p className="product-rumeno-content">
              We’re Rumeno, and we’re passionate about making life better for
              animals. As a leading veterinary product manufacturer, we’re proud
              to be recognized as one of the top 10 animal wellness startups by
              Industry Outlook. That’s a big deal, but it’s really just the
              beginning.
            </p>
            <p className="product-rumeno-content">
              Our aim is to make all animals healthier and happier and increase
              your profits through our excellent veterinary products, which are
              made from high-quality vitamins and minerals. Take Rumeno’s
              veterinary products and grow your livestock.
            </p>
          </div>
        </div>
      </div>

      <div className="product-faq pb-5">
        <div className="container py-lg-5">
          <div className="row">
            <div className="col-lg-12">
              {/* <p className="faq-heading text-center">
                Frequently Asked Questions
              </p>
              <p className="faqsub-heading text-center">FAQ’s</p> */}
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
                          height: "58px",
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
            <Flipcard />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Products;
