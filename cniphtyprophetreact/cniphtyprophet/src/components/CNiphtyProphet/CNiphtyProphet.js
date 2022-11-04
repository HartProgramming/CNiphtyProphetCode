import React from "react";
import Card from "../UI/Card";
import Borrow from "./Borrow/Borrow";
import Lend from "./Lend/Lend";
import CNFT from "./CNFT/CNFT";
import Crypto from './Crypto/Crypto';
import classes from "./CNiphtyProphet.module.css";

function CNiphtyProphet(props) {

    console.log(borrowData);

    const borrowData = {};

  return (
    <Card className={classes.container}>
      <div className={classes.panelcontainer}>
        <Card className={classes.panelBorrow}>
            <Borrow header={classes.header} container={classes.inputscontainer}/>
        </Card>
        <Card className={classes.panelLend}>
            <Lend header={classes.header} container={classes.inputscontainer}/>
        </Card>
      </div>
      <div className={classes.panelcontainer}>
        <Card className={classes.panelCNFT}>
            <CNFT header={classes.header} container={classes.inputscontainer}/>
        </Card>
        <Card className={classes.panelCrypto}>
            <Crypto header={classes.header} container={classes.inputscontainer}/>
        </Card>
      </div>
    </Card>
  );
}

export default CNiphtyProphet;
