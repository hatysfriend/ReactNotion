import React, { useState, setState, createElement, useEffect } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom"
import PageComponent from "./PageComponent";
import "../styles/sidebar.css";




export default function SidebarComponent() {
  const [pageList, setPageList] = useState(defaultPage);
  const [showtextbox, setShowTextbox] = useState(false);
  let newpageName;

  //function to enable textbox and button
  function AddNewfile(bool) {
    let input;
    if (bool) {
      input = <React.Fragment><input id='newfile' className='addinput' type='text' />
      <button className='addbtn' onClick={() => getfileName()}>✔</button></React.Fragment>;
    }
    else {
      input = '';
    }
    return input;
  }

  //1. function to recive new page data
  //2. when add new page btn clicked , store the new page data to setPageList()
  function getfileName() {
    const value = document.getElementById("newfile").value
    if (value == '' || value == null) {
      document.getElementById("errorMessage").value = 'error';
    }
    else {
      let boolExistingName = false;
      pageList.map(page=>{
        if(page.pageName ==value)
           boolExistingName=true;
      })
      if(!boolExistingName){
        console.log(value);
      newpageName = value;

      const list = [...pageList]
      list.push({
        pageId: "846u9ffqm",
        pageName: newpageName,
        data: "1",
      })
      setPageList(list);
      setShowTextbox(!showtextbox);

      }
      
    }

  }

  return (
    <HashRouter>
      
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        </meta>

      </head>
      <body>
        {/* Adding new page */}
        <div className="sidenav a">
          <img src='imgs/icon.png' alt='' height='28px' width='35px' />
          <div>
            <img className='addbtn' onClick={() => setShowTextbox(!showtextbox)} 
            src='imgs/addNewPageIcon.webp' height='28px' width='35px'
             alt=""/>

            {AddNewfile(showtextbox)}
            <text className="errorMessage" value='' id="errorMessage"></text>


          </div>



          {/* showing pagelist */}
          {pageList.map((page) => {
            return <NavLink className='navFont' to="/">{page.pageName}</NavLink>;
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


const defaultPage = [
  {
    pageId: "846u9qm",
    pageName: "React",
    data: "1",
    file_inside: 'PageComponentID'
  }
];
