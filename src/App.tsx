import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home/home';
import ContactPage from './pages/Contact/contact';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cuerpo/:id" element={<ContactPage />} />
      </Routes>
    </Router>
  );
};

export default App;
