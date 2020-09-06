import React, {useState, useEffect} from "react";
import SidebarContact from "./SidebarContact"
import { Avatar, IconButton } from "@material-ui/core";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchOutlined from "@material-ui/icons/SearchOutlined";
import db from "../firebase";
import { useGlobalState } from "../StateProvider"

function Sidebar() {
    const [convs, setConvs] = useState([])
    const [{user}, dispatch] = useGlobalState()

    useEffect(() => {
        db.collection('convs').onSnapshot(snapshot => (
            setConvs(snapshot.docs.map(doc =>
                ({
                    id : doc.id,
                    data : doc.data(),
                })
                ))
        ))
    }, [])

    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <Avatar src={user?.photoURL}/>

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
                {convs.map(conv => (
                    <SidebarContact key={conv.id} id={conv.id} name={conv.data.name} />
                ))}
            </div>
        </div>
    )
}

export default Sidebar