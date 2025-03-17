import React from 'react'

// Images
import ErrorImg from "../../assets/img/error-img/404.png";
import Cow from "../../assets/img/error-img/error-cow.png";
import { NavLink } from 'react-router-dom';
const ErrorPage = () => {
    return (
        <>
            <div className='min-vh-100 bg-sky-blue-color d-flex flex-column align-items-center justify-content-center'>
                <div className='d-flex align-items-end'>
                    <img src={ErrorImg} className='error-img' alt="Loading" />
                <img src={Cow} className='error-cow ms-lg-5' alt="Loading" />
                </div>
                <NavLink to={"/"}>
                <button className='btn error-btn px-4 py-2 text-white text-uppercase mt-4'>Go Home</button>
                </NavLink>
            </div>
        </>
    )
}

export default ErrorPage;