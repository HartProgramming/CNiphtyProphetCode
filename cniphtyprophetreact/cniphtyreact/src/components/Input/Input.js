import './Input.css';
import React from 'react';

function Input(props){

    return(
        <div className='input-row'>
            <label className='input-label' for={props.id}>{props.title}</label>
            <input placeholder={props.placeholder} step={props.step} onFocus={props.onFocus} onChange={props.onChange} name={props.name} className='input' id={props.id} value={props.value} type={props.type}></input>
        </div>
    )
}

export default Input;