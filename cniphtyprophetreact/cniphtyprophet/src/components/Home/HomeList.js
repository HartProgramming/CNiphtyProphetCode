import React from "react";
import classes from "./HomeList.module.css";
import Modal from "../UI/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

const HomeList = (props) => {
  return (
    <>
      <Modal>
        <div className={classes.headerdiv}>
          <h2 className={classes.h2}>{props.header}</h2>
          <FontAwesomeIcon onClick={props.onClick} className={classes.icon} icon={faX} />
        </div>
        <hr className={classes.hr}></hr>
        <ul className={classes.ul}>{props.children}</ul>
      </Modal>
    </>
  );
};

export default HomeList;
