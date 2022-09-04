import Background from './CNiphtyProphetAdjustBackground.svg';
import './Home.css'
import React from 'react'

function Home() {

    return (
        <section className='section-home'>
            <div className='image-div'>
                <img src={Background} alt='Hompage Background' />
            </div>
            <article className='article-cards'>
                <div className='card-div'>
                    <h2>Borrowing/Lending Assistance</h2>
                    <hr className='h2-hr'></hr>
                    <ul className='card-list'>
                        <li>
                            Potential profit/loss on borrowing
                        </li>
                        <hr></hr>
                        <li>
                            Profit on lending
                        </li>
                        <hr></hr>
                        <li>
                            Determine whether to lend, trade, buy NFT, .etc
                        </li>
                    </ul>
                </div>
                <div className='card-div'>
                    <h2>ADA Ecosystem</h2>
                    <hr className='h2-hr'></hr>
                    <ul className='card-list'>
                        <li>
                            Price of top Cardano projects
                        </li>
                        <hr></hr>
                        <li>
                            Data on top Cardano projects
                        </li>
                        <hr></hr>
                        <li>
                            Aids in borrow/lending decision
                        </li>
                    </ul>
                </div>
                <div className='card-div'>
                    <h2>CNFT Floors</h2>
                    <hr className='h2-hr'></hr>
                    <ul className='card-list'>
                        <li>
                            List of the top CNFTs available for lending/borrowing
                        </li>
                        <hr></hr>
                        <li>
                            Up to date floor prices
                        </li>
                        <hr></hr>
                        <li>
                            24hr Volume provided
                        </li>
                    </ul>
                </div>
                <div className='card-div'>
                    <h2>Merchandise/Donate</h2>
                    <hr className='h2-hr'></hr>
                    <ul className='card-list'>
                        <li>
                            Rep the ClockedOut Crew
                        </li>
                        <hr></hr>
                        <li>
                            Clothes, mugs, etc.
                        </li>
                        <hr></hr>
                        <li>
                            Donate to improve the app and the ClockedOut Crew ecosystem
                        </li>
                    </ul>
                </div>
            </article>
        </section>


    )

}

export default Home