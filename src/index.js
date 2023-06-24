import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import './styles/main.scss';
import Error from './pages/Error';
import About from './pages/About';
import Market from './pages/Market'
import Logement from './data/logements.json'
const logement = Logement



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/market/:id" element={<Market logement={logement} />} />
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </Router>
  </React.StrictMode>
);



