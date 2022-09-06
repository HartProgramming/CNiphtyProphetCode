import './CNFT.css';
import cnftArray from '../CNFTProjectData';
import CNFTCard from './CNFTCard';
import React from 'react';
import CNFTHeader from './Borrow.svg'

import { useState } from 'react';
import axios from 'axios';

function CNFT() {

    const [img, setImg] = useState(null);
    const [floor, setFloor] = useState('');
    const [vol, setVol] = useState('');
    const [mktCap, setMktCap] = useState('');

    const collectCNFT = (policyID) => {
        const config = { headers: { Accept: "application/json" } }

        const params = {
            policy: policyID,
        }
        axios.get(`https://api.opencnft.io/1/policy/${params.policy}`, config)
            .then(res => {
                const volume = res.data.total_volume /= Math.pow(10, 6);
                const floor = res.data.floor_price /= Math.pow(10, 6);
                const assets = res.data.asset_minted;
                const cap = assets * floor;
                const editImg = res.data.thumbnail.slice(12)
                console.log(editImg)
                const pic = `ipfs.io/ipfs/${editImg}`;
                setImg(pic)
                setFloor(floor);
                setVol(volume);
                setMktCap(cap);
                console.log(res.data.thumbnail)
            }).catch(err => {
                console.log(err);
            })
    };

    return (
        <div>
            <img className='cnft-header' src={CNFTHeader}></img>
            <div className='cnft-card-surround'>
                <CNFTCard key={cnftArray[0].id} onLoad={collectCNFT(cnftArray[0].policyID)} image='ipfs.io/ipfs/Qmdnu1U2kTZrdovtC6923uhXJqoL4qQcBxsmmUvafsWXqL' project={cnftArray[0].project} floor={floor + ' ADA'} volume={vol.toLocaleString() + ' ADA'} mktCap={mktCap.toLocaleString() + ' ADA'} />
                <CNFTCard key={cnftArray[4].id} onLoad={collectCNFT(cnftArray[4].policyID)} image='ipfs.io/ipfs/Qmdnu1U2kTZrdovtC6923uhXJqoL4qQcBxsmmUvafsWXqL' project={cnftArray[4].project} floor={floor + ' ADA'} volume={vol.toLocaleString() + ' ADA'} mktCap={mktCap.toLocaleString() + ' ADA'} />
            </div>
        </div>
    )

}

export default CNFT