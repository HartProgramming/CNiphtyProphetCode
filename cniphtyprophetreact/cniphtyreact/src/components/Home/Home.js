import './Home.css';
import React from 'react';
import Background from './CNiphtyProphetTemporaryLogo.svg';
import Disciple from './ProphetSpoken.svg';
import Cardimg from './Cardimg';
import Imgcard from './Imgcard';
import Ghostchain from './CardanoGhostchain.svg';
import CNFTdata from './CNFTdata.svg';
import DonateMerch from './DonateMerch.svg';
import SlickDick from './SlickRickCNiphtyProphet.svg';
import SlickRick from './SlickRickAsMoses.jpeg';

function Home() {

    const opencnftphrase = `Borrow/Lend CNFT collateral with confidence by referring to data from opencnft.io`

    return (
        <section className='section-home'>
                <h1 className='home-header'>CNFT DEFI Collateral Assistance</h1>
                <h2 className='home-sub-header'>Borrow and Lending Dashboard provides you a visual of various scenarios for spending your ADA</h2>
                <img id='slickdick' src={SlickDick}></img>
            <article className='article-cards'>

            </article>
        </section>


    )

}

export default Home