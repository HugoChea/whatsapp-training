import React, {useState} from 'react'
import { Avatar, IconButton } from "@material-ui/core";
import {AttachFile, MoreVert, SearchOutlined, InsertEmoticon, Mic} from "@material-ui/icons"

function Chat() {

    const [input, setInput] = useState("")
    const sendMessage = (e) => {
        e.preventDefault()
        console.log(input)
    }

    return (
        <div className="chat">
            <div className="chat-header">
                <Avatar />
                <div className="chat-header-info">
                    <h3>Sana</h3>
                    <p>Vu à</p>
                </div>
                <div className="chat-header-right">
                    <IconButton>
                        <SearchOutlined/>
                    </IconButton>
                    <IconButton>
                        <AttachFile/>
                    </IconButton>
                    <IconButton>
                        <MoreVert/>
                    </IconButton>
                </div>
            </div>
            <div className="chat-body">
                <p className={`chat-message ${true && "chat-receiver"}`}>
                    <span className="chat-name">Sana</span>
                    Coucou
                    <span className="chat-time">10h00</span>
                </p>
            </div>
            <div className="chat-footer">
                <InsertEmoticon />
                <form>
                    <input value={input} onChange={e => setInput(e.target.value)} type="text" placeholder="Type a message"/>
                    <button onClick={sendMessage} type="submit">Send</button>
                </form>
                <Mic />
            </div>
        </div>
    )
}

export default Chat
