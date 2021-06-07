import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from '../Components/NavBar';
import Routes from '../helpers/Routes';
// import Jokes from '../Components/jokes';
// import Weather from '../Components/weather';
// import Lyrics from '../Components/lyrics';
import './App.scss';

function App() {
  return (
    <div className='App'>
      <h1>REACT API</h1>
      <Router>
        <NavBar />
        <Routes />
      </Router>
      {/* <Jokes /> */}
      {/* <Weather /> */}
      {/* <Lyrics /> */}
    </div>
  );
}

export default App;
