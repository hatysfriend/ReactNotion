import React, { useState, Component } from 'react' //irc + tab
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import SubMenuTab from './SubMenuTab';

const Submenu = ({ item }) => {
    
    function loop(item) { 
        //lux sub [a.[a, b], b[a,b]]
        let arr= []
       console.log(`CURRENT ITEM: ${JSON.stringify(item)}`);  
            item.subNav && item.subNav.map((item, index) => {  //lux R 
                arr = [...childPage]  // get current array into temp
                arr.push(item.title)  //pushing obj into temp
                setChildPage(arr)
                if(item.subNav){ 
                    loop(item)
                }
                
            })
        
       //  '<DropDownLink to={'+item.path+'} key={'+index+'}>'
       // +item.icon+'<SidebarLabel>{'+item.title+'}</SidebarLabel>'
       // +'</DropDownLink>';
   }
    
    const [childPage, setChildPage] =useState([])
    const [subnav, setSubnav] = useState(false);
    const showShownav = () => setSubnav(!subnav)
    return (
        <>
            
            <SidebarLink to={item.path} onClick={item.subNav&&
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
            
            {subnav && item.subNav.map((item, index)=>{  //lux
                return(
                    <>
                    <DropDownLink to={item.path} key={index}>
                        {item.icon}
                        <SidebarLabel>{item.title}</SidebarLabel>
                    </DropDownLink>
                    {loop(item)}
                    
                    </>
                    );
            })}
            {console.log(JSON.stringify(childPage))}
        
        </>
    )
}
export default Submenu


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

