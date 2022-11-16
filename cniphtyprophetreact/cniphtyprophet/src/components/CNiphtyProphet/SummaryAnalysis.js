import React, { useEffect, useState } from "react";
import classes from './SummaryAnalysis.module.css';
import SummaryAnalysisItem from "./SummaryAnalysisItem";
import Button from "../UI/Button";

const SummaryAnalysis = (props) => {

    const [restart, setRestart] = useState(false)

    console.log(props.data)

    const displayItems = props.data.map(x => <SummaryAnalysisItem label={x[0]} item={x[1]}/>)

    useEffect(() => {
        console.log(props.data)
    },[])

    const RestartHandler = () => {
        props.restart(true)
    }

    return(
        <>
            <h2 className={classes.header}>Summary Analysis</h2>
            <div className={classes.div}>
                {displayItems}
            </div>
            <Button onClick={RestartHandler} title='Start Over'/>
        </>
    )
}

export default SummaryAnalysis;