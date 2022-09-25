import './Input.css';
import React from 'react';

function Input(props){

    return(
        <div className='input-row'>
            <label className='input-label' for={props.for}>{props.name}</label>
            <input className='input' id={props.id} value={props.value} type='number'></input>
        </div>
    )

}

export default Input;