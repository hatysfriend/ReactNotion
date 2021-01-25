import React, { useState } from 'react'
import { EjectFill } from 'react-bootstrap-icons';
import styled from "styled-components";
import ReactDom from 'react-dom';
import '../styles/Modal.css'


export default function Modal({ open, children, onClose }) {


    if (!open) return null

    return ReactDom.createPortal(
        <div className='modalContainer'>
            <button className='modalCloseBtn' onClick={onClose} >Close Modal</button>
            <div className='MODAL_STYLES'>
                {children}
            </div>
        </div>,
        document.getElementById('portal')

    )
}

