import React from 'react'
import './Lend.css';
import Header from './LendHeader.svg'
import Duquackinator from '../CNFT/DUQUACKINATOR.svg'

function Lend(){
    

    return(
        <section>
            <img className='borrow-h1' src={Header}></img>
            <div className='borrow-area'>
                <div className='borrow-area-inside'>
                    <img alt='duck' className='borrow-image' src={Duquackinator}></img>
                    <section className='borrow-section'>

                        <div>
                            <label className='lend-label' for='lend-project'>Project</label>
                            <input className='lend-input' id='lend-project' type='option'></input>
                        </div>
                        <div>
                            <label className='lend-label' for='lend-floor-price'>Floor Price</label>
                            <input className='lend-input' id='lend-floor-price' type='number'></input>
                        </div>
                        <div>
                            <label className='lend-label' for='lend-loan-length'>Loan Length</label>
                            <input className='lend-input' id='lend-loan-length' type='option'></input>
                        </div>
                        <div>
                            <label className='lend-label' for='lend-loan-interst'>Interest</label>
                            <input className='lend-input' id='lend-loan-interest' type='number'></input>
                        </div>
                        <div>
                            <label className='lend-label' for='lend-ada-price'>ADA Price</label>
                            <input className='lend-input' id='lend-ada-price' type='number'></input>
                        </div>
                        <div>
                            <label className='lend-label' for='lend-loan-value'>Loan w/Int($)</label>
                            <input className='lend-input' id='lend-loan-value' type='number'></input>
                        </div>
                        <div>
                            <label className='lend-label' for='lend-buy-back'>ADA Price @ Loan Length</label>
                            <input className='lend-input' id='lend-buy-back' type='number'></input>
                        </div>
                        <div>
                            <label className='lend-label' for='lend-repay'>ADA($) Loaned</label>
                            <input className='lend-input' id='lend-repay' type='number'></input>
                        </div>
                    </section >
                    </div>
                </div>
        </section>
    )
}

export default Lend