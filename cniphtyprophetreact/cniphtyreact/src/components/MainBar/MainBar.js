import React from "react";
import './MainBar.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';


function MainBar() {


    return (
        <section>
            <nav className='mainbar'>
                <div className='mainbar-div'>
                    <li className='mainbar-list-item'>
                        <button id='mainbar-button-left' className='mainbar-button'><Link className='mainbar-item' to='/borrow'>Borrow</Link></button>
                    </li>
                    <li className='mainbar-list-item'>
                        <button className='mainbar-button'><Link className='mainbar-item' to='/lend'>Lend</Link></button>
                    </li>
                    <li className='mainbar-list-item'>
                        <button className='mainbar-button'><Link className='mainbar-item' to='/cnft'>CNFT</Link></button>
                    </li>
                    <li className='mainbar-list-item'>
                        <button id='mainbar-button-right' className='mainbar-button'><Link className='mainbar-item' to='/crypto'>Crypto</Link></button>
                    </li>
                </div>
            </nav>
        </section>
    )
}

export default MainBar