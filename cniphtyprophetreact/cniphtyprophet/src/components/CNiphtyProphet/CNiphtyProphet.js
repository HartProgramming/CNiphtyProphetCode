import React, { useEffect, useState, useRef } from "react";
import Card from "../UI/Card";
import Borrow from "./Borrow/Borrow";
import Lend from "./Lend/Lend";
import CNFT from "./CNFT/CNFT";
import Crypto from "./Crypto/Crypto";
import classes from "./CNiphtyProphet.module.css";
import Loading from "../UI/Loading";
import Button from "../UI/Button";
import SummaryAnalysis from "./SummaryAnalysis";

function CNiphtyProphet() {
  const [lendData, setLendData] = useState(null);
  const [borrowData, setBorrowData] = useState(null);
  const [cnftData, setCNFTData] = useState(null);
  const [cryptoData, setCryptoData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [step1, setStep1] = useState(true);
  const [lend, setLend] = useState(false);
  const [lendSummary, setLendSummary] = useState(false);
  const [processRestart, setProcessRestart] = useState(false);
  const [borrow, setBorrow] = useState(false);
  const [cnft, setCNFT] = useState(false);
  const [crypto, setCrypto] = useState(false);
  const [borrowSummary, setBorrowSummary] = useState(false);

  const BorrowProcessHandler = () => {
    setStep1(false);
    setBorrow(true);
  };

  const LendProcessHandler = () => {
    setStep1(false);
    setLendSummary(false)
    setLend(true);
    console.log(lend)
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1200);
  }, []);

  useEffect(() => {
    if(processRestart === true){
      setLend(false);
      setLendSummary(false);
      setStep1(true);
      setProcessRestart(false)
      console.log('process')
    }
  }, [processRestart, lend, lendSummary, step1])

  return (
    <>
      <Card className={classes.container}>
        {step1 && (
          <>
            <div className={classes.header}>
              <h2>Choose your collateral position</h2>
              <hr className={classes.hr}></hr>
            </div>
            <div className={classes.buttonProcessContainer}>
              <Button
                onClick={BorrowProcessHandler}
                style={classes.button}
                title="Borrow"
              />
              <Button
                onClick={LendProcessHandler}
                style={classes.button}
                title="Lend"
              />
            </div>
          </>
        )}
        {lend && <Lend closeLend={setLend} openSummary={setLendSummary} summaryLendData={setLendData} header={classes.header}/>}
        {lendSummary && <SummaryAnalysis restart={setProcessRestart} data={lendData}/>}
        {borrow && <Borrow closeBorrow={setBorrow} openCNFT={setCNFT} summaryBorrowData={setBorrowData}/>}
        {cnft && <CNFT cnftData={setCNFTData} data={borrowData} closeCNFT={setCNFT} openCrypto={setCrypto}/>}
        {crypto && <Crypto cryptoData={setCryptoData} data={borrowData} closeCrypto={setCrypto} openSummary={setBorrowSummary}/>}
      </Card>
    </>
  );
}

export default CNiphtyProphet;
