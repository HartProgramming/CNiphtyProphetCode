import './Input.css';
import React from 'react';

function Input(props){

    return(
        <div className='input-row'>
            <label className='input-label' for={props.id}>{props.name}</label>
            <input step={props.step} onChange={props.onChange} className='input' id={props.id} value={props.value} type={props.type}></input>
        </div>
    )
}

export default Input;