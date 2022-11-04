import React from "react";
import Input from "../../Input/Input";
import { useState, useEffect } from "react";
import Project from "../../Project/Project";
import classes from './Lend.module.css';
import ADAprice from "../ADAprice/ADAprice";

function Lend(props) {
  /* Set the type of the input */
  const [lendLengthType, setLendLengthType] = useState("text");
  const [lendLoanValueType, setLendLoanValueType] = useState("text");
  const [lendInterestType, setLendInterestType] = useState("text");
  const [lendAdaPriceEOLType, setLendAdaPriceEOLType] = useState("text");

  /* Set and define the various states */
  const [loanInterestLendADA, setLoanInterestLendADA] = useState(null);
  const [loanInterestLendDollar, setLoanInterestLendDollar] = useState(null);
  const [loanValueLend, setLoanStateLend] = useState(null);
  const [interestLend, setInterestLend] = useState(null);
  const [lengthLend, setLengthLend] = useState(null);
  const [loanInterestLendDollarEOL, setLoanInterestLendDollarEOL] = useState(
    null
  );
  const [ADAPriceEOL, setADAPriceEOL] = useState(null);

  /* Set Initial Value on mount */
  useEffect(() => {
    setLoanInterestLendADA();
    setLoanInterestLendDollar();
    setLoanStateLend("Set Loan Value");
    setInterestLend("Set Loan Interest %");
    setLengthLend("Set Loan Length Days");
    setLoanInterestLendDollarEOL();
    setADAPriceEOL("Set End of Loan ADA Price");
  }, []);

  /* Set the length of the loan */
  const SetLoanLength = (e) => {
    setLendLengthType("number");
    setLengthLend(e.target.value);
  };

  /* Set the value of the loan and alter ADA+Interest, ADA+Interest converted to dollar @ current ADA price, and ADA+Interest converted to Dollar @ EOL ADA price */
  const SetLoanValueADA = (e) => {
    setLendLoanValueType("number");
    setLoanStateLend(e.target.value);
  };

  /* Set the value of the loan interest and alter ADA+Interest, ADA+Interest converted to dollar @ current ADA price, and ADA+Interest converted to Dollar @ EOL ADA price */
  const SetLoanInterest = (e) => {
    setLendInterestType("number");
    setInterestLend(e.target.value);
  };

  /* Set and define ADA price at EOL and alter the ADA+Interest convert to dollars at EOL ADA price */
  const SetADAPriceEOL = (e) => {
    setADAPriceEOL(e.target.value);
  };

  const ChangeFocusLend = (e) => {
    e.target.value = "";
    if (e.target.id === "lend-ada-price-eol") {
      setLendAdaPriceEOLType("number");
    }
  };

  useEffect(() => {
    setLoanInterestLendADA(
      ((1 + interestLend / 100) * loanValueLend).toFixed(2).toLocaleString()
    );
    setLoanInterestLendDollarEOL(
      parseFloat(ADAPriceEOL * loanInterestLendADA)
        .toFixed(2)
        .toLocaleString()
    );
  });

  console.log(<ADAprice></ADAprice>);

  return (
    <>
        <h2 className={props.header}>Lend</h2>
        <div className={props.container}>
      <ADAprice></ADAprice>
      <Input labelClass={classes.label}
        onFocus={ChangeFocusLend}
        title="Loan Length (Days)"
        onChange={SetLoanLength}
        type={lendLengthType}
        id="lend-loan-length"
        for="lend-loan-length"
        value={lengthLend}
        name="lend-loan-length"
      />
      <Input labelClass={classes.label}
        onFocus={ChangeFocusLend}
        title="Loan Value (ADA)"
        onChange={SetLoanValueADA}
        step="1"
        id="lend-loan-value-ada"
        type={lendLoanValueType}
        for="lend-loan-value-ada"
        name="lend-loan-value-ada"
        value={loanValueLend}
      />
      <Input labelClass={classes.label}
        onFocus={ChangeFocusLend}
        title="Interest %"
        onChange={SetLoanInterest}
        step=".5"
        id="lend-loan-interest"
        type={lendInterestType}
        for="lend-loan-interest"
        name="lend-loan-interest"
        value={interestLend}
      />
      <Input labelClass={classes.label}
        title="Loan w/Int (ADA)"
        readonly
        id="lend-loan-value-winterest-ada"
        type="number"
        for="lend-loan-value-winterest-ada"
        name="lend-loan-value-winterest-ada"
        value={loanInterestLendADA}
      />
      <Input labelClass={classes.label}
        title="Current Loan w/Int ($)"
        readonly
        id="lend-loan-value-winterest-dollar"
        type="number"
        for="lend-loan-value-winterest-dollar"
        name="lend-loan-value-winterest-dollar"
        value={loanInterestLendDollar}
      />
      <Input labelClass={classes.label}
        onFocus={ChangeFocusLend}
        title="ADA Price($) @ End of Loan"
        onChange={SetADAPriceEOL}
        id="lend-ada-price-eol"
        type={lendAdaPriceEOLType}
        for="lend-ada-price-eol"
        step=".01"
        name="lend-ada-price-eol"
        value={ADAPriceEOL}
      />
      <Input labelClass={classes.label}
        title="Loan w/Int ($) @ End of Loan"
        readonly
        id="lend-loan-value-winterest-dollar-eol"
        type="number"
        for="lend-loan-value-winterest-dollar"
        name="lend-loan-value-winterest-dollar"
        value={loanInterestLendDollarEOL}
      />
      </div>
    </>
  );
}

export default Lend;
