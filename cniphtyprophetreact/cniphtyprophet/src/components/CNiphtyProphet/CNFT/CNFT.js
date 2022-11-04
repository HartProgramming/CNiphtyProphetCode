import React from "react";
import Input from "../../Input/Input";
import classes from "./CNFT.module.css";

const CNFT = (props) => {
  return (
    <>
      <h2 className={props.header}>CNFT Trade</h2>
      <div className={props.container}>
        <h3>Project</h3>
        <Input title="Floor Price" />
        <Input title="Borrowed Amount" />
        <Input title="Purchase Price" />
        <Input title="Borrowed Payment" />
        <Input title="Sale Price" />
        <Input title="Profit/Loss ADA" />
      </div>
    </>
  );
};

export default CNFT;
