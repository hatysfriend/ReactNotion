import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
const init = 'init'
ReactDOM.render(
  
  <React.StrictMode>
    <App init={init}/>
  </React.StrictMode>,
  document.getElementById('root')
);
