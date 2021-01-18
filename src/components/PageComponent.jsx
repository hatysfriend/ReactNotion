import React, { Component, useState, useEffect, useRef } from 'react';
import '../styles/page.css'

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

            </div>
        )
    }
}

