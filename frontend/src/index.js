import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import HomePage from './landing_page/home/HomePage';
import AboutPage from './landing_page/about/AboutPage';
import ResearchPage from './landing_page/research/ResearchPage';
import AllProduct from './landing_page/products/AllProduct';
import ProductPage from './landing_page/products/ProductPage';
import SearchResults from './landing_page/search/SearchResults';
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';
import ScrollToTop from './landing_page/ScrollToTop';
import WhatsAppButton from './landing_page/WhatsAppButton';
import CartPage from './landing_page/cart/CartPage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Navbar /> 
    <ScrollToTop />
    <WhatsAppButton />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/research" element={<ResearchPage />} />
      <Route path="/products" element={<AllProduct />} />
      <Route path="/products/:slug" element={<ProductPage />} />
      <Route path="/search" element={<SearchResults />} />
      <Route path="/cart" element={<CartPage/>} />
    </Routes>
    <Footer />
  </BrowserRouter>
);


