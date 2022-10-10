import React, { useState } from 'react';
import './Crypto.css';
import axios from 'axios';
import Dropdown from '../Dropdown/Dropdown';
import DropdownUl from '../DropdownUl/DropdownUl';
import '../Dropdown/Dropdown.css';
import Input from '../Input/Input'
import '../Input/Input.css'

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

function Crypto(props) {

    const tokenArray = [polygon, polkadot, cosmos, ripple, binance, avalanche, chainlink, ape, sandbox, aave, decentraland, ada, ardana, meld, wmt, wrt, liqwid, pavia, copi, vyfi, sundae, solana, bitcoin, ethereum, algorand];
    const tokenSortList = tokenArray.sort((a, b) => a.name < b.name ? -1 : 1);

    const projectListCrypto = [];
    const projectListCryptoUl = [];

    for (let x of tokenSortList) {
        projectListCrypto.push(<Dropdown idDropdown={x.coinId} textDropdown={x.name} valueDropdown={x.coinId}></Dropdown>);
    }

    for (let i of tokenSortList) {
        projectListCryptoUl.push(<DropdownUl forDropdown={i.coinId} textDropdown={i.name}></DropdownUl>);
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
    const [mktCap, setMktCap] = useState();
    const [cryptoImg, setCryptoImg] = useState();
    const [coinName, setCoinName] = useState();

    return (
        <div className='cardano-ecosystem'>
            <div className='cardano-data-div'>
                <div className='crypto-input input-row'>
                    <label className='crypto-label input-label' for='project'>Coin</label>
                    <div className='select-options-container'>
                        <div onClick={ChangeProjectCrypto} className='select-options-div-box' tabIndex='1'>
                            {projectListCrypto}
                            <img className="select-icon" src="http://cdn.onlinewebfonts.com/svg/img_295694.svg" alt="Arrow Icon" aria-hidden="true" />
                        </div>
                        <ul className='select-list'>
                            <div className='list-container'>
                                {projectListCryptoUl}
                            </div>
                        </ul>
                    </div>
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
                <div className='crypto-input-collection'>
                    <Input className='input' htmlFor='borrowed-amount-ada' id='borrowed-amount-ada' value={props.borrowed} type='number' title='Borrowed Amount ADA' step='1' />
                    <Input className='input' htmlFor='borrowed-amount-dollar' id='borrowed-amount-dollar' value='0' type='number' title='Borrowed Amount ($)' step='1' />
                    <Input className='input' htmlFor='crypto-purchased-amount-crypto' id='crypto-purchased-amount-crypto' value='0' type='number' title='Crypto Amount Purchased' step='1' />
                    <Input className='input' htmlFor='crypto-purchased-amount-dollar' id='crypto-purchased-amount-dollar' value='0' type='number' title='Crypto Amount Purchased ($)' step='1' />
                    <Input className='input' htmlFor='price-crypto-eol' id='price-crypto-eol' value='0' type='number' title='Crypto Price ($) @ EOL' step='.01' />
                    <Input className='input' htmlFor='value-crypto-eol' id='value-crypto-eol' value='0' type='number' title='Value @ EOL ($)' step='1' />
                    <Input className='input' htmlFor='crypto-profit-loss-dollar' id='crypto-profit-loss-dollar' value='0' type='number' title='Profit/Loss ($)' step='.01' />
                    <Input className='input' htmlFor='crypto-profit-loss-ada' id='crypto-profit-loss-ada' value='0' type='number' title='Profit/Loss ADA' step='.01' />
                </div>
            </div>
        </div>
    )
}

export default Crypto