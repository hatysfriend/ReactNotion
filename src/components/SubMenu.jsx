import React, { useState, Component } from 'react' //irc + tab
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import SubMenuTab from './SubMenuTab';

const Submenu = ({ item }) => { //lol level


    const [subnav, setSubnav] = useState(false);
    const showShownav = () => setSubnav(!subnav)
    return (
        <>

            <SidebarLink to={item.path} onClick={item.subNav &&
                showShownav}>
                <div>
                    {item.icon}
                    <SidebarLabel>{item.title}</SidebarLabel>
                </div>
                <div>
                    {item.subNav && subnav
                        ? item.iconOpened
                        : item.subNav
                            ? item.iconClosed
                            : ''}

                </div>
            </SidebarLink>
            {item.subNav && subnav &&
                <SubnavRecursion item={item} subnav={subnav}>
                </SubnavRecursion>
            }

        </>
    )
}
export default Submenu;

const SubnavRecursion = ({ item, subnav }) => {
    const [subnav2, setSubnav2] = useState(false); //connect to child
    const showShownav2 = () => setSubnav2(!subnav2)

    return (
        <>
            {item.subNav.map((item, index) => { //lux level
                return (
                    <>
                        <DropDownLink to={item.path} key={index}
                            onClick={item.subNav && showShownav2}>
                            <div>{item.icon}
                                <SidebarLabel>{item.title}</SidebarLabel>
                            </div>

                            <div>
                                {item.subNav && subnav2
                                    ? item.iconOpened
                                    : item.subNav
                                        ? item.iconClosed
                                        : ''}

                            </div>
                        </DropDownLink>
                        {console.log(subnav)}

                        {(item.subNav && subnav2) &&
                            <SubnavRecursion item={item} subnav={subnav2} />
                        }
                    </>

                );
            })}
        </>
    );
}





const SidebarLink = styled(Link)`
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

const SidebarLabel = styled.span`
margin-left:16px;
`;
const DropDownLink = styled(Link)`
background: #343336;
height: 60px;
padding-left:3rem;
display: flex;
align-items:center;
text-decoration: none;
color:#f5f5f5;
font-size:18px;
`;

