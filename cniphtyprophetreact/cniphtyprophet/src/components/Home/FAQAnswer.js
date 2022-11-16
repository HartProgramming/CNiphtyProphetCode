import React from "react";
import classes from './FAQAnswer.module.css';

const FAQAnswer = (props) => {


    return(
        <>
        <div className={classes.container}>
            <p className={classes.p}>{props.answer}</p>
        </div>
        </>
    )
}

export default FAQAnswer;