import React from "react";
import Navbar from "../../navbar/mainnavbar"

const Cart = () => {
    return(
        <>
        <Navbar />
        <div className="cart pt-5">
            <div className="container pt-lg-5">
                <div className="row pt-lg-3">
                    <div className="col-lg-10">
                        <h1>cart</h1>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Cart;