import React from "react";
import Button from "./Button";
import logo from "./CNiphtyLogoNoWordTrans.svg";
import classes from "./Header.module.css";
const Header = () => {
  return (
    <div className={classes.container}>
      <div className={classes.imgDiv}>
        <img className={classes.img} src={logo} />
      </div>
      <div className={classes.header}>
        <h1>CNiphtyProphet</h1>
      </div>
      <div className={classes.buttonDiv}>
        <Button style={classes.button} title={"Soon"} />
      </div>
    </div>
  );
};

export default Header;
