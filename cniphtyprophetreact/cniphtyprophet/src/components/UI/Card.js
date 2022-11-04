import React from "react";
import classes from './Card.module.css';

function Card(props){

    const std = `${classes.div} ${props.className}`

    return(
        <div className={std}>
            {props.children}
        </div>
    )
}

export default Card;