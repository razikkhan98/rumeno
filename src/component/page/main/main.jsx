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
import Mainnav from "../../common/navbar/mainnavbar";
import Footer from "../../common/footer";


const Homefaqs = [
  {
    question: "1. What are animal feed supplements?",
    answer:
      "The purpose of animal feed supplements is to improve the nutritional value of animal diets by the use of specialty items. They supply vital elements such as vitamins, minerals, and amino acids, which may be deficient in ordinary food.",
  },
  {
    question: "2. Why are animal feed supplements important?",
    answer:"Animal feed supplements are important because they help ensure animals get the nutrients they need to be healthy and productive.",
  },
  {
    question: "3. What types of animals benefit from feed supplements?",
    answer:"Many types of animals benefit from feed supplements, including cattle, poultry, pigs, sheep, horses, and goats.",
  },
  {
    question: "4. How do I contact Rumeno Farmotech?",
    answer:"You can contact Rumeno Farmotech by calling +91 73550 43892 or emailing rumeno.farmotech@gmail.com. You can also visit their website.",
  },
];

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
      <Faq faqs={Homefaqs} />
      <Blog />
      <Footer />
    </>
  );
};

export default Main;
