import React from "react";
import classes from './CryptoData.module.css';

const CryptoDataTable = (props) => {
  return (
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
          <img className={classes.coinsymbol} src={props.img}></img>
        </td>
        <td>{props.coinName}</td>
        <td>{props.price}</td>
        <td>{props.gainLoss}</td>
        <td>{props.mktCap}</td>
      </tr>
    </table>
  );
};

export default CryptoDataTable;
