import React, { Component, useState, useEffect, useRef } from 'react';
import '../styles/pageComponent.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class PageComponent extends Component {

    render() {
        return (
            <div className="PageComponent">
                <h1><span className="headerContentArea" contentEditable="true" data-placeholder="Untitled"></span></h1>
                
                <div className="mainContentArea">
                
                <div class="showhim">
                    HOVER ME
                    <div class="showme">
                        <FontAwesomeIcon className="addContentButton" icon="plus"/> 
                        <FontAwesomeIcon className="settingsContentButton" icon="ellipsis-v"/>
                        hai
                    </div>
                </div>
                        
                    
                    
                    <span className="contentArea" contentEditable="true" data-placeholder="Type '/' for commands"></span>
                </div>
            </div>
        )
    }
}

