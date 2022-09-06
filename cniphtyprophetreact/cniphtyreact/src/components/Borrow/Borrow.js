import React from 'react'
import './borrow.css'
import Header from './BorrowHeader3.svg'
import Duquackinator from '../CNFT/DUQUACKINATOR.svg'

function Borrow() {


    return (
        <section>
            <img className='borrow-h1' src={Header}></img>
            <div className='borrow-area'>
                <div className='borrow-area-inside'>
                    <img alt='duck' className='borrow-image' src={Duquackinator}></img>
                    <section className='borrow-section'>

                        <div>
                            <label className='label' for='project'>Project</label>
                            <input className='input' id='project' type='option'></input>
                        </div>
                        <div>
                            <label className='label' for='floor-price'>Floor Price</label>
                            <input className='input' id='floor-price' type='number'></input>
                        </div>
                        <div>
                            <label className='label' for='loan-length'>Loan Length</label>
                            <input className='input' id='loan-length' type='option'></input>
                        </div>
                        <div>
                            <label className='label' for='loan-interst'>Interest</label>
                            <input className='input' id='loan-interest' type='number'></input>
                        </div>
                        <div>
                            <label className='label' for='ada-price'>ADA Price</label>
                            <input className='input' id='ada-price' type='number'></input>
                        </div>
                        <div>
                            <label className='label' for='loan-value'>Loan w/Interest</label>
                            <input className='input' id='loan-value' type='number'></input>
                        </div>
                        <div>
                            <label className='label' for='buy-back'>Buy ADA($)</label>
                            <input className='input' id='buy-back' type='number'></input>
                        </div>
                        <div>
                            <label className='label' for='repay'>Repayment($)</label>
                            <input className='input' id='repay' type='number'></input>
                        </div>
                        <div>
                            <label className='label' for='profit-loss'>Profit/Loss</label>
                            <input className='input' id='profit-loss' type='number'></input>
                        </div>
                    </section >
                    </div>
                </div>
        </section>
    )
}

export default Borrow