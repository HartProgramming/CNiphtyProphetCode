import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react'
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import Merchandise from './components/Merchandise/Merchandise';
import Lend from './components/Lend/Lend';
import Borrow from './components/Borrow/Borrow';
import Donate from './components/Donate/Donate';
import CNFT from './components/CNFT/CNFT';
import Cardano from './components/Cardano/Cardano';
import './App.css';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='borrow' element={<Borrow />} />
          <Route path='lend' element={<Lend />} />
          <Route path='cnft' element={<CNFT />} />
          <Route path='cardano' element={<Cardano />} />
          <Route path='merchandise' element={<Merchandise />} />
          <Route path='donate' element={<Donate />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
