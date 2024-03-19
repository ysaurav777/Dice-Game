import React from 'react';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Home from './Components/Home';
import Game from './Components/Game';
import './Styles/App.scss';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/game" element={<Game />}/>
      </Routes>
    </Router>
  )
}

export default App;