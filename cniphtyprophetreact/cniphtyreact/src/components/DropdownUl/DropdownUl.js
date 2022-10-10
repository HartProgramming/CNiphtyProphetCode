import '../Dropdown/Dropdown.css';
import React from 'react';

function DropdownUl(props){


    return(
        <li>
            <label className='select-box' aria-hidden='aria-hidden' htmlFor={props.forDropdown}>{props.textDropdown}</label>
        </li>
    )
}

export default DropdownUl;
