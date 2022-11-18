import React, { useEffect, useState } from "react";
import classes from "./SummaryAnalysis.module.css";
import SummaryAnalysisItem from "./SummaryAnalysisItem";
import Button from "../UI/Button";

const SummaryAnalysis = (props) => {
  const displayDataArr = props.data.map((x) => [x.Name, x.Data]);

  const displayItems = displayDataArr.map((x) => (
    <SummaryAnalysisItem label={x[0]} item={x[1]} />
  ));

  useEffect(() => {
    console.log(props.data);
  }, []);

  const RestartHandler = () => {
    props.restart(true);
  };

  return (
    <>
      <h2 className={classes.header}>Summary Analysis</h2>
      <div className={classes.div}>{displayItems}</div>
      <div className={classes.buttoncontainer}>
        <Button
          style={classes.button}
          onClick={RestartHandler}
          title="Start Over"
        />
      </div>
    </>
  );
};

export default SummaryAnalysis;
