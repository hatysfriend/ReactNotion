import React, { Component } from 'react'
import "./styles/App.css";
import Sidebar from './components/Sidebar';
//import {SideBarData,HandleAdd} from './components/SidebarData';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {Lol, Lux, LuxR, UltiTime, Ashe, Mf} from './pages/lol'
import { useState, setState } from "react";
import Overview from "./pages/Overview";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export default class App extends Component {
    
  render() {
    
    return (
      <div className="App">
      <Router>
        <Sidebar data={this.state.Data} handleAdd={this.HandleAdd}/>
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
    )
  }

  HandleAdd = (value) => {
    console.log('are you here?');
    let arr = [...this.state.Data];
    if (value === "" || value === null){
    } else {
      let boolExistingName = false;
      this.state.Data.map((obj) => {
        if (obj.title === value) boolExistingName = true;
      });
      if (!boolExistingName) {
        arr.push(
          {
            title: value,
            path: '/'+value,
            icon: <AiIcons.AiFillHome />,
            iconClosed: <RiIcons.RiArrowDownSFill />,
            iconOpened: <RiIcons.RiArrowUpSFill />,
            subNav: []
          }
        );
      }
      // setSideBarData(arr);
      this.setState({Data: arr});
      
    }
  }

  state = {
    Data:[
      {
        title: "Overview",
        path: "/Overview",
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
          {
            title: "icon1",
            path: "/Overview/icon1",
            icon: <IoIcons.IoIosPaper />,
          },
          {
            title: "icon2",
            path: "/Overview/icon2",
            icon: <FaIcons.FaCartPlus />,
          },
          {
            title: "icon3",
            path: "/Overview/icon3",
            icon: <IoIcons.IoMdPeople />,
          },
          {
            title: "icon4",
            path: "/Overview/icon4",
            icon: <FaIcons.FaEnvelope />,
          },
          {
            title: "icon5",
            path: "/Overview/icon5",
            icon: <IoIcons.IoMdHelpCircle />,
          },
        ],
      },
      {
        title: "League of Legends",
        path: "/lol",
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
          {
            title: "Lux",
            path: "/lol/lux",
            icon: <IoIcons.IoIosPaper />,
            iconClosed: <RiIcons.RiArrowDownSFill />,
            iconOpened: <RiIcons.RiArrowUpSFill />,
            subNav: [
              {
                title: "lux's ulti",
                path: "/lol/lux/ulti",
                icon: <IoIcons.IoIosPaper />,
                iconClosed: <RiIcons.RiArrowDownSFill />,
                iconOpened: <RiIcons.RiArrowUpSFill />,
                subNav: [
                  {
                    title: "When to use Lux's Ulti",
                    path: "/lol/lux/ulti/when",
                    icon: <IoIcons.IoIosPaper />,
                  }
                ]
              }
    
            ]
          },
          {
            title: "Ashe",
            path: "/lol/ashe",
            icon: <IoIcons.IoIosPaper />,
          },
          {
            title: "Miss Fortune",
            path: "/lol/mf",
            icon: <IoIcons.IoIosPaper />,
          },
        ],
      },
    ]
  }
}
