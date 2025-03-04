import React from "react";
import Home from "../home";
import Trust from "../trustreason";
import About from "../about";
import Certified from "../certified";
import Goatfeed from "../goatfeed";
import Goatinfo from "../goatinfo";
import Award from "../award";
import Nutrition from "../nutrition";
import Research from "../research";
import Manufacture from "../manufacture";
import Livestock from "../livestock";
import Faq from "../faq";
import Blog from "../blog";
import Mainnav from "../../navbar/mainnavbar";
import Footer from "../../footer";

const Main = () => {
  return (
    <>
      <Mainnav />
      <Home />
      <Trust />
      <About />
      <Certified />
      <Goatfeed />
      <Goatinfo />
      <Award />
      <Nutrition />
      <Research />
      <Manufacture />
      <Livestock />
      <Faq />
      <Blog />
      <Footer />
    </>
  );
};

export default Main;
