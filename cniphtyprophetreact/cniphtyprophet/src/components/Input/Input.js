import classes from './Input.module.css';
import React from 'react';

function Input(props){

    const div = `${classes.div} ${props.divClass}`;
    const label = `${classes.label} ${props.labelClass}`;
    const input = `${classes.input} ${props.inputClass}`;

    return(
        <div className={div}>
            <label className={label} htmlFor={props.id}>{props.title}</label>
            <input placeholder={props.placeholder} step={props.step} onFocus={props.onFocus} onChange={props.onChange} name={props.name} className={input} id={props.id} borrow={props.borrow} value={props.value} type={props.type}></input>
        </div>
    )
}

export default Input;