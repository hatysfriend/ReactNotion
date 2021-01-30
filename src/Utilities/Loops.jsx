import React, { useState } from 'react'
import * as HiIcons from "react-icons/hi";
import * as AiIcons from "react-icons/ai";
import '../styles/App.css';
import '../styles/SubMenu.css';
import { SidebarLink, SidebarLabel } from '../components/Sidebar';//, DropDownLink
import * as IoIcons from "react-icons/io";

import Modal from '../components/Modal'
import * as RiIcons from "react-icons/ri";

export const SidebarLoops = ({ item, HandleDelete, subnav1, arrCount, ArrIndexTrack,HandleUpdate,HandleAddChild }) => {
    const [subnav, setSubnav] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const showShownav = () => {
        setSubnav(!subnav)
    }

    function mainContent() {
        return (
            <>{/* main_icon */}
                <div onClick={item.subNav && showShownav}>
                    {arrCount === 0 ? <AiIcons.AiFillHome /> : <IoIcons.IoIosPaper />}

                    {/* item's title */}
                    <SidebarLabel>{item.title}</SidebarLabel>

                    {/* arrow_icon */}
                    {item.subNav && subnav
                        ? <RiIcons.RiArrowUpSFill />
                        : item.subNav
                            ? <RiIcons.RiArrowDownSFill />
                            : ''}</div>

                {/*onHover dot-dot*/}
                <div className="SidebarSettings" >
                    <HiIcons.HiDotsHorizontal className="settingsBtn" onClick={() => {
                        setIsOpen(true);
                        console.log('menu has been clicked. Id: ' + item._id);
                        console.log('ArrIndexTrack :' + ArrIndexTrack);
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
            HandleUpdate={HandleUpdate} HandleAddChild={HandleAddChild}></Modal>

            {/*Child Pages*/}
            {item.subNav && subnav &&
                item.subNav.map((item, key) => {
                    ArrIndexTrack = ArrIndexTrack + '.' + key

                    return (
                        <SidebarLoops item={item} subnav1={subnav} HandleUpdate={HandleUpdate} HandleAddChild={HandleAddChild}
                            HandleDelete={HandleDelete} arrCount={arrCount + 1} ArrIndexTrack={ArrIndexTrack} />
                    );
                }
                )}
        </React.Fragment>
    )
}
