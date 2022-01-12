import "./Chats.css";
import React, { useEffect, useMemo, useState } from "react";
import Form from "../Form/Form";
import MessageList from "../MessageList/MessageList";
import AUTHORS from "../../utils/constants.js";
import { ResponseBot } from "../../utils/responseBot";
import { v4 as uuidv4 } from "uuid";
import { Navigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../../store/messages/actions";
import {
  selectMessages,
  selectMessagesByChatId,
} from "../../store/messages/selectors";

function Chats() {
  const { chatId } = useParams();
  const messages = useSelector(selectMessages);

  const getMessagesByChatId = useMemo(
    () => selectMessagesByChatId(chatId),
    [chatId]
  );

  const messagesForCurrentChat = useSelector(getMessagesByChatId);
  const dispatch = useDispatch();

  const onAddMessage = (newMessage, chatId) => {
    dispatch(addMessage(newMessage, chatId));
  };

  const handleSubmit = (text) => {
    const newMessage = { text, author: AUTHORS.HUMAN, id: uuidv4() };
    onAddMessage(newMessage, chatId);
  };

  useEffect(() => {
    let timeout;
    if (
      messages[chatId]?.[messages[chatId].length - 1]?.author === AUTHORS.HUMAN
    ) {
      timeout = setTimeout(() => {
        onAddMessage(
          {
            text: ResponseBot(),
            author: AUTHORS.BOT,
            id: uuidv4(),
          },
          chatId
        );
      }, 1000);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [messages]);

  if (!messages[chatId]) {
    return <Navigate to="/chats" replace />;
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="wrapper">
          <div className="formMessages">
            <div className="messageList">
              <MessageList messages={messagesForCurrentChat} />
            </div>
            <Form onSubmit={handleSubmit} />
          </div>
        </div>
      </header>
    </div>
  );
}

export default Chats;
