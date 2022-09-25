import React from 'react'
import './Home.css';

function Imgcard(props){

    return(
        <div className='div-row'>
            <div className='card-image-div-left'>
                <img className='img' alt={props.alt} src={props.image}></img>
            </div>
            <div className='left card-div-right'>
                <h2 className='card-header'>{props.header}</h2>
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
        </div>
    )
}

export default Imgcard