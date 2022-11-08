

class Ecosystem {
    constructor(crypto, coinId, id) {
        this.crypto = crypto;
        this.coinId = coinId;
        this.id = id;
    }
}

const ada = new Ecosystem('Cardano', 'cardano');
const ardana = new Ecosystem('Ardana', 'ardana');
const meld = new Ecosystem('Meld', 'meld');
const wmt = new Ecosystem('World Mobile', 'world-mobile-token');
const wrt = new Ecosystem('Wing Riders', 'wingriders');
const liqwid = new Ecosystem('Liqwid', 'liqwid-finance');
const pavia = new Ecosystem('Pavia', 'pavia');
const copi = new Ecosystem('Cornucopias', 'cornucopias');
const vyfi = new Ecosystem('VYFinance', 'vyfinance');
const sundae = new Ecosystem('SundaeSwap', 'sundaeswap');
const solana = new Ecosystem('Solana', 'solana');
const ethereum = new Ecosystem('Ethereum', 'ethereum');
const bitcoin = new Ecosystem('Bitcoin', 'bitcoin');
const algorand = new Ecosystem('Algorand', 'algorand');
const ripple = new Ecosystem('XRP', 'ripple');
const binance = new Ecosystem('BNB', 'binancecoin');
const avalanche = new Ecosystem('Avalanche', 'avalanche-2');
const chainlink = new Ecosystem('Chainlink', 'chainlink');
const ape = new Ecosystem('ApeCoin', 'apecoin');
const sandbox = new Ecosystem('Sandbox', 'the-sandbox');
const aave = new Ecosystem('AAVE', 'aave');
const decentraland = new Ecosystem('Decentraland', 'decentraland');
const polygon = new Ecosystem('Polygon', 'matic-network');
const polkadot = new Ecosystem('Polkadot', 'polkadot');
const cosmos = new Ecosystem('Cosmos', 'cosmos');
const minswap = new Ecosystem('Minswap', 'minswap');
const clay = new Ecosystem('Clay', 'clay-nation');
const apeSociety = new Ecosystem('Society', 'the-ape-society');


const tokenArray = [
    apeSociety,
    clay,
    minswap,
    polygon,
    polkadot,
    cosmos,
    ripple,
    binance,
    avalanche,
    chainlink,
    ape,
    sandbox,
    aave,
    decentraland,
    ada,
    ardana,
    meld,
    wmt,
    wrt,
    liqwid,
    pavia,
    copi,
    vyfi,
    sundae,
    solana,
    bitcoin,
    ethereum,
    algorand
  ];
  const tokenSortList = tokenArray.sort((a, b) => (a.crypto < b.crypto ? -1 : 1));
  let num = 0;
  for(let x of tokenSortList){
    x.id = `crypto${num}`
    num ++;
  }

export default tokenSortList;