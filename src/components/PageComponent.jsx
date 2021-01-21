import React, { Component } from 'react';
import '../styles/pageComponent.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Toggle from './ToggleComponent';

export default class PageComponent extends Component {
    render() {
        return (
            <div className="PageComponent">
                <h1><span className="headerContentArea" contentEditable="true" data-placeholder="Untitled"></span></h1>

                <span className="mainContentArea">
                    <div className="contentButtons">
                        <Toggle>
                            {
                                ({ on, toggle }) => (
                                    <React.Fragment>
                                        { (on) && (<div>Content Modal Goes Here...</div>)}
                                        <div onClick={toggle}><FontAwesomeIcon className="addContentButton" icon="plus" /></div>
                                    </React.Fragment>
                                )
                            }
                        </Toggle>
                        <Toggle>
                            {
                                ({ on, toggle }) => (
                                    <React.Fragment className="settingsMenu">
                                        { (on) && (<div>SETTINGS Modal Goes Here...</div>)}
                                        <div onClick={toggle} className="settingsContentButton">
                                            <FontAwesomeIcon icon="ellipsis-v" />
                                            <FontAwesomeIcon icon="ellipsis-v" />
                                        </div>
                                    </React.Fragment>
                                )
                            }
                        </Toggle>
                        <span className="contentArea" contentEditable="true" data-placeholder="Type '/' for commands"></span>
                    </div>
                </span>
            </div>
        )
    }
}

