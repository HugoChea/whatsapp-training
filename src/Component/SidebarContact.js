import React, { useEffect, useState } from "react";
import { Avatar } from "@material-ui/core";
import db from "../firebase";
import { Link } from "react-router-dom";

function SidebarContact({ id, name, addNewContact}) {

    const [message,setMessage] = useState("")

    const createContact = () => {
        const convName = prompt("Some cool name for chat name")
        if (convName){
            db.collection('convs').add({
                name: convName,
            });
        }
    }

    useEffect(() => {
        if (id) {
            db.collection('convs')
            .doc(id)
            .collection('messages')
            .orderBy('timestamp', 'desc')
            .onSnapshot(snapshot =>
                setMessage(snapshot.docs.map( (doc) =>
                doc.data()))    
            )
        }
        
    }, [])

    return !addNewContact ?(
        <Link to={`/app/${id}`}>
            <div className="sidebar-contact">
                <Avatar/>
                <div className="sidebar-contact-info">
                    <h2>{name}</h2>
                    <p>{message[0]?.message}</p>
                </div>
            </div>
        </Link>
    ) : (
        <div onClick={createContact} className="sidebar-contact">
            <h2>Add new chat</h2>
        </div>
    );
}

export default SidebarContact