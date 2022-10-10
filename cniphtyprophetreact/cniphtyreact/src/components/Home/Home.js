import './Home.css';
import React from 'react';
import SlickDick from './SlickRickCNiphtyProphet.svg';

function Home() {

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