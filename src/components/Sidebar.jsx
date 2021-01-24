import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import SubMenu from "./SubMenu";
import { IconContext } from "react-icons/lib";
import styled from "styled-components";
import { SidebarLabel, DropDownLink, SidebarLink } from "./SubMenu";

const Sidebar = ({ data, handleAdd }) => {

  const [sidebar, setSidebar] = useState(false); //containing datalist
  const showSidebar = () => setSidebar(!sidebar);
  const [sidebarp, setSidebarp] = useState(false); //switch to show/hide textbox
  const showSidebarp = () => setSidebarp(!sidebarp);

  return (
    <>
      <IconContext.Provider value={{ color: "yellow" }}>
        <Nav>
          <NavIcon to="#">
            <FaIcons.FaBars onClick={showSidebar} />
          </NavIcon>
        </Nav>

        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <NavIcon to="#">
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </NavIcon>

            {data.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}

            {AddNewParentFile(showSidebarp, sidebarp, handleAdd)} {/* add btn */}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};
export default Sidebar;


//JS functions

const AddNewParentFile = (showSidebarp, sidebarp, handleAdd) => {
  return (<>
    <SidebarLink className="SidebarLink" onClick={showSidebarp} to="/">
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




// css
const Nav = styled.div`
  background: #15171c;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const SidebarNav = styled.nav`
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
const SidebarWrap = styled.nav`
  width: 100%;
`;
