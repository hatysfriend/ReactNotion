import React, { Component, useState, useEffect, useRef } from 'react';
import '../styles/pageComponent.css'
export default class PageComponent extends Component {

  state=[]
    // constructor(id, name) {

    constructor(){
        super();
        this.state=[{
            pageId: "846u9qm",
            pageName: "React",
            data: "1",
            file_inside: [<PageComponent></PageComponent>]
          }]
    }
    getName=()=>{
        return this.state.pageName;
         }
    

    render() {
         
        return (
            <div className="PageComponent">
              <h1><span className="headerContentArea" contenteditable="true" data-placeholder="Untitled"></span></h1>
              <span className="mainContentArea" contenteditable="true" data-placeholder="Type '/' for commands"></span>
          </div>
        )
    }
}

