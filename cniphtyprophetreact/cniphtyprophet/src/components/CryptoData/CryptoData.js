import React, { useEffect } from "react";
import Card from "../UI/Card";
import tokenSortList from "../CryptoProjectData";
import { useState } from "react";
import axios from "axios";
import DropdownUl from "../DropdownUl/DropdownUl";
import classes from "./CryptoData.module.css";
import Loading from "../UI/Loading";
import styles from "../Dropdown/Dropdown.module.css";
import Dropdown from "../Dropdown/Dropdown";
import AdjustProjectList from "../UI/AdjustProjectList";
import add from "classnames";
import CryptoDataTable from "./CryptoDataTable";

function CryptoData(props) {
  const projectListCrypto = [];
  const projectListCryptoUl = [];
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
    projectListCryptoUl.push(
      <DropdownUl forDropdown={i.id} textDropdown={i.crypto}></DropdownUl>
    );
  }

  const [loading, setLoading] = useState(true);
  const [dataLoad, setDataLoad] = useState(true);
  const [error, setError] = useState(true);

  const ChangeProjectCrypto = async (e) => {
    setError(false)
    setDataLoad(true);
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
    try {
      const res = await axios.get(
        `https://api.coingecko.com/api/v3/coins/${params.coinId}`,
        config
      );
      setTimeout(() => {
      console.log(res);
      setDataLoad(false);

      setPrice(res.data.market_data.current_price.usd.toLocaleString());
      setGainLoss(
        res.data.market_data.price_change_percentage_24h_in_currency.usd.toFixed(2)
      );
      setMktCap(res.data.market_data.market_cap.usd.toLocaleString());
      setCryptoImg(res.data.image.small);
      setCoinName(res.data.name);
      console.log("setting");
    }, 1000);

    } catch (err) {
      console.log(err);
      setDataLoad(false)
      setError(true);
    }
  };

  const [price, setPrice] = useState();
  const [gainLoss, setGainLoss] = useState();
  const [mktCap, setMktCap] = useState();
  const [cryptoImg, setCryptoImg] = useState();
  const [coinName, setCoinName] = useState();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [loading]);

  useEffect(() => {
    setTimeout(() => {
      const coin = document.querySelector("#crypto0");
      console.log(coin);
      coin.checked = true;
      console.log(projectListCrypto);
      ChangeProjectCrypto("aave");
    }, 10);
  }, []);

  return (
    <>
      {loading && <Loading></Loading>}
      <Card className={loading ? classes.wrapper : classes.container}>
        <AdjustProjectList
          imgClass={styles.img}
          containerClass={add(styles.selectOptionsContainer, classes.width)}
          onClick={ChangeProjectCrypto}
          boxClass={styles.selectOptionsDivBox}
          listOne={projectListCrypto}
          listTwo={projectListCryptoUl}
          iconClass={styles.selectIcon}
          selectListClass={styles.selectList}
          listContainerClass={styles.listContainer}
        />
        {dataLoad ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Try again in a few seconds</p>
        ) : (
          <CryptoDataTable
            img={cryptoImg}
            coinName={coinName}
            price={price}
            gainLoss={gainLoss}
            mktCap={mktCap}
          />
        )}
        <div className={classes.thanks}>
          <h3>Thank you to Coingecko for the data feed.</h3>
        </div>
      </Card>
    </>
  );
}

export default CryptoData;
