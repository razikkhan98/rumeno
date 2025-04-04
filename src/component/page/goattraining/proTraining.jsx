import React from 'react'


import Mainnav from "../../common/navbar/mainnavbar";
import Image1 from "../../assets/img/goattraining/goattraining.png";

const ProTraining = () => {
    return (
        <>
            <Mainnav />
            <div className="training pt-5">
                <div className=" pt-lg-5">
                    <div className="row">
                        <div style={{ background: "#F4FAFD" }}>
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-lg-12 px-5">
                                        <nav aria-label="breadcrumb" className="py-2 px-3">
                                            <ol className="breadcrumb mb-0">
                                                <li className="breadcrumb-item">Home</li>
                                                <li className="breadcrumb-item active">
                                                    Goat farming training
                                                </li>
                                            </ol>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-9 py-4 pe-lg-5 ps-lg-5">
                            <div className="goattraining-content ps-lg-4 px-2">
                                <p className="goattraining-title">
                                    Pro-Training for Commercial Goat Farming
                                </p>
                                {/* <p className="goattraining-subtitle">
                                    Training Program on Rearing of Goats for 30 days
                                </p> */}
                                <div className="goattraining-text">
                                    <p>
                                        Commercial Business starts right from the selecting the right material or animals and changing the raw materials
                                        or animals in the a product. A product must be made of the best quality and quality must be maintained right from
                                        the production floor to the customer desk with the best possible delivery method. ZamZam Ruminant farmotech is expert
                                        in ruminant rearing and providing training Advance Farmhouse Training for the production techniques and Commercial
                                        Pro-Training is for the business needs in all aspects for establishing higher profit and minimizing risks
                                    </p>
                                </div>
                                <div className="goattraining-list">
                                    <p className="goattraining-subtitle2">
                                        Features of Pro-Training of Commercial Livestock Rearing are following
                                    </p>
                                    <ul>
                                        <li>Branding Management Skills</li>
                                        <li>Quality Management Skills</li>
                                        <li>Customer Relationship Management Skills Using Online CRM</li>
                                        <li>Surveys Methods</li>
                                        <li>Using Excel for day to day calculation and keeping records</li>
                                        <li>Analytical tools and methods for analyzing performance</li>
                                        <li>Social Networking methods to grow customers</li>
                                        <li>Commercial Advertising Methods</li>
                                        <li>Online Sales and Marketing Methods</li>
                                        <li>Advance Farmhouse Training</li>
                                        <li>Producing Byproducts </li>
                                        <li>Artificial Insemination overview</li>
                                        <li>Best Practice Methods</li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="goattraining-img">
                                <img src={Image1} alt="Loading" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProTraining;