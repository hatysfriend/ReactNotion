import React, { useState } from 'react';
import "./styles/App.css";
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route, StaticRouter } from 'react-router-dom'
//import { Lol, Lux, LuxR, UltiTime, Ashe, Mf, pageC } from './pages/lol'
import Overview from "./temporaryBin/jsx/pages/Overview";

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export default function App() {

  let Datalist = [
    {
      id: "1",
      title: "Overview",
      path: "/Overview",
      content: () => <h1 className='lol'>Overview</h1>,
      icon: <AiIcons.AiFillHome />,
      iconClosed: <RiIcons.RiArrowDownSFill />,
      iconOpened: <RiIcons.RiArrowUpSFill />,
      subNav: [{
        id: "1.1",
        title: "icon1",
        path: "/Overview/icon1",
        content: ()=><div className='lol'>/Overview/icon1</div>,
        icon: <IoIcons.IoIosPaper />,
      }, {
        title: "icon2",
        path: "/Overview/icon2",
        icon: <FaIcons.FaCartPlus />,
        content: () => <div className='lol'>/Overview/icon2</div>,
      }, {
        title: "icon3",
        path: "/Overview/icon3",
        icon: <IoIcons.IoMdPeople />,
        content: () => <div className='lol'>/Overview/icon3</div>,
      }, {
        title: "icon4",
        path: "/Overview/icon4",
        icon: <FaIcons.FaEnvelope />,
        content: () => <div className='lol'>/Overview/icon4</div>,
      }, {
        title: "icon5",
        path: "/Overview/icon5",
        icon: <IoIcons.IoMdHelpCircle />,
        content: () => <div className='lol'>/Overview/icon5</div>,
      },],
    },
    {
      title: "League of Legends",
      path: "/lol",
      icon: <AiIcons.AiFillHome />,
      content: () => <h1 className='lol'>League Of Legends</h1>,
      iconClosed: <RiIcons.RiArrowDownSFill />,
      iconOpened: <RiIcons.RiArrowUpSFill />,
      subNav: [{
        title: "Lux",
        path: "/lol/lux",
        icon: <IoIcons.IoIosPaper />,
        content: () => <h1 className='lol'>League Of Legends/Lux</h1>,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [{
          title: "lux's ulti",
          path: "/lol/lux/ulti",
          icon: <IoIcons.IoIosPaper />,
          content: () => <h1 className='lol'>League Of Legends/lux/ulti</h1>,
          iconClosed: <RiIcons.RiArrowDownSFill />,
          iconOpened: <RiIcons.RiArrowUpSFill />,
          subNav: [{
            title: "When to use Lux's Ulti",
            path: "/lol/lux/ulti/when",
            icon: <IoIcons.IoIosPaper />,
            content: () => <h1 className='lol'>League Of Legends/lux/ulti/ultiTime</h1>,
          }]
        }]
      }, {
        title: "Ashe",
        path: "/lol/ashe",
        icon: <IoIcons.IoIosPaper />,
        content: () => <h1 className='lol'>League Of Legends/Ashe</h1>,
      }, {
        title: "Miss Fortune",
        path: "/lol/mf",
        icon: <IoIcons.IoIosPaper />,
        content: () => <h1 className='lol'>League Of Legends/Miss Fortune</h1>,
      },],
    }]

  const [data, setdata] = useState(Datalist);

  //add new function
  const HandleAdd = (value) => {
    console.log('new file add btn clicked: ' + value);
    let arr = [...data];
    if (value === "" || value === null) {
      // document.getElementById('errorMsg').innerHTML = 'Invalid File Name';
    } else {
      let boolExistingName = false;
      arr.map((obj) => {
        if (obj.title === value) boolExistingName = true;
      });
      if (!boolExistingName) {
        arr.push(
          {
            title: value,
            path: '/' + value,
            icon: <AiIcons.AiFillHome />,
            subNav: [],
            content: ()=><div className='lol'>{value}</div>
          }
        );
        setdata(arr);
        //console.log('original data updatad \n' + JSON.stringify(data))
        return 'data stored'
      }// document.getElementById('errorMsg').innerHTML = 'The File name is already exist';
    }
  }

  return (
    <div className="App">
      {/* {console.log(JSON.stringify(aa))} */}
      <Router>
        <Sidebar data={data} handleAdd={HandleAdd} />
        <Switch>
          {routingLoop(data)}
        </Switch>
      </Router>
    </div>
  )
}

const routingLoop = (data) => {
  return (
    <>
      <Route path='/' exact component={()=><div className='lol'><h1>default page</h1></div>} />

      {data.map((item) => {
        { console.log(item.content) }
        return (<Route key={item.path} path={item.path} exact component={item.content} />);

      })}
    </>
  );
}











