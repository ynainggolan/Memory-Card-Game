import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Clock from './Clock';


ReactDOM.render(
  <React.StrictMode>
    <Clock/>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);