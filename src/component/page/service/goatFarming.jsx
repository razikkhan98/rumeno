import React from 'react'

// Common Components
import Navbar from '../../common/navbar/mainnavbar';
import Footer from '../../common/footer';
import Faq from '../faq';

// Images
import Service1 from "../../assets/img/service-img/Premium Photo _ Farmer giving food to cattle at his farm 1.png";
import Service2 from "../../assets/img/service-img/elder-man-farm 1.png";
import Service3 from "../../assets/img/service-img/goats-farm-sunny-day 1.png";
import Header from '../../common/Header/header';


// Json Role

// FAQ Json
const FarmingFaq = [
  {
    question: "1. What is a goat farming consultant?",
    answer: "A specialist who provides knowledgeable advice and assistance to goat farmers in order to maximize their farming operations is known as a consultant in goat farming. Advisors offer guidance on a range of topics related to goat husbandry, such as choosing a breed, feeding, maintaining health, developing breeding plans, and general farm administration.",
  },
  {
    question: "2. Why do I need a goat farming consultant?",
    answer: "..............................",
  },
  {
    question: "3. What services do goat farming consultants offer?",
    answer: "..............................",
  },
  {
    question: "4. How do I choose the right goat farming consultant?",
    answer: "..............................",
  },
  {
    question: "5. How can a goat farming consultant help me improve my farm's profitability & services?",
    answer: "..............................",
  },
  {
    question: "6. Can a goat farming consultant help me with specific challenges I'm facing on my farm?",
    answer: "..............................",
  },
  {
    question: "7. How do I get started with a goat farming consultant?",
    answer: "..............................",
  },

];

