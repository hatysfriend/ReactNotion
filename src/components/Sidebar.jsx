import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import SubMenu from "./SubMenu";
import { IconContext } from "react-icons/lib";
import styled from "styled-components";

const Sidebar = ({ data, handleAdd, HandleDelete }) => {

  const [sidebar, setSidebar] = useState(true); // show/hide sidebar
  const showSidebar = () => setSidebar(!sidebar);
  const [sidebarp, setSidebarp] = useState(false); //show/hide textbox
  const showSidebarp = () => setSidebarp(!sidebarp);

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

            {/* actual tab for data */}
            {data.map((item, index) => {
              return <SubMenu item={item} key={index} HandleDelete={HandleDelete} />;
            })}


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

  return (<>
    <Nav>
      <NavIcon to="#">
        <FaIcons.FaBars onClick={showSidebar} />
        <Link className='helpLink' to='/lol'>lol</Link>
      </NavIcon>
    </Nav></>);
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










export const Nav = styled.div`
  background: #15171c;
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
export const SidebarNav = styled.nav`
  background: #15171c;
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

//css

export const SidebarLink = styled(Link)`
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
