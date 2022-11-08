import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import NavLayout from "./components/NavLayout/NavLayout";
import CNiphtyProphet from "./components/CNiphtyProphet/CNiphtyProphet";
import CNFTData from "./components/CNFTData/CNFTData";
import CryptoData from "./components/CryptoData/CryptoData";
import Plans from "./components/Plans/Plans";
import './App.css';
import Home from "./components/Home/Home";
import Header from "./components/UI/Header";

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavLayout />}>
            <Route index element={<Home />}/>
            <Route path='app' element={<CNiphtyProphet />} />
            <Route path="cnftdata" element={<CNFTData />} />
            <Route path="cryptodata" element={<CryptoData />} />
            <Route path="plans" element={<Plans />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
