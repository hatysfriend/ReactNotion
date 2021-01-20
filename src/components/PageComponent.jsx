import React, { Component, useState, useEffect, useRef } from 'react';
import '../styles/pageComponent.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class PageComponent extends Component {

    render() {
        return (
            <div className="PageComponent">
                <h1><span className="headerContentArea" contentEditable="true" data-placeholder="Untitled"></span></h1>
                
                <span className="mainContentArea">
                    <div className="contentButtons">
                        <FontAwesomeIcon className="addContentButton" icon="plus"/> 

                        <div className="settingsContentButton">
                            <FontAwesomeIcon icon="ellipsis-v"/>
                            <FontAwesomeIcon icon="ellipsis-v"/>
                        </div>
                        
                        <span className="contentArea" contentEditable="true" data-placeholder="Type '/' for commands"></span>
                    </div>
                </span>
            </div>
        )
    }
}

