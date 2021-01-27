import React, { useState} from 'react' //irc + tab
import * as HiIcons from "react-icons/hi";
import * as FaIcons from "react-icons/fa";
import '../styles/App.css';
import '../styles/SubMenu.css';
import { SidebarLink, SidebarLabel } from './Sidebar';
import SubMenuTab from './SubMenuTab';
import Modal from './Modal'

const Submenu = ({ item, HandleDelete }) => { //lol level

    const [subnav, setSubnav] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const showShownav = () =>{
        setSubnav(!subnav);
        console.log('delete menu has been clicked. Id: '+item._id)
    } 
  

    return (
        <React.Fragment>
            <SidebarLink className="SidebarLink" to={item.path}>
                {/*Icon + Item Title + Open/Close-Triangle*/}
                <div onClick={item.subNav && showShownav}>
                    {item.icon}
                    <SidebarLabel>{item.title}</SidebarLabel>
                    {item.subNav && subnav ? item.iconOpened : item.subNav ? item.iconClosed : ''}
                </div>

                {/*onHover dot-dot*/}
                <div className="SidebarSettings" >
                    <HiIcons.HiDotsHorizontal className="settingsBtn" onClick={()=>{
                        setIsOpen(true);console.log('menu has been clicked. Id: '+item._id);}}/>
                     
                </div>
            </SidebarLink>
            
            {/*Settings Modal*/}
            <Modal open={isOpen} onClose={()=>setIsOpen(false)} edit_item={item} HandleDelete={HandleDelete}> Fancy TM</Modal>
            
            {/*Child Pages*/}
            {item.subNav && subnav &&
                <SubMenuTab item={item} subnav={subnav}/>
            }
        </React.Fragment>
    )
}
export default Submenu;

