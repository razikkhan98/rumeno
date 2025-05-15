import React from 'react'
import Faq from '../faq';
import Footer from '../../common/footer';
import Navbar from '../../common/navbar/mainnavbar';

const ServiceFaq = () => {

    // FAQ Json
    const FarmingFaq = [
        {
            question: "1. What is a goat farming consultant?",
            answer:
                "A specialist who provides knowledgeable advice and assistance to goat farmers in order to maximize their farming operations is known as a consultant in goat farming. Advisors offer guidance on a range of topics related to goat husbandry, such as choosing a breed, feeding, maintaining health, developing breeding plans, and general farm administration.",
        },
        {
            question: "2. Why do I need a goat farming consultant?",
            answer: "You may enhance your goat farming methods, boost output, and optimize profits by working with a consultant who specializes in goat farming. Regardless of your level of experience, experts provide individualized solutions that are suited to your unique requirements and objectives.",
        },
        {
            question: "3. What services do goat farming consultants offer?",
            answer: "A wide range of services are provided by goat farming consultants, such as regulatory compliance support, nutrition analysis, breeding program planning, farm evaluations, herd health assessments, and techniques for controlling parasites. In order to assist farmers in overcoming obstacles and achieving their goals, they also offer continuing assistance and direction.",
        },
        {
            question: "4. How do I choose the right goat farming consultant?",
            answer: "Take into account aspects like their success history, reputation, experience, and level of skill when choosing a goat farming consultant. Seek advisors who are committed to sustainable and moral farming practices and who possess a thorough understanding of goat farming techniques.",
        },
        {
            question: "5. How can a goat farming consultant help me improve my farm's profitability & services?",
            answer: "You can find opportunities to boost productivity, cut expenses, and raise income by working with a consultant for goat farming. Consultants can assist you in achieving higher profitability and long-term success by improving productivity, optimizing herd management techniques, and putting in place efficient nutrition plans.",
        },
        {
            question: "6. Can a goat farming consultant help me with specific challenges I'm facing on my farm?",
            answer: "Absolutely, advisors for goat farming are skilled in handling a variety of problems that farmers may run into, including disease outbreaks, problems with reproduction, scarcity of feed, and environmental issues. Consultants collaborate closely with farmers to provide solutions that are specifically tailored to their requirements and conditions.",
        },
        {
            question: "7. How do I get started with a goat farming consultant?",
            answer: "Contacting a goat farming consultant and setting up an initial appointment is all it takes to get started. You can talk to the consultant about your farm's needs, issues, and ambitions during this consultation, and they can offer suggestions on how to assist you reach your goals.",
        },
    ];
    return (
        <>
          {/* Navbar */}
      <Navbar />
            <div className="bg-white pt-5">
                <div className="container">
                    <Faq faqs={FarmingFaq} showHeading={true} />
                </div>
            </div>
            {/* Footer Section Start */}
            <Footer />
        </>
    )
}

export default ServiceFaq;