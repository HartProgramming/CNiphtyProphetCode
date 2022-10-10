import './Dropdown.css';
import React from 'react';



function Dropdown(props) {

    return (
        <div className='select-options-div'>
            <input className='select-options-option' type='radio' id={props.idDropdown} value={props.valueDropdown} name='dropdown' />
            <p className='select-options-text'>{props.textDropdown}</p>
        </div>
    )
}

export default Dropdown;

