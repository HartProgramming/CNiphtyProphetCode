import React from "react";
import Input from "../../Input/Input";
import classes from "./Crypto.module.css";

function Crypto(props) {
  return (
    <>
      <h2 className={props.header}>Crypto Trade</h2>
      <div className={props.container}>
        <h2>Crypto</h2>
        <Input title="Coin Price" />
        <Input title="Borrowed Amount ADA" />
        <Input title="Borrowed Amount ($)" />
        <Input title="Purchase Price" />
        <Input title="Amount" />
        <Input title="Total Invested" />
        <Input title="Borrowed Payment ADA" />
        <Input title="Borrowed Payment ($)" />
      </div>
    </>
  );
}

export default Crypto;
