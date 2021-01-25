import React, { useState, Component } from 'react' //irc + tab
import * as HiIcons from "react-icons/hi";
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import SubMenuTab from './SubMenuTab';
import '../styles/App.css'
import '../styles/SubMenu.css'


const Submenu = ({ item }) => { //lol level

    const [subnav, setSubnav] = useState(false);
    const showShownav = () => setSubnav(!subnav)

    return (
        <React.Fragment>
            <div className="TabContainer">
                <SidebarLink className="SidebarLink" to={item.path} onClick={item.subNav && showShownav} >
                 {showParentSidebar(subnav,item)}
                </SidebarLink>
            </div>

            {item.subNav && subnav &&
                <SubMenuTab item={item} subnav={subnav}>
                </SubMenuTab>
            }
            </React.Fragment>
    )
}
export default Submenu;

//  what is this? your testing things

// const openSettings = () => {
//     console.log('BUTTON CLICKED');
// }
// <div className="SidebarSettings" onClick={openSettings}>
//                     <HiIcons.HiDotsHorizontal />
//                      <div className="errorMsg" />  
//                 </div>




//js functions
const showParentSidebar = (subnav,item) => {
    return (
        <><div>
                {item.icon}
                <SidebarLabel>{item.title}</SidebarLabel>
            </div>
            <div>
                {item.subNav && subnav
                    ? item.iconOpened
                    : item.subNav
                        ? item.iconClosed
                        : ''
                }
            </div></>
            );
}


//css
export const SidebarLink = styled(Link)`
display: flex;
color: #e1e9fc;
justify-content: space-between;
align-items:center;
// padding:20px;
list-style:none;
height:60px;
text-decoration:none;
font-size:18px;

&:hover{
    background: #252831;
    border-left: 4px solid #632ce4;
    cursor:pointer;
}
`;
export const SidebarLabel = styled.span`
    margin-left:16px;
`;
export const DropDownLink = styled(Link)`
background: #343336;
height: 60px;
padding-left:3rem;
display: flex;
align-items:center;
text-decoration: none;
color:#f5f5f5;
font-size:18px;
`;
