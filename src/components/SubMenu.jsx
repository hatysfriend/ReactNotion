import React, { useState} from 'react' //irc + tab
import * as HiIcons from "react-icons/hi";
import * as AiIcons from "react-icons/ai";
import '../styles/App.css';
import '../styles/SubMenu.css';
import { SidebarLink, SidebarLabel } from './Sidebar';
import SubMenuTab from './SubMenuTab';
import Modal from './Modal'
import * as RiIcons from "react-icons/ri";

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
                    <AiIcons.AiFillHome />
                    <SidebarLabel>{item.title}</SidebarLabel>
                    {item.subNav && subnav ? <RiIcons.RiArrowUpSFill /> : item.subNav ? <RiIcons.RiArrowDownSFill /> : ''} {/* ???? */}
                    
                </div>

                {/*onHover dot-dot*/}
                <div className="SidebarSettings" >
                    <HiIcons.HiDotsHorizontal className="settingsBtn" onClick={()=>{
                        setIsOpen(true);console.log('menu has been clicked. Id: '+item._id);}}/>
                     
                </div>
            </SidebarLink>
            
            {/*Settings Modal*/}
            <Modal open={isOpen} onClose={()=>setIsOpen(false)} edit_item={item} HandleDelete={HandleDelete}></Modal>
            
            {/*Child Pages*/}
            {item.subNav && subnav &&
                <SubMenuTab item={item} subnav={subnav}/>
            }
        </React.Fragment>
    )
}
export default Submenu;

