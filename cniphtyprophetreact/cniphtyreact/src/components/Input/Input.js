import './Input.css';
import React from 'react';

function Input(props){

    return(
        <div className='input-row'>
            <label className='input-label' htmlFor={props.id}>{props.title}</label>
            <input placeholder={props.placeholder} step={props.step} onFocus={props.onFocus} onChange={props.onChange} name={props.name} className={props.className} id={props.id} value={props.value} type={props.type}></input>
        </div>
    )
}

export default Input;