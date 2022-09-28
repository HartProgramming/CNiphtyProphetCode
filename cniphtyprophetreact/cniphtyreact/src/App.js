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
import Main from './components/Main/Main'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='merchandise' element={<Merchandise />} />
          <Route path='donate' element={<Donate />} />
          <Route path='app' element={<AppLayout />} />
        </Route>
      </Routes>
      <Routes>
        <Route element={<Layout />}>
          <Route element={<AppLayout />}>
            <Route path='borrow' element={<Borrow />} />
            <Route path='lend' element={<Lend />} />
            <Route path='crypto' element={<Crypto />} />
            <Route path='cnft' element={<CNFT />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter >
  );
}

export default App;
