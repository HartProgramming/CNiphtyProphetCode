import React from "react";
import axios from "axios";
import Input from "../Input/Input";
import '../Input/Input.css';
import '../CNFT/CNFT.css';
import {useState} from 'react';
import Dropdown from "../Dropdown/Dropdown";
import DropdownUl from "../DropdownUl/DropdownUl";
import cnftArray from "../CNFTProjectData";

function CNFTProjects() {

    const projectList = [];
    const projectListUl = [];

    const [floor, setFloor] = useState('Change Project')
    const [floorType, setFloorType] = useState('')

    for (let x of cnftArray) {
        projectList.push(<Dropdown key={x.id} idDropdown={x.projectID} textDropdown={x.project} valueDropdown={x.policyID}></Dropdown>);
    }

    for (let i of cnftArray) {
        projectListUl.push(<DropdownUl key={i.id} forDropdown={i.projectID} textDropdown={i.project}></DropdownUl>);
    }

    const [imgCNFT, setImgCNFT] = useState(null);
    const [volCNFT, setVolCNFT] = useState(0);
    const [mktCapCNFT, setMktCapCNFT] = useState(0);
    const [assetHolders, setAssetHolders] = useState(0);
    const [assetsMinted, setAssetsMinted] = useState(0);

    const ChangeProject = (e) => {

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
                const pic = `https://ipfs.io/ipfs/${editImg}`;
                setImgCNFT(pic)
                setFloor(floorStr);
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
        <div className="project-container">
            <div>
                <img src={imgCNFT} />
            </div>
            <div className='input-row'>
                <label className='input-label' htmlFor='project'>Project</label>
                <div className='select-options-container'>
                    <div onClick={ChangeProject} className='select-options-div-box' tabIndex='1'>
                        {projectList}
                        <img className="select-icon" src="http://cdn.onlinewebfonts.com/svg/img_295694.svg" alt="Arrow Icon" aria-hidden="true" />
                    </div>
                    <ul className='select-list'>
                        <div className='list-container'>
                            {projectListUl}
                        </div>
                    </ul>
                </div>
            </div>
            <Input className='input' title='Floor Price' name='borrow-floor-price' readonly id='floor-price' type={floorType} value={floor}></Input>
            <Input className='input' readonly title='Total Volume' placeholder='ADA Total Volume' id='cnft-total-volume' for='cnft-total-volume' value={volCNFT} name='cnft-total-volume' />
            <Input className='input' readonly title='Mkt. Cap.' placeholder='ADA Market Cap' id='cnft-mktcap' for='cnft-mktcap' name='cnft-mktcap' type='text' value={mktCapCNFT} />
            <Input className='input' readonly title='Wallet Holders' placeholder='# of Holders' id='cnft-wallet-holders' for='cnft-wallet-holders' name='cnft-wallet-holders' value={assetHolders} />
            <Input className='input' readonly title='# of Assets' placeholder='Assets Minted' id='total-assets' for='total-assets' name='total-assets' value={assetsMinted} />
        </div>
    )
}

export default CNFTProjects