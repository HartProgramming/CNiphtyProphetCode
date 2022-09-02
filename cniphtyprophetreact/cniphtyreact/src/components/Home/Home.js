import Background from './CNiphtyProphetAdjustBackground.svg';
import './Home.css'

function Home() {

    return (
        <section>
            <div>
                <img src={Background} alt='Hompage Background' />
            </div>
            <article>
                <div>
                    <h1>Borrowing/Lending Assistance</h1>
                    <ul>
                        <li>
                            <h3>Potential profit/loss on borrowing</h3>
                        </li>
                        <li>
                            <h3>Profit on lending</h3>
                        </li>
                        <li>
                            <h3>Helps determine whether to lend, trade, buy NFT, .etc</h3>
                        </li>
                    </ul>
                </div>
                <div>
                    <h1>ADA Ecosystem</h1>
                    <ul>
                        <li>
                            <h3>Price of top Cardano projects</h3>
                        </li>
                        <li>
                            <h3>Data on top Cardano projects</h3>
                        </li>
                        <li>
                            <h3>Aids in borrow/lending decision</h3>
                        </li>
                    </ul>
                </div>
                <div>
                    <h1>CNFT Floors</h1>
                    <ul>
                        <li>
                            <h3>List of the top CNFTs available for lending/borrowing</h3>
                        </li>
                        <li>
                            <h3>Up to date floor prices</h3>
                        </li>
                        <li>
                            <h3>24hr Volume provided</h3>
                        </li>
                    </ul>
                </div>
                <div>
                    <h1>Merchandise/Donate</h1>
                    <ul>
                        <li>
                            <h3>Rep the ClockedOut Crew by visiting the store</h3>
                        </li>
                        <li>
                            <h3>Clothes, mugs, etc.</h3>
                        </li>
                        <li>
                            <h3>Donate to help bolster the app and the ClockedOut Crew ecosystem</h3>
                        </li>
                    </ul>
                </div>
            </article>
        </section>


    )

}

export default Home