
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LogOutScreen from './Authentication/logoutscreen';
import Navbar from './component/Navbar';
import Menu from './pages/menu';
import SingleGrandMa from './pages/singleGrandMa';
import Order from './pages/order';
import Home from './pages/home';
import SingleDishes from './pages/singleDishes';
import Footer from './component/Footer';

function App() {

  return (
    <>
    <Router>
        <Navbar/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/dish/:id_dish" element={<SingleDishes />} />
            <Route path='/grandma/:id_grandma' element={<SingleGrandMa />} />
            <Route path='/order/:id_user' element={<Order />} />
                                
          </Routes>  
        </Router>
      <Footer />
    </>
  )
}

export default App
