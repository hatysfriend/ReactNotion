import React, { useState } from 'react'
import ReactDom from 'react-dom';
import * as RiIcons from "react-icons/ri";
import '../styles/Modal.css'
// not used 
// import { EjectFill } from 'react-bootstrap-icons';
// import styled from "styled-components";


export default function Modal({ open, children, onClose, edit_item, HandleDelete, HandleUpdate, HandleAddChild, ArrIndexTrack }) {

    const [showInputAdd, setShowInputAdd] = useState(false);
    const [showInput2, setShowInput2] = useState(false); //for rename now
    if (!open) return null

    const deletePage = () => {
        HandleDelete(ArrIndexTrack);
        onClose();//function to close this
        setShowInputAdd(!showInputAdd)
    }
    const copyLink = () => {
        navigator.clipboard.writeText('http://localhost:3000' + edit_item.path);
        onClose();
        setShowInputAdd(!showInputAdd)
    }
    const rename = () => {
        HandleUpdate(ArrIndexTrack, document.getElementById('renametxt').value)
        onClose();
        setShowInputAdd(!showInputAdd)
    }
    const addnewpage = () => {
        console.log(edit_item._id)
        HandleAddChild( document.getElementById('newpagetxt').value, ArrIndexTrack)
        onClose();
        setShowInputAdd(!showInputAdd)
    }

    return ReactDom.createPortal(
        <div >
            {/* <button className='modalCloseBtn'>Close Modal</button> */}
            <div className='modalContainer' onClick={onClose} />
            <div className='MODAL_STYLES'>

                {/* delete the page */}
                <div className='modalTab' onClick={deletePage}><RiIcons.RiDeleteBin2Fill color="black" />Delete</div>

                {/* copy path */}
                <div className='modalTab' onClick={copyLink}><RiIcons.RiLinksFill color="black" />Copy Link</div>

                {/* rename */}
                <div className='modalTab' onClick={() => setShowInput2(!showInput2)}><RiIcons.RiPencilFill color="black" />Rename</div>
                {showInput2 && <div className='modalTab'><input id='renametxt'></input><RiIcons.RiFileAddLine color="black"
                    onClick={rename} /></div>}

                {/* add new file */}
                {ArrIndexTrack.length!==4&&<div className='modalTab' onClick={() => setShowInputAdd(!showInputAdd)}><RiIcons.RiFileAddLine color="black" />New File</div>}
                {showInputAdd && <div className='modalTab'><input id='newpagetxt'></input><RiIcons.RiFileAddLine color="black"
                    onClick={addnewpage} /></div>}
            </div>
        </div>,
        document.getElementById('portal')
    )
}


