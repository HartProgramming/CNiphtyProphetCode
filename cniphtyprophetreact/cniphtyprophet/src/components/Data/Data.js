import React, { useState } from "react";
import Button from "../UI/Button";
import CNFTData from "./CNFTData/CNFTData";
import CryptoData from "./CryptoData/CryptoData";
import classes from './Data.module.css';
import Card from "../UI/Card";

const Data = () => {

    const [dataCNFT, setDataCNFT] = useState(true);
    const [dataCrypto, setCryptoData] = useState(false);

    const CNFTDataHandler = () => {
        setCryptoData(false);
        setDataCNFT(true);
    }

    const CryptoDataHandler = () => {
        setDataCNFT(false)
        setCryptoData(true)
    }

  return (
    <Card className={classes.cardcontainer}>
      <div className={classes.buttoncontainer}>
        <Button onClick={CNFTDataHandler} style={classes.button} title='CNFT Data'/>
        <Button onClick={CryptoDataHandler} style={classes.button} title='Crypto Data'/>
      </div>
      {dataCNFT ? <CNFTData /> : <CryptoData />}
    </Card>
  );
};

export default Data;
