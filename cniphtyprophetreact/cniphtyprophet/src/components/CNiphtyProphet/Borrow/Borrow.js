import React from "react";
import { useState, useEffect } from "react";
import Input from "../../Input/Input";
import ADAprice from "../ADAprice/ADAprice";
import classes from "../CNiphtyProphet.module.css";
import Button from "../../UI/Button";

function Borrow(props) {
  const initialLength = () =>
    Number(window.localStorage.getItem("borrow-length")) || 0;
  const initialSOL = () =>
    Number(window.localStorage.getItem("borrow-sol")) || 0;
  const initialEOL = () =>
    Number(window.localStorage.getItem("borrow-eol")) || 0;
  const initialInterest = () =>
    Number(window.localStorage.getItem("borrow-interest")) || 0;
  const initialRepay = () =>
    Number(window.localStorage.getItem("borrow-repay")) || 0;
  const initialLoanWInterest = () =>
    Number(window.localStorage.getItem("borrow-loanwinterest")) || 0;
  const initialBorrowPNL = () =>
    Number(window.localStorage.getItem("borrow-pnl$")) || 0;
  const initialPNLAda = () =>
    Number(window.localStorage.getItem("borrow-pnlAda")) || 0;
  const initialLoanValueDollar = () =>
    Number(window.localStorage.getItem("borrow-loanvalue$")) || 0;
  const initialRepayInterest = () =>
    Number(window.localStorage.getItem("borrow-repayinterest")) || 0;
  const initialBreakEven = () =>
    Number(window.localStorage.getItem("borrow-ada-breakeven")) || 0;
  const initialLoanValue = () =>
    Number(window.localStorage.getItem("borrow-length")) || 0;

  /* Set Value State */
  const [ADAPriceSOL, setADAPriceSOL] = useState(initialSOL);
  const [adaEOL, setADAEol] = useState(initialEOL);
  const [repaymentBorrow, setRepaymentBorrow] = useState(initialRepay);
  const [lengthBorrow, setLengthBorrow] = useState(initialLength);
  const [interestBorrow, setInterestBorrow] = useState(initialInterest);
  const [loanValueBorrow, setLoanStateBorrow] = useState(initialLoanValue);
  const [loanWInterestBorrow, setLoanInterestBorrow] = useState(
    initialLoanWInterest
  );
  const [profitLoss, setProfitLoss] = useState(initialBorrowPNL);
  const [profitLossADA, setProfitLossADA] = useState(initialPNLAda);
  const [loanValueDollars, setLoanValueDollars] = useState(
    initialLoanValueDollar
  );
  const [repaymentInterestBorrow, setRepaymentInterestBorrow] = useState(
    initialRepayInterest
  );
  const [adaInterestCharged, setAdaInterestCharged] = useState(null);
  const [adaBreakEvenPrice, setADABreakEvenPrice] = useState(initialBreakEven);
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
      e.target.value = "";
    }, 10);
  };

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
    const summaryBorrowData = [
      { Name: "Loan Value ADA", Data: loanValueBorrow },
      { Name: "Loan Value w/Interest ADA", Data: loanWInterestBorrow },
      { Name: "Loan Value Dollars", Data: loanValueDollars },
      {
        Name: "Repaid Amt. w/Interest (Based on EOL Price)",
        Data: repayInterestPlusLoan,
      },
    ];
    props.summaryBorrowData(summaryBorrowData);
    const borrowData = {
      loanValueBorrow: loanValueBorrow,
      loanWInterestBorrow: loanWInterestBorrow,
      loanValueDollars: loanValueDollars,
      repayInterestPlusLoan: repayInterestPlusLoan,
    };
    props.data(borrowData);
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
  };

  const PreviousHandler = () => {
    props.previous(true);
  };

  useEffect(() => {
    window.localStorage.setItem("borrow-length", lengthBorrow);
    window.localStorage.setItem("borrow-sol", ADAPriceSOL);
    window.localStorage.setItem("borrow-eol", adaEOL);
    window.localStorage.setItem("borrow-interest", interestBorrow);
    window.localStorage.setItem("borrow-repay", repaymentBorrow);
    window.localStorage.setItem("borrow-loanwinterest", loanWInterestBorrow);
    window.localStorage.setItem("borrow-pnl$", profitLoss);
    window.localStorage.setItem("borrow-pnlAda", profitLossADA);
    window.localStorage.setItem("borrow-loanvalue$", loanValueDollars);
    window.localStorage.setItem(
      "borrow-repayinterest",
      repaymentInterestBorrow
    );
    window.localStorage.setItem("borrow-ada-breakeven", adaBreakEvenPrice);
    window.localStorage.setItem("borrow-loanvalueada", loanValueBorrow);
  }, [
    lengthBorrow,
    adaBreakEvenPrice,
    adaEOL,
    ADAPriceSOL,
    interestBorrow,
    repaymentBorrow,
    loanWInterestBorrow,
    profitLoss,
    profitLossADA,
    loanValueDollars,
    loanValueBorrow,
  ]);

  return (
    <>
      <h2 className={classes.headerprocess}>Borrow - Shorting ADA</h2>
      <div className={props.container}>
        <Input
          onFocus={ChangeFocus}
          title="Length(Days)"
          name="borrow-length-days"
          onChange={SetLoanLengthBorrow}
          id="loan-length"
          type="number"
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
          type="number"
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
          type="number"
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
          type="number"
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
          type="number"
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
      <div className={classes.buttoncontainer}>
        <Button style={classes.buttonprocess} onClick={PreviousHandler} title="Previous" />
        <Button style={classes.buttonprocess} onClick={CNFTHandler} title="Next Step" />
      </div>
    </>
  );
}

export default Borrow;
