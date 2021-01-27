import React, { useState } from 'react'
import { EjectFill } from 'react-bootstrap-icons';
import styled from "styled-components";
import ReactDom from 'react-dom';
import * as RiIcons from "react-icons/ri";
import '../styles/Modal.css'


export default function Modal({ open, children, onClose, edit_item, HandleDelete }) {

    const [showInput, setShowInput] = useState(false);
    if (!open) return null

    const deletePage=()=>{
        HandleDelete(edit_item._id);
        //function to close this
        onClose();
    }

    const copyLink=()=>{
        navigator.clipboard.writeText('http://localhost:3000'+edit_item.path);
        onClose();
    }

    return ReactDom.createPortal(
        <div >
            {/* <button className='modalCloseBtn'>Close Modal</button> */}
            <div className='modalContainer' onClick={onClose}/>
            <div className='MODAL_STYLES'>
                <div className='modalTab' onClick={deletePage}><RiIcons.RiDeleteBin2Fill color="black"/>Delete</div>
                <div className='modalTab' onClick={copyLink}><RiIcons.RiLinksFill color="black"/>Copy Link</div>
                <div className='modalTab'><RiIcons.RiPencilFill color="black"/>Rename</div>
                <div className='modalTab' onClick={()=>setShowInput(!showInput)}><RiIcons.RiFileAddLine color="black"/>New File</div>
                {showInput && <div className='modalTab'><input></input><RiIcons.RiFileAddLine color="black"/></div>}
            </div>
        </div>,
        document.getElementById('portal')

    )
}
//onClick={onClose}

// const iconColor
