import React from 'react'
import {SidebarLabel, DropDownLink} from '../components/Sidebar'

//Description
export default function SidebarTitle({ subnav, item }) {
    return (
        <>
            <div>
                {item.icon}
                <SidebarLabel>{item.title}</SidebarLabel>
            </div>
            <div>
                {item.subNav && subnav
                    ? item.iconOpened
                    : item.subNav
                        ? item.iconClosed
                        : ''
                }

            </div>
        </>
    )
}

