import React from "react";
import classes from "./SummaryAnalysisItem.module.css";


const SummaryAnalysisItem = (props) => {


    return(
        <>
            <div className={classes.div}>
                <h3 className={classes.h3}>{props.label}</h3>
                <p className={classes.p}>{props.item}</p>
            </div>
        </>
    )
}

export default SummaryAnalysisItem;