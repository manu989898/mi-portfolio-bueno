import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Portfolio from './Portfolio';
import ProjectDetail from '../src/Dependences/ProjectDetail'; 
import Newsletter from './Newsletter.js';
import Contacto from './contacto.js';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/newsletter" element={<Newsletter />} />
          <Route path="/project/:projectId" element={<ProjectDetail />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
