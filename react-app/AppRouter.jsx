import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './src/components/login/login.jsx';
import Landing from './src/components/landing/landing.jsx';
import Register from './src/components/register/register.jsx';

function AppRouter() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Landing/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
        </Routes>
    </Router>
  );
}

export default AppRouter;