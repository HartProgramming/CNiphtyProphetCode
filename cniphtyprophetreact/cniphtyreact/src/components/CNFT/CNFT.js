import './CNFT.css';
import cnftArray from '../CNFTProjectData';
import React from 'react';
import Input from '../Input/Input';
import '../Input/Input.css';

import { useState } from 'react';
import axios from 'axios';

const projectListCNFT = [];

for (let x of cnftArray) {
    projectListCNFT.push(<option key={x.id} value={x.policyID}>{x.project}</option>)
}

function CNFT() {

    const [imgCNFT, setImgCNFT] = useState(null);
    const [floorCNFT, setFloorCNFT] = useState(0);
    const [volCNFT, setVolCNFT] = useState(0);
    const [mktCapCNFT, setMktCapCNFT] = useState(0);
    const [assetHolders, setAssetHolders] = useState(0);
    const [assetsMinted, setAssetsMinted] = useState(0);

    const collectCNFT = (e) => {

        const selectedPolicyCNFT = e.target.value
        console.log(selectedPolicyCNFT)
        const config = { headers: { Accept: "application/json" } }

        const params = {
            policy: selectedPolicyCNFT,
        }
        axios.get(`https://api.opencnft.io/1/policy/${params.policy}`, config)
            .then(res => {
                const volumeStr = `${(res.data.total_volume /= Math.pow(10, 6)).toLocaleString()} ADA`;
                const floorNum = res.data.floor_price /= Math.pow(10,6)
                const floorStr = `${floorNum} ADA`;
                const assets = res.data.asset_minted;
                const cap = `${(assets * floorNum).toLocaleString()} ADA`;
                const editImg = res.data.thumbnail.slice(12);
                const holders = res.data.asset_holders;
                console.log(editImg)
                const pic = `ipfs.io/ipfs/${editImg}`;
                setImgCNFT(pic)
                setFloorCNFT(floorStr);
                setVolCNFT(volumeStr);
                setMktCapCNFT(cap);
                setAssetsMinted(assets)
                setAssetHolders(holders);
                console.log(res.data.thumbnail);
                console.log(cap)
            }).catch(err => {
                console.log(err);
            })
    };

    return (
        <section className='cnft-section'>
            <div className='input-row'>
                <label className='input-label' for='projects'>Project</label>
                <select onChange={collectCNFT} id='projects' className='input'>{projectListCNFT}</select>
            </div>
            <Input id='cnft-floor-price' for='cnft-floor-price' name='Floor Price' value={floorCNFT} />
            <Input id='cnft-total-volume' for='cnft-total-volume' value={volCNFT} name='Total Volume' />
            <Input id='cnft-mktcap' for='cnft-mktcap' name='Mkt. Cap.' type='text' value={mktCapCNFT} />
            <Input id='cnft-wallet-holders' for='cnft-wallet-holders' name='Wallet Holders' value={assetHolders} />
            <Input id='total-assets' for='total-assets' name='# of Assets' value={assetsMinted} />
        </section>
    )

}

export default CNFT