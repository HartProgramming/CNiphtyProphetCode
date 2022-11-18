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
  /* Sets Lending Data pulled from the Lend component */
  const [lendData, setLendData] = useState(null);
  /* Sets Borrow Data pulled from the Borrow component */
  const [borrowData, setBorrowData] = useState([]);
  /* Sets CNFT data pulled from the CNFT component */
  const [cnftData, setCNFTData] = useState([]);
  /* Sets Crypto data pulled from the Crypto component */
  const [cryptoData, setCryptoData] = useState(null);
  /* Sets state of loading screen */
  const [loading, setLoading] = useState(true);
  /* Sets initial state of the app */
  const [step1, setStep1] = useState(true);
  /* Sets the lend component state in order to initiate mount of component */
  const [lend, setLend] = useState(false);
  /* Sets the lend summary page state in order to initiate mount of the component */
  const [lendSummary, setLendSummary] = useState(false);
  /* Initiates the app process to restart */
  const [processRestart, setProcessRestart] = useState(false);
  /* Sets the borrow component state to initiate mount of component */
  const [borrow, setBorrow] = useState(false);
  /* Sets the cnft component state to initiate mount of component */
  const [cnft, setCNFT] = useState(false);
  /* Sets the crypto component state to initiate mount of component */
  const [crypto, setCrypto] = useState(false);
  /* Sets the borrow summary component state to initiate mount of component */
  const [borrowSummary, setBorrowSummary] = useState(false);
  /* Sets the previous page state from CNFT to Borrow */
  const [borrowPrevious, setBorrowPrevious] = useState(false);
  /* Sets the complete data for Borrow summary */
  const [summaryBorrowData, setSummaryBorrowData] = useState([]);

  /* Handler will mount the borrow component */
  const BorrowProcessHandler = () => {
    setStep1(false);
    setBorrow(true);
  };

  /* Handler will mount the lend component */
  const LendProcessHandler = () => {
    setStep1(false);
    setLendSummary(false)
    setLend(true);
    console.log(lend)
  };

  /* Checks whether the process is restarting and will reset component
  mount states */
  useEffect(() => {
    if(processRestart === true){
      setLend(false);
      setLendSummary(false);
      setBorrow(false);
      setBorrowSummary(false);
      setStep1(true);
      setProcessRestart(false)
      console.log('process')
    }
  }, [processRestart, lend, lendSummary, step1])

  let combined;
  useEffect(() => {
   combined = summaryBorrowData.concat(cnftData, cryptoData)
   setSummaryBorrowData(combined)
    console.log(combined)
  },[cryptoData])

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
        {lend && <Lend closeLend={setLend} previous={setProcessRestart} openSummary={setLendSummary} summaryLendData={setLendData} header={classes.header}/>}
        {lendSummary && <SummaryAnalysis restart={setProcessRestart} data={lendData}/>}
        {borrow && <Borrow header={classes.header} previous={setProcessRestart} closeBorrow={setBorrow} openCNFT={setCNFT} data={setBorrowData} summaryBorrowData={setSummaryBorrowData}/>}
        {cnft && <CNFT previous={setBorrow} cnftData={setCNFTData} data={borrowData} closeCNFT={setCNFT} openCrypto={setCrypto}/>}
        {crypto && <Crypto previous={setCNFT} cryptoData={setCryptoData} data={borrowData} closeCrypto={setCrypto} openSummary={setBorrowSummary}/>}
        {borrowSummary && <SummaryAnalysis restart={setProcessRestart} data={summaryBorrowData} />}
      </Card>
    </>
  );
}

export default CNiphtyProphet;
