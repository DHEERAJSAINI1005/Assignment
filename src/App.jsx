import React from 'react';
import './App.css';
import './tailwind.css';
import UploadComponent from './pages/upload';
import InvoiceReview from './pages/ReviewBilling';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<InvoiceReview />} />
        <Route path="/upload" element={<UploadComponent />} />
      </Routes>
    </Router>
  );
}

export default App;
