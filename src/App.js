import React from "react";
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
import Products from "./component/page/products";
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
import AddChild from "./component/page/addchild/index"


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
          <Route path="/addChild" element={<AddChild />} />


          {/* FarmData */}
          <Route path="/farmdata" element={<Formdatapage />} />
          <Route path="/farmdata/home" element={<Parentcard />} />
          <Route path="/farmdata/dashboard" element={<Dashboard />} />
          <Route path="/farmdata/parent" element={<Parent />} />
          <Route path="/farmdata/child" element={<Child />} />
          <Route path="/parentform" element={<Basic />} />
          <Route path="/record/:name/:uniqueId" element={<Record />} />
        </Routes>
      </CartProvider>
    </>
  );
};

export default App;
