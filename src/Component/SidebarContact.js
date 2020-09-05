import React from "react";
import { Avatar } from "@material-ui/core";

function SidebarContact({ addNewContact}) {

    const createContact = () => {
        const contactName = prompt("Please add contact")
        if (contactName){

        }
    }

    return !addNewContact ?(
        <div className="sidebar-contact">
            <Avatar/>
            <div className="sidebar-contact-info">
                <h2>Sana</h2>
                <p>Hello !</p>
            </div>
        </div>
    ) : (
        <div onClick={createContact} className="sidebar-contact">
            <h2>Add new chat</h2>
        </div>
    );
}

export default SidebarContact