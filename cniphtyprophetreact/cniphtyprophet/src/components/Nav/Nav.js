import React from "react";
import { Link } from 'react-router-dom';
import classes from './Nav.module.css';


function Nav(){


    return(
        <nav className={classes.nav}>
            <ul className={classes.ul}>
                <li><Link className={classes.li} to='/'>CNiphtyProphet</Link></li>
                <li><Link className={classes.li} to='/cnftdata'>CNFT Data</Link></li>
                <li><Link className={classes.li} to='/cryptodata'>Crypto Data</Link></li>
                <li><Link className={classes.li} to='/plans'>Plans</Link></li>
            </ul>
        </nav>
    )
}

export default Nav;