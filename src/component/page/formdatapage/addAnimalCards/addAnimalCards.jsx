import React from 'react'
import Sidebar from '../../sidebar';
import Navbar from "../../../common/navbar/mainnavbar";
import { Card } from "react-bootstrap";
import { NavLink } from 'react-router-dom';

// Images
import Purchase from "../../../assets/img/dashboard/purchase.svg";
import FarmEntry from "../../../assets/img/dashboard/farm entry.svg";

const AddAnimalCards = () => {
    const cardData = [
        {
            title: "Animal Purchase",
            cardborder: "card-orange-border",
            cardcircle: "card-orange-circle",
              img: Purchase,
            //   value: stats.TotalAnimals || " ",
            //   details: stats.TotalAnimalsData || [],
        },
        {
            title: "Animal Register",
            cardborder: "card-blue-border",
            cardcircle: "card-blue-circle",
              img: FarmEntry,
            //   value: stats.VaccineCount || " ",
            //   details: stats.VaccineData || [],
        },

    ];

    return (
        <>
            <div className="goat-form">
                <Navbar />
                <div className="row pt-5">
                    <div className="col-lg-2 py-5">
                        <Sidebar />
                    </div>

                    <div className="col-lg-10 px-4 py-5">
                        <p className="font-24-500 text-chinese-black-color ps-lg-3 mt-3">Add Animal</p>
                        <div className='row'>
                            {cardData?.map((card, index) => (
                                <div key={index} className="col-lg-3 col-md-6 px-4 pt-4">
                                    <NavLink to="/parentform" className={"text-decoration-none"}>
                                        <Card
                                            className={`dashboard-cards card-hover rounded-3 px-lg-4 py-4 ${card.cardborder}`}
                                        //   onClick={() => setSelectedCard(card)}
                                        >
                                            <div className="row gap-2 align-items-center justify-content-between">
                                                <div className="col-lg-3 col-3">
                                                    <div
                                                        className={`card-img-circle rounded-circle d-flex align-items-center justify-content-center ${card.cardcircle}`}
                                                    >
                                                        <img src={card.img} alt="Loading" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-7 col-7">
                                                    <Card.Title>{card.value}</Card.Title>
                                                    <Card.Subtitle className="mb-2 dashboard-card-title text-chinese-black-color">
                                                        {" "}
                                                        {card.title}
                                                    </Card.Subtitle>
                                                    {/* <Card.Body>This is some text within a card body.</Card.Body> */}
                                                </div>
                                            </div>
                                        </Card>
                                    </NavLink>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default AddAnimalCards;