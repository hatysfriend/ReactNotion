import React, { useState } from 'react'
import { SidebarLabel, DropDownLink } from './SubMenu'

const SubMenuTab = ({ item, subnav }) => {

  const [subnav2, setSubnav2] = useState(false); //connect to child
  const showShownav2 = () => setSubnav2(!subnav2)

  return (
    <React.Fragment>
      {item.subNav.map((item, index) => { //lux level
        return (
          <React.Fragment>
            <DropDownLink to={item.path} key={index} onClick={item.subNav && showShownav2}>
              <div>
                {item.icon}
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
              <SubMenuTab item={item} subnav={subnav2} />
            }
          </React.Fragment>
        );
      })}
    </React.Fragment>
  );
}

export default SubMenuTab;



