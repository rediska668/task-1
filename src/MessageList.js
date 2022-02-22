
import React, { useState } from 'react';

const MessageList = (props) => {
    const [message, setMessage] = useState([
        {
            text: "",
            autor: ""
        },
        {
            text: "",
            autor: ""
        },
        {
            text: "",
            autor: ""
        }
    ]);

    return message.map((message) =>
        <div>{message.text}<br></br>
            {message.autor}</div>
    );
}

export default MessageList;