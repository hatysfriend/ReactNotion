import React, { useState } from 'react'
import * as HiIcons from "react-icons/hi";
import * as AiIcons from "react-icons/ai";
import '../styles/App.css';
import { SidebarLink, SidebarLabel } from '../components/Sidebar';//, DropDownLink
import * as IoIcons from "react-icons/io";

import Modal from '../components/Modal'
import * as RiIcons from "react-icons/ri";

export const SidebarLoops = ({ item, HandleDelete, subnav1,HandleUpdate,HandleAddChild,ArrIndexTrack }) => {
    const [subnav, setSubnav] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const showShownav = () => {
        setSubnav(!subnav)
    }
    let count=0;

    function mainContent() {
        return (
            <>{/* main_icon */}
                <div onClick={item.subNav && showShownav}>
                    {ArrIndexTrack.length == 1 ? <AiIcons.AiFillHome /> : <IoIcons.IoIosPaper />}

                    {/* item's title */}
                    <SidebarLabel>{item.title}</SidebarLabel>

                    {/* arrow_icon */}
                    {item.subNav!==null && subnav
                        ? <RiIcons.RiArrowUpSFill />
                        : item.subNav
                            ? <RiIcons.RiArrowDownSFill />
                            : ''}</div>

                {/*onHover dot-dot*/}
                <div className="SidebarSettings" >
                    <HiIcons.HiDotsHorizontal className="settingsBtn" onClick={() => {
                        setIsOpen(true);
                        console.log(ArrIndexTrack);
                        console.table(item);
                    }} /></div>
            </>
        );
    }


    return (
        <React.Fragment>

            {/* 1.  for parent pages */}
            <SidebarLink to={item.path} className="SidebarLink">
                {mainContent()}
            </SidebarLink>


            {/* 2.  for child pages */}
            {/* <DropDownLink to={item.path}>
                {mainContent()}
            </DropDownLink> */}


            {/*Settings Modal*/}
            <Modal open={isOpen} onClose={() => setIsOpen(false)} edit_item={item} HandleDelete={HandleDelete} 
            HandleUpdate={HandleUpdate} HandleAddChild={HandleAddChild} ArrIndexTrack={ArrIndexTrack}></Modal>

            {/*Pages*/}
            {item.subNav!==null && subnav &&
                item.subNav.map((item, key) => {
                    let ArrIndexTrack2 = [...ArrIndexTrack]
                    ArrIndexTrack2.push(key)
                    return (
                        <SidebarLoops item={item} subnav1={subnav} HandleUpdate={HandleUpdate} HandleAddChild={HandleAddChild}
                            HandleDelete={HandleDelete}  ArrIndexTrack={ArrIndexTrack2} />
                    );
                }
                )}
        </React.Fragment>
    )
}
