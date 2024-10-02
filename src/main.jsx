import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter,Routes,Route} from "react-router-dom";

import HomePage from './landing_page/home/HomePage'
import SupportPage from './landing_page/support/SupportPage';
import PricePage from './landing_page/pricing/PricePage';
import ProductPage from './landing_page/product/ProductPage';
import AboutPage from "./landing_page/about/AboutPage";
import Signup from "./landing_page/signup/Signup";
import Navbar from './landing_page/Navbar.jsx';
import Footer from './landing_page/Footer.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<HomePage/>}></Route>

      <Route path='/about' element={<AboutPage/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>

      <Route path='/products' element={<ProductPage/>}></Route>

      <Route path='/pricing' element={<PricePage/>}></Route>


      <Route path='/support' element={<SupportPage/>}></Route>

    </Routes>
    <Footer/>
    </BrowserRouter>
  
  </React.StrictMode>,
)
