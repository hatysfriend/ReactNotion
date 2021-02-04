import React,{useState} from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import '../styles/PageContent.css';
import HeaderComponent from './HeaderComponent';

// inside item content is like [{type:'div', content:'text1', textColour:'red'},['a','text2'],['h1','text3']]
    //item.content: [i][0]=tag name
    //              [i][1]=text 
    //              [i][2]=className
    //              [i][3]=id
    //              [i][4]= onclick? idk...

// {
//     type:'div',
//     content:'text1',
//     styles:[{'text-align': 'center'}]
//     <PageContent styles={item.styles}>
// }

    // input.setAttribute('id', id);
    // input.setAttribute('type', 'number');
    // input.setAttribute('name', id);
    // input.setAttribute('value', '0');
    // input.setAttribute('min', '0');

export default function PageContent({item}) {
    
    let length = item.content.length;
    let [count, setCount]= useState(0)
    
    const newLine = () => {
        console.log('count: ' + count + " length :" + length)
        console.log(item.content[count][0] + ' : ' + item.content[count][1])

        console.log(JSON.stringify(item.content))
        let para = document.createElement(item.content[count][0]);  //1. new tag
        para.innerHTML = item.content[count][1]
        let addDiv = document.getElementById(item._id);  //4. place to add
        document.body.appendChild(para, addDiv)
        setCount(count+1)
    }
    
    return (
            <div className="PageComponent" >
                
                <div className="headerTitle" contentEditable="true" data-placeholder="Untitled" >{item.title}</div>

                <span className="mainContentArea">
                    <div className="contentButtons">

                        <div>
                            <div><AiIcons.AiOutlinePlus className="addContentButton"/></div>
                        </div>

                        <div className="settingsMenu">
                            <div className="settingsContentButton"><AiIcons.AiOutlineSetting /></div>
                        </div>
             
                        <span className="contentArea" contentEditable="true" data-placeholder="Type '/' for commands"></span>
                    </div>
                </span>
            </div>
    )
}