import React from "react";
import SidebarContact from "./SidebarContact"
import { Avatar, IconButton } from "@material-ui/core";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchOutlined from "@material-ui/icons/SearchOutlined";

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <Avatar />

                <div className="sidebar-header-right">
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    
                    <IconButton>
                        <ChatIcon />
                    </IconButton>

                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>

                </div>
            </div>

            <div className="sidebar-search">
                <div className="sidebar-search-container">
                <SearchOutlined />
                <input placeholder="Search" type="text"/>
                </div>
            </div>

            <div className="sidebar-contacts">
                <SidebarContact addNewContact/>
            </div>
        </div>
    )
}

export default Sidebar