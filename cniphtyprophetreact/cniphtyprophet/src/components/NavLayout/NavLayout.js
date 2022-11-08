import { Outlet } from "react-router-dom";
import React from "react";
import NavBar from "../Nav/NavBar";
function NavLayout() {
  return (
    <>
      <NavBar></NavBar>
      <Outlet></Outlet>
    </>
  );
}

export default NavLayout;
