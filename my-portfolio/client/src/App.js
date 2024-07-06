import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import Project1 from './Project1';
import Project2 from './Project2';
import ContactPage from './ContactPage';
import Header from './components/Header';

const App = () => {
  return (
    <Router>
      <div className="bg-gray-100 min-h-screen"> {/* Ensure full height */}
        <Header />
        <div className="bg-gray-100">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/project1" element={<Project1 />} />
            <Route path="/project2" element={<Project2 />} />
            <Route path="/contact" element={<ContactPage />} />
            {/* Add routes for other pages as needed */}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
