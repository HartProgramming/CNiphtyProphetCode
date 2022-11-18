import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./FAQ.module.css";

const FAQ = (props) => {

  return (
    <>
      <div className={classes.container}>
        <div className={classes.faqContainer}>{props.question}</div>
        <div className={classes.iconcontainer}>
          <FontAwesomeIcon
            onClick={props.onClick}
            className={classes.icon}
            icon={props.icon}
          />
        </div>
      </div>
      {props.answer}
      <hr className={classes.hr}></hr>
    </>
  );
};

export default FAQ;
