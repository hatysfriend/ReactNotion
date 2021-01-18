import React, { useState, setState, createElement, useEffect } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom"
import PageComponent from "./PageComponent";
import "../styles/sidebar.css";


export default function SidebarComponent( {DBdata, onAdd} ) {
  const [showtextbox, setShowTextbox] = useState(false);
  let newpageName;
  const icon =<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
  <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/></svg>;

  //function to enable textbox and button
  function AddNewfile(bool) {
    if (bool) {
      return (
      <React.Fragment className='nav_input_btn'>
        <input id='newfile' className='addinput' type='text' />
        <button className='addbtn2' onClick={() => onAdd(document.getElementById("newfile").value)}>✔</button>
      </React.Fragment>
      );
    }
    else {
      return null;
    }
  }
  //onAdd(document.getElementById("newfile").value)
  //1. function to recive new page data
  //2. when add new page btn clicked , store the new page data to setPageList()
  function getfileName() {
    setShowTextbox(!showtextbox);  
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
          {DBdata.map((page) => {                   
            console.log(`THE PAGELIST: ${JSON.stringify(DBdata)}`); 
            return ( 
              
              <div className='navFont' to="/">{icon}{page.pageName}</div>
            );
            // <div>

            //   {/* showing child pages */}
            //   {/* {if(page.file_inside.length ==0){
            //     page.file_inside.map(small_page=>{
            //       <div>L<div>
            //     })
            //   }} */}

            //   </div>;
              
          })}
        </div>
      </body>

    </HashRouter>
  );
}


