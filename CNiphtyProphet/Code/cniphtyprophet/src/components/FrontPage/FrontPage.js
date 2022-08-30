import './FrontPage.css';
import EnterNoHover from './FrontPageEnterNoHover.svg'
import EnterHover from './EnterHoverButton.svg';
import FrontBackground from './FrontPageBack.svg';


function FrontPage() {

    const enterHover = (e) => {
        console.log(e)
    }

    const enterNoHover = (e) => {
        console.log(e)
    }

    return(
        <section>
            <img className='frontpage-background' src={FrontBackground} alt='Background art containing CNFTs'></img>
            <img className='enter-button-nohover' onMouseEnter={enterHover} onMouseLeave={enterNoHover} src={EnterNoHover} alt='Enter No Hover Button Effect'></img>
        </section>
    )
}

export default FrontPage