const GoatFarmingService = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />
      <div className='service-bg-color products'>
        <div className="pt-4">
          <Header title="Services" subtitle="Goat Farming Consultant" />
        </div>
        <div className='container pt-lg-5'>
          <div className='text-center'>
            <p className='service-heading'>Rumeno's Goat Farming Consultant : Rumeno Farmotech's Expertise</p>
            <p className='heading-description'>Goat is a multi-use animal which is commonly reared for the meat (chevon).
              In the different parts of the world, goat is raised for the meat, milk, wool and leather. Goat is also called “the poor man’s cow”.
              In India, the goats can be reared in different ecological zones; hence, people are adopting goat farming as an enterprise.
              Sheep and goat are belonging to different species, but their management is almost similar.</p>
          </div>
          <div className='row my-5 g-0 bg-white service-border'>
            <div className='col-lg-6 '>
              <img src={Service1} className='service-img img-fluid w-100' alt="Loading" />
            </div>
            <div className='col-lg-6 px-5 p-4 d-flex'>
              <div className=''>
                <p className='content-heading'>Comprehensive Product Range</p>
                <p className='service-inner-text'>Rumeno Farmotech, a prominent goat farming consultant in the field of animal
                  husbandry, offers specialized services to enhance the productivity and well-being of
                  goat herds. Their comprehensive services include:</p>
                <ul className='font-size-14'>
                  <li>Nutritional Guidance: Rumeno provides tailored dietary plans, ensuring optimal nutrition for goats at different life stages.</li>
                  <li>Health Management: They offer preventive healthcare strategies, vaccinations, and disease management protocols.</li>
                  <li>Breeding Consultation: Rumeno assists in selecting suitable breeding pairs and optimizing breeding cycles.</li>
                  <li>Infrastructure Planning: From barn design to feed storage, they advise on efficient farm infrastructure.</li>
                </ul>
              </div>
            </div>

          </div>
          <p className='font-size-14'> Goat farming is a profitable endeavor that has a plethora of chances for farmers looking for sustainable lives in the ever-evolving field of agriculture. But managing the challenges of goat farming calls for more than simply enthusiasm—it calls for knowledge and tactical direction. Now enter Rumeno Farmotech,
            a renowned consulting company that specializes in complete livestock management solutions, ruminant nutrition, and goat farming.
            <br />
            In the field of goat farming consultancy, Rumeno Farmotech is a reputable name, providing farmers
            hoping to succeed in this rapidly growing business with customized solutions. As a goat farming consultant,
            Rumeno Farmotech offers priceless knowledge. <br />
            On the choice of breed, maximizing nutrition, controlling diseases, and general farm management.
            With a thorough awareness of the particular difficulties and possibilities associated with goat farming,
            Rumeno Farmotech equips farmers to increase output, strengthen herd health, and boost profitability. Rumeno Farmotech is
            dedicated to advancing goat farming excellence by providing customized advice and workable solutions, enabling farmers all over the world to reach
            their objectives and fulfill their potential in this exciting field of agriculture.
          </p>


          <div className='row my-5 g-0 bg-white service-border'>
            {/* secong img */}
            <div className='col-lg-7 py-lg-4 px-5'>
              <div className=''>
                <p className='content-heading'>Goat Farming Advisor: Your Success Associated Partner</p>
                <p className='service-inner-text'>Rumeno Farmotech is a consultant for goat farming with many years of expertise and a vast amount of knowledge. Our team of professionals can assist you whether you're a new farmer starting your goat farming business or an experienced breeder trying to streamline your processes. <br />
                  Rumeno Farmotech provides extensive consulting services that are specifically designed to address the demands of goat farmers, ranging from breed selection and housing design to disease management and breeding tactics. Working directly with clients, our experts offer tailored advice and workable solutions that maximize output and profitability. </p>

                <p className='service-inner-text'>For goats and other ruminant animals, proper nutrition is essential to their performance and general health. With years of experience as ruminant nutritionists, Rumeno Farmotech is an expert in creating personalized feed plans that address the unique dietary needs of sheep and goats.</p>
                <p className='service-inner-text'>Our nutritionists assist farmers in improving digestion,optimizing feed efficiency , and advancing the general health of their herds through meticulous analysis and knowledgeable advice. In order to make sure that your goats and sheep receive the nourishment they require to flourish, Rumeno Farmotech is dedicated to providing balanced ration programs and locating premium feed ingredients.</p>
              </div>
            </div>
            <div className='col-lg-5'>
              <img src={Service2} className='service-img img-fluid w-100' alt="Loading" />
            </div>
          </div>

          <div className='row my-5 g-0 bg-white service-border'>
            {/* Third img */}
            <div className='col-lg-3'>
              <img src={Service3} className='service-img img-fluid w-100' alt="Loading" />
            </div>
            <div className='col-lg-9 d-flex align-items-center px-5'>
              <div className=''>
                <p className='content-heading'>Consultant for Goats and Sheep: Promoting Excellence in Livestock Management</p>

                <p className='service-inner-text'>Rumeno Farmotech provides a broad range of consulting services beyond goat husbandry and nutrition with the goal of improving overall livestock management techniques. Our consultants are committed to assisting farmers in achieving excellence in all facets of their operations, from pasture management and reproductive health to herd health monitoring and parasite control. <br />
                  Rumeno Farmotech gives farmers the tools they need to take advantage of opportunities, overcome obstacles, and realize the full potential of their sheep and goat businesses. It does this by utilizing the most recent technological developments and industry best practices. We take great pride in being the nation's preferred consulting partner for goat farmers due to our demonstrated proficiency and unshakable dedication to success. <br />
                  In summary, collaborating for prosperity <br />
                  Having the proper partner at your side can make all the difference in the fast-paced world of agriculture.
                  You may feel secure in the knowledge that Rumeno Farmotech is your reliable consulting partner, providing you with the knowledge
                  and assistance you require to thrive in goat farming and beyond. <br />
                  Get in touch with Rumeno Farmotech right now to find out more about our advisory services and how we can support you in accomplishing
                  your objectives for sheep and goat farming. By working together, we can open the door to a more successful future for your cattle and
                  farm. <br />
                  As a leader in goat and sheep consultant, Rumeno Farmotech shines brightly, providing farmers with critical direction as they navigate
                  the complexities of small ruminant management. Rumeno Farmotech is a consulting company for goats and sheep that offers customized
                  solutions for breed selection, nutrition optimization, disease control, and general farm improvement. Rumeno Farmotech's deep awareness
                  of the particular requirements and difficulties that farmers encounter enables them to increase output, enhance herd health,
                  and maximize profitability. Rumeno Farmotech is dedicated to raising the bar for small ruminant farming and providing farmers with sustained
                  success through individualized consultancy and creative approaches.</p>
              </div>
            </div>

          </div>


        </div>

      </div>

      {/* Faq Section Start */}
      <div className='bg-white'>
        <div className='container'>
          <Faq faqs={FarmingFaq} showHeading={false} />
        </div>
      </div>

      {/* Footer Section Start */}
      <Footer />
    </>
  )
}

export default GoatFarmingService;
