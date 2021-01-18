import React, { Component, useState, useEffect, useRef } from 'react';
import '../styles/pageComponent.css'
export default class PageComponent extends Component {

    // constructor(id, name) {

    // constructor(){
    //     super();
    // }

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

