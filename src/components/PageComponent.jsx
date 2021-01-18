import React, { Component, useState, useEffect, useRef } from 'react';
import '../styles/pageComponent.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class PageComponent extends Component {

    render() {
        return (
            <div className="PageComponent">
                <h1><span className="headerContentArea" contenteditable="true" data-placeholder="Untitled"></span></h1>
                <span className="mainContentArea" contenteditable="true" data-placeholder="Type '/' for commands">
                    <div className="contentButtons">
                        <FontAwesomeIcon className="addContentButton" icon="plus-square"/>
                        <FontAwesomeIcon className="settingsContentButton" icon="ellipsis-v"/>
                    </div>
                </span>
                
            </div>
        )
    }
}

