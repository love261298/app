import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Import các trang của ứng dụng
import Home from './pages/Home/Home';
import ProductList from './pages/ProductList/ProductList';
import Cart from './pages/Cart/Cart';
import Checkout from './pages/Checkout/Checkout';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<ProductList />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  );
}

export default AppRoutes;