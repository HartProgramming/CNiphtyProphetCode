import React, { useState } from "react";
import './MainBar.css';
import { Link } from 'react-router-dom';


function MainBar() {

    const [leftButton, setLeftButton] = useState('mainbar-button');
    const [midLeftButton, setMidLeftButton] = useState('mainbar-button');
    const [midRightButton, setMidRightButton] = useState('mainbar-button');
    const [rightButton, setRightButton] = useState('mainbar-button');
    const [leftA, setLeftA] = useState('mainbar-item');
    const [rightA, setRightA] = useState('mainbar-item');
    const [midLeftA, setMidLeftA] = useState('mainbar-item');
    const [midRightA, setMidRightA] = useState('mainbar-item');


    const changeLeftBtn = (e) => {
        setLeftButton('mainbar-button-clicked');
        setRightButton('mainbar-button');
        setMidRightButton('mainbar-button');
        setMidLeftButton('mainbar-button');

        setRightA('mainbar-item');
        setMidRightA('mainbar-item');
        setMidLeftA('mainbar-item');
        setLeftA('mainbar-item-clicked');
    }

    const changeRightBtn = (e) => {
        setRightButton('mainbar-button-clicked');
        setLeftButton('mainbar-button');
        setMidRightButton('mainbar-button');
        setMidLeftButton('mainbar-button');

        setRightA('mainbar-item-clicked');
        setMidRightA('mainbar-item');
        setMidLeftA('mainbar-item');
        setLeftA('mainbar-item');
    }

    const changeMidLeftBtn = (e) => {
        setMidLeftButton('mainbar-button-clicked');
        setRightButton('mainbar-button');
        setMidRightButton('mainbar-button');
        setLeftButton('mainbar-button');

        setRightA('mainbar-item');
        setMidRightA('mainbar-item');
        setMidLeftA('mainbar-item-clicked');
        setLeftA('mainbar-item');
    }

    const changeMidRightBtn = (e) => {
        setMidRightButton('mainbar-button-clicked');
        setRightButton('mainbar-button');
        setLeftButton('mainbar-button');
        setMidLeftButton('mainbar-button');

        setRightA('mainbar-item');
        setMidRightA('mainbar-item-clicked');
        setMidLeftA('mainbar-item');
        setLeftA('mainbar-item');
    }

    return (
        <nav className='mainbar'>
            <div className='mainbar-div'>
                <li className='mainbar-list-item'>
                    <button onClick={changeLeftBtn} id='mainbar-button-left' className={leftButton}><Link className={leftA} to='/borrow'>Borrow</Link></button>
                </li>
                <li className='mainbar-list-item'>
                    <button onClick={changeMidLeftBtn} id='mid-left-button' className={midLeftButton}><Link className={midLeftA} to='/lend'>Lend</Link></button>
                </li>
                <li className='mainbar-list-item'>
                    <button onClick={changeMidRightBtn} id='mid-right-button' className={midRightButton}><Link className={midRightA} to='/cnft'>CNFT</Link></button>
                </li>
                <li className='mainbar-list-item'>
                    <button onClick={changeRightBtn} id='mainbar-button-right' className={rightButton}><Link className={rightA} to='/crypto'>Crypto</Link></button>
                </li>
            </div>
        </nav>
    )
}

export default MainBar