import React, { useState } from 'react'
import { EjectFill } from 'react-bootstrap-icons';
import styled from "styled-components";
import ReactDom from 'react-dom';



// export default function SettingsPopUp() {
//     const [isOpen, setIsOpen] = useState(false);

//     return (
//         <>
//             <div style={BUTTON_WRAPPER_STYLES}>
//                 <button onClick={() => setIsOpen(!isOpen)}>Open Modal</button>

//                 <Modal open={isOpen} onClose={()=>setIsOpen(false)}> Fancy TM</Modal>
//             </div>

//             <div style={other_content_styles}>other content</div>

//         </>
//     )
// }



export default function Modal({ open, children, onClose }) {
    
  
  if (!open) return null

    return ReactDom.createPortal (
        <>
        <div style={Overlay_styles} onClick={()=>console.log('clicked')}/>
        <div style={MODAL_STYLES}>
            <button onClick={onClose}>Close Modal</button>
            {children}
        </div>
        </>,
        document.getElementById('portal')
        
    )
}

//css
const BUTTON_WRAPPER_STYLES = {
    position: 'relative',
    zIndex: 1
}
const other_content_styles = {
    position: 'relative',
    zIndex: 2,
    backgroundColor: 'red',
    padding: '10px'

}

const MODAL_STYLES = {
    position: 'fixed',
    top: '50%',
    left:'50%',             
    transform: 'translate(-50%, -50%)', 
    backgroundColor:'#fff',
    padding:'50px',
    zIndex:1000
  
  }
  const Overlay_styles={
      position: 'fixed',
      top:0,
      left:0,
      right:0,
      bottom:0,
      backgroundColor: 'rgba(0,0,0, .7)',
      zIndex:999
  }


