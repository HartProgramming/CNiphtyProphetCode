import classes from "./DataDisplay.module.css";
import DataBar from "../DataBar/DataBar";
import React from "react";
import CNFTData from "../CNFTData/CNFTData";

function DataDisplay() {
  return (
    <div className={classes.div}>
      <div className={classes.databar}>
        <DataBar />
      </div>
      <div>
        <CNFTData />
      </div>
    </div>
  );
}

export default DataDisplay;
