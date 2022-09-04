import './NavBar.css';
import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom';

function NavBar() {


    return (
        <nav className='navbar'>
            <ul className='navbar-list'>
                <li className='navbar-list-item'>
                    <Link to='/'><button className='navbar-button'>Home</button></Link>
                </li>
                <li className='navbar-list-item'>
                    <Link to='/borrow'><button className='navbar-button'>Borrow</button></Link>
                </li>
                <li className='navbar-list-item'>
                    <Link to='/lend'><button className='navbar-button'>Lend</button></Link>
                </li>
                <li className='navbar-list-item'>
                    <Link to='/cnft'><button className='navbar-button'>CNFT</button></Link>
                </li>
                <li className='navbar-list-item'>
                    <Link to='/cardano'><button className='navbar-button'>Ecosystem</button></Link>
                </li>
                <li className='navbar-list-item'>
                    <Link to='/merchandise'><button className='navbar-button'>Merchandise</button></Link>
                </li>
                <li className='navbar-list-item'>
                    <Link to='/donate'><button className='navbar-button'>Donate</button></Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;