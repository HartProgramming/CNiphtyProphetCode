import React, { useEffect, useState } from "react";
import Input from "../../Input/Input";
import classes from "./CNFT.module.css";
import cniphtyStyle from '../CNiphtyProphet.module.css';
import styles from '../../Dropdown/Dropdown.module.css';
import axios from "axios";
import AdjustProjectList from "../../UI/AdjustProjectList";
import cnftArray from "../../CNFTProjectData";
import Dropdown from "../../Dropdown/Dropdown";
import DropdownUl from "../../DropdownUl/DropdownUl";
import add from 'classnames';

const CNFT = (props) => {
  const { loanValueBorrow, loanWInterestBorrow } = { ...props.data };

  const [floor, setFloor] = useState();
  const [purchasePriceCNFT, setPurchasePriceCNFT] = useState();
  const [salesPriceCNFT, setSalesPriceCNFT] = useState();
  const [profitLossADACNFT, setProfitLossADACNFT] = useState();

  const changePurchasePriceHandler = (e) => {
    setPurchasePriceCNFT(e.target.value);
  };

  const changeSalesPriceHandler = (e) => {
    setSalesPriceCNFT(e.target.value);
  };

  console.log(props.data);

  const projectList = [];
  const projectListUl = [];

  for (let x of cnftArray) {
    projectList.push(
      <Dropdown
        name="cnft"
        key={x.id}
        idDropdown={x.projectID}
        textDropdown={x.project}
        valueDropdown={x.policyID}
      ></Dropdown>
    );
  }

  for (let i of cnftArray) {
    projectListUl.push(
      <DropdownUl
        key={i.id}
        forDropdown={i.projectID}
        textDropdown={i.project}
      ></DropdownUl>
    );
  }

  const ChangeProject = (e) => {
    let policyManual;
    let selectedPolicyCNFT;
    if (e.length > 1) {
      policyManual = e;
      selectedPolicyCNFT = null;
    } else {
      selectedPolicyCNFT = e.target.value;
      policyManual = null;
    }
    function sortPolicy() {
      if (policyManual !== null) {
        return policyManual;
      } else {
        return selectedPolicyCNFT;
      }
    }
    const config = { headers: { Accept: "application/json" } };

    const params = {
      policy: sortPolicy(),
    };
    axios
      .get(`https://api.opencnft.io/1/policy/${params.policy}`, config)
      .then((res) => {
        const floorNum = (res.data.floor_price /= Math.pow(10, 6));
        const floorStr = `${floorNum} ADA`;
        setFloor(floorStr);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
      setPurchasePriceCNFT("Set Purchase Price");
      setSalesPriceCNFT("Set Sales Price");
      const chilled = document.querySelector("#project27");
      chilled.checked = true;
      ChangeProject("c56d4cceb8a8550534968e1bf165137ca41e908d2d780cc1402079bd");
  }, []);

  useEffect(() => {
    setProfitLossADACNFT(parseFloat(salesPriceCNFT - loanWInterestBorrow));
  }, [salesPriceCNFT, loanWInterestBorrow]);

  const ChangeFocus = (e) => {
    setTimeout(() => {
      e.target.type = 'number'
    e.target.value = "";
    }, 10);
  };

  return (
    <>
      <h2 className={props.header}>CNFT Trade</h2>
      <h4 className={props.header}>Fill out Borrow section first</h4>
      <div className={props.container}>
      <AdjustProjectList
            containerClass={add(styles.selectOptionsContainer, classes.width)}
            onClick={ChangeProject}
            boxClass={styles.selectOptionsDivBox}
            listOne={projectList}
            inputClass={cniphtyStyle.input}
            listTwo={projectListUl}
            iconClass={styles.selectIcon}
            selectListClass={styles.selectList}
            listContainerClass={styles.listContainer}
          />
        <Input readonly title="Floor Price" value={floor} />
        <Input
          readonly
          type="number"
          title="Borrowed Amount"
          value={loanValueBorrow}
        />
        <Input
          title="Purchase Price"
          value={purchasePriceCNFT}
          onFocus={ChangeFocus}
          inputClass={cniphtyStyle.input}
          onChange={changePurchasePriceHandler}
        />

        <Input
          title="Sale Price"
          value={salesPriceCNFT}
          onFocus={ChangeFocus}
          inputClass={cniphtyStyle.input}
          onChange={changeSalesPriceHandler}
        />
        <Input
          readonly
          type="number"
          title="Borrowed Payment"
          value={loanWInterestBorrow}
        />
        <Input
          title="Profit/Loss ADA"
          value={profitLossADACNFT}
          type="number"
          readonly
        />
      </div>
    </>
  );
};

export default CNFT;
