import React, { useEffect, useState } from "react";
import Input from "../../Input/Input";
import classes from "./Crypto.module.css";
import styles from '../../Dropdown/Dropdown.module.css';
import AdjustProjectList from "../../UI/AdjustProjectList";
import axios from "axios";
import tokenSortList from "../../CryptoProjectData";
import Dropdown from "../../Dropdown/Dropdown";
import DropdownUl from "../../DropdownUl/DropdownUl";
import add from 'classnames';
import cniphtyStyle from '../CNiphtyProphet.module.css';
import Button from "../../UI/Button";

function Crypto(props) {

  const projectListCrypto = [];
  const projectListUlCrypto = [];

  for (let x of tokenSortList) {
    projectListCrypto.push(
      <Dropdown
        name="cryptodata"
        idDropdown={x.id}
        key={x.id}
        textDropdown={x.crypto}
        valueDropdown={x.coinId}
      ></Dropdown>
    );
  }

  for (let i of tokenSortList) {
    projectListUlCrypto.push(
      <DropdownUl forDropdown={i.id} textDropdown={i.crypto}></DropdownUl>
    );
  }

  const {
    loanValueBorrow,
    loanWInterestBorrow,
    loanValueDollars,
    repayInterestPlusLoan,
  } = { ...props.data };

  const [price, setPrice] = useState();
  const [purchasePrice, setPurchasePrice] = useState();
  const [amountPurchased, setAmountPurchased] = useState();
  const [totalInvested, setTotalInvested] = useState();
  const [salePrice, setSalePrice] = useState();
  const [profitLoss, setProfitLoss] = useState();
  const [profitLossBorrow, setProfitLossBorrow] = useState();
  const [finalPosition, setFinalPosition] = useState();
  const [maxAmount, setMaxAmount] = useState();
  const [difference, setDifference] = useState();

  const ChangeProjectCrypto = (e) => {
    let projectId;
    let selectedToken;
    if (e.length > 1) {
      projectId = e;
      selectedToken = null;
    } else {
      selectedToken = e.target.value;
      projectId = null;
    }

    function sortPolicy() {
      if (projectId !== null) {
        return projectId;
      } else {
        return selectedToken;
      }
    }
    const config = { headers: { Accept: "application/json" } };
    const params = {
      coinId: sortPolicy(),
    };
    axios
      .get(`https://api.coingecko.com/api/v3/coins/${params.coinId}`, config)
      .then((res) => {
        console.log(res);
        setTimeout(() => {
          setPrice(res.data.market_data.current_price.usd.toLocaleString());
        }, 500);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const changePriceHandler = (e) => {
    setPurchasePrice(e.target.value);
  };

  const changeAmountHandler = (e) => {
    setAmountPurchased(e.target.value);
  };

  const changeSalePriceHandler = (e) => {
    setSalePrice(e.target.value);
  };

  useEffect(() => {
    setTotalInvested(parseFloat(amountPurchased * purchasePrice).toFixed(2));
    setMaxAmount(parseFloat(loanValueDollars / purchasePrice).toFixed(2));
    setFinalPosition((salePrice * amountPurchased).toFixed(2));
    setProfitLoss(
      parseFloat(amountPurchased * salePrice - totalInvested).toFixed(2)
    );
    setProfitLossBorrow(parseFloat(finalPosition - repayInterestPlusLoan).toFixed(2));
  }, [salePrice, amountPurchased, totalInvested, purchasePrice, finalPosition, repayInterestPlusLoan]);

  useEffect(() => {
    setPurchasePrice("Set Purchase Price");
    setAmountPurchased("Set Amount");
    setSalePrice("Set Sale Price");
  }, []);

  const ChangeFocus = (e) => {
    setTimeout(() => {
      e.target.type = 'number'
    e.target.value = "";
    }, 10);
  };

  useEffect(() => {
          const aave = document.querySelector("#crypto0");
    ChangeProjectCrypto("aave");
    aave.checked = true;
  console.log(aave)
  console.log(projectListCrypto)    
}, []);

const SummaryHandler = () => {
  props.closeCrypto(false);
  props.openSummary(true);
}

  return (
    <>
      <h2 className={props.header}>Crypto Trade</h2>
      <h4 className={props.header}>Fill out Borrow section first</h4>
      <div className={props.container}>
      <AdjustProjectList
            imgClass={styles.img}
            containerClass={add(styles.selectOptionsContainer, classes.width)}
            onClick={ChangeProjectCrypto}
            inputClass={cniphtyStyle.input}
            boxClass={styles.selectOptionsDivBox}
            listOne={projectListCrypto}
            listTwo={projectListUlCrypto}
            iconClass={styles.selectIcon}
            selectListClass={styles.selectList}
            listContainerClass={styles.listContainer}
          />
        <Input readonly title="Coin Price" value={price} />
        <Input
          readonly
          type="number"
          title="Borrowed Amount ADA"
          value={loanValueBorrow}
        />
        <Input
          readonly
          type="number"
          title="Borrowed Amount ($)"
          value={loanValueDollars}
        />
        <Input
          onChange={changePriceHandler}
          onFocus={ChangeFocus}
          inputClass={cniphtyStyle.input}
          title="Purchase Price"
          value={purchasePrice}
        />
        <Input
          title="Max Amount"
          readonly
          name="max amount"
          type="number"
          value={maxAmount}
        />
        <Input
          title="Amount Purchased"
          name="amount"
          value={amountPurchased}
          onFocus={ChangeFocus}
          onChange={changeAmountHandler}
          inputClass={cniphtyStyle.input}
        />
        <Input title='Max/Amount Purchased Difference' readonly value={difference}/>
        <Input
          readonly
          title="Total Invested"
          value={totalInvested}
          type="number"
        />
        <Input
          readonly
          type="number"
          title="Borrowed Payment ADA"
          value={loanWInterestBorrow}
        />
        <Input
          readonly
          type="number"
          title="Borrowed Payment ($)"
          value={repayInterestPlusLoan}
        />
        <Input
          title="Sale Price"
          value={salePrice}
          onFocus={ChangeFocus}
          onChange={changeSalePriceHandler}
          inputClass={cniphtyStyle.input}
        />
        <Input
          readonly
          type="number"
          title="Final Position"
          value={finalPosition}
        />
        <Input
          readonly
          title="Profit/Loss Crypto Trade"
          value={profitLoss}
          type="number"
        />
        <Input
          readonly
          title="Profit/Loss Borrow Payment ($)"
          value={profitLossBorrow}
          type="number"
        />
      </div>
      <Button onClick={SummaryHandler} title='Summary Analysis' />
    </>
  );
}

export default Crypto;
