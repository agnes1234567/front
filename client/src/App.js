import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from './components/profile/profile';
import Search from './components/search/search';
import Saved from './components/saved/saved';
import AppHeader from './components/appHeader';
import React from "react";

function App() {
  return (
    <div className="App">
      <AppHeader />
      <div className='App-body'>
        <Router>
          <Routes>
            <Route path="/" element={<Search />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/saved" element={<Saved />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}
export default App;
