import React,{useState} from 'react';
import "./styles/App.css";
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Lol, Lux, LuxR, UltiTime, Ashe, Mf } from './pages/lol'
import Overview from "./pages/Overview";
import {HandleAdd ,Data} from './components/SidebarData'

const App=()=>{
  


 

  return (
  <div className="App">
      {console.log(JSON.stringify(Data))}
      <Router>
        <Sidebar data={Data} handleAdd={HandleAdd} />
        <Switch>
          <Route path='/Overview' exact component={Overview} />
          <Route path='/lol' exact component={Lol} />
          <Route path='/lol/lux' exact component={Lux} />
          <Route path='/lol/lux/R' exact component={LuxR} />
          <Route path='/lol/lux/R/ultiTime' exact component={UltiTime} />
          <Route path='/lol/ashe' exact component={Ashe} />
          <Route path='/lol/mf' exact component={Mf} />
          
        </Switch>
      </Router>

    </div>
  )
  
}
export default App;





