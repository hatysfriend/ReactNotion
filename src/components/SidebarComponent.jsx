import React, { useState, setState, createElement, useEffect } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import PageComponent from "./PageComponent";
import "../styles/sidebar.css";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
          <input id="newfile" className="addinput" type="text" />
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
  function file_insideLoop(page) {
    let File_insideHTML;
    let pageNameStructure= page.pageName+"";
      looping(page, File_insideHTML, pageNameStructure)
      return File_insideHTML;
    
  }

function looping(page,File_insideHTML,pageNameStructure) {
  if(page.file_inside !== null) {
       page.file_inside.map(a => {
        pageNameStructure +="/" + a.pageName
        console.log(pageNameStructure)
        // File_insideHTML += <div className="navFont" to="/">{a.pageName}</div>
        File_insideHTML += a.pageName
        looping(a,File_insideHTML,pageNameStructure);
      })
    }
  }
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
            </div>


            {/*showing pagelist */}
            {DBdata.map((page) => {
              console.log(`THE PAGELIST: ${JSON.stringify(DBdata)}`);
              return (
                <div>
                  <div className="navFont" to="/">
                    {/* <FontAwesomeIcon icon="caret-down"/> */}
                    {page.pageName}
                  </div>

                  {file_insideLoop(page)}
                </div>
              );
            })}
          </div>
        </body>
      </HashRouter>
    );
  }
