import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
// import { SidebarData } from "./SidebarData
import SubMenu from "./SubMenu";
import { IconContext } from "react-icons/lib";
import styled from "styled-components";
import { SidebarLabel, DropDownLink, SidebarLink } from "./SubMenu";

const Sidebar = (props) => {

  console.log(`THE DATA IS HERE: ${JSON.stringify(props.data)}`)

  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const [sidebarp, setSidebarp] = useState(false);
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

            {props.data.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}

            {/* <SidebarLink className="SidebarLink" to={item.path} onClick={item.subNav && showShownav} > */}
            <SidebarLink className="SidebarLink" onClick={showSidebarp} to="/">
              <div>
                <SidebarLabel>Add new File</SidebarLabel>
              </div>
            </SidebarLink>

            {sidebarp && (
              <DropDownLink>
                <input className="addinput" type="text" id="newfile" />
                <AiIcons.AiOutlineFileAdd
                  onClick={
                    (() => props.handleAdd(document.getElementById("newfile").value),
                    showSidebarp)
                  }
                />
              </DropDownLink>
            )}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};
export default Sidebar;


//JS




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
