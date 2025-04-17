import React, { useEffect } from "react";
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
import Products from "./component/page/products/index";
import Cattleproduct from "./component/page/products/cattle";
import Poultryproduct from "./component/page/products/poultry";
import Dogproduct from "./component/page/products/dog";
import Addtocart from "./component/page/addtocart";
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
import AddChild from "./component/page/addchild/index";
import ChildEditBasicDetailForm from "./component/page/ChildEditBasicDetailForm/ChildEditBasicDetailForm";
import Blogs from "./component/page/Blogs/blogs";
import ProTraining from "./component/page/goattraining/proTraining";
import PrivacyPolicy from "./component/page/PrivacyPolicy/policy";
import { useLocation } from "react-router-dom";


const App = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // return null;

  return (
    <>
      <CartProvider>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Main />} />Poultryproduct
          <Route path="/goatproduct" element={<Products />} />
          <Route path="/cattleproduct" element={<Cattleproduct />} />
          <Route path="/poultryproduct" element={<Poultryproduct />} />
          <Route path="/dogproduct" element={<Dogproduct />} />
          <Route path="/training" element={<Training />} />
          <Route path="/protraining" element={<ProTraining />} />
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
          <Route path="/addChild" element={<AddChild />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />




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
