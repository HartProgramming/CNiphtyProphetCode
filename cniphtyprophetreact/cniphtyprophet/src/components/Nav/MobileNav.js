import React from "react";
import Nav from "./Nav";
import classes from './MobileNav.module.css';

const MobileNav = (props) => {

    return(
        <>
            <Nav onClick={props.onClick} ul={classes.ul} li={classes.li} />
        </>
    )
}

export default MobileNav;