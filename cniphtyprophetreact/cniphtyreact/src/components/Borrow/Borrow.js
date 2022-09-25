import React from 'react'
import './borrow.css'
import Header from './BorrowHeader3.svg'
import Duquackinator from '../CNFT/DUQUACKINATOR.svg';
import { useState, useEffect } from 'react';
import axios from 'axios';
import '../MainBar/MainBar.css';
import Input from '../Input/Input';
import cnftArray from '../CNFTProjectData';
import { unstable_renderSubtreeIntoContainer } from 'react-dom/cjs/react-dom.development';

function Borrow() {

    const projectsList = document.querySelectorAll('#projects');

    const projectList = [];

    for (let x of cnftArray) {
        projectList.push(<option className='projects' key={x.id} value={x.policyID}>{x.project}</option>)
    }

    const [ADAprice, setADAPrice] = useState('')

    const LoadAdaPrice = () => {
        const config = { headers: { Accept: "application/json" } };

        axios.get(`https://api.coingecko.com/api/v3/coins/cardano`, config)
            .then(res => {
                const price = res.data.market_data.current_price.usd
                setADAPrice(price)
                console.log(res.data.market_data.current_price.usd)
            }).catch(err => {
                console.log(err);
            })
    }

    LoadAdaPrice()

    const ChangeProject = (e) => {
        const selectedPolicy = e.target.value;

        const config = { headers: { Accept: "application/json" } };

        const params = {
            policy: selectedPolicy,
        }
        axios.get(`https://api.opencnft.io/1/policy/${params.policy}`, config)
            .then(res => {
                const volume = res.data.total_volume /= Math.pow(10, 6);
                const floor = res.data.floor_price /= Math.pow(10, 6);
                const assets = res.data.asset_minted;
                const cap = assets * floor;
                const editImg = res.data.thumbnail.slice(12)
                const pic = `ipfs.io/ipfs/${editImg}`;
                setImg(pic)
                setFloor(floor);
                setVol(volume);
                setMktCap(cap);
                console.log(res.data)
            }).catch(err => {
                console.log(err);
            })
    }
    const hi = 'hi'

    const [img, setImg] = useState(null);
    const [floor, setFloor] = useState(0);
    const [vol, setVol] = useState(0);
    const [mktCap, setMktCap] = useState(0);

    const [loanInterest, setLoanInterest] = useState(0)

    const ChangeInterest = (e) => {
        const interestSet = interest / 100
        e.target.value = setLoanInterest(parseInt(loanValue * (1 + interestSet)));
    }

    const [loanValue, setLoanState] = useState(0)

    const SetLoanValue = (e) => {
        setLoanState(e.target.value);
    }

    const [interest, setInterest] = useState(0);

    const SetLoanInterest = (e) => {
        setInterest(e.target.value)
    }

    const [length, setLength] = useState(0);

    const SetLoanLength = (e) => {
        setLength(e.target.value);
    }

    return (
        <section className='borrow-section'>
            <div className='borrow-div-row-project'>
                <label className='borrow-label' for='project'>Project</label>
                <select onChange={ChangeProject} id='projects' className='project-list'>{projectList}</select>
            </div>
            <div className='borrow-area'>
                <Input id='floor-price' for='floor-price' name='Floor Price' value='0'></Input>
                <Input id='loan-value' for='loan-value' name='Loan(ADA)' value='0'></Input>
                <Input id='loan-value-interest' for='loan-value-interest' name='Loan w/Interest' value='0'></Input>
                <Input id='buy-back' for='buy-back' name='Buy ADA($)' value='0'></Input>
                <Input id='profit-loss' for='profit-loss' name='Profit/Loss' value='0'></Input>
                <Input id='ada-price' for='ada-price' name='ADA Price($)' value='0'></Input>
                <Input id='loan-interest' for='loan-interest' name='Interest %' value='0'></Input>
                <Input id='loan-length' for='loan-length' name='Length(Days)' value='0'></Input>
                <Input id='repay' for='repay' name='Repayment($)' value='0'></Input>
            </div>

        </section >
    )
}

export default Borrow