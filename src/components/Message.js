import React from "react";
import "./Message.css";

function Message(props) {
  return (
    <div className="wrapper">
      <span>name: {props.name}</span>
      <span>text: {props.text}</span>
      <span>time: {props.time}</span>
    </div>
  );
}

export default Message;
