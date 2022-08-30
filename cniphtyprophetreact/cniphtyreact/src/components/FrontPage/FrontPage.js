import './FrontPage.css';
import EnterNoHover from './EnterNoHover.svg'
import EnterHover from './EnterHoverButton.svg';
import FrontBackground from './FrontPageBack.svg';


function FrontPage() {

    const enterHover = (e) => {
        e.target.src = EnterHover
        e.target.classList.add('enter-button-hover');
        e.target.classList.remove('enter-button-nohover');
        console.log(e)
    }

    const enterNoHover = (e) => {
        e.target.src = EnterNoHover;
        e.target.classList.remove('enter-button-hover');
        e.target.classList.add('enter-button-nohover');
        console.log(e)
    }

    return(
        <section className='frontpage-section'>
            <img className='frontpage-background' src={FrontBackground} alt='Background art containing CNFTs'></img>
            <img className='enter-button-nohover' onMouseEnter={enterHover} onMouseLeave={enterNoHover} src={EnterNoHover} alt='Enter No Hover Button Effect'></img>
        </section>
    )
}

export default FrontPage