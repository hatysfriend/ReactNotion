import "./styles/App.css";
import NewSidebar from './components/Sidebar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {Lol, Lux, LuxR, UltiTime, Ashe, Mf} from './pages/lol'
import { useState } from "react";
import Overview from "./pages/Overview";

export default function App() {
  

  return (
    <div className="App">
      <Router>
        <NewSidebar/>
          <Switch>
            <Route path='/Overview' exact component={Overview}/>
            <Route path='/lol' exact component={Lol}/>
            <Route path='/lol/lux' exact component={Lux}/>
            <Route path='/lol/lux/R' exact component={LuxR}/>
            <Route path='/lol/lux/R/ultiTime' exact component={UltiTime}/>
            <Route path='/lol/ashe' exact component={Ashe}/>
            <Route path='/lol/mf' exact component={Mf}/>
          </Switch>
        </Router>
      
    </div>
  );
}