import React, { useState } from 'react' //imr +tab
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";




export const HandleAdd = (value) => {
  console.log('new file add btn clicked: ' + value);
  let arr = [...Data];
  if (value === "" || value === null) {
    // document.getElementById('errorMsg').innerHTML = 'Invalid File Name';

  } else {
    let boolExistingName = false;
    arr.map((obj) => {
      if (obj.title === value) boolExistingName = true;
    });
    if (!boolExistingName) {
      arr.push(
        {
          title: value,
          path: '/' + value,
          icon: <AiIcons.AiFillHome />,
          subNav: []
        }
      );
      Data = arr;
      console.log('original data updatad' + JSON.stringify(Data))
      return 'data stored'
    }
    // document.getElementById('errorMsg').innerHTML = 'The File name is already exist';
  }
}




export let Data = [
  {
    title: "Overview",
    path: "/Overview",
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "icon1",
        path: "/Overview/icon1",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "icon2",
        path: "/Overview/icon2",
        icon: <FaIcons.FaCartPlus />,
      },
      {
        title: "icon3",
        path: "/Overview/icon3",
        icon: <IoIcons.IoMdPeople />,
      },
      {
        title: "icon4",
        path: "/Overview/icon4",
        icon: <FaIcons.FaEnvelope />,
      },
      {
        title: "icon5",
        path: "/Overview/icon5",
        icon: <IoIcons.IoMdHelpCircle />,
      },
    ],
  },
  {
    title: "League of Legends",
    path: "/lol",
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Lux",
        path: "/lol/lux",
        icon: <IoIcons.IoIosPaper />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
          {
            title: "lux's ulti",
            path: "/lol/lux/ulti",
            icon: <IoIcons.IoIosPaper />,
            iconClosed: <RiIcons.RiArrowDownSFill />,
            iconOpened: <RiIcons.RiArrowUpSFill />,
            subNav: [
              {
                title: "When to use Lux's Ulti",
                path: "/lol/lux/ulti/when",
                icon: <IoIcons.IoIosPaper />,
              }
            ]
          }
        ]
      },
      {
        title: "Ashe",
        path: "/lol/ashe",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Miss Fortune",
        path: "/lol/mf",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  }
]







