import React, { useState } from 'react';
import './Crypto.css';
import axios from 'axios';
import Input from '../Input/Input';
import Borrow from '../Borrow/Borrow';

class Ecosystem {
    constructor(id, name, coinId, img) {
        this.id = id;
        this.name = name;
        this.coinId = coinId;
        this.img = img
    }
}

const ada = new Ecosystem(1, 'Cardano', 'cardano');
const ardana = new Ecosystem(2, 'Ardana', 'ardana');
const meld = new Ecosystem(3, 'Meld', 'meld');
const wmt = new Ecosystem(4, 'World Mobile', 'world-mobile-token');
const wrt = new Ecosystem(5, 'Wing Riders', 'wingriders');
const liqwid = new Ecosystem(6, 'Liqwid', 'liqwid-finance');
const pavia = new Ecosystem(7, 'Pavia', 'pavia');
const copi = new Ecosystem(8, 'Cornucopias', 'cornucopias');
const vyfi = new Ecosystem(9, 'VYFinance', 'vyfinance');
const sundae = new Ecosystem(10, 'SundaeSwap', 'sundaeswap');
const solana = new Ecosystem(11, 'Solana', 'solana');
const ethereum = new Ecosystem(12, 'Ethereum', 'ethereum');
const bitcoin = new Ecosystem(13, 'Bitcoin', 'bitcoin');
const algorand = new Ecosystem(14, 'Algorand', 'algorand');
const ripple = new Ecosystem(15, 'XRP', 'ripple');
const binance = new Ecosystem(16, 'BNB', 'binancecoin');
const avalanche = new Ecosystem(17, 'Avalanche', 'avalanche-2');
const chainlink = new Ecosystem(18, 'Chainlink', 'chainlink');
const ape = new Ecosystem(19, 'ApeCoin', 'apecoin');
const sandbox = new Ecosystem(20, 'Sandbox', 'the-sandbox');
const aave = new Ecosystem(21, 'AAVE', 'aave');
const decentraland = new Ecosystem(22, 'Decentraland', 'decentraland');
const polygon = new Ecosystem(23, 'Polygon', 'matic-network');
const polkadot = new Ecosystem(24, 'Polkadot', 'polkadot');
const cosmos = new Ecosystem(25, 'Cosmos', 'cosmos');

function Crypto() {

    const tokenArray = [polygon, polkadot, cosmos, ripple, binance, avalanche, chainlink, ape, sandbox, aave, decentraland, ada, ardana, meld, wmt, wrt, liqwid, pavia, copi, vyfi, sundae, solana, bitcoin, ethereum, algorand];
    const tokenSort = tokenArray.sort((a, b) => a.name < b.name ? -1 : 1);
    const tokenList = [];

    for (let x of tokenSort) {
        tokenList.push(<option className='projects' key={x.id} value={x.coinId}>{x.name}</option>);
    }

    const ChangeProjectCrypto = (e) => {
        const selectedToken = e.target.value;
        const config = { headers: { Accept: "application/json" } };
        const params = {
            coinId: selectedToken,
        }
        axios.get(`https://api.coingecko.com/api/v3/coins/${params.coinId}`, config)
            .then(res => {
                console.log(res)
                setPrice(res.data.market_data.current_price.usd.toLocaleString());
                setGainLoss(res.data.market_data.price_change_percentage_24h_in_currency.usd);
                setMktCap(res.data.market_data.market_cap.usd.toLocaleString());
                setCryptoImg(res.data.image.small);
                setCoinName(res.data.name);
            }).catch(err => {
                console.log(err);
            })
    }

    const [price, setPrice] = useState();
    const [gainLoss, setGainLoss] = useState();
    const [volume, setVolume] = useState();
    const [mktCap, setMktCap] = useState();
    const [cryptoImg, setCryptoImg] = useState();
    const [coinName, setCoinName] = useState();

    return (
        <div className='cardano-ecosystem'>
            <div className='cardano-data-div'>
                <div className='input-row'>
                    <label className='input-label' for='project'>Project</label>
                    <select onChange={ChangeProjectCrypto} id='projects' className='input'>{tokenList}</select>
                </div>
                <table className='cardano-table'>
                    <tr className='cardano-table-row'>
                        <th>Symbol</th>
                        <th>Coin</th>
                        <th>Price</th>
                        <th>24h %</th>
                        <th>Mkt. Cap</th>
                    </tr>
                    <tr className='cardano-table-row'>
                        <td><img className='coin-symbol' src={cryptoImg}></img></td>
                        <td>{coinName}</td>
                        <td>{price}</td>
                        <td>{gainLoss}</td>
                        <td>{mktCap}</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default Crypto