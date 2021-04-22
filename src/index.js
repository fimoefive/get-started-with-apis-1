import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
// import App from './App';
import Jokes from './App/jokes';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <h1>REACT APIS</h1>
    {/* <App /> */}
    <Jokes />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
