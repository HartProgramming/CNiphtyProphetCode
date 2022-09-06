import React from 'react';
import Header from './CardanoHeader.svg';
import './Cardano.css';
import Meld from './meld-logo.svg';
import ADA from './cardano-ada-logo.svg';
import Ardana from './ardana-dana-logo.svg';
import Copi from './copi-logo.svg';
import Liqwid from './liqwid-logo.svg';
import Pavia from './pavia-logo.svg';
import Sundae from './sundae-logo.svg';
import VyFi from './vyfi-logo.svg';
import Wingriders from './WingRiders-logo.svg';
import World from './worldmobile-logo.svg';

class Ecosystem {
    constructor(id, name, coinId, img) {
        this.id = id;
        this.name = name;
        this.coinId = coinId;
        this.img = img
    }
}

const ada = new Ecosystem(1, 'Cardano', 'cardano', ADA);
const ardana = new Ecosystem(2, 'Ardana', 'ardana', Ardana);
const meld = new Ecosystem(3, 'Meld', 'meld', Meld);
const wmt = new Ecosystem(4, 'World Mobile', 'world-mobile-token', World);
const wrt = new Ecosystem(5, 'Wing Riders', 'wingriders', Wingriders);
const liqwid = new Ecosystem(6, 'Liqwid', 'liqwid-finance', Liqwid);
const pavia = new Ecosystem(7, 'Pavia', 'pavia', Pavia);
const copi = new Ecosystem(8, 'Cornucopias', 'cornucopias', Copi);
const vyfi = new Ecosystem(9, 'VYFinance', 'vyfinance', VyFi);
const sundae = new Ecosystem(10, 'SundaeSwap', 'sundaeswap', Sundae);

function Cardano() {

    return (
        <div className='cardano-ecosystem'>
            <img className='cardano-header' src={Header}></img>
            <div className='cardano-data-div'>
                <table className='cardano-table'>
                    <tr className='cardano-table-row'>
                        <th>Symbol</th>
                        <th>Coin</th>
                        <th>Price</th>
                        <th>24h</th>
                        <th>24h Vol.</th>
                        <th>Mkt. Cap</th>
                    </tr>
                    <tr className='cardano-table-row'>
                        <td><img className='coin-symbol' src={ada.img}></img></td>
                        <td>{ada.name}</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr className='cardano-table-row'>
                        <td><img  className='coin-symbol'src={ardana.img}></img></td>
                        <td>{ardana.name}</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr className='cardano-table-row'>
                        <td><img  className='coin-symbol'src={meld.img}></img></td>
                        <td>{meld.name}</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr className='cardano-table-row'>
                        <td><img  className='coin-symbol'src={wmt.img}></img></td>
                        <td>{wmt.name}</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr className='cardano-table-row'>
                        <td><img  className='coin-symbol'src={wrt.img}></img></td>
                        <td>{wrt.name}</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr className='cardano-table-row'>
                        <td><img  className='coin-symbol'src={liqwid.img}></img></td>
                        <td>{liqwid.name}</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr className='cardano-table-row'>
                        <td><img className='coin-symbol' src={pavia.img}></img></td>
                        <td>{pavia.name}</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr className='cardano-table-row'>
                        <td><img  className='coin-symbol'src={copi.img}></img></td>
                        <td>{copi.name}</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr className='cardano-table-row'>
                        <td><img className='coin-symbol' src={vyfi.img}></img></td>
                        <td>{vyfi.name}</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr className='cardano-table-row'>
                        <td><img  className='coin-symbol'src={sundae.img}></img></td>
                        <td>{sundae.name}</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default Cardano