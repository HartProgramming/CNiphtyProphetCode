import React from "react";
import classes from './Card.module.css';
import add from 'classnames';

function Card(props){

    return(
        <div className={add(classes.div, props.className)}>
            {props.children}
        </div>
    )
}

export default Card;