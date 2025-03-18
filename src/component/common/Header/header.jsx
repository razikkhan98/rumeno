import React from 'react'

// Import React Icons
import { PiSlidersHorizontalBold, PiFunnelBold } from "react-icons/pi";

const Header = () => {
    return (
        <>
            <div className='bg-light-sky-blue-color pb-3 pt-4 d-flex align-items-center'>
                <div className='container d-flex justify-content-between align-items-center'>
                    <div className='font-14-400'>
                        <span className='text-gray-color pe-1'>Products</span>
                        <span className='text-chinese-black-color'>/ Goat Suppliment</span>
                    </div>
                    <div className='font-16-500 text-color-orange'>27 Products</div>
                    <div className='d-flex align-items-center text-muted-gray-color justify-content-center'>
                        <div className='me-4 font-16-400'>Sort <PiSlidersHorizontalBold className='fs-4' />
                        </div>
                        <div className='font-16-400'>Filter <PiFunnelBold className='fs-4' /></div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Header;