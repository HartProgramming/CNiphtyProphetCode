import React from "react";
import classes from "./HomeList.module.css";

const HomeList = (props) => {
  return (
    <>
      <h2 className={classes.h2}>{props.header}</h2>
      <hr className={classes.hr}></hr>
      <ul className={classes.ul}>{props.children}</ul>
    </>
  );
};

export default HomeList;
