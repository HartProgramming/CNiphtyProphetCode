import React from 'react'
import './Lend.css';
import '../Input/Input.css';
import Input from '../Input/Input';
import axios from 'axios';
import Dropdown from '../Dropdown/Dropdown';
import DropdownUl from '../DropdownUl/DropdownUl';
import '../Dropdown/Dropdown.css'
import cnftArray from '../CNFTProjectData';
import { useState, useEffect } from 'react';

function Lend() {

    const [ADAPriceLend, setADAPriceLend] = useState();


    useEffect(() => {
        const config = { headers: { Accept: "application/json" } };

        axios.get(`https://api.coingecko.com/api/v3/coins/cardano`, config)
            .then(res => {
                const price = res.data.market_data.current_price.usd
                setADAPriceLend(price)
                console.log(res.data.market_data.current_price.usd)
            }).catch(err => {
                console.log(err);
            })
    })

    const projectListLend = [];
    const projectListLendUl = [];

    for (let x of cnftArray) {
        projectListLend.push(<Dropdown idDropdown={x.projectID} textDropdown={x.project} valueDropdown={x.policyID}></Dropdown>);

    }

    for (let i of cnftArray) {
        projectListLendUl.push(<DropdownUl forDropdown={i.projectID} textDropdown={i.project}></DropdownUl>);
    }

    const ChangeProjectLend = (e) => {
        const selectedPolicy = e.target.value;

        const config = { headers: { Accept: "application/json" } };

        const params = {
            policy: selectedPolicy,
        }
        axios.get(`https://api.opencnft.io/1/policy/${params.policy}`, config)
            .then(res => {
                const floor = res.data.floor_price /= Math.pow(10, 6);
                const editImg = res.data.thumbnail.slice(12)
                const pic = `ipfs.io/ipfs/${editImg}`;
                setImgLend(pic)
                setFloorLend(floor);
                console.log(res.data)
            }).catch(err => {
                console.log(err);
            })
    }

    /* Set the type of the input */
    const [lendFloorType, setLendFloorType] = useState('text');
    const [lendLengthType, setLendLengthType] = useState('text');
    const [lendLoanValueType, setLendLoanValueType] = useState('text');
    const [lendInterestType, setLendInterestType] = useState('text');
    const [lendAdaPriceEOLType, setLendAdaPriceEOLType] = useState('text');

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

    /* Set Initial Value on mount */
    useEffect(() => {
        setImgLend();
        setFloorLend();
        setLoanInterestLendADA();
        setLoanInterestLendDollar();
        setLoanStateLend('Set Loan Value');
        setInterestLend('Set Loan Interest %');
        setLengthLend('Set Loan Length Days');
        setLoanInterestLendDollarEOL();
        setADAPriceEOL('Set End of Loan ADA Price');
    }, [])

    /* Set the length of the loan */
    const SetLoanLength = (e) => {
        setLendLengthType('number');
        setLengthLend(e.target.value);
    }

    /* Set the value of the loan and alter ADA+Interest, ADA+Interest converted to dollar @ current ADA price, and ADA+Interest converted to Dollar @ EOL ADA price */
    const SetLoanValueADA = e => {
        setLendLoanValueType('number');
        setLoanStateLend(e.target.value);
    }

    /* Set the value of the loan interest and alter ADA+Interest, ADA+Interest converted to dollar @ current ADA price, and ADA+Interest converted to Dollar @ EOL ADA price */
    const SetLoanInterest = e => {
        setLendInterestType('number');
        setInterestLend(e.target.value);
    }

    /* Set and define ADA price at EOL and alter the ADA+Interest convert to dollars at EOL ADA price */
    const SetADAPriceEOL = e => {
        setADAPriceEOL(e.target.value);
    }

    const ChangeFocusLend = e => {
        e.target.value = '';
        if (e.target.id === 'lend-ada-price-eol') {
            setLendAdaPriceEOLType('number');

        }
    }

    useEffect(() => {
        setLoanInterestLendADA(((1 + (interestLend / 100)) * (loanValueLend)).toFixed(2).toLocaleString());
        setLoanInterestLendDollar(parseFloat(loanInterestLendADA * ADAPriceLend).toFixed(2).toLocaleString());
        setLoanInterestLendDollarEOL(parseFloat(ADAPriceEOL * loanInterestLendADA).toFixed(2).toLocaleString());
    })

    return (
        <section className='lend-section'>
            <div className='lend-area'>
                <div className='input-row'>
                    <label className='input-label' for='lend-project'>Project</label>
                    <div className='select-options-container'>
                        <div onClick={ChangeProjectLend} className='select-options-div-box' tabIndex='1'>
                            {projectListLend}
                            <img className="select-icon" src="http://cdn.onlinewebfonts.com/svg/img_295694.svg" alt="Arrow Icon" aria-hidden="true" />
                        </div>
                        <ul className='select-list'>
                            <div className='list-container'>
                                {projectListLendUl}

                            </div>
                        </ul>


                    </div>                </div>
                <Input className='input'  title='Floor Price' readonly id='lend-floor-price' type='number' for='lend-floor-price' name='lend-floor-price' value={floorLend} />
                <Input className='input'  title='Current ADA Price($)' readonly id='lend-ada-price' type='number' for='lend-ada-price' name='lend-ada-price' value={ADAPriceLend} />
                <Input className='input'  onFocus={ChangeFocusLend} title='Loan Length (Days)' onChange={SetLoanLength} type={lendLengthType} id='lend-loan-length' for='lend-loan-length' value={lengthLend} name='lend-loan-length' />
                <Input className='input'  onFocus={ChangeFocusLend} title='Loan Value (ADA)' onChange={SetLoanValueADA} step='1' id='lend-loan-value-ada' type={lendLoanValueType} for='lend-loan-value-ada' name='lend-loan-value-ada' value={loanValueLend} />
                <Input className='input'  onFocus={ChangeFocusLend} title='Interest %' onChange={SetLoanInterest} step='.5' id='lend-loan-interest' type={lendInterestType} for='lend-loan-interest' name='lend-loan-interest' value={interestLend} />
                <Input className='input'  title='Loan w/Int (ADA)' readonly id='lend-loan-value-winterest-ada' type='number' for='lend-loan-value-winterest-ada' name='lend-loan-value-winterest-ada' value={loanInterestLendADA} />
                <Input  className='input' title='Current Loan w/Int ($)' readonly id='lend-loan-value-winterest-dollar' type='number' for='lend-loan-value-winterest-dollar' name='lend-loan-value-winterest-dollar' value={loanInterestLendDollar} />
                <Input className='input'  onFocus={ChangeFocusLend} title='ADA Price($) @ End of Loan' onChange={SetADAPriceEOL} id='lend-ada-price-eol' type={lendAdaPriceEOLType} for='lend-ada-price-eol' step='.01' name='lend-ada-price-eol' value={ADAPriceEOL} />
                <Input className='input'  title='Loan w/Int ($) @ End of Loan' readonly id='lend-loan-value-winterest-dollar-eol' type='number' for='lend-loan-value-winterest-dollar' name='lend-loan-value-winterest-dollar' value={loanInterestLendDollarEOL} />
            </div>
        </section >
    )
}

export default Lend