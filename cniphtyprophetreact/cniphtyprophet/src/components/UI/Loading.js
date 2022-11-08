import React from "react";
import Card from "./Card";
import classes from './Loading.module.css';
import logo from './CNiphtyLogoNoWordTrans.svg';

function Loading(props){

    const container = `${classes.container} ${props.container}`
    const img = `${classes.logo} ${props.logo}`;

    return(
        <Card className={container}>
            <h3>Loading...</h3>
            <img className={img} src={logo} />
        </Card>
    )
}

export default Loading;