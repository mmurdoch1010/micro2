import React, { useState, useEffect } from "react";
import { micro1Subject, micro2Subject } from "@matt/messages";

import "./micro2.css";

export default function Root(props) {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const micro2Sub = micro2Subject.subscribe({
      next: (newMessage) => setMessages([...messages, newMessage])
    });
    return () => micro2Sub.unsubscribe();
  })

  const onClick = (e) => {
    micro1Subject.next('Hello from app2 ' + new Date(Date.now()).toString());
  }

  return (
    <div>
        <section>{props.name} is mounted!</section>
        <button onClick={onClick}>Send message to app1</button>
        <p>Messages from app1:</p>
        {messages.map((message) => {
          return (<p>- {message}</p>)
        })}
    </div>
  );
}
