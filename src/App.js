import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductInput from './components/ProductInput';
import ProductList from './components/ProductList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductInput />} />
        <Route path="/products" element={<ProductList />} />
      </Routes>
    </Router>
  );
}

export default App;
