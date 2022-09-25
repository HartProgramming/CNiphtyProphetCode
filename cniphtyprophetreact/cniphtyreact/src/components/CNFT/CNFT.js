import './CNFT.css';
import cnftArray from '../CNFTProjectData';
import React from 'react';

import { useState } from 'react';
import axios from 'axios';

const projectList = [];

for (let x of cnftArray) {
    projectList.push(<option key={x.id} value={x.project}>{x.project}</option>)
}

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
            <div className='cnft-data-div'>
                <div className='cnft-data'>
                    <h2 className='cnft-header'>CNFT Data</h2>
                    <ul className='cnft-ul'>
                        <li className='cnft-li'>
                            <h2>Project: <span>
                                <select id='project-list'>{projectList}</select>
                            </span>
                            </h2>
                        </li>
                        <li>
                            <h2>Floor Price: <span onChange={collectCNFT} floor={floor}>{floor}</span></h2>
                        </li>
                        <li className='cnft-li'>
                            <h2>Total Volume: <span></span></h2>
                        </li>
                        <li className='cnft-li'>
                            <h2>24H Volume: <span></span></h2>
                        </li>
                        <li className='cnft-li'>
                            <h2>Market Cap: <span></span></h2>
                        </li>
                        <li className='cnft-li'>
                            <h2>Wallet Holders: <span></span></h2>
                        </li>
                        <li className='cnft-li'>
                            <h2># of Assets: <span></span></h2>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    )

}

export default CNFT