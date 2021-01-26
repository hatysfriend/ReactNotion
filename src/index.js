import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import APItest from './components/APItest'

ReactDOM.render(
  <React.StrictMode>
    {/* <App/> */}
    <APItest/>
  </React.StrictMode>,
  document.getElementById('root')
);
