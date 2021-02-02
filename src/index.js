import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import {Testloop} from './components/testloop';
const init = 'init';
ReactDOM.render(
  
  <React.StrictMode>
    <App init={init}/>
    {/* <Testloop/> */}
  </React.StrictMode>,
  document.getElementById('root')
);
