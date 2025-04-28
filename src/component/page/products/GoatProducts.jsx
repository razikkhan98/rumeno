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
import Tanav from "../../assets/img/products/Tanaav.jpg";
import Energico from "../../assets/img/products/Energico-Animal.jpg";
import Rumenvita from "../../assets/img/products/Rumenovita.jpg";
import Liverofine from "../../assets/img/products/Liverofine.jpg";
import Digesto from "../../assets/img/products/Digesto-Plus.jpg";
import DCox from "../../assets/img/products/D-Cox.jpg";
import MicroFlora from "../../assets/img/products/microfloratane.jpg";
import Selennium from "../../assets/img/products/Selennium-GC.png";
import Bull from "../../assets/img/products/Bull-Goat.png";
import ProLac from "../../assets/img/products/pro-lack-calf-powder7.png";
import Slatted from "../../assets/img/products/farm-floor.jpg";
import Nipple from "../../assets/img/products/goat-Sheep-Nipple.png"
import Virus from "../../assets/img/products/antivirus.svg";
import Medicine from "../../assets/img/products/medicine.svg";
import Medical from "../../assets/img/products/medical.svg";
import Firstaid from "../../assets/img/products/sterilization.svg";
import Star from "../../assets/img/products/star.svg";
import Faq from "../faq";


