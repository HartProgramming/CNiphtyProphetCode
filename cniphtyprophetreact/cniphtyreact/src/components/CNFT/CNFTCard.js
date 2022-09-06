import './CNFTCard.css';
import React from 'react';

function CNFTCard(props) {

    return (
    
        <div className='cnft-card-div'>
            <img alt='imgprop' className='cnft-img' src={props.image}></img>
            <div className='div-ul'>
                <ul className='cnft-card-ul'>
                    <ul>
                        <li className='cnft-card-li li-project'>{props.project}</li>
                        <hr className='hr-change'></hr>
                    </ul>
                    <ul>
                        <li className='cnft-card-li li-cat'>Floor Price</li>
                        <hr></hr>
                        <li className='cnft-card-li'>{props.floor}</li>
                        <hr className='hr-change'></hr>
                    </ul>
                    <ul>
                        <li className='cnft-card-li li-cat'>Total Vol.</li>
                        <hr></hr>
                        <li className='cnft-card-li'>{props.volume}</li>
                        <hr className='hr-change'></hr>
                    </ul>
                    <ul>
                        <li className='cnft-card-li li-cat'>Mkt. Cap.</li>
                        <hr></hr>
                        <li className='cnft-card-li'>{props.mktCap}</li>
                    </ul>
                </ul>
                </div>
            </div>
            )
}

            export default CNFTCard;