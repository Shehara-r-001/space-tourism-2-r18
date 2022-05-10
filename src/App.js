import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Destinations from './pages/Destinations';
import Crew from './pages/Crew';
import Technology from './pages/Technology';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/destination' element={<Destinations />} />
        <Route path='/crew' element={<Crew />} />
        <Route path='/technology' element={<Technology />} />
      </Routes>
    </Router>
  );
}

export default App;
