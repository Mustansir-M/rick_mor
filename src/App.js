import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CharacterDetailPage from './pages/CharacterDetailPage';
import LandingPage from './pages/LandingPage';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/list" element={<HomePage/>}/>
        <Route path="/character/:id" element={<CharacterDetailPage/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
