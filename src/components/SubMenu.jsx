import React, { useState, Component } from 'react' //irc + tab
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import SubMenuTab from './SubMenuTab';

const Submenu = ({ item }) => { //lol level

    const [subnav, setSubnav] = useState(false);
    const showShownav = () => setSubnav(!subnav)
    return (
        <React.Fragment>

            <SidebarLink to={item.path} onClick={item.subNav && showShownav}>
                <div>
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
                </div>
            </SidebarLink>

            {item.subNav && subnav &&
                <SubMenuTab item={item} subnav={subnav}>
                </SubMenuTab>
            }

        </React.Fragment>
    )
}
export default Submenu;


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

