// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Concepts from './components/Concepts';
import PipelineVisualization from './components/PipelineVisualization';
import FAQ from './components/FAQ';
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
      <div>
        <NavBar />  {/* Include the NavBar for navigation */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/concepts" element={<Concepts />} />
          <Route path="/visualization" element={<PipelineVisualization />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
