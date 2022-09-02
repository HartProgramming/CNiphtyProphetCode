import './NavBar.css';

import { BrowserRouter, Route, Link } from 'react-router-dom';

function NavBar() {


    return (
        <nav>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/borrow'>Borrow</Link>
                </li>
                <li>
                    <Link to='/lend'>Lend</Link>
                </li>
                <li>
                    <Link to='/cnft'>CNFTs</Link>
                </li>
                <li>
                    <Link to='/ada_ecosystem'>ADA Ecosystem</Link>
                </li>
                <li>
                    <Link to='/merchandis'>Merchandise</Link>
                </li>
                <li>
                    <Link to='/donate'>Donate</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;