import React from 'react'
import {  FiSettings } from 'react-icons/fi'
import {  AiOutlineHome,AiOutlineUser } from 'react-icons/ai'
import {  IoMdHelpCircle, IoMdPeople,} from "react-icons/io"
import {BsFolder,BsTrash} from 'react-icons/bs'
export const SIdebarData = [
    {
        title: "Home",
        path: "/dashboard" ,
        icon: <AiOutlineHome />,
        cName: 'nav-text'
    },
    {
        title: "My file",
        path: "/files" ,
        icon: <BsFolder />,
        cName: 'nav-text'
    },
    {
        title: "Recyclebin",
        path: "/recyclebin" ,
        icon: <BsTrash />,
        cName: 'nav-text'
    },
    {
        title: "Team",
        path: "/team" ,
        icon: <IoMdPeople />,
        cName: 'nav-text'
    },
    {
        title: "Setting",
        path: "/setting" ,
        icon: <FiSettings />,
        cName: 'nav-text'
    },
    {
        title: "Profile",
        path: "/profile" ,
        icon: <AiOutlineUser />,
        cName: 'nav-text'
    }
]