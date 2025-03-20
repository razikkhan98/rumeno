import React from 'react'

// Import React Icons
import { PiSlidersHorizontalBold, PiFunnelBold } from "react-icons/pi";

const Header = ({ title, subtitle, products, showSortFilter = false }) => {
    return (
        <>
            <div className='bg-light-sky-blue-color pb-4 pt-4 d-flex align-items-center'>
                <div className='container d-flex justify-content-between align-items-center'>
                    <div className='font-14-400 d-flex'>
                        <div className='text-gray-color pe-1'>{title}</div>
                        <div className='text-chinese-black-color header-subtitle w-50 text-truncate'>/ {subtitle}</div>
                    </div>
                    <div className='font-16-500 text-color-orange'>{products}</div>
                    {showSortFilter && (
                        <div className='d-flex align-items-center text-muted-gray-color justify-content-center'>
                            <div className='me-4 font-16-400'>Sort <PiSlidersHorizontalBold className='fs-4' /></div>
                            <div className='font-16-400'>Filter <PiFunnelBold className='fs-4' /></div>
                        </div>
                    )}
                </div>

            </div>
        </>
    )
}

export default Header;