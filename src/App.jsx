import React from 'react';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Product from './pages/Product';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
       
        <Route path='/products' element={<Product />} />
      </Routes>
    </Router>
  );
}

export default App;
