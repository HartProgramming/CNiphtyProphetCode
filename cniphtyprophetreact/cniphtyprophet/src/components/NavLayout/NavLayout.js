import { Outlet } from "react-router-dom";
import React from "react";
import Nav from "../Nav/Nav";

function NavLayout() {
  return (
    <>
      <Nav></Nav>
      <Outlet></Outlet>
    </>
  );
}

export default NavLayout;
