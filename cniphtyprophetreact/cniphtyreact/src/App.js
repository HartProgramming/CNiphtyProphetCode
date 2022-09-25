import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import React from 'react'
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import Merchandise from './components/Merchandise/Merchandise';
import Donate from './components/Donate/Donate';
import './App.css';
import Borrow from './components/Borrow/Borrow';
import Lend from './components/Lend/Lend';
import CNFT from './components/CNFT/CNFT';
import Crypto from './components/Crypto/Crypto';
import AppLayout from './components/AppLayout/AppLayout';
import Main from './components/Main/Main';
import MainBar from './components/MainBar/MainBar';
import NavBar from './components/NavBar/NavBar';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='merchandise' element={<Merchandise />} />
          <Route path='donate' element={<Donate />} />
          <Route path='borrow' element={<Main />} />
        </Route>
      </Routes>
      <Routes>
          <Route element={<AppLayout />}>
            <Route path='borrow' element={<Borrow />} />
            <Route path='lend' element={<Lend />} />
            <Route path='crypto' element={<Crypto />} />
            <Route path='cnft' element={<CNFT />} />
          </Route>
    </Routes>
    </BrowserRouter >
  );
}

export default App;
