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

    const LoadAdaPrice = () => {
        const config = { headers: { Accept: "application/json" } };

        axios.get(`https://api.coingecko.com/api/v3/coins/cardano`, config)
            .then(res => {
                const price = res.data.market_data.current_price.usd
                setADAPriceBorrow(price)
                console.log(res.data.market_data.current_price.usd)
            }).catch(err => {
                console.log(err);
            })
    }

    LoadAdaPrice()

    const ChangeProjectBorrow = (e) => {
        const selectedPolicy = e.target.value;
        console.log(selectedPolicy)
        const config = { headers: { Accept: "application/json" } };

        const params = {
            policy: selectedPolicy,
        }
        axios.get(`https://api.opencnft.io/1/policy/${params.policy}`, config)
            .then(res => {
                const floor = res.data.floor_price /= Math.pow(10, 6);
                const editImg = res.data.thumbnail.slice(12)
                const pic = `ipfs.io/ipfs/${editImg}`;
                setImgBorrow(pic)
                setFloorBorrow(floor);
                console.log(res.data)
            }).catch(err => {
                console.log(err);
            })
    }

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
        console.log(e)
        const days = e.target.value;
        setLengthBorrow(days);
    }

    /* Set interest value and values with interest */
    const SetInterestBorrow = e => {
        setInterestBorrow(e.target.value)
        setTimeout(() => {
            setLoanInterestBorrow((((intValue.value /= 100) + 1) * loanValue.value).toFixed(2).toLocaleString());
        }, 50);
        setTimeout(() => {
            setLoanInterestBorrowDollar((loanValueADAID.value * adaPriceSOLID.value).toFixed(2).toLocaleString());
        }, 100);
        setTimeout(() => {
            console.log(repayID.value)
            console.log(loanValueADAID.value)
            setRepaymentBorrow((buyBackID.value * loanValueADAID.value).toLocaleString());
        }, 150);
        setTimeout(() => {
            setProfitLoss((loanValueDollarsID.value - repayID.value).toFixed(2).toLocaleString())
        }, 200);
        setTimeout(() => {
            setProfitLossADA((profitLossDollars.value /= buyBackID.value).toFixed(2).toLocaleString())
        }, 250);

    }

    const clearInput = e => {
        e.target.value = '';
    }


    const SetLoanValueADA = e => {
        setLoanStateBorrow(e.target.value);
        if (loanValue.value !== 0 || loanValue.value !== null) {
            setTimeout(() => {
                setLoanInterestBorrow((((intValue.value /= 100) + 1) * loanValue.value).toFixed(2).toLocaleString());
            }, 50);
            setTimeout(() => {
                setLoanInterestBorrowDollar((loanValueADAID.value * adaPriceSOLID.value).toFixed(2).toLocaleString());
            }, 100);
            setTimeout(() => {
                setRepaymentBorrow((buyBackID.value * loanValueADAID.value).toFixed(2).toLocaleString());
            }, 150);
            setTimeout(() => {
                setProfitLoss((loanValueDollarsID.value - repayID.value).toFixed(2).toLocaleString());
            }, 200);
            setTimeout(() => {
                setProfitLossADA((profitLossDollars.value /= buyBackID.value).toFixed(2).toLocaleString())
            }, 210);
        }
    }

    const SetRepayProfit = e => {
        setADAEol(e.target.value);
        if (buyBackID.value !== null || buyBackID.value !== 0) {
            setRepaymentBorrow((buyBackID.value * loanValueADAID.value).toFixed(2).toLocaleString());
            setTimeout(() => {
                setProfitLoss((loanValueDollarsID.value - repayID.value).toFixed(2).toLocaleString());
            }, 200);
            setTimeout(() => {
                setProfitLossADA((profitLossDollars.value /= buyBackID.value).toFixed(2).toLocaleString())
            }, 210);

        }
    }

    const SetADAPriceSOL = e => {
        setADAPriceSOL(e.target.value);
        setTimeout(() => {
            setLoanInterestBorrow((((intValue.value /= 100) + 1) * loanValue.value).toFixed(2).toLocaleString());
        }, 100);
        setTimeout(() => {
            setLoanInterestBorrowDollar((loanValueADAID.value * adaPriceSOLID.value).toFixed(2).toLocaleString());
        }, 110);
        setTimeout(() => {
            setRepaymentBorrow((buyBackID.value * loanValueADAID.value).toFixed(2).toLocaleString());
        }, 150);
        setTimeout(() => {
            setProfitLoss((loanValueDollarsID.value - repayID.value).toFixed(2).toLocaleString());
        }, 200);
        setTimeout(() => {
            setProfitLossADA((profitLossDollars.value /= buyBackID.value).toFixed(2).toLocaleString())
        }, 210);

    }

    const [ADAPriceSOL, setADAPriceSOL] = useState(null);
    const [adaEOL, setADAEol] = useState(null);
    const [repaymentBorrow, setRepaymentBorrow] = useState(null);
    const [lengthBorrow, setLengthBorrow] = useState(null);
    const [interestBorrow, setInterestBorrow] = useState(null);
    const [loanValueBorrow, setLoanStateBorrow] = useState(null);
    const [loanWInterestBorrow, setLoanInterestBorrow] = useState(null);
    const [profitLoss, setProfitLoss] = useState(null);
    const [loanWInterestBorrowDollar, setLoanInterestBorrowDollar] = useState(null);
    const [profitLossADA, setProfitLossADA] = useState(null)

    return (
        <section className='borrow-section'>
            <div className='borrow-area'>
                <div className='input-row'>
                    <label className='input-label' for='project'>Project</label>
                    <select onChange={ChangeProjectBorrow} id='projects' className='input'>{projectListBorrow}</select>
                </div>
                <Input id='floor-price' name='Floor Price' type='number' value={floorBorrow}></Input>
                <Input onChange={SetLoanLengthBorrow} id='loan-length' type='number' name='Length(Days)' value={lengthBorrow}></Input>
                <Input id='ada-price' name='Curr. ADA Price($)' type='number' value={ADApriceBorrow}></Input>
                <Input onChange={SetADAPriceSOL} id='ada-price-sol' name='ADA Price($) @ Start of Loan/Sale of ADA' type='number' value={ADAPriceSOL}></Input>
                <Input onChange={SetLoanValueADA} id='loan-value' type='number' name='Loan' value={loanValueBorrow}></Input>
                <Input onClick={clearInput} onChange={SetInterestBorrow} id='loan-interest' type='number' name='Interest %' value={interestBorrow}></Input>
                <Input id='loan-value-interest' type='number' name='Loan w/Interest ADA' value={loanWInterestBorrow}></Input>
                <Input id='loan-value-interest-dollars' type='number' name='Loan w/Interest ($)' value={loanWInterestBorrowDollar}></Input>
                <Input onChange={SetRepayProfit} step='.01' id='buy-back' name='ADA Price @ End of Loan' type='number' value={adaEOL}></Input>
                <Input id='repay' name='Repayment($)' type='number' value={repaymentBorrow}></Input>
                <Input id='profit-loss' name='Profit/Loss($)' type='number' value={profitLoss}></Input>
                <Input id='profit-loss-ada' name='Profit/Loss ADA' type='number' value={profitLossADA}></Input>
            </div>
        </section >
    )
}

export default Borrow