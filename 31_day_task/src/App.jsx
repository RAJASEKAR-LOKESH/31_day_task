// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AuthorsPage from './pages/AuthorsPage';
import BooksPage from './pages/BooksPage';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/authors" element={<AuthorsPage />} />
        <Route path="/books" element={<BooksPage />} />
        <Route path="/" element={<BooksPage />} />
      </Routes>
    </Router>
  );
};

export default App;
