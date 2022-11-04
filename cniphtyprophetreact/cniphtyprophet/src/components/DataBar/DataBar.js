import Button from "../UI/Button";
import classes from "./DataBar.module.css";
import React from "react";

function DataBar(props) {
  return (
    <div className={classes.div}>
      <Button style={classes.button} title={"CNFT"}></Button>
      <Button style={classes.button1} title={"Crypto"}></Button>
    </div>
  );
}

export default DataBar;
