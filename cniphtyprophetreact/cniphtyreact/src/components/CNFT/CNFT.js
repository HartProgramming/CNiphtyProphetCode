import './CNFT.css';
import cnftArray from '../CNFTProjectData';
import React from 'react';
import Input from '../Input/Input';
import '../Input/Input.css';
import Dropdown from '../Dropdown/Dropdown';
import DropdownUl from '../DropdownUl/DropdownUl';
import '../Dropdown/Dropdown.css';

import { useState } from 'react';
import axios from 'axios';

function CNFT() {

    const projectListCNFT = [];
    const projectListCNFTUl = [];

    for (let x of cnftArray) {
        projectListCNFT.push(<Dropdown idDropdown={x.projectID} textDropdown={x.project} valueDropdown={x.policyID}></Dropdown>);

    }

    for (let i of cnftArray) {
        projectListCNFTUl.push(<DropdownUl forDropdown={i.projectID} textDropdown={i.project}></DropdownUl>);
    }

    const [imgCNFT, setImgCNFT] = useState(null);
    const [floorCNFT, setFloorCNFT] = useState(0);
    const [volCNFT, setVolCNFT] = useState(0);
    const [mktCapCNFT, setMktCapCNFT] = useState(0);
    const [assetHolders, setAssetHolders] = useState(0);
    const [assetsMinted, setAssetsMinted] = useState(0);

    const ChangeProjectCNFT = (e) => {

        const selectedPolicyCNFT = e.target.value
        console.log(selectedPolicyCNFT)
        const config = { headers: { Accept: "application/json" } }

        const params = {
            policy: selectedPolicyCNFT,
        }
        axios.get(`https://api.opencnft.io/1/policy/${params.policy}`, config)
            .then(res => {
                const volumeStr = `${(res.data.total_volume /= Math.pow(10, 6)).toLocaleString()} ADA`;
                const floorNum = res.data.floor_price /= Math.pow(10, 6)
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
            <article className='cnft-area'>
                <div className='input-row'>
                    <label className='input-label' for='projects'>Project</label>
                    <div className='select-options-container'>
                        <div onClick={ChangeProjectCNFT} className='select-options-div-box' tabIndex='1'>
                            {projectListCNFT}
                            <img className="select-icon" src="http://cdn.onlinewebfonts.com/svg/img_295694.svg" alt="Arrow Icon" aria-hidden="true" />
                        </div>
                        <ul className='select-list'>
                            <div className='list-container'>
                                {projectListCNFTUl}

                            </div>
                        </ul>
                    </div>                  </div>
                <Input className='input' readonly title='Floor Price' placeholder='ADA Floor Price' id='cnft-floor-price' for='cnft-floor-price' name='cnft-floor-price' value={floorCNFT} />
                <Input className='input' readonly title='Total Volume' placeholder='ADA Total Volume' id='cnft-total-volume' for='cnft-total-volume' value={volCNFT} name='cnft-total-volume' />
                <Input className='input' readonly title='Mkt. Cap.' placeholder='ADA Market Cap' id='cnft-mktcap' for='cnft-mktcap' name='cnft-mktcap' type='text' value={mktCapCNFT} />
                <Input className='input' readonly title='Wallet Holders' placeholder='# of Holders' id='cnft-wallet-holders' for='cnft-wallet-holders' name='cnft-wallet-holders' value={assetHolders} />
                <Input className='input' readonly title='# of Assets' placeholder='Assets Minted' id='total-assets' for='total-assets' name='total-assets' value={assetsMinted} />
            </article>
        </section>
    )

}

export default CNFT