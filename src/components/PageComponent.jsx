import React, { Component} from 'react';
import '../styles/pageComponent.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class PageComponent extends Component {

    AddContentMenu(){

    }

    SettingsMenu(){

    }

    render() {
        return (
            <div className="PageComponent">
                <h1><span className="headerContentArea" contentEditable="true" data-placeholder="Untitled"></span></h1>
                
                <span className="mainContentArea">
                    <div className="contentButtons">
                        <FontAwesomeIcon className="addContentButton" icon="plus" onClick={()=>this.AddContentMenu()}/> 

                        <div className="settingsContentButton" onClick={()=>this.SettingsMenu()}>
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

