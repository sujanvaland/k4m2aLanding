import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Manifesto from './components/Manifesto';
import Research from './components/Research';
import Careers from './components/Careers';
import "./styles/custom.css"
import "./styles/styles.css"
import Navigation from './components/Navigation';

function App() {
  return (
    <Router>
      <div className="App">
   

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/manifesto" element={<Manifesto />} />
          <Route path="/research" element={<Research />} />
          <Route path="/careers" element={<Careers />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

