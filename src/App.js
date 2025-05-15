import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Training from "./component/page/goattraining";
import Main from "./component/page/main/main";
import Formdatapage from "./component/page/formdatapage";
import Basic from "./component/page/basicdetail/index";
import Parentcard from "./component/page/formdatapage/parentCard/index";
import Dashboard from "./component/page/formdatapage/dashboard/index";
import Parent from "./component/page/formdatapage/parentCard/index";
import Child from "./component/page/formdatapage/childCard/index";
import Record from "./component/page/record";
import Products from "./component/page/products/GoatProducts";
import Cattleproduct from "./component/page/products/cattle";
import Poultryproduct from "./component/page/products/poultry";
import Dogproduct from "./component/page/products/dog";
import Addtocart from "./component/page/addtocart";
import DairyConsultantService from "./component/page/service/dairyConsultant";
import GoatFarmingService from "./component/page/service/goatFarming";
import VeterinaryService from "./component/page/service/veterinaryService";
import Consulting from "./component/page/service/consultingTeam";
import Login from "./component/common/Auth/Login/login";
import Forgot from "./component/common/Auth/Forgot/forgot";
import Register from "./component/common/Auth/Register/register";
import Cart from "./component/page/cart/index";
import Payment from "./component/page/payment/index";
import ContactUs from "./component/page/ContactUs/contactus";
import ErrorPage from "./component/page/Error/error";
import { ToastContainer } from "react-toastify";
import { CartProvider } from "./component/common/Context/index";
import AddChild from "./component/page/addchild/index";
import ChildEditBasicDetailForm from "./component/page/ChildEditBasicDetailForm/ChildEditBasicDetailForm";
import Blogs from "./component/page/Blogs/blogs";
import ProTraining from "./component/page/goattraining/proTraining";
import PrivacyPolicy from "./component/page/PrivacyPolicy/policy";
import { useLocation } from "react-router-dom";
import AllProducts from "./component/page/products/allProducts";
import FarmHouseEquipment from "./component/page/FarmHouseEquipment/equipment";
import ServiceFaq from "./component/page/service/faq";
import HumanConsumable from "./component/page/products/human";
import CropSeed from "./component/page/products/cropSeed";
import AddAnimalCards from "./component/page/formdatapage/addAnimalCards/addAnimalCards";
import Language from "./component/language/language";
import axios from "axios";
import { API_BASE_URL } from "./component/common/APIs/api";


const App = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const fetchVaccineAlerts = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/vaccine/alert-vaccine`);
        console.log('response: ', response);
      } catch (error) {
      }
    };

    // Initial fetch
    fetchVaccineAlerts();

    // Set interval to fetch every 10 seconds
    const interval = setInterval(() => {
      fetchVaccineAlerts();
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  // return null;

  return (
    <>
      <CartProvider>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Language />} />
          <Route path="/main" element={<Main />} />Poultryproduct
          <Route path="/goatproduct" element={<Products />} />
          <Route path="/allproducts" element={<AllProducts />} />
          <Route path="/equipment" element={<FarmHouseEquipment />} />
          <Route path="/cattleproduct" element={<Cattleproduct />} />
          <Route path="/poultryproduct" element={<Poultryproduct />} />
          <Route path="/dogproduct" element={<Dogproduct />} />
          <Route path="/training" element={<Training />} />
          <Route path="/protraining" element={<ProTraining />} />
          <Route path="/productDetails/:id" element={<Addtocart />} />
          <Route path="/service" element={<VeterinaryService />} />
          <Route path="/consulting" element={<Consulting />} />
          <Route path="/dairyconsultant" element={<DairyConsultantService />} />
          <Route path="/goatfarming" element={<GoatFarmingService />} />
          <Route path="/faq" element={<ServiceFaq />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot" element={<Forgot />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/error" element={<ErrorPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/addChild" element={<AddChild />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/humanCunsumable" element={<HumanConsumable />} />
          <Route path="/cropseed" element={<CropSeed />} />
          <Route path="/addanimal" element={<AddAnimalCards />} />





          {/* FarmData */}
          <Route path="/farmdata" element={<Formdatapage />} />
          <Route path="/farmdata/home" element={<Parentcard />} />
          <Route path="/farmdata/dashboard" element={<Dashboard />} />
          <Route path="/farmdata/parent" element={<Parent />} />
          <Route path="/farmdata/child" element={<Child />} />
          <Route path="/parentform" element={<Basic />} />
          <Route path="/record/:name/:uniqueId" element={<Record />} />
          <Route path="/record/:name/:kidId/:uniqueId" element={<Record />} />
          <Route path="/childform/:uniqueId/:kidId/:parentId" element={<ChildEditBasicDetailForm />} />

        </Routes>
      </CartProvider>
    </>
  );
};

export default App;
