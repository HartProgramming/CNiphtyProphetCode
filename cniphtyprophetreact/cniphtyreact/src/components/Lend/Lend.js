import React from 'react'
import './Lend.css';
import Input from '../Input/Input';
import Header from './LendHeader.svg'
import Duquackinator from '../CNFT/DUQUACKINATOR.svg'

function Lend() {


    return (
        <section>
            <div className='lend-area'>
                <div className='lend-area-inside'>
                    <h2 className='lend-header'>Lend</h2>
                    <img alt='duck' className='lend-image' src={Duquackinator}></img>
                    <section className='lend-section'>

                        <div className='lend-div-row'>
                            <label className='lend-label' for='lend-project'>Project</label>
                            <input className='lend-input' id='lend-project' type='option'></input>
                        </div>
                        <Input id='lend-floor-price' for='lend-floor-price' name='Floor Price' value='0' />
                        <Input id='lend-loan-length' for='lend-loan-length' value='0' name='Loan Length' />
                        <Input id='lend-loan-interest' for='lend-loan-interest' name='Interest' value='0' />
                        <Input id='lend-ada-price' for='lend-ada-price' name='ADA Price' value='0' />
                        <Input id='lend-loan-value' for='lend-loan-value' name='Loan w/Int($)' value='0' />
                        <Input id='lend-loan-length' for='lend-loan-length' name='Loan Length' value='0' />
                        <Input id='lend-repay' for='lend-repay' name='ADA($) Loaned' value='0' />
                    </section >
                </div>
            </div>
        </section>
    )
}

export default Lend