import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
// import Navbar from "./component/common/navbar";
import Mainnav from "./component/common/navbar/mainnavbar";
import Home from "./component/common/page/home";
import Trust from "./component/common/page/trustreason";
import About from "./component/common/page/about";
import Certified from "./component/common/page/certified";
import Goatfeed from "./component/common/page/goatfeed";
import Goatinfo from "./component/common/page/goatinfo";
import Award from "./component/common/page/award";
import Research from "./component/common/page/research";
import Manufacture from "./component/common/page/manufacture";
import Livestock from "./component/common/page/livestock";
import { Route, Routes } from "react-router-dom";
import Nutrition from "./component/common/page/nutrition";
import Faq from "./component/common/page/faq";
import Footer from "./component/common/footer";
import Blog from "./component/common/page/blog";
import Training from "./component/common/page/goattraining";
import Main from "./component/common/page/main/main";
// import Slick from "./component/common/page/slick";
// import Formdatapage from "./component/common/page/formdatapage";
// import Sidebar from "./component/common/page/sidebar";
// import Basic from "./component/common/page/basicdetail/index";
// import Detail from "./component/common/page/detail/index";
// import Parentcard from "./component/common/page/parentcard";
// import Record from "./component/common/page/record";

const App = () => {
  return (
    <>
      

      {/* <Slick/> */}
      {/* <Formdatapage /> */}
      {/* <Navbar /> */}
      {/* <Basic/> */}
      {/* <Detail /> */}
      {/* <Parentcard /> */}
      {/* <Sidebar/> */}
      {/* <Record /> */}

      <Routes>
        <Route path="/" element={<Main />} />

        <Route path="/training" element={<Training />} />
      </Routes>
      
    </>
  );
};

export default App;
