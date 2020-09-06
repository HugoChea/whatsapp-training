import React, {useState, useEffect} from 'react'
import { Avatar, IconButton } from "@material-ui/core";
import {AttachFile, MoreVert, SearchOutlined, InsertEmoticon, Mic} from "@material-ui/icons"
import { useParams } from "react-router-dom"
import db from '../firebase';
import firebase from "firebase"
import { useGlobalState } from "../StateProvider"

function Chat() {

    const [input, setInput] = useState("")
    const { convId } = useParams()
    const [convName, setConvName] = useState("")
    const [messages, setMessages] = useState( [])
    const [{user}, dispatch] = useGlobalState()

    const sendMessage = (e) => {
        e.preventDefault()
        db.collection('convs').doc(convId).collection('messages').add({
            message : input,
            author : user.displayName,
            timestamp : firebase.firestore.FieldValue.serverTimestamp(),
        })
        setInput("")
    }
    
    useEffect(() => {
        if (convId){
            db.collection('convs').doc(convId).onSnapshot(snapshot => (
                setConvName(snapshot.data().name)
            ))
            db.collection('convs').doc(convId).collection("messages").orderBy("timestamp", "asc").onSnapshot(snapshot => (
                setMessages(snapshot.docs.map(doc => doc.data()))
            ))
        }
        return () => {
            
        }
    }, [convId])

    return (
        <div className="chat">
            <div className="chat-header">
                <Avatar />
                <div className="chat-header-info">
                    <h3>{convName}</h3>
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
                {messages.map( (message) => (

                
                <p className={`chat-message ${message.author === user.displayName && "chat-receiver"}`}>
                    <span className="chat-name">{message.author}</span>
                    {message.message}
                    <span className="chat-time">{new Date(message.timestamp?.toDate()).toUTCString()}</span>
                </p>
                ))}
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
