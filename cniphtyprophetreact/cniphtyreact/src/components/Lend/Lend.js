import React from 'react'
import './Lend.css';
import '../Input/Input.css';
import Input from '../Input/Input';
import axios from 'axios';
import cnftArray from '../CNFTProjectData';
import { useState, useEffect } from 'react';

function Lend() {

    const [ADAPriceLend, setADAPriceLend] = useState();

    const LoadAdaPriceLend = () => {
        const config = { headers: { Accept: "application/json" } };

        axios.get(`https://api.coingecko.com/api/v3/coins/cardano`, config)
            .then(res => {
                const price = res.data.market_data.current_price.usd
                setADAPriceLend(price)
                console.log(res.data.market_data.current_price.usd)
            }).catch(err => {
                console.log(err);
            })
    }

    LoadAdaPriceLend()

    const projectListLend = [];

    for (let x of cnftArray) {
        projectListLend.push(<option className='projects' key={x.id} value={x.policyID}>{x.project}</option>)
    }

    const ChangeProjectLend = (e) => {
        const selectedPolicy = e.target.value;

        const config = { headers: { Accept: "application/json" } };

        const params = {
            policy: selectedPolicy,
        }
        axios.get(`https://api.opencnft.io/1/policy/${params.policy}`, config)
            .then(res => {
                const floor = `${res.data.floor_price /= Math.pow(10, 6)} ADA`;
                const editImg = res.data.thumbnail.slice(12)
                const pic = `ipfs.io/ipfs/${editImg}`;
                setImgLend(pic)
                setFloorLend(floor);
                console.log(res.data)
            }).catch(err => {
                console.log(err);
            })
    }

    /* Set and define the various states */
    const [imgLend, setImgLend] = useState(null);
    const [floorLend, setFloorLend] = useState(null);
    const [loanInterestLendADA, setLoanInterestLendADA] = useState(null);
    const [loanInterestLendDollar, setLoanInterestLendDollar] = useState(null);
    const [loanValueLend, setLoanStateLend] = useState(null);
    const [interestLend, setInterestLend] = useState(null);
    const [lengthLend, setLengthLend] = useState(null);
    const [loanInterestLendDollarEOL, setLoanInterestLendDollarEOL] = useState(null);
    const [ADAPriceEOL, setADAPriceEOL] = useState(null);

    /* Set and define the various IDs */
    const interestId = document.querySelector('#lend-loan-interest');
    const loanValueAda = document.querySelector('#lend-loan-value-ada');
    const loanValueWInterestADAID = document.querySelector('#lend-loan-value-winterest-ada');
    const lendADAPriceID = document.querySelector('#lend-ada-price');
    const lendADAPriceEOLID = document.querySelector('#lend-ada-price-eol');
    const loanLength = document.querySelector('#lend-loan-length');

    /* Set the length of the loan */
    const SetLoanLength = (e) => {
        setLengthLend(e.target.value);
    }

    /* Set the value of the loan and alter ADA+Interest, ADA+Interest converted to dollar @ current ADA price, and ADA+Interest converted to Dollar @ EOL ADA price */
    const SetLoanValueADA = e => {
        setLoanStateLend(e.target.value);
        if (loanValueAda.value !== null || loanValueAda.value !== 0) {
            setTimeout(() => {
                setLoanInterestLendADA((loanValueAda.value * (1 + (interestId.value /= 100))).toFixed(2).toLocaleString())
            }, 100);
            setTimeout(() => {
                setLoanInterestLendDollar((loanValueWInterestADAID.value * lendADAPriceID.value).toFixed(2).toLocaleString())
            }, 150);
            setTimeout(() => {
                setLoanInterestLendDollarEOL((loanValueWInterestADAID.value * lendADAPriceEOLID.value).toFixed(2).toLocaleString())
            }, 200);
        }
    }

    /* Set the value of the loan interest and alter ADA+Interest, ADA+Interest converted to dollar @ current ADA price, and ADA+Interest converted to Dollar @ EOL ADA price */
    const SetLoanInterest = e => {
        setInterestLend(e.target.value);
        if (interestId.value !== null || interestId.value !== 0) {
            setTimeout(() => {
                setLoanInterestLendADA((loanValueAda.value * (1 + (interestId.value /= 100))).toFixed(2).toLocaleString())
            }, 100);
            setTimeout(() => {
                setLoanInterestLendDollar((loanValueWInterestADAID.value * lendADAPriceID.value).toFixed(2).toLocaleString())
            }, 150);
            setTimeout(() => {
                setLoanInterestLendDollarEOL((loanValueWInterestADAID.value * lendADAPriceEOLID.value).toFixed(2).toLocaleString())
            }, 200);
        }
    }

    /* Set and define ADA price at EOL and alter the ADA+Interest convert to dollars at EOL ADA price */
    const SetADAPriceEOL = e => {
        setADAPriceEOL(e.target.value)
        if (lendADAPriceEOLID.value !== null || lendADAPriceEOLID.value !== 0) {
            setTimeout(() => {
                setLoanInterestLendDollarEOL((loanValueWInterestADAID.value * lendADAPriceEOLID.value).toFixed(2).toLocaleString())
            }, 100);
        }
    }

    return (
        <section className='lend-section'>
            <div className='lend-area'>
                <div className='input-row'>
                    <label className='input-label' for='lend-project'>Project</label>
                    <select onChange={ChangeProjectLend} id='projects' className='input'>{projectListLend}</select>
                </div>
                <Input id='lend-floor-price' type='text' for='lend-floor-price' name='Floor Price' value={floorLend} />
                <Input onChange={SetLoanLength} type='text' id='lend-loan-length' for='lend-loan-length' value={lengthLend} name='Loan Length Days' />
                <Input onChange={SetLoanValueADA} id='lend-loan-value-ada' type='text' for='lend-loan-value-ada' name='Loan Value (ADA)' value={loanValueLend} />
                <Input onChange={SetLoanInterest} step='.01' id='lend-loan-interest' type='text' for='lend-loan-interest' name='Interest' value={interestLend} />
                <Input id='lend-loan-value-winterest-ada' type='text' for='lend-loan-value-winterest-ada' name='Loan w/Int (ADA)' value={loanInterestLendADA} />
                <Input id='lend-loan-value-winterest-dollar' type='number' for='lend-loan-value-winterest-dollar' name='Current Loan w/Int ($)' value={loanInterestLendDollar} />
                <Input id='lend-ada-price' type='text' for='lend-ada-price' name='Current ADA Price($)' value={ADAPriceLend} />
                <Input onChange={SetADAPriceEOL} id='lend-ada-price-eol' type='text' for='lend-ada-price-eol' name='ADA Price @ End of Loan ' value={ADAPriceEOL} />
                <Input id='lend-loan-value-winterest-dollar-eol' type='text' for='lend-loan-value-winterest-dollar' name='Current Loan w/Int ($)' value={loanInterestLendDollarEOL} />
            </div>
        </section >
    )
}

export default Lend