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
import Milkbooster from "../../assets/img/products/cattle-milk-booster.png";
import Tanav from "../../assets/img/products/Tanaav.jpg";
import Energico from "../../assets/img/products/Energico-Animal.jpg";
import Rumenvita from "../../assets/img/products/Rumenovita.jpg";
import Liverofine from "../../assets/img/products/Liverofine.jpg";
import Digesto from "../../assets/img/products/Digesto-Plus.jpg";
import Selennium from "../../assets/img/products/Selennium-GC.png";
import Minro from "../../assets/img/products/minromix.jpg";
import ProLac from "../../assets/img/products/pro-lack-calf-powder7.png";
import Slatted from "../../assets/img/products/farm-floor.jpg";
import Virus from "../../assets/img/products/antivirus.svg";
import Medicine from "../../assets/img/products/medicine.svg";
import Medical from "../../assets/img/products/medical.svg";
import Firstaid from "../../assets/img/products/sterilization.svg";
import Star from "../../assets/img/products/star.svg";
import Faq from "../faq";


const CattleProductsFaq = [
  {
    question: "1. What is cattle feed supplement?",
    answer: "Cattle feed supplements are essential additives that enhance the nutritional value of the basal feed for livestock. They provide essential nutrients like vitamins, minerals, and proteins to improve growth, health, and productivity. Common supplements include calcium, phosphorus, magnesium, and selenium"
  },
  {
    question: "2. What is livestock supplements?",
    answer: "Livestock supplements are ingredients added to feed in micro quantities to improve growth, feed efficiency, and prevent diseases. They include essential nutrients like vitamins, minerals, and protein sources. Proper supplementation ensures optimal health and performance in cattle"
  },
  {
    question: "3. Do Cows Need Supplements?",
    answer:
      "Yes, cows benefit from supplements to meet their nutritional requirements. Vitamins A, D, and E, along with minerals, are crucial for their health and productivity. Supplements help address deficiencies and support growth, reproduction, and milk production.",
  },
  {
    question: "4. What is the best vitamins for cow?",
    answer:
      "Vitamin A: Essential for vision, immune function, and reproductive health. Vitamin D: Supports calcium absorption and bone health. Vitamin E: Acts as an antioxidant and promotes muscle function. Vitamin B12: Vital for metabolism and energy production",
  },
  {
    question: "5. What is selenium vitamin for cows?",
    answer: "Selenium is an essential trace mineral. It works with vitamin E to protect tissues, supports muscle growth, and prevents white muscle disease. Proper supplementation strategies are crucial to prevent deficiency or toxicity You can get all selenium from our Selennium-E products",
  },
  {
    question: "6. What is the best cow weight gain supplement?",
    answer: "High-energy feeds like corn are effective for weight gain. Consider protein-rich supplements (soybean meal, canola meal) to support growth. Ensure a balanced diet with adequate nutrients for optimal weight gain",
  },
  {
    question: "7. How to increase milk production in cows naturally ?",
    answer: "Quality Forage: Provide high-quality pasture and hay. Proper Nutrition: Balanced diet with adequate protein, energy, and minerals. Hydration: Ensure access to clean water. Stress Reduction: Minimize stressors like overcrowding or abrupt changes. Regular Milking Schedule: Consistent milking routines stimulate production Increase your cattle milk with our doodh vardhan product",
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
    name: "Doodh Vardhan | Cattle Milk Booster",
    image: Milkbooster,
    price: 550,
    inStock: true,
    productUnit: ["1", "5", "25"],
  },
  {
    id: 3,
    name: "Tanav Mukti Anti Stress Animal Feed Supplement | Stress relief supplements for animals",
    image: Tanav,
    price: 700,
    inStock: true,
    productUnit: ["1", "5", "25"],
  },
  {
    id: 4,
    name: "Energico | Electrolytes for Cattle, Goat, Poultry, Horses, Pigs, Sheep, Pigeons",
    image: Energico,
    price: 235,
    inStock: true,
    productUnit: ["1", "5", "25"],
  },
  {
    id: 5,
    name: "Rumenovita | Growth booster for animals | Animal feed supplement",
    image: Rumenvita,
    price: 3250,
    inStock: true,
    productUnit: ["1", "5", "25"],
  },
  {
    id: 6,
    name: "Liverofine | veterinary liver tonic",
    image: Liverofine,
    price: 125.0,
    inStock: true,
    productUnit: ["1", "5", "25"],
  },
  {
    id: 7,
    name: "Digesto Plus | digestive supplements for animals",
    image: Digesto,
    price: 190.0,
    inStock: true,
    productUnit: ["1", "5", "25"],
  },

  {
    id: 8,
    name: "Selennium-GC | Selenium supplement for cattle and goats | Animal feed supplement",
    image: Selennium,
    price: 190.0,
    inStock: true,
    productUnit: ["1", "5", "25"],
  },
  {
    id: 9,
    name: "Minromix | Mineral mixture for cattle, goat ,poultry,dog,and cat",
    image: Minro,
    price: 285.0,
    inStock: false,
    productUnit: ["1", "5", "25"],
  },
  {
    id: 10,
    name: "Pro-lac power goat milk replacer",
    image: ProLac,
    price: 600,
    inStock: true,
    productUnit: ["1", "5", "25"],
  },
  {
    id: 11,
    name: "Slatted Floor",
    image: Slatted,
    price: 135,
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
            subtitle="Cattle Supplement"
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
        <p className="mb-0 py-3 px-lg-0 px-1" style={{ fontSize: "18px", fontWeight: "400" }}>
          Enhancing Cattle Well-being and Growth with Rumeno's Cattle Feed Supplements
        </p>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-10 text-center m-auto">
            <p
              style={{ color: "#373737", fontSize: "18px", fontWeight: "400" }}
            >
              Rumeno Farmotech produces high-quality animal feed supplements to enhance livestock health and productivity. Their cattle feed supplements includes mineral combinations and calcium supplements, ensuring robust growth and nourishment for cows and buffaloes. With a commitment to research-driven solutions, Rumeno Farmotech offers a broad range of products for your lovely cattle, like
            </p>
          </div>
        </div>
        {/* <div className="row justify-content-center mt-3">
          <div
            className="col-lg-12"
            style={{ background: "rgba(255, 255, 255, 1)" }}
          >
            <p
              className=" text-center mb-4"
              style={{ color: "#111111", fontSize: "24px", fontWeight: "500" }}
            >
              PRODUCT CATEGORIES
            </p>
            <div className="row text-center mt-3">
              {petProducts.map((product, index) => (
                <div key={index} className="col-lg-3 col-md-6 mb-4">
                  <div className="p-3">
                    <img
                      src={product.icon}
                      size={44}
                      className="mb-3"
                      alt={product.title}
                    />
                    <p
                      style={{
                        fontSize: "16px",
                        fontWeight: "600",
                        color: "#707070",
                      }}
                    >
                      {product.title}
                    </p>
                    <p
                      style={{
                        fontSize: "14px",
                        fontWeight: "400",
                        color: "#373737",
                      }}
                    >
                      {product.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div> */}
        <div className="row pt-lg-4 pb-lg-5 px-2">
          <div
            className="col-lg-12 p-4"
            style={{
              background: "rgba(253, 199, 158, 0.1)",
              borderRadius: "16px",
            }}
          >
            <h2> Cattle Weight Gain Supplements</h2>
            <p
              style={{
                fontSize: "18px",
                fontWeight: "400",
                color: "#373737",
              }}
            >
              Cattle need the proper balance of nutrients to acquire weight. Consider the following weight-gain supplements:
            </p>
            <h4>A. High-Intensity Foods</h4>
            <p><span className="fw-bold">Corn:</span> Feeds based on corn are high in energy and aid in the growth of cattle's mass. They are especially helpful when cattle are being finished.</p>
            <p><span className="fw-bold">Barley:</span> An additional grain high in energy that encourages weight gain.</p>
            <h4>B. Supplements with Protein</h4>
            <p>A common protein supplement for cattle is soybean meal. It offers the vital amino acids required for the growth of muscle. Cottonseed Meal: Packed in fiber and protein, this meal promotes weight gain.</p>
            <h4>C. Vitamin and Mineral Supplements</h4>
            <p>Calcium and phosphorus are necessary for healthy bones and general growth. Vitamin E: Promotes the growth of muscles and immunity.</p>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <div className="text-center pb-lg-0 pb-3">
          <h2>RumenO Farmotech: A Reputable Brand in Supplements for Cattle</h2>
          <p>In the cattle business, Rumeno Farmotech is a well-known brand that provides a selection of premium supplements. This is why their products are unique:</p>
        </div>
        <div className="row text-center justify-content-center py-lg-5">
          <div className="col-lg-4 my-5">
            <div
              className="product-contant-card m-auto p-4 rounded"
              style={{ background: "rgba(253, 199, 158, 0.2)" }}
            >
              <div className="product-star-img">
                <img src={Star} className="text-warning" />
              </div>
              <p className="product-star-title pt-5">
                Formulas Backed by Research
              </p>
              <p className="product-star-content">
                RumenO Farmotech makes research investments to create potent mixtures. Their supplements are made to specifically address the requirements of cattle.
              </p>
            </div>
          </div>
          <div className="col-lg-4 my-5">
            <div
              className="product-contant-card m-auto p-4 rounded"
              style={{ background: "rgba(191, 227, 241, 0.2)" }}
            >
              <div className="product-star-img">
                <img src={Star} className="text-warning mb-3" />
              </div>
              <p className="product-star-title pt-5">
                Dietary Balance
              </p>
              <p className="product-star-content">
                RumenO Farmotech products offer balanced nutrition for weight gain, protein intake, and general wellness.
              </p>
            </div>
          </div>
          <div className="col-lg-4 my-5">
            <div
              className="product-contant-card m-auto p-4 rounded"
              style={{ background: "rgba(244, 166, 191, 0.2)" }}
            >
              <div className="product-star-img">
                <img src={Star} className="text-warning mb-3" />
              </div>
              <p className="product-star-title pt-5">
                Licks and Mineral Blocks
              </p>
              <p className="product-star-content">
                Cattle may easily obtain necessary minerals with RumenO Farmotech's handy mineral blocks and licks.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-9 col-md-12 product-rumeno-heading m-auto text-center">
            <p className="product-rumeno-title">
              Supplements for Cattle Protein
            </p>
            <p className="product-rumeno-content">
              Cattle require protein for both growth and maintenance because it is the building block of muscle. Consider the following protein supplements:
            </p>
            <h5>Meal Made of Soy</h5>
            <p className="product-rumeno-content">
              Soybean meal is a dependable source of protein, as previously noted
            </p>
            <p><span className="fw-bold">Alfalfa Hay:</span> Protein and fiber are both present in high-quality alfalfa hay.</p>
          </div>
        </div>
      </div>

      <div className="product-faq">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <Faq faqs={CattleProductsFaq} showHeading={false} />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Products;
