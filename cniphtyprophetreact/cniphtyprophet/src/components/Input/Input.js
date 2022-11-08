import classes from "./Input.module.css";
import React from "react";

function Input(props) {
  const div = `${classes.div} ${props.divClass}`;
  const label = `${classes.label} ${props.labelClass}`;
  const input = `${classes.input} ${props.inputClass}`;

  return (
    <div className={div}>
      <label className={label}>{props.title}</label>
      <input
        onFocus={props.onFocus}
        placeholder={props.placeholder}
        step={props.step}
        onChange={props.onChange}
        name={props.name}
        className={!props.inputClass ? classes.input : props.inputClass}
        id={props.id}
        borrow={props.borrow}
        value={props.value}
        type={props.type}
      ></input>
    </div>
  );
}

export default Input;
