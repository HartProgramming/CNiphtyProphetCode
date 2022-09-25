import React from "react";
import './Donate.css';
import DonateHeader from './DonateHeader.svg';

function Donate(){


    return(
        <div>
            <img className="donate-header" alt='Donate header image' src={DonateHeader}/>
        </div>
    )
}

export default Donate