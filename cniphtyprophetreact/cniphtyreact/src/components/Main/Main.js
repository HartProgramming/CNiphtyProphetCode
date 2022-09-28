import React from "react";
import MainBar from '../MainBar/MainBar';
import NavBar from '../NavBar/NavBar';
import Borrow from '../Borrow/Borrow';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Layout from "../Layout/Layout";
import AppLayout from "../AppLayout/AppLayout";
import Lend from "../Lend/Lend";
import Crypto from "../Crypto/Crypto";
import CNFT from "../CNFT/CNFT";

function Main() {


  return (
    <section>
      <MainBar></MainBar>
    </section>
  )
}

export default Main;