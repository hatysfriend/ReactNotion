import React, { useState, setState, createElement, useEffect } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom"
import PageComponent from "./PageComponent";
import "../styles/sidebar.css";




export default function SidebarComponent() {
  const [pageList, setPageList] = useState([new PageComponent()]);
  const [showtextbox, setShowTextbox] = useState(false);
  let newpageName;
  const icon =<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
  <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/></svg>;

  



  //function to enable textbox and button
  function AddNewfile(bool) {
    console.log('object here? :'+new PageComponent().getName())
    if (bool) {
      return (
      <React.Fragment className='nav_input_btn'>
        <input id='newfile' className='addinput' type='text' />
        <button className='addbtn2' onClick={() => getfileName()}>✔</button>
      </React.Fragment>
      );
    }
    else {
      return null;
    }
  }

  //1. function to recive new page data
  //2. when add new page btn clicked , store the new page data to setPageList()
  function getfileName() {
    const value = document.getElementById("newfile").value
    if (value == '' || value == null) {
      document.getElementById("errorMessage").value = <p>error</p>;
    }
    else {
      let boolExistingName = false;
      pageList.map(page=>{
        if(page.getName() ==value)
           boolExistingName=true;
      })
      if(!boolExistingName){
        console.log(value);
      newpageName = value;

      const list = [...pageList]
      const pageObj = new newpageObj(newpageName);
      list.push(pageObj);
      setPageList(list);
      setShowTextbox(!showtextbox);
    }
    }
}
function newpageObj(newpageName) {
  const randomID = Math.random().toString(36).substring(7)
  const pageObj = new PageComponent(randomID,newpageName)
    return pageObj;
    
}

  return (
    <HashRouter>
      
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        </meta>
      </head>

      <body>
        {/* sidebar_header */}
        <div className="sidenav a">
          <img src='imgs/icon.png' alt='' height='28px' width='35px'></img>
          <h1>React Notion</h1>


          {/* sidebar_add_NewFile_btn */}
          <div>
            <div className='addbtn' onClick={() => 
              setShowTextbox(!showtextbox)}>+ Add New File</div> 
              {AddNewfile(showtextbox)}
              <text className="errorMessage" value='' id="errorMessage"></text>
            </div>
          
          
          {/* showing pagelist */}
          {pageList.map((page) => {
            console.log('this is pagelist: '+page.getName())
            return<div>
              <div className='navFont' to="/">{icon}{page.getName()}</div>

              {/* showing child pages */}
              {/* {if(page.file_inside.length ==0){
                page.file_inside.map(small_page=>{
                  <div>L<div>
                })
              }} */}

              </div>;
              
          })}
        </div>

        {/* routing */}
        {/* <div>
          <Route path="/" component={PageComponent}/>
        </div> */}

      </body>

    </HashRouter>
  );
}
// function loadPage(id) {
// }


