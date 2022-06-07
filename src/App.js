import React from "react";
import {Routes, Route} from 'react-router-dom'
import Home from './routes/Home'
import BuyNFT from "./routes/BuyNFT";


function App() {
  return (
    <>
     <Routes>
        <Route path = '/' element={<Home/>} />
        <Route path = '/BuyNFT' element={<BuyNFT/>} />
      </Routes> 
    </>
  );
}

export default App;
