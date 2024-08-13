import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Main from './pages/Main/Main';
import Contact from './pages/Contact/Contact';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="" element={<Main />}></Route>
          <Route path="Contact" element={<Contact/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
