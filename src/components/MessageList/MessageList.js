import "./MessageList.css";
import React from "react";
import { Message } from "./Message/Message";

const MessageList = ({ messages }) => (
  <div>
    {messages.map(({ text, author, id }) => (
      <Message key={id} author={author} text={text} />
    ))}
  </div>
);

export default MessageList;
