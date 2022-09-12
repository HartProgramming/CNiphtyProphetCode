import Background from './CNiphtyProphetTemporaryLogo.svg';
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
                    <ul className='card-list'>
                        <li className='list-item-home'>
                            Potential profit/loss on borrowing
                        </li>
                        <li className='list-item-home'>
                            Profit on lending
                        </li>
                        <li className='list-item-home'>
                            Determine whether to lend, trade, buy NFT, .etc
                        </li>
                    </ul>
                </div>
                <div className='card-div'>
                    <h2>ADA Ecosystem</h2>
                    <ul className='card-list'>
                        <li className='list-item-home'>
                            Price of top Cardano projects
                        </li>
                        <li className='list-item-home'>
                            Data on top Cardano projects
                        </li>
                        <li className='list-item-home'>
                            Aids in borrow/lending decision
                        </li>
                    </ul>
                </div>
                <div className='card-div'>
                    <h2>CNFT Floors</h2>
                    <ul className='card-list'>
                        <li className='list-item-home'>
                            List of the top CNFTs available for lending/borrowing
                        </li>
                        <li className='list-item-home'>
                            Up to date floor prices
                        </li>
                        <li className='list-item-home'>
                            24hr Volume provided
                        </li>
                    </ul>
                </div>
                <div className='card-div'>
                    <h2>Merchandise/Donate</h2>
                    <ul className='card-list'>
                        <li className='list-item-home'>
                            Rep the ClockedOut Crew
                        </li>
                        <li className='list-item-home'>
                            Clothes, mugs, etc.
                        </li>
                        <li className='list-item-home'>
                            Donate to improve the app and the ClockedOut Crew ecosystem
                        </li>
                    </ul>
                </div>
            </article>
        </section>


    )

}

export default Home