const GoatProductsFaq = [
  {
    question: "1. What is Goat Supplementary Feeding?",
    answer: "Goat supplementary feeding refers to providing additional nutrition to goats beyond their natural forage intake. It ensures that goats receive essential nutrients for optimal health and productivity."
  },
  {
    question: "2. What Supplements Do Goats Need?",
    answer: "Goats require various supplements to meet their nutritional needs:\n\n" +
      "• Loose Minerals: Essential for vitamins and minerals. Offer free choice.\n" +
      "• Sodium Bicarbonate (Baking Soda): Aids digestion and prevents bloat.\n" +
      "• Probios (Probiotic): Supports rumen function.\n" +
      "• Vitamins and Minerals: Selenium, zinc, copper, calcium, phosphorus, iodine, iron, and manganese are crucial.",
  },
  {
    question: "3. Do Goats Need Supplemental Feed?",
    answer:
      "Yes, especially when natural forage lacks certain nutrients. Proper supplementation ensures overall health.",
  },
  {
    question: "4. What Is the Best Feed for Goats?",
    answer:
      "Forages: High-quality grass, hay, leaves, and woody plants. Mineral Supplements: Loose minerals and essential vitamins. Avoid Excessive Grain-Based Feeds: Focus on forages and balanced nutrition",
  },
  {
    question: "5. Is Medicated Feed Good for Goats?",
    answer: "Medicated feed may be necessary for specific health conditions. Consult a veterinarian for guidance."
  }
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
    name: "Tanav Mukti Anti Stress Animal Feed Supplement | Stress relief supplements for animals",
    image: Tanav,
    price: 700,
    inStock: true,
    productUnit: ["1", "5", "25"],
  },
  {
    id: 3,
    name: "Energico | Electrolytes for Cattle, Goat, Poultry, Horses, Pigs, Sheep, Pigeons",
    image: Energico,
    price: 235,
    inStock: true,
    productUnit: ["1", "5", "25"],
  },
  {
    id: 4,
    name: "Rumenovita | Growth booster for animals | Animal feed supplement",
    image: Rumenvita,
    price: 3250,
    inStock: true,
    productUnit: ["1", "5", "25"],
  },
  {
    id: 5,
    name: "Liverofine | veterinary liver tonic",
    image: Liverofine,
    price: 125.0,
    inStock: true,
    productUnit: ["1", "5", "25"],
  },
  {
    id: 6,
    name: "Digesto Plus | digestive supplements for animals",
    image: Digesto,
    price: 190.0,
    inStock: true,
    productUnit: ["1", "5", "25"],
  },
  {
    id: 7,
    name: "D-Cox | Weaning goat supplement",
    image: DCox,
    price: 250,
    inStock: true,
    productUnit: ["1", "5", "25"],
  },
  {
    id: 8,
    name: "Rumeno Micro Flora | Pre + Probiotic Supplement for animals",
    image: MicroFlora,
    price: 90.0,
    inStock: false,
    productUnit: ["1", "5", "25"],
  },
  {
    id: 9,
    name: "Selennium-GC | Selenium supplement for cattle and goats | Animal feed supplement",
    image: Selennium,
    price: 190.0,
    inStock: true,
    productUnit: ["1", "5", "25"],
  },
  {
    id: 10,
    name: "Bull Goat | Goat weight gain supplement",
    image: Bull,
    price: 1175.0,
    inStock: false,
    productUnit: ["1", "5", "25"],
  },
  {
    id: 11,
    name: "Pro-lac power goat milk replacer",
    image: ProLac,
    price: 600,
    inStock: true,
    productUnit: ["1", "5", "25"],
  },
  {
    id: 12,
    name: "Slatted Floor",
    image: Slatted,
    price: 135,
    inStock: true,
    productUnit: ["1", "5", "25"],
  },
  {
    id: 13,
    name: "Pet nipple | Goat and sheep nipples",
    image: Nipple,
    price: 55,
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
            subtitle="Goat Supplement"
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
        style={{ background: "#F4FAFD", color: "#EC7229", }}
      >
        <p className="py-3 px-lg-0 px-1 mb-0" style={{ fontSize: "18px", fontWeight: "400" }}>
          Goat Feed Supplements Improving Performance and Health
        </p>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-10 text-center m-auto">
            <p
              style={{ color: "#373737", fontSize: "18px", fontWeight: "400" }}
            >
              If you own goats, you are aware of how important good nourishment is to your pets' health and wellbeing.
              Giving your goats the correct vitamins can have a big impact on how well they perform overall,
              whether you raise them for meat, milk, or as pets.
              This post will introduce you to Rumeno Farmotech, a reputable brand in the business,
              and discuss the advantages of goat feed supplements.
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
            <p className=" fs-2">The Significance of Goat Feed Supplements</p>
            <p
              style={{
                fontSize: "18px",
                fontWeight: "400",
                color: "#373737",
              }}
            >
              Goats have special dietary requirements, and depending on age, breed, and use, these needs can change. Supplements for goat feed are essential for the following reasons:
            </p>
            <p> <span className="fw-bold">Better Growth and Weight increase:</span> Supplements for goat weight increase are essential for encouraging healthy growth. They supply vital vitamins, minerals, and amino acids that promote the growth of muscles and the general health of the body.</p>
            <hr />
            <p> <span className="fw-bold">Enhanced Milk Production:</span>Providing your dairy goats with the correct nutrients in their diet can help them produce more milk. Improved lactation is a result of using goat supplements high in calcium, phosphorus, and trace minerals.</p>
            <hr />
            <p> <span className="fw-bold">Strong Immune System:</span> Preventing disease requires a strong immune system. Selenium, zinc, and copper found in goat mineral supplements strengthen immunity and lower illness risk.</p>
            <hr />
            <p><span className="fw-bold">Healthy Skin and Hooves:</span>Eating a balanced diet has an impact on both skin and hoof health. Zinc and biotin supplements promote healthy hoof growth and guard against frequent problems like hoof rot.</p>
            <hr />
            <p><span className="fw-bold">Presenting Farmotech Rumeno:</span> Renowned in the livestock sector, Rumeno Farmotech specializes in premium supplements for goat feed. Here are some reasons to think about their products:</p>
            <hr />
            <p><span className="fw-bold">Scientifically Formulated:</span> A great deal of study and scientific principles are used in the development of Rumeno Farmotech's supplements. Every product is precisely calibrated to satisfy the unique requirements of goats.</p>
            <hr />
            <p><span className="fw-bold">Variety of Options:</span>Rumeno Farmotech offers a selection of weight gain supplements, mineral blends, and general health enhancers. Goats of various ages and purposes are catered to by their goods. Rumeno Farmotech is aware of the significance of trace minerals in the diets of goats. To ensure optimum health, their supplements include vital components including manganese, copper, and selenium.</p>
            <hr />
            <p><span className="fw-bold">Client Contentment:</span>:Rumeno Farmotech is the supplement brand that goat owners nationwide rely on for consistent and potent results. The organization stands out for its dedication to client satisfaction. In summary Purchasing premium additives for goat feed is an investment in the future of your herd. The supplies you need to maintain your goats happy, healthy, and productive are available from Rumeno Farmotech. Check out their product range now to provide your goats with the nourishment they need!</p>
          </div>
        </div>
      </div>
      {/* Faq Start */}
      <div className="product-faq">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <Faq faqs={GoatProductsFaq} showHeading={false} />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Products;
