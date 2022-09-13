import './Home.css';
import React from 'react';
import Background from './CNiphtyProphetTemporaryLogo.svg';
import Disciple from './ProphetSpoken.svg';
import Cardimg from './Cardimg';
import Imgcard from './Imgcard';
import Ghostchain from './CardanoGhostchain.svg';
import CNFTdata from './CNFTdata.svg';
import DonateMerch from './DonateMerch.svg';

function Home() {

    const opencnftphrase = `Borrow/Lend CNFT collateral with confidence by referring to data from opencnft.io`

    return (
        <section className='section-home'>
            <div className='image-div'>
            </div>
            <article className='article-cards'>
                <Cardimg alt='GoatTribe NFT speaking, "The Prophet has spoken..."' header='Borrow/Lending Assistance' lineOne='Short ADA with more info' lineTwo='Determine lending verse flipping NFTs or trading crypto' lineThree={opencnftphrase} img={Disciple}></Cardimg>
                <Imgcard alt='' header='ADA Ecosystem' lineOne='Cardano native token data' lineTwo='Decide to lend or borrow' lineThree='' image={Ghostchain}></Imgcard>
                <Cardimg alt='' header='CNFT Data' lineOne='Provides CNFT collateral eligible data' lineTwo='Data is gathered from opencnft.io' lineThree='Volume, Floor Price, Market Cap' img={CNFTdata}></Cardimg>
                <Imgcard alt='' header='Merchandise/Donate' lineOne='Help build out the CNiphty ecosystem' lineTwo='Profits from merch and donations go toward enhancing CNiphtyProphet and Cniphty' lineThree='Visit our discord and twitter' image={DonateMerch}></Imgcard>
            </article>
        </section>


    )

}

export default Home