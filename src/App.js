// src/App.js
import React from 'react';
import LoginPage from './components/LoginPage';
import HomePage from './components/HomePage';
import { TransitionGroup, CSSTransition } from 'react-transition-group'; // Missing import
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <div className="App" style={{maxWidth:'100vw',overflowY:'hidden'}}>
      <TransitionGroup component={null}>
        <CSSTransition key={location.key} classNames="page-transition" timeout={300}>
          <Routes location={location}>
            <Route path="/joyful/" element={<HomePage />} />
            <Route path="/joyful/login" element={<LoginPage />} />
            {/* Fallback to /joyful */}
            <Route path="*" element={<Navigate to="/joyful/" />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}

export default App;
