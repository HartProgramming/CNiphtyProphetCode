import './NavBar.css';
import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom';
import CNiphty from './CNiphtyProphetLogoCircle.svg';
function NavBar() {


    return (
        <nav className='navbar'>
            <img className='logo' alt='goat prophet' src={CNiphty}></img>
            <div className='nav-div'>
                <ul className='navbar-list'>
                    <li className='navbar-list-item'>
                        <button className='nav-button'><Link className='item' to='/'>Home</Link></button>
                    </li>
                    <li className='navbar-list-item'>
                        <button className='nav-button'><Link className='item' to='/merchandise'>Merch</Link></button>
                    </li>
                    <li className='navbar-list-item'>
                        <button className='nav-button'><Link className='item' to='/donate'>Donate</Link></button>
                    </li>
                    <li className='launch-app-list-item navbar-list-item'>
                        <button className='nav-button launch-app-button'><Link className='item launch-app-item' to='/borrow'>Launch App</Link></button>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;