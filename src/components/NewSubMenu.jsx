import React, { Component } from 'react' //irc + tab
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const SidebarLink = styled(Link)`
display: flex;
color: #e1e9fc;
`;

const SidebarLabel = styled.span``;

const Submenu = (props) =>{
  const item = props.item;

  return(
        <>
        <SidebarLink to={item.path}>
            <div>
                {item.icon}
                <SidebarLabel>{item.title}</SidebarLabel>
            </div>
        </SidebarLink>
        </>
    )

}
export default Submenu