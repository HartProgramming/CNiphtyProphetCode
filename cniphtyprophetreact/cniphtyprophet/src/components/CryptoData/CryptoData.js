import React, { useEffect } from "react";
import Card from "../UI/Card";
import tokenSortList from "../CryptoProjectData";
import { useState } from "react";
import axios from "axios";
import Dropdown from "../Dropdown/Dropdown";
import DropdownUl from "../DropdownUl/DropdownUl";
import classes from "./CryptoData.module.css";
import Loading from "../UI/Loading";

function CryptoData() {
  const projectListCrypto = [];
  const projectListCryptoUl = [];

  for (let x of tokenSortList) {
    projectListCrypto.push(
      <Dropdown
        idDropdown={x.id}
        textDropdown={x.name}
        valueDropdown={x.coinId}
      ></Dropdown>
    );
  }

  console.log(tokenSortList);

  for (let i of tokenSortList) {
    projectListCryptoUl.push(
      <DropdownUl forDropdown={i.id} textDropdown={i.name}></DropdownUl>
    );
  }

  const [loading, setLoading] = useState(false);

  const ChangeProjectCrypto = (e) => {
    const selectedToken = e.target.value;
    const config = { headers: { Accept: "application/json" } };
    const params = {
      coinId: selectedToken,
    };
    axios
      .get(`https://api.coingecko.com/api/v3/coins/${params.coinId}`, config)
      .then((res) => {
        console.log(res);
        setTimeout(() => {
          setPrice(res.data.market_data.current_price.usd.toLocaleString());
        setGainLoss(
          res.data.market_data.price_change_percentage_24h_in_currency.usd
        );
        setMktCap(res.data.market_data.market_cap.usd.toLocaleString());
        setCryptoImg(res.data.image.small);
        setCoinName(res.data.name);
        console.log('setting')
        }, 500);
        
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const borrowed = document.querySelector("#borrowed-amount-ada");
  console.log(borrowed);

  const [price, setPrice] = useState();
  const [gainLoss, setGainLoss] = useState();
  const [mktCap, setMktCap] = useState();
  const [cryptoImg, setCryptoImg] = useState();
  const [coinName, setCoinName] = useState();

  useEffect(() => {
      setLoading(true);
      const coin = document.querySelector("#crypto0");
      coin.checked = true;

    setTimeout(() => {
        setLoading(false);
    }, 300);
    
  }, [setLoading]);

  return (
    <>
      {loading && <Loading></Loading>}
      <Card className={classes.container}>
        <div id={classes.id} className="select-options-container ">
          <div
            onClick={ChangeProjectCrypto}
            className="select-options-div-box"
            tabIndex="1"
          >
            {projectListCrypto}
            <img
              className="select-icon"
              src="http://cdn.onlinewebfonts.com/svg/img_295694.svg"
              alt="Arrow Icon"
              aria-hidden="true"
            />
          </div>
          <ul className="select-list">
            <div className="list-container">{projectListCryptoUl}</div>
          </ul>
        </div>
        <table className={classes.cardanotable}>
          <tr className={classes.cardanotablerow}>
            <th>Symbol</th>
            <th>Coin</th>
            <th>Price</th>
            <th>24h %</th>
            <th>Mkt. Cap</th>
          </tr>
          <tr className={classes.cardanotablerow}>
            <td>
              <img className={classes.coinsymbol} src={cryptoImg}></img>
            </td>
            <td>{coinName}</td>
            <td>{price}</td>
            <td>{gainLoss}</td>
            <td>{mktCap}</td>
          </tr>
        </table>
        <div className={classes.thanks}>
            <h3>Thank you to Coingecko for data feed</h3>
        </div>
      </Card>
    </>
  );
}

export default CryptoData;
