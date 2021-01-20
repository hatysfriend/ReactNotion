import React, { useState, setState, createElement, useEffect } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import PageComponent from "./PageComponent";
import "../styles/sidebar.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SidebarComponent({
  DBdata,
  onAdd,
  showtextbox,
  onOffBtn,
}) {


  //function to enable textbox and button
  function AddNewfile(bool) {
    if (bool) {
      return (
        <React.Fragment className="nav_input_btn">
          <input idchildPageArray="newfile" className="addinput" type="text" id='newfile'/>
          <button
            className="addbtn2"
            onClick={() => onAdd(document.getElementById("newfile").value)}
          >
            ✔
          </button>
        </React.Fragment>
      );
    } else {
      return null;
    }
  }

  function file_insideLoop(page) { //1
    let pageNameStructure = [];
    const count = 1;
    pageNameStructure.push(looping(page, pageNameStructure,count));
    console.log("arr: " + pageNameStructure)
    return (pageNameStructure);
  }


  function looping(page, arr, count) {
    if (page.file_inside.length !== 0) {
      page.file_inside.map((a) => {//C£
        arr.push([a, count])
        if (a.file_inside.length !== 0) {
          count++
          arr.push(looping(a, arr, count))
        }
        count=1
      })
      return '';
    }
    return '';
  }
  // function nbsp(count){
  //   let space =&nbsp;
  //   space = space;
  //   console.log(space)
  //   return space;

  // };



  //sidebarcompenent rendering
  return (
    <HashRouter>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
      </head>

      <body>
        {/* sidebar_header */}
        <div className="sidenav a">
          <img src="imgs/icon.png" alt="" height="28px" width="35px"></img>
          <h1>React Notion</h1>

          {/* sidebar_add_NewFile_btn */}
          <div>
            <div className="addbtn" onClick={() => onOffBtn(showtextbox)}>
              + Add New File
            </div>
            {AddNewfile(showtextbox)}
            <text className="errorMessage" value="" id="errorMessage"></text>
          </div><br/>

          {/*showing pagelist */}
          {DBdata.map((page) => {
            return (
              <React.Fragment>

                {/* parent file name */}
                <div className="navFont" to="/">
                &nbsp;&nbsp;<FontAwesomeIcon icon="caret-down" onClick={''} />
                  {page.pageName}
                </div>

                {/* child file name*/}
                <div> {file_insideLoop(page).map((a) => {
                  if (a !== '') {
                    {console.log("a[0]:" + a[0].pageName)}
                    {console.log("a[1]:" + a[1])}

                    return (
                      
                      <div className="navFont" to="/">
                        {/* {nbsp(a[1])} */}
                        <FontAwesomeIcon icon="caret-down" onClick={''} />
                         {a[0].pageName}
                      </div>
                    );
                  }
                })}</div>
                {console.log(file_insideLoop(page))}
                <br/>
              </React.Fragment>
            );}  
          
          
          )}
        </div>
      </body>
    </HashRouter>
  );
}

