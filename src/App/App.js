import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from '../Components/NavBar';
import Routes from '../helpers/Routes';
import './App.scss';

function App() {
  return (
    <div className='App'>
      <h1>REACT API</h1>
      <Router>
        <NavBar />
        <Routes />
      </Router>
    </div>
  );
}

export default App;
