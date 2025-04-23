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
import MicroFlora from "../../assets/img/products/microfloratane.jpg";
import Pupmilk from "../../assets/img/products/Lacto-Pup-Milk-Replacer.jpg";
import Slatted from "../../assets/img/products/farm-floor.jpg";
import Virus from "../../assets/img/products/antivirus.svg";
import Medicine from "../../assets/img/products/medicine.svg";
import Medical from "../../assets/img/products/medical.svg";
import Firstaid from "../../assets/img/products/sterilization.svg";
import Star from "../../assets/img/products/star.svg";
import Faq from "../faq";


const DogProductsFaq = [
  {
    question: "1. Do Dog Supplements Works?",
    answer: "Of course! Supplements for dogs can be quite beneficial if they are chosen carefully. The secret is to choose supplements that are supported by scientific research and target particular needs. We at Rumeno Farmotech provide expertly created, clinically supported supplements. To determine which vitamins are best for your dog, speak with your veterinarian.",
  },
  {
    question: "2. Are Dog Supplements Worth it?",
    answer:
      "If dog supplements offer noticeable advantages, then the investment is worthwhile. Take into account the following elements: Health Objectives: Supplements can be helpful if your dog needs help with joints, weight management, or better coat health. Quality Is Important Select premium supplements made entirely of natural components. See Your Veterinarian: Consult a veterinarian about the unique requirements of your dog to decide whether supplements are beneficial for your animal friend.",
  },
  {
    question: "3. Dog Supplement for weight gain ?",
    answer:
      "For dogs who are underweight, our weight gain vitamins are perfect. They supply calories and vital elements to encourage a healthy weight growth. These supplements can significantly improve your dog's ability to maintain a healthy weight.",
  },
  {
    question: "4. Supplements for Dogs to Gain Muscle?",
    answer:
      "Think about using our specific vitamins to help your dog get more muscle. These goods are made to encourage the growth of muscles, particularly in active or working dogs. Muscle growth can be facilitated by specific supplements, appropriate diet, and regular exercise. " +
      "Keep in mind that every person may experience different outcomes, and you should always speak with a veterinarian before beginning any new supplement regimen. At Rumeno Farmotech, we provide safe and effective supplements with a focus on your dog's health."
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
    name: "Micro Floratone Digestive supplements for dogs",
    image: MicroFlora,
    price: 245.0,
    inStock: false,
    productUnit: ["1", "5", "25"],
  },
  {
    id: 3,
    name: "Minromix | Mineral mixture for cattle, goat ,poultry,dog,and cat",
    image: Minro,
    price: 285.0,
    inStock: false,
    productUnit: ["1", "5", "25"],
  },
  {
    id: 4,
    name: "Lacto-Pup Milk Replacer | Milk Replacer for Puppies",
    image: Pupmilk,
    price: 600.0,
    inStock: false,
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
            subtitle="Dog Supplement"
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
        style={{ background: "#F4FAFD", color: "#EC7229", height: "56px" }}
      >
        <p className=" mb-0" style={{ fontSize: "18px", fontWeight: "400" }}>
          Dog Feed Supplements to Promote Optimal Health
        </p>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-10 text-center m-auto">
            <p
              style={{ color: "#373737", fontSize: "18px", fontWeight: "400" }}
            >
              Here at Rumeno Farmotech, we put your dog's health first. We make sure that your pet gets the assistance they require with our carefully chosen collection of dog vitamins. We offer the ideal remedies for any dog suffering from allergies, joint problems, weight issues, or nutritional deficits.
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

            <h2>Dog Supplements for Weight Gain:</h2>
            <div className="py-3">
              <p
                style={{
                  color: "#373737",
                }}
              >
                <span className="fw-bold">Description:</span> Our weight gain pills are the solution if your dog needs to put on weight.
              </p>
              <p><span className="fw-bold">Benefits:</span> Rich in calories and important nutrients. encourages a healthy increase in weight. Perfect for dogs who are underweight.</p>
            <hr />
            </div>
            <div className="">
              <p
                style={{
                  color: "#373737",
                }}
              >
                <span className="fw-bold">Iron Supplements for dogs</span> Overview: Our iron supplements provide the right amounts of iron for your dog's general well-being.
              </p>
              <p><span className="fw-bold">Benefits:</span> Encourages the creation of energy. strengthens the immune system. vital to the production of red blood cells.</p>
            <hr />
            </div>
            <div className="">
              <p
                style={{
                  color: "#373737",
                }}
              >
                <span className="fw-bold">Dog Joint Supplements:</span>Overview: Our joint supplements help maintain the health of your dog's joints.
              </p>
              <p><span className="fw-bold">Benefits:</span> Glucosamine and chondroitin are present. increases the flexibility of joints. promotes the health of cartilage.</p>
            <hr />
            </div>
            <div className="">
              <p
                style={{
                  color: "#373737",
                }}
              >
                <span className="fw-bold">Weight Gain Supplements for dogs:</span>Overview: Tailored specifically for dogs in need of additional calories, this supplement supports the development of muscular mass and general vigor.
              </p>
              <p><span className="fw-bold">Advantages:</span>Promotes a healthy increase in weight. gives vital nutrients. enhances general well-being.</p>
            <hr />
            </div>
            <div className="">
              <p
                style={{
                  color: "#373737",
                }}
              >
                <span className="fw-bold">Dog Fiber Supplement:</span>Summary: Keep your dog's digestive system in good working order with our fiber supplement
              </p>
              <p><span className="fw-bold">Pros:</span>Facilitates digestion. keeps constipation at bay. promotes gut health.</p>
            <hr />
            </div>
          </div>
        </div>

      </div>

      <div className="container py-5">
        <div className="row">
          <div className="col-lg-9 col-md-12 product-rumeno-heading m-auto text-center">
            <p className="product-rumeno-title">
            Examine Our Selection of Supplements for Dogs:
            </p>
            <p className="product-rumeno-content">
            <span className="fw-bold">Dog Allergy Supplement: </span>Described as a natural mixture, this supplement helps dogs with common allergies.
            </p>
            <p className="product-rumeno-content">
            <span className="fw-bold">Benefits:</span> Aids in maintaining a strong immune system. minimizes the occurrence of allergic responses. improves general well-being.
            </p>
          </div>
        </div>
      </div>

      <div className="product-faq">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <Faq faqs={DogProductsFaq} showHeading={false} />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Products;
