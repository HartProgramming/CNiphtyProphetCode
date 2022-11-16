import React from "react";
import { useState, useEffect } from "react";
import Input from "../../Input/Input";
import ADAprice from "../ADAprice/ADAprice";
import classes from '../CNiphtyProphet.module.css';
import Button from "../../UI/Button";

function Borrow(props) {

  const initialState = () => Number(window.localStorage.getItem('length')) || 0

  /* Set Value State */
  const [ADAPriceSOL, setADAPriceSOL] = useState(null);
  const [adaEOL, setADAEol] = useState(null);
  const [repaymentBorrow, setRepaymentBorrow] = useState(null);
  const [lengthBorrow, setLengthBorrow] = useState(initialState);
  const [interestBorrow, setInterestBorrow] = useState(null);
  const [loanValueBorrow, setLoanStateBorrow] = useState(0);
  const [loanWInterestBorrow, setLoanInterestBorrow] = useState(null);
  const [profitLoss, setProfitLoss] = useState(null);
  const [profitLossADA, setProfitLossADA] = useState(null);
  const [loanValueDollars, setLoanValueDollars] = useState(null);
  const [repaymentInterestBorrow, setRepaymentInterestBorrow] = useState(null);
  const [adaInterestCharged, setAdaInterestCharged] = useState(null);
  const [adaBreakEvenPrice, setADABreakEvenPrice] = useState(null);
  const [repayInterestPlusLoan, setRepayInterestPlusLoan] = useState(0);

  /* ADA price at start of loan function */
  const SetADAPriceSOL = (e) => {
    setADAPriceSOL(e.target.value);
  };

  /* Loan value in ADA requested */

  const SetLoanValueADA = (e) => {
    setLoanStateBorrow(e.target.value);
  };

  /* End of loan ADA price or buy back price */
  const SetBuyBack = (e) => {
    setADAEol(e.target.value);
  };

  /* Interest rate set function for loan */
  const SetInterestBorrow = (e) => {
    setInterestBorrow(e.target.value);
  };

    const ChangeFocus = (e) => {
      setTimeout(() => {
        e.target.type = 'number'
      e.target.value = "";
      }, 10);
    };

  /* Mounts states of every input on page load */

  useEffect(() => {
      setADAEol("Set Buy Back ADA Price");
      setRepaymentBorrow();
      setADAPriceSOL("Set ADA Price at Loan");
      setInterestBorrow("Set Interest Rate");
      setLoanStateBorrow("Set Loan Value");
      setLoanInterestBorrow();
      setProfitLoss();
      setProfitLossADA();
      setLoanValueDollars();
      setRepaymentInterestBorrow();
      setAdaInterestCharged();
      setADABreakEvenPrice();
      setRepayInterestPlusLoan("Set");
  }, []);

  /* UseEffect manages updating the various inputs without direct input
    that require calculation */

  useEffect(() => {      
    setLoanValueDollars(
      (ADAPriceSOL * loanValueBorrow).toFixed(2).toLocaleString()
    );
    setRepaymentBorrow((adaEOL * loanValueBorrow).toFixed(2).toLocaleString());
    console.log("hi");
    if (ADAPriceSOL === undefined && isNaN(adaBreakEvenPrice)) {
      setADABreakEvenPrice("");
    } else if (ADAPriceSOL > 0) {
      setADABreakEvenPrice((ADAPriceSOL * 0.95).toFixed(2).toLocaleString());
    }
    setProfitLoss(
      (
        parseFloat(loanValueDollars) - parseFloat(repayInterestPlusLoan)
      ).toFixed(2)
    );
    setLoanInterestBorrow(
      (loanValueBorrow * (1 + interestBorrow / 100)).toFixed(2).toLocaleString()
    );
    if (loanWInterestBorrow !== 0) {
      setProfitLossADA((profitLoss / adaEOL).toFixed(2).toLocaleString());
      setAdaInterestCharged(
        (loanWInterestBorrow - loanValueBorrow).toFixed(2).toLocaleString()
      );
    }
    setRepaymentInterestBorrow(
      parseFloat(adaEOL * adaInterestCharged)
        .toFixed(2)
        .toLocaleString()
    );

    setRepayInterestPlusLoan(
      (parseFloat(repaymentInterestBorrow) + parseFloat(repaymentBorrow))
        .toFixed(2)
        .toLocaleString()
    );
      /* Data of the various states lifted up as an object via setData prop */
    const borrowData = {
      loanValueBorrow: loanValueBorrow,
      loanWInterestBorrow: loanWInterestBorrow,
      loanValueDollars: loanValueDollars,
      repayInterestPlusLoan: repayInterestPlusLoan
    };
    props.summaryBorrowData(borrowData);
  }, [
    loanValueBorrow,
    loanValueDollars,
    repayInterestPlusLoan,
    repaymentInterestBorrow,
    repaymentBorrow,
    adaEOL,
    adaInterestCharged,
    profitLoss,
    profitLossADA,
    loanWInterestBorrow,
    interestBorrow,
    ADAPriceSOL,
    adaBreakEvenPrice,
  ]);

    /* Loan Length function */
    const SetLoanLengthBorrow = (e) => {
      setLengthBorrow(e.target.value);
    };

    const CNFTHandler = () => {
      props.openCNFT(true);
      props.closeBorrow(false);
    }

  useEffect(() => {
    window.localStorage.setItem('length', lengthBorrow);
    console.log(lengthBorrow)
    console.log('set')
  }, [lengthBorrow]);

  return (
    <>
      <h2 className={props.start}>Borrow</h2>
      <h4 className={props.start}>Fill out first</h4>
      <div className={props.container}>
        <Input
          onFocus={ChangeFocus}
          title="Length(Days)"
          name="borrow-length-days"
          onChange={SetLoanLengthBorrow}
          id="loan-length"
          type='text'
          inputClass={classes.input}
          value={lengthBorrow}
        ></Input>
        <ADAprice></ADAprice>
        <Input
          onFocus={ChangeFocus}
          step=".01"
          title="ADA Price($) @ Start of Loan/Sale of ADA"
          name="ada-price-sol"
          onChange={SetADAPriceSOL}
          inputClass={classes.input}
          id="ada-price-sol"
          value={ADAPriceSOL}
        ></Input>{" "}
        <Input
          onFocus={ChangeFocus}
          step="1"
          title="Loan Value ADA"
          name="borrow-loan-value-ada"
          onChange={SetLoanValueADA}
          inputClass={classes.input}
          id="loan-value"
          value={loanValueBorrow}
        ></Input>
        <Input
          title="Loan Value ($)"
          name="borrow-loan-value-dollar"
          readonly
          id="loan-value"
          type="number"
          value={loanValueDollars}
        ></Input>
        <Input
          onFocus={ChangeFocus}
          step=".5"
          title="Interest %"
          name="borrow-interest"
          onChange={SetInterestBorrow}
          inputClass={classes.input}
          id="loan-interest"
          value={interestBorrow}
        ></Input>
        <Input
          title="Loan w/Interest ADA"
          name="borrow-loan-interest-with-ada"
          readonly
          id="loan-value-interest"
          type="number"
          value={loanWInterestBorrow}
        ></Input>
        <Input
          title="Interest Charged ADA"
          name="borrow-loan-interest-charged-ada"
          readonly
          id="interest-charged-ada"
          type="number"
          value={adaInterestCharged}
        ></Input>
        <Input
          title="Break Even ADA Price ($)"
          name="break-even-ada-price"
          readonly
          step=".01"
          id="break-even-price"
          type=" number"
          value={adaBreakEvenPrice}
        ></Input>
        <Input
          onFocus={ChangeFocus}
          title="Buy back ADA Price ($)"
          name="buy-back-ada-price"
          onChange={SetBuyBack}
          inputClass={classes.input}
          step=".01"
          id="buy-back"
          value={adaEOL}
        ></Input>
        <Input
          title="Repayment($) Exclude Interest"
          name="repay-exclude-interest-dollar"
          readonly
          id="repay"
          type="number"
          value={repaymentBorrow}
        ></Input>
        <Input
          title="Interest Repaid ($)"
          name="interest-repay-dollar"
          readonly
          id="repay-interest"
          type="number"
          value={repaymentInterestBorrow}
        ></Input>
        <Input
          title="Interest + Loan ($)"
          name="interest-plus-loan-dollar"
          readonly
          id="repay-interest-plus-loan"
          type="number"
          value={repayInterestPlusLoan}
        ></Input>
        <Input
          title="Profit/Loss($)"
          name="profit-loss-dollar"
          readonly
          id="profit-loss"
          type="number"
          value={profitLoss}
        ></Input>
        <Input
          title="Profit/Loss ADA"
          name="profit-loss-ada"
          readonly
          id="profit-loss-ada"
          type="number"
          value={profitLossADA}
        ></Input>
      </div>
      <Button onClick={CNFTHandler} title='Next Step'/>
    </>
  );
}

export default Borrow;
