import React from 'react';
import './Home.css'

function Cardimg(props){

    return(
        <div className='div-row'>
            <div className='card-div'>
                <h2>{props.header}</h2>
                <ul className='card-list'>
                    <li className='list-item-home'>
                        {props.lineOne}
                    </li>
                    <li className='list-item-home'>
                        {props.lineTwo}
                    </li>
                    <li className='list-item-home'>
                        {props.lineThree}
                    </li>
                </ul>
            </div>
            <div className='card-image-div-right'>
                <img className='img' src={props.img} alt={props.alt} />
            </div>
        </div>
    )
}

export default Cardimg
