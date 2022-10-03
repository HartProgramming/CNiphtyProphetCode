import React from 'react'
import './borrow.css'
import { useState, useEffect } from 'react';
import axios from 'axios';
import '../MainBar/MainBar.css';
import '../Input/Input.css'
import Input from '../Input/Input';
import cnftArray from '../CNFTProjectData';

function Borrow() {


    const projectListBorrow = [];

    for (let x of cnftArray) {
        projectListBorrow.push(<option className='projects' key={x.id} value={x.policyID}>{x.project}</option>)
    }

    const [ADApriceBorrow, setADAPriceBorrow] = useState('')


    const ChangeProjectBorrow = (e) => {
        const selectedPolicy = e.target.value;
        console.log(selectedPolicy)
        const config = { headers: { Accept: "application/json" } };

        const params = {
            policy: selectedPolicy,
        }
        axios.get(`https://api.opencnft.io/1/policy/${params.policy}`, config)
            .then(res => {
                const floor = (res.data.floor_price /= Math.pow(10, 6)) + ' ADA';
                const editImg = res.data.thumbnail.slice(12)
                const pic = `ipfs.io/ipfs/${editImg}`;
                setImgBorrow(pic);
                setFloorBorrow(floor);
                console.log(res.data)
            }).catch(err => {
                console.log(err);
            })


    }

    useEffect(() => {
        const config = { headers: { Accept: "application/json" } };

        axios.get(`https://api.coingecko.com/api/v3/coins/cardano`, config)
            .then(res => {
                const price = res.data.market_data.current_price.usd
                setADAPriceBorrow(price.toFixed(3))
                console.log(res.data.market_data.current_price.usd)
            }).catch(err => {
                console.log(err);
            })
    }, [])

    const [imgBorrow, setImgBorrow] = useState(null);
    const [floorBorrow, setFloorBorrow] = useState();

    const loanValueDollarsID = document.querySelector('#loan-value-interest-dollars');
    const buyBackID = document.querySelector('#buy-back');
    const repayID = document.querySelector('#repay')
    const adaPriceID = document.querySelector('#ada-price');
    const loanValueADAID = document.querySelector('#loan-value-interest');
    const loanValue = document.querySelector('#loan-value');
    const intValue = document.querySelector('#loan-interest');
    const profitLossDollars = document.querySelector('#profit-loss');
    const adaPriceSOLID = document.querySelector('#ada-price-sol');

    /* Loan Length function */
    const SetLoanLengthBorrow = (e) => {
        setLoanLengthType('number')

        const days = e.target.value;
        console.log(days)
        setLengthBorrow(days);
    }

    /* ADA price at start of loan function */
    const SetADAPriceSOL = (e) => {
        setADAPriceSOL(e.target.value);
    }

    /* Loan value in ADA requested */
    const SetLoanValueADA = (e) => {
        setLoanStateBorrow(e.target.value);
        setLoanValueType('number')
    }

    /* End of loan ADA price or buy back price */
    const SetBuyBack = (e) => {
        setADAEol(e.target.value);
    }

    /* Interest rate set function for loan */
    const SetInterestBorrow = (e) => {
        setInterestBorrow(e.target.value);
        setInterestType('number')
    }

    const ChangeFocus = (e) => {
        console.log(e)
        e.target.value = ''
        if (e.target.id === 'ada-price-sol') {
            setAdaPriceTypeSOL('number')

        } else if(e.target.id === 'ada-price-eol'){
            setBuyBackTypeEOL('number')
        }
    }

    /* Mounts states of every input on page load */
    useEffect(() => {
        setADAEol('Set Buy Back ADA Price');
        setRepaymentBorrow();
        setADAPriceSOL('Set ADA Price at Loan');
        setLengthBorrow('Set Loan Length');
        setInterestBorrow('Set Interest Rate');
        setLoanStateBorrow('Set Loan Value');
        setLoanInterestBorrow();
        setFloorBorrow('Change Project')
        setProfitLoss();
        setProfitLossADA();
        setLoanValueDollars();
        setRepaymentInterestBorrow();
        setAdaInterestCharged();
        setADABreakEvenPrice();
        setRepayInterestPlusLoan();
        console.log(ADAPriceSOL)
        console.log(adaBreakEvenPrice)

    }, [])

    /* UseEffect manages updating the various inputs without direct input
    that require calculation */
    useEffect(() => {
        setRepaymentBorrow((adaEOL * loanValueBorrow).toFixed(2).toLocaleString());
        setProfitLoss((parseFloat(loanValueDollars) - parseFloat(repayInterestPlusLoan)).toFixed(2))
        setLoanInterestBorrow((loanValueBorrow * (1 + (interestBorrow / 100))).toFixed(2).toLocaleString());
        if (loanWInterestBorrow !== 0) {
            setProfitLossADA((profitLoss / adaEOL).toFixed(2).toLocaleString());
            setAdaInterestCharged((loanWInterestBorrow - loanValueBorrow).toFixed(2).toLocaleString());
        }
        setRepaymentInterestBorrow((parseFloat(adaEOL * adaInterestCharged)).toFixed(2).toLocaleString());
        setLoanValueDollars((ADAPriceSOL * loanValueBorrow).toFixed(2).toLocaleString());
        if (ADAPriceSOL === undefined && isNaN(adaBreakEvenPrice)) {
            setADABreakEvenPrice('')
        } else if (ADAPriceSOL > 0) {
            setADABreakEvenPrice(ADAPriceSOL * .95);
            console.log('hi')
        }
        console.log(ADAPriceSOL)
        console.log(adaBreakEvenPrice)
        setRepayInterestPlusLoan(parseFloat(repaymentInterestBorrow) + parseFloat(repaymentBorrow))

        console.log(repayInterestPlusLoan);

    })

    /* Set Type State */
    const [floorType, setFloorType] = useState('text');
    const [loanLengthType, setLoanLengthType] = useState('text');
    const [adaPriceTypeSOL, setAdaPriceTypeSOL] = useState('text');
    const [loanValueType, setLoanValueType] = useState('text');
    const [interestType, setInterestType] = useState('text');
    const [buyBackTypeEOL, setBuyBackTypeEOL] = useState('text');

    /* Set Value State */
    const [ADAPriceSOL, setADAPriceSOL] = useState(null);
    const [adaEOL, setADAEol] = useState(null);
    const [repaymentBorrow, setRepaymentBorrow] = useState(null);
    const [lengthBorrow, setLengthBorrow] = useState(null);
    const [interestBorrow, setInterestBorrow] = useState(null);
    const [loanValueBorrow, setLoanStateBorrow] = useState(null);
    const [loanWInterestBorrow, setLoanInterestBorrow] = useState(null);
    const [profitLoss, setProfitLoss] = useState(null);
    const [profitLossADA, setProfitLossADA] = useState(null);
    const [loanValueDollars, setLoanValueDollars] = useState(null);
    const [repaymentInterestBorrow, setRepaymentInterestBorrow] = useState(null);
    const [adaInterestCharged, setAdaInterestCharged] = useState(null);
    const [adaBreakEvenPrice, setADABreakEvenPrice] = useState(null);
    const [repayInterestPlusLoan, setRepayInterestPlusLoan] = useState(null);

    return (
        <section className='borrow-section'>
            <div className='borrow-area'>
                <div className='input-row'>
                    <label className='input-label' for='project'>Project</label>
                    <select onChange={ChangeProjectBorrow} id='projects' className='input'>{projectListBorrow}</select>
                </div>
                <Input title='Floor Price' name='borrow-floor-price' readonly id='floor-price' type={floorType} value={floorBorrow}></Input>
                <Input onFocus={ChangeFocus} title='Length(Days)' name='borrow-length-days' onChange={SetLoanLengthBorrow} id='loan-length' type={loanLengthType} value={lengthBorrow}></Input>
                <Input title='Curr. ADA Price($)' name='borrow-current-ada-price' readonly id='ada-price' type='number' value={ADApriceBorrow}></Input>
                <Input onFocus={ChangeFocus} step='.01' title='ADA Price($) @ Start of Loan/Sale of ADA' name='ada-price-sol' onChange={SetADAPriceSOL} id='ada-price-sol' type={adaPriceTypeSOL} value={ADAPriceSOL}></Input>
                <Input onFocus={ChangeFocus} step='1' title='Loan Value ADA' name='borrow-loan-value-ada' onChange={SetLoanValueADA} id='loan-value' type={loanValueType} value={loanValueBorrow}></Input>
                <Input title='Loan Value ($)' name='borrow-loan-value-dollar' readonly id='loan-value' type='number' value={loanValueDollars}></Input>
                <Input onFocus={ChangeFocus} step='.5' title='Interest %' name='borrow-interest' onChange={SetInterestBorrow} id='loan-interest' type={interestType} value={interestBorrow}></Input>
                <Input title='Loan w/Interest ADA' name='borrow-loan-interest-with-ada' readonly id='loan-value-interest' type='number' value={loanWInterestBorrow}></Input>
                <Input title='Interest Charged ADA' name='borrow-loan-interest-charged-ada' readonly id='interest-charged-ada' type='number' value={adaInterestCharged}></Input>
                <Input title='Break Even ADA Price ($)' name='break-even-ada-price' readonly step='.01' id='break-even-price' type=' number' value={adaBreakEvenPrice}></Input>
                <Input onFocus={ChangeFocus} title='Buy back ADA Price ($)' name='buy-back-ada-price' onChange={SetBuyBack} step='.01' id='buy-back' type={buyBackTypeEOL} value={adaEOL}></Input>
                <Input title='Repayment($) Exclude Interest' name='repay-exclude-interest-dollar' readonly id='repay' type='number' value={repaymentBorrow}></Input>
                <Input title='Interest Repaid ($)' name='interest-repay-dollar' readonly id='repay-interest' type='number' value={repaymentInterestBorrow}></Input>
                <Input title='Interest + Loan ($)' name='interest-plus-loan-dollar' readonly id='repay-interest-plus-loan' type='number' value={repayInterestPlusLoan}></Input>
                <Input title='Profit/Loss($)' name='profit-loss-dollar' readonly id='profit-loss' type='number' value={profitLoss}></Input>
                <Input title='Profit/Loss ADA' name='profit-loss-ada' readonly id='profit-loss-ada' type='number' value={profitLossADA}></Input>
            </div>
        </section >
    )
}

export default Borrow