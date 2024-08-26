import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'animate.css';


function App() {
  return (
    <Router>
    <Navbar/>
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/cart" element={<Cart />} />
    </Routes>
    <Footer/>
</Router>
  );
}

export default App;
