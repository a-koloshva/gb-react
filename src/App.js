import "./App.css";
import React, { useState } from "react";
import Form from "./components/Form/Form.js";
import MessageList from "./components/MessageList/MessageList.js";
import AUTHORS from "./utils/constants.js";
import { useEffect } from "react";

function App() {
  const [messageList, setMessageList] = useState([]);

  const handleAddMessage = (newMessage) => {
    setMessageList((prevMessageList) => [...prevMessageList, newMessage]);
  };

  const handleSubmit = (text) => {
    const newMessage = { text, author: AUTHORS.HUMAN };
    handleAddMessage(newMessage);
  };

  const responseBot = () => {
    const arrayMessages = ["Что?", "Кто это?"];
    const randomNumber = Math.floor(Math.random() * arrayMessages.length);
    return arrayMessages[randomNumber];
  };

  useEffect(() => {
    if (messageList[messageList.length - 1]?.author === AUTHORS.HUMAN) {
      handleAddMessage({ text: responseBot(), author: AUTHORS.BOT });
    }
  }, [messageList]);

  return (
    <div className="App">
      <header className="App-header">
        <Form onSubmit={handleSubmit} />
        <MessageList messages={messageList} />
      </header>
    </div>
  );
}

export default App;
