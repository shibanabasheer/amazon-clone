import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import SignUpForm from './components/SignUpForm';
import ProductList from './components/ProductList';
import ProductCard from './components/ProductCard';
import CartPage from './components/CartPage';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<SignUpForm />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/product/:id" element={<ProductCard />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
