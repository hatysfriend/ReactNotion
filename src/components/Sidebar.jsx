import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { IconContext } from "react-icons/lib";
import styled from "styled-components";
import {SidebarLoops} from '../Utilities/SidebarLoop'

const Sidebar = ({ data, handleAdd, HandleDelete,HandleUpdate,HandleAddChild }) => {

  const [sidebar, setSidebar] = useState(true); // show/hide sidebar
  const showSidebar = () => setSidebar(!sidebar);
  const [sidebarp, setSidebarp] = useState(false); //show/hide textbox
  const showSidebarp = () => setSidebarp(!sidebarp);
  let ArrIndexTrack = [];


  return (
    <>
    <IconContext.Provider value={{ color: "green" }}>

        {/* top bar content */}
        {top_bar(showSidebar)}

        {/* hide_sidebar_icon */}
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <NavIcon to="#">
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </NavIcon>
            
            {/* //{Sidebar_Loops(item, HandleDelete)} */}
            {data.map((item, key) => {
              ArrIndexTrack = []
              ArrIndexTrack.push(key)
              return (<SidebarLoops key={item.path} item={item} HandleDelete={HandleDelete} HandleAddChild={HandleAddChild}
               subnav={false} ArrIndexTrack={ArrIndexTrack} HandleUpdate={HandleUpdate}/>);
            } )}
            
            {/* add new button */}
            {AddNewParentFile(showSidebarp, sidebarp, handleAdd)}

          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};
export default Sidebar;




//top bar 
export const top_bar = (showSidebar) => {
 //plan to contain menu link, or back button or something here
 return (
    <Nav>
      <NavIcon to="#">
        <FaIcons.FaBars onClick={showSidebar} />
        <Link className='helpLink' to='/lol'>lol</Link>
        <div onClick={changeStyle}><FaIcons.FaEnvelope /></div>
      </NavIcon>
    </Nav>);
}

//Description: Adds a new Sidebar Tab
export const AddNewParentFile = (showSidebarp, sidebarp, handleAdd) => {
  return (<>
    <SidebarLink className="SidebarLink" onClick={showSidebarp}  >
      <div><SidebarLabel>Add new File</SidebarLabel></div>
    </SidebarLink>

    {sidebarp && (
      <DropDownLink>
        <input className="addinput" type="text" id="newfile" />
        <AiIcons.AiOutlineFileAdd
          onClick={() => {
            handleAdd(document.getElementById('newfile').value);
            showSidebarp();
          }} />
      </DropDownLink>
    )}</>
  );
}


//just playing 
export const changeStyle=()=>{
  Nav = styled.div`
  background: #95b2b8;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
SidebarNav = styled.nav`
  background: #85c5de;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? "0%" : "-100%")}; //0%:-100% 83.5
  transition: 350ms;
  z-index: 10;
`;
 SidebarLink = styled(Link)`
position: relative;
display: flex;
color: #3f345c;
${'' /* justify-content: space-between; */}
align-items:center;
padding:20px;
list-style:none;
height:60px;
text-decoration:none;
font-size:18px;

&:hover{
    background: #3d7494;
    border-left: 4px solid #632ce4;
    cursor:pointer;
}
`;
}



////css////////////////////////////////

export let Nav = styled.div`
  background: #252831;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
export const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
export let SidebarNav = styled.nav`
  background: #252831;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? "0%" : "-100%")}; //0%:-100% 83.5
  transition: 350ms;
  z-index: 10;
`;
export const SidebarWrap = styled.nav`
  width: 100%;
`;
export let SidebarLink = styled(Link)`
position: relative;
display: flex;
color: #e1e9fc;
${'' /* justify-content: space-between; */}
align-items:center;
padding:20px;
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
