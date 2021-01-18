import React, { useState, useEffect, useRef } from 'react';
import '../styles/pageComponent.css'

export default function PageComponent(){
    const [pageList, setPageList] = useState('pageData');

      return (
          <div className="PageComponent">
              <h1><span className="headerContentArea" contenteditable="true" data-placeholder="Untitled"></span></h1>
              <span className="mainContentArea" contenteditable="true" data-placeholder="Type '/' for commands"></span>
          </div>
      )
}



   
