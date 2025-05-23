import React, { useState } from 'react'

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
import SelenniumE from "../../assets/img/products/selennium-E.png";
import CattleMilk from "../../assets/img/products/cattle-milk-booster.png";
import LactoPup from "../../assets/img/products/Lacto-Pup-Milk-Replacer.jpg";
import PoultryFine from "../../assets/img/products/Poultryfine.png";
import Florovita12 from "../../assets/img/products/florovita-12.png";
import ProLackCalf from "../../assets/img/products/pro-lack-calf-powder7.png";
import Growfine from "../../assets/img/products/Energico-Animal.jpg";
import RumenoMicroFlora from "../../assets/img/products/Rumeno-Micro-flora.jpg";
import MinroMix from "../../assets/img/products/minromix.jpg";
import FarmBurner from "../../assets/img/products/Farm-burner.jpg";
import Star from "../../assets/img/products/star.svg";
import Faq from "../faq";


const AllProductsFaq = [
    {
        question: "1. What Are Veterinary Products?",
        answer: "Veterinary products are essential tools in the prevention and control of animal diseases. The definition of veterinary products may vary from one country to another, but for the purposes of the World Organisation for Animal Health (WOAH), they include:Vaccines: Used for disease prevention.Veterinary Medicines: Including antimicrobial agents for treatment.Diagnostic Kits: Used for disease detection and monitoring.Governments regulate the authorization, manufacturing, distribution, and use of veterinary products through veterinary legislation"
    },
    {
        question: "2. How to Sell Veterinary Products?",
        answer: "With Rumeno Affiliate program you can sell our veterinary products and get commission on them",
    },
    {
        question: "3. Veterinary Products and Services",
        answer:
            "Veterinary products and services encompass a wide range of offerings related to animal health. These include:Medicines and Vaccines: For disease prevention and treatment.Animal Nutrition: Including feed supplements.Diagnostics: Tools for disease detection.Animal Transportation and Procurement: Ensuring safe movement of animals.Surgery and Perioperative Care: Surgical procedures and recovery.Laboratory Testing: Diagnostic tests.Animal Biosecurity and Surveillance: Monitoring and preventing disease spread1",
    },
            {
        question: "4. Veterinary Products Manufacturers in India",
        answer:
            "Rumeno stand in one of the top 10 animal nutrition and wellness startup you can get 100% quality assurance on our products",
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
    {
        id: 14,
        name: "Selennium-E | Selenium supplement for poultry | Poultry feed supplement",
        image: SelenniumE,
        price: 260,
        inStock: true,
        productUnit: ["1", "5", "25"],
    },
    {
        id: 15,
        name: "Lacto-Pup Milk Replacer | Milk Replacer for Puppies",
        image: LactoPup,
        price: 600,
        inStock: true,
        productUnit: ["1", "5", "25"],
    },
    {
        id: 16,
        name: "Poultryfine | Anti bacterial poultry feed supplement",
        image: PoultryFine,
        price: 1600,
        inStock: true,
        productUnit: ["1", "5", "25"],
    },
    {
        id: 17,
        name: "Doodh Vardhan | Cattle Milk Booster",
        image: CattleMilk,
        price: 550,
        inStock: true,
        productUnit: ["1", "5", "25"],
    },
    {
        id: 18,
        name: "Florovita-12 | Broiler weight gainer | Probiotic supplement for poultry",
        image: Florovita12,
        price: 1300,
        inStock: true,
        productUnit: ["1", "5", "25"],
    },
    {
        id: 19,
        name: "Pro-lac power calf milk replacer",
        image: ProLackCalf,
        price: 3000,
        inStock: true,
        productUnit: ["1", "5", "25"],
    },
    {
        id: 20,
        name: "Growfins Probiotics for fish",
        image: Growfine,
        price: 800,
        inStock: true,
        productUnit: ["1", "5", "25"],
    },
    {
        id: 21,
        name: "Rumeno Micro Flora | Pre + Probiotic Supplement for animals",
        image: RumenoMicroFlora,
        price: 90,
        inStock: true,
        productUnit: ["1", "5", "25"],
    },
    {
        id: 22,
        name: "Minromix | Mineral mixture for cattle, goat ,poultry,dog,and cat",
        image: MinroMix,
        price: 285,
        inStock: true,
        productUnit: ["1", "5", "25"],
    },
    {
        id: 22,
        name: "Farm house floor burner",
        image: FarmBurner,
        price: 3000,
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


const AllProducts = () => {

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

   


    return (
        <>
            <Navbar />
            <div className="products">
                <div className="mt-lg-4">
                    <Header
                        title="Products"
                        subtitle="All Animal Products"
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
                style={{ background: "#F4FAFD", color: "#EC7229"}}
            >
                <p className="mb-0 px-lg-0 px-1 py-3" style={{ fontSize: "18px", fontWeight: "400" }}>
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
                    <div className="col-lg-4 my-5">
                        <div
                            className="product-contant-card m-auto p-4 rounded"
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
                    <div className="col-lg-4 my-5">
                        <div
                            className="product-contant-card m-auto p-4 rounded"
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
                    <div className="col-lg-4 my-5">
                        <div
                            className="product-contant-card m-auto p-4 rounded"
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

            <div className="product-faq">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <Faq faqs={AllProductsFaq} showHeading={false} />
                        </div>
                    </div>
                </div>
            </div>

            <Footer />

        </>
    );
};

export default AllProducts;