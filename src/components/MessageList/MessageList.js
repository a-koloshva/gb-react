import "./MessageList.css";
import React from "react";
import { v4 as uuidv4 } from "uuid";

const MessageList = ({ messages }) => (
  <div className="Message-list">
    {messages.map(({ text, author }) => (
      <div key={uuidv4()}>
        {author}: {text}
      </div>
    ))}
  </div>
);

export default MessageList;
