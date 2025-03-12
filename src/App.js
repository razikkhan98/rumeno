import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";

import { Route, Routes } from "react-router-dom";

import Training from "./component/common/page/goattraining";
import Main from "./component/common/page/main/main";
import Formdatapage from "./component/common/page/formdatapage";
import Basic from "./component/common/page/basicdetail/index";
import Parentcard from "./component/common/page/parentcard";
import Record from "./component/common/page/record";
import Products from "./component/common/page/products";
import Addtocart from "./component/common/page/addtocart";
import DairyConsultantService from "./component/common/page/service/dairyConsultant";
import GoatFarmingService from "./component/common/page/service/goatFarming";
import VeterinaryService from "./component/common/page/service/veterinaryService";
import Cart from "./component/common/page/cart";

const App = () => {
  return (
    <>
      

      

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/farmdata" element={<Formdatapage/>} />
        <Route path="/parentcard" element={<Parentcard/>} />
        <Route path="/parentform" element={<Basic/>} />
        <Route path="/record" element={<Record/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/training" element={<Training />} />
        <Route path="/addtocart" element={<Addtocart />} />
        <Route path="/service" element={<VeterinaryService />} />
        <Route path="/dairyconsultant" element={<DairyConsultantService />} />
        <Route path="/goatfarming" element={<GoatFarmingService />} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
      
    </>
  );
};

export default App;
