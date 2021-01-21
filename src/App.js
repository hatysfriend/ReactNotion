//import "./styles/App.css";
import PageComponent from "./components/PageComponent";
import SidebarComponent from "./components/SidebarComponent";
import HeaderComponent from "./components/HeaderComponent";
import NewSidebar from './components/NewSidebar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import { useState } from "react";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(fas, fab);

export default function App() {
  const [DBdata, setDBdata] = useState(DataFromDB);
  const [showtextbox, setShowTextbox] = useState(false);

  //checking new file name and add
  const handleAdd = (value) => {
    let arr = [...DBdata];
    if (value === "" || value === null) {
      console.log("YOU ENTERED A NULL/EMPTY VALUE");
    } else {
      let boolExistingName = false;
      arr.map((page) => {
        if (page.pageName === value) boolExistingName = true;
      });
      if (!boolExistingName) {
        console.log(`valuePageName: ${value}`);
        arr.push({
          pageId: Math.random().toString(36).substring(7),
          pageName: value,
          pageData: value.pageData,
          file_inside: "",
        });
        setDBdata(arr);
        onOffBtn(showtextbox);
      }
    }
  };

  const onOffBtn = (showtextbox) => {
    setShowTextbox(!showtextbox);
  }

  return (
    <div className="App">
      {/* <SidebarComponent DBdata={DBdata} onAdd={handleAdd} showtextbox={showtextbox} onOffBtn={onOffBtn} /> */}
      <Router>
        <NewSidebar/>
        </Router>
      {/* <div className="mainContent">
        <HeaderComponent DBdata={DBdata} />
        <PageComponent DBdata={DBdata} />
      </div> */}
    </div>
  );
}


const DataFromDB = [
  {
    
    pageId: "846u9qm",
    pageName: "programing",
    pageData: "fgfh",
    file_inside: [
      {
        pageId: "abc",
        pageName: "React",
        pageData: "A/A",
        file_inside: [
          {
            pageId: "abcde",
            pageName: "State",
            pageData: "4",
            file_inside: []
          },]
      },
      {
        pageId: "abcd",
        pageName: "Java",
        pageData: "3",
        file_inside: []
      },
      {
        pageId: "abcde",
        pageName: "C#",
        pageData: "5",
        file_inside: []
      },
    ],
    
  },{pageId: "cfhjsd",
    pageName: "Leage Of Legends",
    pageData: "6",
    file_inside: [
      {
        pageId: "abcfdde",
        pageName: "Lux",
        pageData: "7",
        file_inside: []
      }
    ]}
  
]
