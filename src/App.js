import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
// import Navbar from "./component/common/navbar";
// import Mainnav from "./component/common/navbar/mainnavbar";
// import Home from "./component/page/home";
// import Trust from "./component/page/trustreason";
// import About from "./component/page/about";
// import Certified from "./component/page/certified";
// import Goatfeed from "./component/common/page/goatfeed";
// import Goatinfo from "./component/common/page/goatinfo";
// import Award from "./component/common/page/award";
// import Research from "./component/common/page/research";
// import Manufacture from "./component/common/page/manufacture";
// import Livestock from "./component/common/page/livestock";
import { Route, Routes } from "react-router-dom";
// import Nutrition from "./component/common/page/nutrition";
// import Faq from "./component/common/page/faq";
// import Footer from "./component/common/footer";
// import Blog from "./component/common/page/blog";
import Training from "./component/page/goattraining";
import Main from "./component/page/main/main";
// import Slick from "./component/common/page/slick";
import Formdatapage from "./component/page/formdatapage";
// import Sidebar from "./component/common/page/sidebar";
import Basic from "./component/page/basicdetail/index";
// import Detail from "./component/common/page/detail/index";
import Parentcard from "./component/page/formdatapage/parentCard/index";
import Dashboard from "./component/page/formdatapage/dashboard/index";
import Parent from "./component/page/formdatapage/parentCard/index";
import Child from "./component/page/formdatapage/childCard/index";
import Record from "./component/page/record";
import Products from "./component/page/products";
import Addtocart from "./component/page/addtocart";
// import VeterinaryService from "./component/common/page/veterinaryService";
import DairyConsultantService from "./component/page/service/dairyConsultant";
import GoatFarmingService from "./component/page/service/goatFarming";
import VeterinaryService from "./component/page/service/veterinaryService";
import Login from "./component/common/Auth/Login/login";
import Forgot from "./component/common/Auth/Forgot/forgot";
import Register from "./component/common/Auth/Register/register";
import Cart from "./component/page/cart/index";
import Payment from "./component/page/payment/index";

import ContactUs from "./component/page/ContactUs/contactus";
import ErrorPage from "./component/page/Error/error";
import { ToastContainer } from "react-toastify";
import { CartProvider } from "./component/common/Context/index";
const App = () => {
  return (
    <>
      <CartProvider>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Main />} />

          <Route path="/products" element={<Products />} />
          <Route path="/training" element={<Training />} />
          <Route path="/productDetails/:id" element={<Addtocart />} />
          <Route path="/service" element={<VeterinaryService />} />
          <Route path="/dairyconsultant" element={<DairyConsultantService />} />
          <Route path="/goatfarming" element={<GoatFarmingService />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot" element={<Forgot />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/error" element={<ErrorPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/payment" element={<Payment />} />

          {/* FarmData */}
          <Route path="/farmdata" element={<Formdatapage />} />
          <Route path="/farmdata/home" element={<Parentcard />} />
          <Route path="/farmdata/dashboard" element={<Dashboard />} />
          <Route path="/farmdata/parent" element={<Parent />} />
          <Route path="/farmdata/child" element={<Child />} />
          <Route path="/parentform" element={<Basic />} />
          <Route path="/record" element={<Record />} />
        </Routes>
      </CartProvider>
    </>
  );
};

export default App;
