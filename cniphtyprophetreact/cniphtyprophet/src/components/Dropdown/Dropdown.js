import React from "react";
import classes from './Dropdown.module.css';

function Dropdown(props){

    return (
        <div className={classes.selectOptionsDiv}>
            <input key={props.key} onChange={props.onChange} className={classes.selectOptionsOption} type='radio' defaultChecked={props.defaultChecked} id={props.idDropdown} value={props.valueDropdown} name={props.name} checked={props.checked}/>
            <p className={classes.selectOptionsText}>{props.textDropdown}</p>
        </div>
    ) 
}

export default Dropdown;