import { useState } from 'react';
import './FrontPage.css';
import Enter from './EnterNoHover.svg';
import Background from './FrontPageBack.svg';
import EnterHover from './EnterHoverButton.svg';

function FrontPage() {

    function changeEnterButton(e){
        e.target.src = EnterHover;
        e.target.className = 'button-hover';
        e.target.classList.remove('button-nohover');
        console.log(e.target)
    }

    function changeEnterButtonOriginal(e){
        e.target.src = Enter
        e.target.classList.remove('button-hover');
        e.target.classList.add('button-nohover');
    }

    return (
        <section id='frontpage-section'>
                <h1>A ClockedOut Crew Application</h1>
                <img alt='Background' id='frontpage-background-image' src={Background}></img>
                <img onMouseEnter={changeEnterButton} onMouseLeave={changeEnterButtonOriginal} alt='Enter Text Button' className='button-nohover' src={Enter}></img>
        </section>
    )
}

export default FrontPage;