import CNFTProjectData from '../CNFTProjectData'
import './CNFTCard.css';
import React from 'react'
import Duquackinator from './DUQUACKINATOR.svg'


function CNFTCard(props) {

    console.log(CNFTProjectData)
    return (
        <div className='cnft-card-div'>
            <img className='cnft-img' src={Duquackinator}></img>
            <div className='div-ul'>
                <ul className='cnft-card-ul'>
                    <ul>
                        <li className='cnft-card-li li-project'>Project</li>
                        <hr className='hr-change'></hr>
                    </ul>
                    <ul>
                        <li className='cnft-card-li li-cat'>Floor Price</li>
                        <hr></hr>
                        <li className='cnft-card-li'>56</li>
                        <hr className='hr-change'></hr>
                    </ul>
                    <ul>
                        <li className='cnft-card-li li-cat'>Total Vol.</li>
                        <hr></hr>
                        <li className='cnft-card-li'>1.4M</li>
                        <hr className='hr-change'></hr>
                    </ul>
                    <ul>
                        <li className='cnft-card-li li-cat'>Mkt. Cap.</li>
                        <hr></hr>
                        <li className='cnft-card-li'>5M</li>
                    </ul>
                </ul>
                </div>
            </div>
            )
}

            export default CNFTCard;