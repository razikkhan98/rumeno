import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../../navbar/mainnavbar";
import { Button } from "react-bootstrap";
import productImage from "../../../assets/img/addtocart/addproduct.png";

const Addtocart = () => {
  const [quantity, setQuantity] = useState(0);

  const handleDecrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  return (
    <>
      <Navbar />
      <div className="addtocart py-5">
        <div className="container pt-lg-5">
          <div className="row pt-lg-3">
            <div className="col-lg-6">
              <div className="addtocart-img">
                <img
                  src={productImage}
                  alt="Minromix Mineral Mixture"
                  className="img-fluid border rounded"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="addtocart-content">
                <h4>
                  Minromix | Mineral Mixture For Cattle, Goat, Poultry, Dog And
                  Cat
                </h4>
                <div className="d-flex align-items-center">
                  <span className="text-warning">⭐☆☆☆☆</span>
                  <span className="ms-2">3.5 (312 Reviews)</span>
                </div>
                <h3 className="mt-2">
                  ₹ 285 /- <span className="badge bg-danger ms-2">5% Off</span>
                </h3>

                <h6 className="mt-3">Select Size</h6>
                <div className="d-flex gap-2">
                  <Button variant="outline-secondary">₹ 285 /- 1 Kg</Button>
                  <Button variant="outline-secondary">₹ 285 /- 5 Kg</Button>
                  <Button variant="outline-secondary">₹ 285 /- 25 Kg</Button>
                </div>

                <h6 className="mt-3">Delivery</h6>
                <p>
                  <strong>4-5 working days</strong>
                </p>
                <p className="text-muted">
                  Refundable for any manufacturing defect within 1 week
                </p>
                <div className="d-flex align-items-center">
                  <div
                    className="d-flex align-items-center justify-content-between border border-danger"
                    style={{
                      background: "#ffffff",
                      width: "200px",
                      height: "56px",
                      borderRadius: "8px",
                    }}
                  >
                    <Button
                      className=" text-dark border-0 fs-3"
                      style={{
                        background: "#ffffff",
                      }}
                      onClick={handleDecrease}
                    >
                      -
                    </Button>
                    <span className="mx-3 fs-4">{quantity}</span>
                    <Button
                      onClick={handleIncrease}
                      className="fs-3 text-dark border-0"
                      style={{
                        background: "#ffffff",
                      }}
                    >
                      +
                    </Button>
                  </div>

                  <Button
                    className=" mx-3 border-0"
                    style={{
                      background: "#EC7229",
                      width: "200px",
                      height: "56px",
                      borderRadius: "8px",
                    }}
                  >
                    Add To Cart
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Addtocart;
