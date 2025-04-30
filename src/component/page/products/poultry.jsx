import React, { useState } from "react";

// Import Common Components
import Navbar from "../../common/navbar/mainnavbar";
import Footer from "../../common/footer";
import Header from "../../common/Header/header";

// Import Third Party Components
import { NavLink, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";



// Import Images
import Neonato from "../../assets/img/products/neonatobottle.png";
// import Milkbooster from "../../assets/img/products/cattle-milk-booster.png";
// import Tanav from "../../assets/img/products/Tanaav.jpg";
import Energico from "../../assets/img/products/Energico-Animal.jpg";
// import Rumenvita from "../../assets/img/products/Rumenovita.jpg";
import Liverofine from "../../assets/img/products/Liverofine.jpg";
import Florovita from "../../assets/img/products/florovita-12.png";
import Poultryfine from "../../assets/img/products/Poultryfine.png";
import Minro from "../../assets/img/products/minromix.jpg";
import Seleniume from "../../assets/img/products/selennium-E.png";
import Slatted from "../../assets/img/products/farm-floor.jpg";
import Virus from "../../assets/img/products/antivirus.svg";
import Medicine from "../../assets/img/products/medicine.svg";
import Medical from "../../assets/img/products/medical.svg";
import Firstaid from "../../assets/img/products/sterilization.svg";
import Star from "../../assets/img/products/star.svg";
import Faq from "../faq";


const PoultryProductsFaq = [
  {
    question: "1. What is feed supplement for poultry?",
    answer: "Poultry feed supplements are additional nutritional substances given to chickens to enhance their diet and promote health and productivity.Commonly used supplements include protein sources like fish meal or soybean meal.The need for supplementation depends on various factors, and it’s crucial for egg - laying hens and during winter months12.",
  },
  {
    question: "2. What is the best feed for poultry?",
    answer:
      "Scratch and Peck Organic Chicken Feeds are highly recommended. They are USDA certified organic, non-GMO, and sustainably sourced.These feeds contain essential vitamins, minerals, and protein sources like black soldier fly larvae(grubs) for optimal health and egg production3.",
  },
  {
    question: "3. Which vitamin is good for poultry?",
    answer:
      "Vitamin A: Boosts growth and egg production.Vitamin B2: Supports growth.Vitamin K: Essential for muscle health and healthy blood.Vitamin E: Important for growth and reproduction.Vitamin D: Strengthens eggshells and increases egg production1.",
  },
  {
    question: "4. Which medicine is best for poultry growth?",
    answer:
      "Rumeno Farmotech provides you various types of supplements that will increase your poultry growth like Energico=Maintains energy level Poultryfine=Antibacterial for your broilers Florovita- 12=Probiotic supplement for poultry and weight gainer Selennium - E=helps to maintain selenium balance in broilers",
  },
  {
    question: "5. Do chickens need supplements?",
    answer: "Chickens benefit from supplements:Vitamin D for strong eggshells. Calcium during peak egg production. Stress relief during challenging times. Consult experts for personalized advice.",
  },
  {
    question: "6. Which poultry feed supplements promote eggshell strength?",
    answer: "When it comes to promoting eggshell strength in poultry, several supplements play a crucial role. One notable product is “Selennium-E” by Rumeno Farmotech. This supplement combines the power of selenium and vitamin E to enhance eggshell quality. Selenium supports antioxidant function, while vitamin E contributes to overall reproductive health. Including Selennium-E in your poultry feed can lead to stronger, more resilient eggshells.",
  },
];

const productItem = [
  {
    id: 1,
    name: "Neonato Veterinary products for Goat ,Cow, and Buffalo kids | Natural supplement for newborn animals",
    image: Neonato,
    price: 245,
    inStock: true,
    productUnit: ["1", "5", "25"],
  },
  {
    id: 2,
    name: "Energico | Electrolytes for Cattle, Goat, Poultry, Horses, Pigs, Sheep, Pigeons",
    image: Energico,
    price: 235,
    inStock: true,
    productUnit: ["1", "5", "25"],
  },
  {
    id: 3,
    name: "Liverofine | veterinary liver tonic",
    image: Liverofine,
    price: 125.0,
    inStock: true,
    productUnit: ["1", "5", "25"],
  },
  {
    id: 4,
    name: "Minromix | Mineral mixture for cattle, goat ,poultry,dog,and cat",
    image: Minro,
    price: 285.0,
    inStock: false,
    productUnit: ["1", "5", "25"],
  },
  {
    id: 5,
    name: "Selennium-E | Selenium supplement for poultry | Poultry feed supplement",
    image: Seleniume,
    price: 260,
    inStock: true,
    productUnit: ["1", "5", "25"],
  },
  {
    id: 6,
    name: "Slatted Floor",
    image: Slatted,
    price: 135,
    inStock: true,
    productUnit: ["1", "5", "25"],
  },
  {
    id: 7,
    name: "Poultryfine | Anti bacterial poultry feed supplement",
    image: Poultryfine,
    price: 1600.0,
    inStock: true,
    productUnit: ["1", "5", "25"],
  },
  {
    id: 8,
    name: "Florovita-12 | Broiler weight gainer | Probiotic supplement for poultry",
    image: Florovita,
    price: 1300.0,
    inStock: true,
    productUnit: ["1", "5", "25"],
  },
];

const petProducts = [
  {
    icon: Virus,
    title: "CONTROL OF FLEAS AND TICKS",
    description:
      "Our veterinarian-approved tick and flea solutions offer strong defense against these bothersome parasites. Select from collars, oral pills, and topical treatments. Preserve your animal friends' health and prevent illness in them.",
  },
  {
    icon: Medicine,
    title: "SUPPLEMENTAL NUTRITION",
    description:
      "Give your pets the finest with our nutrients made just for them. Their whole vitality is improved by our veterinary products, which address everything from joint health to skin and coat care. Examine our selection of probiotics, minerals, and vitamins.",
  },
  {
    icon: Firstaid,
    title: "SUPPLIES FOR PET GROOMING",
    description:
      "Take care of your pet's hygiene with our essential grooming products. Shampoos, brushes, nail clippers, dental care supplies—all you need to maintain the greatest possible appearance and well-being for your pets.",
  },
  {
    icon: Medical,
    title: "FIRST AID PACKAGES",
    description:
      "Our pet first aid kits can help you be ready for any emergency. When mishaps occur, being equipped with the appropriate materials might be crucial. Bandages, antiseptics, and wound care supplies are all included in our kits.",
  },
];

const Products = () => {


  const navigate = useNavigate();
  // const uid = sessionStorage.getItem("uid");

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(12);

  // Calculate pagination
  const indexOfLastProduct = currentPage * rowsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - rowsPerPage;
  const currentProducts = productItem.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const totalPages = Math.ceil(productItem.length / rowsPerPage);

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
        <div className="mt-lg-4">
          <Header
            title="Products"
            link="/allproducts"
            subtitle="Poultry Supplement"
            // products={"13 Products"}
            showSortFilter
          />
        </div>
        <div className="container pt-5">
          <div className="row pt-lg-3">
            {currentProducts.map((product) => (
              <div key={product.id} className="col-lg-3 col-md-6 mb-lg-4">
                <div className="products-card">
                  <div className="products-img-top">
                    {/* <NavLink to={`/productDetails/${product.id}`}> */}
                    <div
                      onClick={() =>
                        navigate(`/productDetails/${product.id}`, {
                          state: { product },
                        })
                      }>
                      <img
                        src={product.image}
                        alt={product.name}
                        className="rounded-3"
                      // onClick={() =>
                      //   navigate(`/productDetails/${product.id}`, {
                      //     state: { product },
                      //   })
                      // }
                      />
                      <div class="overlay">
                        <NavLink
                          className="text-decoration-none"
                          to={"/products"}
                        >
                          {/* <button
                            className="product-add-btn btn-sm btn btn-light me-3 mb-3 fw-bold"
                            // onClick={() => handleAddToCart(product)}
                          >
                            +
                          </button> */}
                        </NavLink>
                      </div>
                    </div>
                    {/* </NavLink> */}
                  </div>
                  <div className="card-body d-flex flex-column justify-content-center">
                    <p className="products-card-text text-center mb-2 text-truncate">
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
                  className={`page-item mx-2 d-flex align-items-center ${currentPage === 1
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
                  className={`page-item d-flex align-items-center ${currentPage === totalPages
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
        style={{ background: "#F4FAFD", color: "#EC7229" }}
      >
        <p className="py-3 px-lg-0 px-1 mb-0" style={{ fontSize: "18px", fontWeight: "400" }}>
          Enhancing Poultry Health An All-Inclusive Handbook on Poultry Feed Supplements
        </p>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-10 text-center m-auto">
            <p
              style={{ color: "#373737", fontSize: "18px", fontWeight: "400" }}
            >
              The dynamic field of poultry husbandry necessitates accuracy, tenderness, and a thorough comprehension of avian health. As a poultry farmer, you are well aware that the key to productive chicken production is a well-balanced diet. But occasionally, your flock doesn't get all the nutrition it needs from normal feed alone.Thats why poultry feed Supplements are used in this situation. We'll dive into the world of poultry supplements in this blog, highlighting their advantages and illuminating how they're changing the way that chicken nutrition is provided.
            </p>
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
            <h2>Why Poultry Feed Supplements Are Important:</h2>
            <div className="my-4">
              <h5>1. Improved Weight Gain and Growth</h5>
              <p
                style={{
                  // fontSize: "18px",
                  // fontWeight: "400",
                  color: "#373737",
                }}
              >
                Supplements to poultry feed, enhanced with premium proteins and amino acids, facilitate effective muscle growth and weight gain in birds. This results in birds that grow more quickly and are healthier and more marketable.
              </p>
            </div> <hr />
            <div className="my-4">
              <h5>2. Higher Yield and Better Quality of Eggs</h5>
              <p
                style={{
                  // fontSize: "18px",
                  // fontWeight: "400",
                  color: "#373737",
                }}
              >
                Egg production can be increased by taking certain supplements that contain important vitamins, minerals, and omega-3 fatty acids. They not only make eggs bigger, but their shells are also better. You will gain from increased egg harvests and enhanced market value as a chicken farmer.
              </p>
            </div>
            <hr />
            <div className="my-4">
              <h5>3. A more robust immune system</h5>
              <p
                style={{
                  // fontSize: "18px",
                  // fontWeight: "400",
                  color: "#373737",
                }}
              >
                Poultry need a strong immune system to fight against illnesses and infections. Antioxidants, probiotics, and herbal extracts are a few immune-boosting components added to poultry feed additives to enhance the birds' natural defenses and lower their risk of sickness.            </p>
            </div>
            <hr />
            <div className="my-4">
              <h5>4. Better Absorption of Nutrients and Digestion</h5>
              <p
                style={{
                  // fontSize: "18px",
                  // fontWeight: "400",
                  color: "#373737",
                }}
              >
                Supplementing with enzymes is essential for improving nutrition absorption and digestion. These supplements increase feed conversion ratios, improve nutritional availability, and decrease feed waste by optimizing the utilization of dietary components.
              </p>
              <p>Selecting the Proper Supplements for Poultry Feed When choosing supplements for poultry feed, take into account the following factors:
              </p>
              <p><span className="fw-bold">Type of Supplement:</span> There are many different kinds of supplements out there, such as probiotics, enzymes, vitamins, minerals, and amino acids. Select a supplement that fills in the particular nutrient gap found in your flock.</p>
              <p><span className="fw-bold">Supplement Type:</span>There are three types of supplements for poultry feed: liquids, pellets, and powders. Select the form that best fits the preferences of your birds and your management procedures.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <div className="row">
          <div className="col-lg-9 col-md-12 product-rumeno-heading m-auto text-center">
            <p className="product-rumeno-title">
            Let me present Rumeno Farmotech.
            </p>
            <p className="product-rumeno-content">
            Rumeno Farmotech, a trusted name in animal feed supplements, offers high-quality poultry vitamin supplements. These supplements enhance the general health and well-being of chickens, ducks, and other fowl. With a commitment to research-driven solutions, Rumeno Farmotech ensures that its products reach farmers and livestock owners across India.
            </p>
            <p className="product-rumeno-content">
            Our quick-start poultry supplements are made to get your flock moving, whether you're an experienced farmer or just getting started. When you need dependable, scientifically supported solutions to increase your poultry output to new levels, turn toRumeno Farmotech.
            </p>
            <p className="product-rumeno-content">Recall that happy birds translate into successful businesses. With Rumeno Farmotech's poultry health supplements, you can make an investment in your feathery companions' wellbeing.</p>
          </div>
        </div>
      </div>

      <div className="product-faq">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <Faq faqs={PoultryProductsFaq} showHeading={false} />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Products;
