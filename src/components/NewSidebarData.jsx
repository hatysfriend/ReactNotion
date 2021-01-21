import React from "react"; //imr +tab
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
  {
    title: "Overview",
    path: "/Overview",
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Overview",
        path: "/Overview/users",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Revinue",
        path: "/Overview/Revinue",
        icon: <IoIcons.IoIosPaper />,
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
  },
  {
    title: "products",
    path: "/products",
    icon: <FaIcons.FaCartPlus />,
  },
  {
    title: "team",
    path: "/team",
    icon: <IoIcons.IoMdPeople />,
  },
  {
    title: "Messages",
    path: "/messages",
    icon: <FaIcons.FaEnvelope />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Message 1",
        path: "/messages/message1",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Message2",
        path: "/messages/message2",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: "Support",
    path: "/support",
    icon: <IoIcons.IoMdHelpCircle />,
  },
];
