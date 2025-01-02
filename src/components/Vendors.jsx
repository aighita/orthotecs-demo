import React from 'react';
import "../styles/Vendors.scss"

const Vendors = () => {
    return (
        <div
            id="vendors"
        >
            <div className="text">
                <h3>UNSERE PARTNER</h3>
                <h1>Best Vendors</h1>
            </div>

            <div className="distributors">
                <div className='row-1'>
                    <div className="become-partner">
                        <p>Start to sell your products <br></br> with the help of OrthoTecs</p>
                        <button>Become a partner</button>
                    </div>
                    <img src="/assets/images/vendors/brand5.png" />
                    <img src="/assets/images/vendors/brand1.png" />
                    <img src="/assets/images/vendors/brand2.png" />
                </div>
                
                <div className='row-2'>
                    <img src="/assets/images/vendors/brand6.png" />
                    <img src="/assets/images/vendors/brand7.jpeg" />
                    <img src="/assets/images/vendors/brand4.png" />
                    <img src="/assets/images/vendors/brand3.png" />
                </div>
            </div>
        </div>
    );
};

export default Vendors;
