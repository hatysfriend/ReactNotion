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
let arr =[]
   
  //function to enable textbox and button
  function AddNewfile(bool) {
    if (bool) {
      return (
        <React.Fragment className="nav_input_btn">
          <input idchildPageArray="newfile" className="addinput" type="text" />
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
      let File_insideHTML;
      let pageNameStructure= page.pageName+"";
      looping(page, File_insideHTML, pageNameStructure)
    }

  function looping(page,File_insideHTML,pageNameStructure) {//2
    let pns = pageNameStructure
    if(page.file_inside !== null) {
         page.file_inside.map(a => {
          pns +="\s"+"\nL" + a.pageName
          console.log(pns)
          File_insideHTML += a.pageName
          looping(a,File_insideHTML,pns);//3
          pns = pageNameStructure
        })
      }
    }

  // function getChildPages(page) {

  //   // (page.file_inside.length !== 0) && 
  //   //   childPageArray.map((childPage) => {
  //   //     console.log(`CHECK THIS: ${JSON.stringify(childPageArray)}`);
  //   //     return (
  //   //       <div>
  //   //         <FontAwesomeIcon
  //   //           icon="caret-down"
  //   //           onClick={() => getChildPages(childPage)}
  //   //         />
  //   //         {childPage.pageName}
  //   //       </div>
  //   //     );
  //   //    })
  //   let arr = []
  //   page.file_inside.map((childPages) => {
      
  //     arr.push(childPages);
  //   });
  //   childPageArray.push(arr);
  //   arrCount++;        
  //   console.log(arrCount);
  //   console.log(childPageArray);
  // }

  let arrCount=0;

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
            return (
              <React.Fragment>
                {/* parent file name */}
                <div className="navFont" to="/">
                  <FontAwesomeIcon
                    icon="caret-down"
                    // onClick={() => getChildPages(page)}
                  />
                  {page.pageName}
                  {file_insideLoop(page)}
                </div>


                {/* child page name */} 
                {/* {console.log(childPageArray)}
                 {(page.file_inside.length !== 0) && 
                childPageArray[0].map((childPage) => {
                  console.log(`CHECK THIS: ${JSON.stringify(childPageArray)}`);
                  return (
                    <div>
                      <FontAwesomeIcon
                        icon="caret-down"
                        onClick={() => getChildPages(childPage)}
                      /> 
                      {childPage.pageName}
                    </div>
                  );
                 }
                 )} */}
          
                
              </React.Fragment>
            );
          }
          
          
          )}
        </div>
      </body>
    </HashRouter>
  );
}
