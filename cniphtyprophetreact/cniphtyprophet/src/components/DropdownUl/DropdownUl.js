import classes from '../Dropdown/Dropdown.module.css';
import React from 'react';

function DropdownUl(props){


    return(
        <li>
            <label className={classes.selectBox} aria-hidden='aria-hidden' htmlFor={props.forDropdown}>{props.textDropdown}</label>
        </li> 
    )
}

export default DropdownUl;
