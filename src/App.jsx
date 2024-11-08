import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Homepage from './components/Homepage/Homepage'; 
import ItemDetail from './components/ItemDetail/ItemDetail';
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/Homepage' element={<Homepage />} />
          <Route path='/product/:productId' element={<ItemDetail />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
