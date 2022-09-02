import 'NavBar.css';
import BorrowNoHover from './BorrowNoHover.png';
import MerchandiseNoHover from './MerchandiseNoHover.png';
import DonateNoHover from './DonateNoHover.png';
import CNFTFloorPriceNoHover from './CNFT Floor PriceNo Hover.png';
import ADAEcosystemNoHover from './ADA Ecosystem PricesNo Hover';
import LendingNoHover from './LendingNoHover.svg';

function NavBar() {


    return (
        <nav>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/borrow'><img src={BorrowNoHover} alt='Borrow Page Button' /></Link>
                </li>
                <li>
                    <Link to='lending'><img src={LendingNoHover} alt='Lending Page Button' /></Link>
                </li>
                <li>
                    <Link to='/cnft'><img src={CNFTFloorPriceNoHover} alt='CNFT Floor Page Button' /></Link>
                </li>
                <li>
                    <Link to='/ada_ecosystem'><img src={ADAEcosystemNoHover} alt='ADA Ecosytem Prices Page Button' /></Link>
                </li>
                <li>
                    <Link to='/merchandis'><img src={MerchandiseNoHover} alt='Link Button that takes you to ClockedOut Crew store' /></Link>
                </li>
                <li>
                    <Link to='/donate'><img src={DonateNoHover} alt='Donate Page Button' /></Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;