import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
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
            icon={faPlus}
          />
        </div>
      </div>
      {props.answer}
      <hr className={classes.hr}></hr>
    </>
  );
};

export default FAQ;
