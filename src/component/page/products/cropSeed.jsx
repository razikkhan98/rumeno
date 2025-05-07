import React from 'react'

// Import Common Components
import Navbar from '../../common/navbar/mainnavbar'
import Header from '../../common/Header/header'
import Footer from '../../common/footer'
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const CropSeed = () => {
    return (
        <>
            <Navbar />
            <div className='bg-white products'>
                <div className="pt-lg-4">
                    <Header title="Home" subtitle="Crop Seed" />
                </div>
                <div className='service-bg-color'>
                    <div className='container '>
                        <div className='row py-5'>
                            <div className='col-lg-12 pt-4 d-flex flex-column align-items-center justify-content-center'>
                                <h1 className='text-center'>Coming Soon....</h1>
                                <div className='farm-btn py-4'>
                                    <NavLink to={"/"}>
                                        <Button className='btn rounded-pill text-white p-0' >
                                            Go To Home
                                        </Button>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Section Start */}
            <Footer />
        </>
    );
};

export default CropSeed;