import './NavBar.css';
import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom';

function NavBar() {


    return (
        <nav className='navbar'>
            <div className='nav-div'>
                <ul className='navbar-list'>
                    <li className='navbar-list-item'>
                        <Link className='item' to='/'>Home</Link>
                    </li>
                    <li className='navbar-list-item'>
                        <Link className='item' to='/borrow'>Borrow</Link>
                    </li>
                    <li className='navbar-list-item'>
                        <Link className='item' to='/lend'>Lend</Link>
                    </li>
                    <li className='navbar-list-item'>
                        <Link className='item' to='/cnft'>CNFT</Link>
                    </li>
                    <li className='navbar-list-item'>
                        <Link className='item' to='/cardano'>Ecosystem</Link>
                    </li>
                    <li className='navbar-list-item'>
                        <Link className='item' to='/merchandise'>Merchandise</Link>
                    </li>
                    <li className='navbar-list-item'>
                        <Link className='item' to='/donate'>Donate</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;