import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import Community from './pages/Community';
import Insights from './pages/Insights';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/community" element={<Community />} />
          <Route path="/insights" element={<Insights />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;