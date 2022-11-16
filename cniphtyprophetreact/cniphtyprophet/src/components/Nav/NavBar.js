import React from "react";
import { useState, useEffect } from "react";
import MobileNav from "./MobileNav";
import Nav from "./Nav";
import Button from "../UI/Button";
import classes from "./NavBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [mobile, setMobile] = useState(false);
  const [mobileNav, setMobileNav] = useState(null);
  const bars = <FontAwesomeIcon className={classes.icon} icon={faBars} />;

  const innerWidth = () => setWindowWidth(window.innerWidth);

  const MobileNavHandler = () => {
    console.log(mobile);

    if (mobile === false) {
      setMobile(true);
      setMobileNav(<MobileNav onClick={LinkHandler} />);
      console.log("true");
    } else {
      setMobile(false);
      setMobileNav(null);
      console.log("false");
    }
  };

  const LinkHandler = () => {
    console.log("click");
    setMobileNav(null);
    setMobile(false);
  };

  useEffect(() => {
    window.addEventListener("resize", innerWidth);
    console.log(windowWidth);
    console.log(mobile);
    if(windowWidth > 1000){
      setMobileNav(null)
    }
  }, [windowWidth]);

  return (
    <div className={classes.container}>
      {windowWidth < 1000 ? (
        <Button
          onClick={MobileNavHandler}
          style={classes.button}
          title={bars}
        />
      ) : (
        <Nav />
      )}
      {mobileNav}
    </div>
  );
};

export default NavBar;
