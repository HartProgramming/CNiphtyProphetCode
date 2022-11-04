import React from "react";
import Card from "./Card";
import classes from './Loading.module.css';
import logo from './CNiphtyLogoNoWordTrans.svg';

function Loading(){

    return(
        <Card className={classes.container}>
            <h3>Loading...</h3>
            <img className={classes.logo} src={logo} />
        </Card>
    )
}

export default Loading;