import standardStyle from "./chat.module.scss";
import Message from "./Message";
import { createMessageListener } from "../../firebase";
import { useState, useEffect } from "react";

export default function ChatContainer({ customStyle, currentChannel }) {
  const [messages, setMessages] = useState([]);
  const style = customStyle ? customStyle : standardStyle;

  const username = localStorage.getItem(`username`);

  useEffect(() => {
    createMessageListener(currentChannel, setMessages);
  }, [currentChannel]);

  return (
    <div className={style.chatContainer}>
      {messages.map((message) => (
        <Message
          my={message.user === username}
          message={message}
          key={`${message.text}${message.user}${message.time}`}
        />
      ))}
    </div>
  );
}
