import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Input from "../../Input/Input";

function ADAprice(props) {
  /* Set state for the price of ADA in the borrow component */
  const [adaPrice, setADAPrice] = useState("");
  const { price, setPrice } = props;

  useEffect(() => {
    const config = { headers: { Accept: "application/json" } };

    axios
      .get(`https://api.coingecko.com/api/v3/coins/cardano`, config)
      .then((res) => {
        const price = res.data.market_data.current_price.usd;
        setADAPrice(price.toFixed(3));
        console.log(res.data.market_data.current_price.usd);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Input
      className="input"
      title="Curr. ADA Price($)"
      name="borrow-current-ada-price"
      readonly
      id="ada-price"
      type="number"
      value={adaPrice}
    ></Input>
  );
}

export default ADAprice;
