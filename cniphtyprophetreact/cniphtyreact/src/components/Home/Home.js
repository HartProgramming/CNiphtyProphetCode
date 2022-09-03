import Background from './CNiphtyProphetAdjustBackground.svg';
import './Home.css'

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
                            <h3>Potential profit/loss on borrowing</h3>
                        </li>
                        <li>
                            <h3>Profit on lending</h3>
                        </li>
                        <li>
                            <h3>Determine whether to lend, trade, buy NFT, .etc</h3>
                        </li>
                    </ul>
                </div>
                <div className='card-div'>
                    <h2>ADA Ecosystem</h2>
                    <hr className='h2-hr'></hr>
                    <ul className='card-list'>
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
                <div className='card-div'>
                    <h2>CNFT Floors</h2>
                    <hr className='h2-hr'></hr>
                    <ul className='card-list'>
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
                <div className='card-div'>
                    <h2>Merchandise/Donate</h2>
                    <hr className='h2-hr'></hr>
                    <ul className='card-list'>
                        <li>
                            <h3>Rep the ClockedOut Crew</h3>
                        </li>
                        <hr></hr>
                        <li>
                            <h3>Clothes, mugs, etc.</h3>
                        </li>
                        <hr></hr>
                        <li>
                            <h3>Donate to improve the app and the ClockedOut Crew ecosystem</h3>
                        </li>
                    </ul>
                </div>
            </article>
        </section>


    )

}

export default Home