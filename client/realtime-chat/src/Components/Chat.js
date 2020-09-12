import React, { useState, useEffect } from 'react'
import queryString from 'query-string'
import io from 'socket.io-client'

import '../Styles/Chat.css'

let socket;

const Chat = ({ location }) => {
    const [name, setName] = useState('')
    const [room, setRoom] = useState('')
    const ENDPOINT = 'localhost:5000'

    useEffect(() => {
        // location simply gives us the URL
        const {name, room} = queryString.parse(location.search)

        socket = io(ENDPOINT)

        setName(name)
        setRoom(room)


        socket.emit('join', {name, room}, () =>{
            
        })
        // Will only run hook IF these change
    }, [ENDPOINT, location.search])

    return (
        <div>
            Chat
        </div>
    )
}

export default Chat