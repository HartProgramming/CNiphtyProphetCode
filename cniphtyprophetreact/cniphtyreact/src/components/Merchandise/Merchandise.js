import React from 'react';
import './Merchandise.css';
import MerchHeader from './MerchHeader.svg';


function Merchandise() {


    return (
        <div>
            <img className='merch-header' alt='Merchandise Header image' src={MerchHeader} />
            <div className='merch-container'>
                <div className='merch-info'>
                    <h2 className='merch-h2'>Visit Our <a>Printify</a> Store</h2>
                    <ul className='merch-list'>
                        <li>Shirts</li>
                        <li>Mugs</li>
                        <li>Socks</li>
                        <li>Mousepads</li>
                        <li>Much More...</li>
                    </ul>
                </div>
            </div>
            <div className='merch-proceeds'>
                <h3>All proceeds are reinvested into the CNiphty brand.
                    Visit our Discord to take part in votes for the business.
                </h3>
            </div>
        </div>
    )
}

export default Merchandise;