import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import classes from "./Nav.module.css";
import add from 'classnames';

function Nav(props) {

  return (
    <nav className={classes.nav}>
      <ul className={add(classes.ul, props.ul)}>
        <li className={props.li}>
          <Link onClick={props.onClick} className={add(classes.li, props.link)} to="/">
            Home
          </Link>
        </li>

        <li className={props.li}>
          <Link onClick={props.onClick} className={add(classes.li, props.link)} to="/App">
            App
          </Link>
        </li>
        <li className={props.li}>
          <Link onClick={props.onClick} className={add(classes.li, props.link)} to="/cnftdata">
            CNFT Data
          </Link>
        </li>
        <li className={props.li}>
          <Link  onClick={props.onClick}className={add(classes.li, props.link)} to="/cryptodata">
            Crypto Data
          </Link>
        </li>
        <li className={props.li}>
          <Link onClick={props.onClick} className={add(classes.li, props.link)} to="/plans">
            Plans
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
