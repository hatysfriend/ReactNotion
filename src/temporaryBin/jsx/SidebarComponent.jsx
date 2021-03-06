import React from "react";
import { HashRouter } from "react-router-dom";
//import PageComponent from "./PageComponent";
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
          <input className="addinput" type="text" id='newfile' />
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

  function showChildFile(parentObj) {
    console.log(parentObj.pageName + "'s btn clicked");

    parentObj.file_inside.map(childPage => {
      let a ='<div className="navFont" to="/" id="'+childPage.pageName
      +'">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <FontAwesomeIcon icon="caret-down"'
      +'/>'+childPage.pageName+'</div>'
      console.log(a)

      document.getElementById(parentObj.pageName).innerHTML +=a;
    })

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
          </div><br />

          {/*showing pagelist */}
          {DBdata.map((page) => {
            return (
              <React.Fragment>

                {/* parent file name */}
                <div className="navFont" to="/" id={page.pageName}>
                  &nbsp;&nbsp;<FontAwesomeIcon icon="caret-down" onClick={() => showChildFile(page)} />
                  {page.pageName}
                </div>

                {/* <div className="navFont" to="/" id="React">
                  &nbsp;&nbsp;<FontAwesomeIcon icon="caret-down" onClick={() => showChildFile([object Object])} />
                  React</div> */}

                

                {/* child file name*/}
                <div id='a'></div>


                <div>
                  
                </div>

                <br />
              </React.Fragment>
            );
          }


          )}
        </div>
      </body>
    </HashRouter>
  );
}


  // function file_insideLoop(page) { //1
  //   let pageNameStructure = [];
  //   const count = 1;
  //   pageNameStructure.push(looping(page, pageNameStructure,count));
  //   console.log("arr: " + pageNameStructure)
  //   return (pageNameStructure);
  // }


  // function looping(page, arr, count) {
  //   if (page.file_inside.length !== 0) {
  //     page.file_inside.map((a) => {//C£
  //       arr.push([a, count])
  //       if (a.file_inside.length !== 0) {
  //         count++
  //         arr.push(looping(a, arr, count))
  //       }
  //       count=1
  //     })
  //     return '';
  //   }
  //   return '';
  // }

  // function nbsp(count){  // 1
  //   let space =<p>&nbsp;</p>
  //   space = space*count;
  //   console.log(space)
  //   return space;
  // };

  // {file_insideLoop(page).map((a) => {
  //   if (a !== '') {
  //     {console.log("a[0]:" + a[0].pageName)}
  //     {console.log("a[1]:" + a[1])}

  //     return (
        
  //       <div className="navFont" to="/">
  //          {nbsp(a[1])} 
  //         <FontAwesomeIcon icon="caret-down" onClick={''} />
  //          {a[0].pageName}
  //       </div>
  //     );
  //   }
  // })} 