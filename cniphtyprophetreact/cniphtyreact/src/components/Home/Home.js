import './FrontPage.css';
import { BrowserRouter, Route, Link, Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import EnterNoHover from './EnterNoHover.svg'
import EnterHover from './EnterHoverButton.svg';
import FrontBackground from './FrontPageBack.svg';


function Home() {

    const navigate = useNavigate();

    const transitionMainApp = () =>{
        navigate('/components/MainApplication/MainApplication')
    }

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
            <img onClick={transitionMainApp} className='enter-button-nohover' onMouseEnter={enterHover} onMouseLeave={enterNoHover} src={EnterNoHover} alt='Enter No Hover Button Effect'></img>
        </section>
    )
}

export default Home