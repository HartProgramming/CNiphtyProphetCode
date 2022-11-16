import React from "react";
import Input from "../../Input/Input";
import { useState, useEffect } from "react";
import classes from "../CNiphtyProphet.module.css";
import ADAprice from "../ADAprice/ADAprice";
import Button from "../../UI/Button";

function Lend(props) {
  /* Set the type of the input */

  /* Set and define the various states */
  const [loanInterestLendADA, setLoanInterestLendADA] = useState(null);
  const [loanInterestLendDollar, setLoanInterestLendDollar] = useState(null);
  const [loanValueLend, setLoanStateLend] = useState(null);
  const [interestLend, setInterestLend] = useState(null);
  const [lengthLend, setLengthLend] = useState(null);
  const [loanInterestLendDollarEOL, setLoanInterestLendDollarEOL] = useState(
    null
  );
  const [ADApriceSOL, setADApriceSOL] = useState(null);
  const [ADAPriceEOL, setADAPriceEOL] = useState(null);

  const [closeLend, setCloseLend] = useState(false);

  /* Set Initial Value on mount */
  useEffect(() => {
    setLoanInterestLendADA();
    setLoanInterestLendDollar();
    setLoanStateLend("Set Loan Value");
    setInterestLend("Set Loan Interest %");
    setLengthLend("Set Loan Length Days");
    setLoanInterestLendDollarEOL();
    setADApriceSOL("Set Start of Loan ADA Price");
    setADAPriceEOL("Set End of Loan ADA Price");
  }, []);

  /* Set the length of the loan */
  const SetLoanLength = (e) => {
    setLengthLend(e.target.value);
  };

  /* Set the value of the loan and alter ADA+Interest, ADA+Interest converted to dollar @ current ADA price, and ADA+Interest converted to Dollar @ EOL ADA price */
  const SetLoanValueADA = (e) => {
    setLoanStateLend(e.target.value);
  };

  const SetSOL = (e) => {
    setADApriceSOL(e.target.value);
  };

  /* Set the value of the loan interest and alter ADA+Interest, ADA+Interest converted to dollar @ current ADA price, and ADA+Interest converted to Dollar @ EOL ADA price */
  const SetLoanInterest = (e) => {
    setInterestLend(e.target.value);
  };

  /* Set and define ADA price at EOL and alter the ADA+Interest convert to dollars at EOL ADA price */
  const SetADAPriceEOL = (e) => {
    setADAPriceEOL(e.target.value);
  };

  const ChangeFocusLend = (e) => {
    setTimeout(() => {
      e.target.type = "number";
      e.target.value = "";
    }, 10);
  };

  useEffect(() => {
    setLoanInterestLendADA(
      ((1 + interestLend / 100) * loanValueLend).toFixed(2).toLocaleString()
    );
    setLoanInterestLendDollar(parseFloat(loanInterestLendADA * ADApriceSOL));
    setLoanInterestLendDollarEOL(
      parseFloat(ADAPriceEOL * loanInterestLendADA)
        .toFixed(2)
        .toLocaleString()
    );
  }, [
    interestLend,
    loanValueLend,
    loanInterestLendADA,
    ADApriceSOL,
    ADAPriceEOL,
    loanInterestLendADA,
  ]);

  const SubmitHandler = () => {
    const lendData = [
      ['Loan Value ADA',
      loanValueLend
    ],['Loan Value w/Interest ADA', loanInterestLendADA],
    ['End of Loan Predicted ($) Value', loanInterestLendDollarEOL]
    ];
    console.log(lendData);
    props.closeLend(false)
    props.summaryLendData(lendData);
    props.openSummary(true)
  };

  return (
    <>
      <div className={props.container}>
        <div className={props.header}>
          <h2>Lend</h2>
        </div>
        <ADAprice></ADAprice>
        <Input
          labelClass={classes.label}
          onFocus={ChangeFocusLend}
          title="Loan Length (Days)"
          onChange={SetLoanLength}
          inputClass={classes.input}
          id="lend-loan-length"
          for="lend-loan-length"
          setp="1"
          value={lengthLend}
          name="lend-loan-length"
        />
        <Input
          labelClass={classes.label}
          onFocus={ChangeFocusLend}
          title="ADA Price Start of Loan"
          onChange={SetSOL}
          step=".01"
          inputClass={classes.input}
          id="lend-loan-length"
          value={ADApriceSOL}
        />
        <Input
          labelClass={classes.label}
          onFocus={ChangeFocusLend}
          title="Loan Value (ADA)"
          onChange={SetLoanValueADA}
          inputClass={classes.input}
          step="1"
          id="lend-loan-value-ada"
          for="lend-loan-value-ada"
          name="lend-loan-value-ada"
          value={loanValueLend}
        />
        <Input
          labelClass={classes.label}
          onFocus={ChangeFocusLend}
          title="Interest %"
          onChange={SetLoanInterest}
          inputClass={classes.input}
          step=".5"
          id="lend-loan-interest"
          for="lend-loan-interest"
          name="lend-loan-interest"
          value={interestLend}
        />
        <Input
          labelClass={classes.label}
          title="Loan w/Int (ADA)"
          readonly
          id="lend-loan-value-winterest-ada"
          type="number"
          for="lend-loan-value-winterest-ada"
          name="lend-loan-value-winterest-ada"
          value={loanInterestLendADA}
        />
        <Input
          labelClass={classes.label}
          title="Current Loan w/Int ($)"
          readonly
          id="lend-loan-value-winterest-dollar"
          type="number"
          for="lend-loan-value-winterest-dollar"
          name="lend-loan-value-winterest-dollar"
          value={loanInterestLendDollar}
        />
        <Input
          labelClass={classes.label}
          onFocus={ChangeFocusLend}
          title="ADA Price($) @ End of Loan"
          onChange={SetADAPriceEOL}
          inputClass={classes.input}
          id="lend-ada-price-eol"
          for="lend-ada-price-eol"
          step=".01"
          name="lend-ada-price-eol"
          value={ADAPriceEOL}
        />
        <Input
          labelClass={classes.label}
          title="Loan w/Int ($) @ End of Loan"
          readonly
          id="lend-loan-value-winterest-dollar-eol"
          type="number"
          for="lend-loan-value-winterest-dollar"
          name="lend-loan-value-winterest-dollar"
          value={loanInterestLendDollarEOL}
        />
      </div>
      {!closeLend &&
      <div className={classes.buttoncontainer}>
        <Button title="Submit" style={classes.button} onClick={SubmitHandler} />
      </div>
}
    </>
  );
}

export default Lend;
