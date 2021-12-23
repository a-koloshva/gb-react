import "./App.css";
import React, { useState, useEffect } from "react";
import Form from "./components/Form/Form";
import MessageList from "./components/MessageList/MessageList";
import AUTHORS from "./utils/constants.js";
import { ResponseBot } from "./utils/responseBot";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [messageList, setMessageList] = useState([]);

  const handleAddMessage = (newMessage) => {
    setMessageList((prevMessageList) => [...prevMessageList, newMessage]);
  };

  const handleSubmit = (text) => {
    const newMessage = { text, author: AUTHORS.HUMAN, id: uuidv4() };
    handleAddMessage(newMessage);
  };

  useEffect(() => {
    let timeout;
    if (messageList[messageList.length - 1]?.author === AUTHORS.HUMAN) {
      timeout = setTimeout(() => {
        handleAddMessage({
          text: ResponseBot(),
          author: AUTHORS.BOT,
          id: uuidv4(),
        });
      }, 1000);
    }

    return () => {
      clearTimeout(timeout);
    };
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
