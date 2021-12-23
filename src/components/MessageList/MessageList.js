import "./MessageList.css";
import React from "react";

const MessageList = ({ messages }) => (
  <div>
    {messages.map(({ text, author, id }) => (
      <div key={id}>
        {author}: {text}
      </div>
    ))}
  </div>
);

export default MessageList;
