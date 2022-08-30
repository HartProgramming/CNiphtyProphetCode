import 'NavBar.css';
import BorrowNoHover from './BorrowNoHover.png';
import MerchandiseNoHover from './MerchandiseNoHover.png';
import DonateNoHover from './DonateNoHover.png';
import CNFTFloorPriceNoHover from './CNFT Floor PriceNo Hover.png';
import ADAEcosystemNoHover from './ADA Ecosystem PricesNo Hover';

function NavBar() {


    return (
        <nav>
            <ul>
                <li>
                    <img src={BorrowNoHover} alt='Borrow Page Button' />
                </li>
                <li>
                    <img src={CNFTFloorPriceNoHover} alt='CNFT Floor Page Button' />
                </li>
                <li>
                    <img src={ADAEcosystemNoHover} alt='ADA Ecosytem Prices Page Button' />
                </li>
                <li>
                    <img src={MerchandiseNoHover} alt='Link Button that takes you to ClockedOut Crew store' />
                </li>
                <li>
                    <img src={DonateNoHover} alt='Donate Page Button' />
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;