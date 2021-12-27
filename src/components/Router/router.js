import React, { useState } from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Chats from "../Chats/Chats";
import { NoMatch } from "../NoMatch/nomatch";
import { Home } from "../Home/home";
import { Profile } from "../Profile/profile";
import { ChatList } from "../ChatList/ChatList";

const initialChats = [
  {
    id: "chat1",
    name: "Chat 1",
  },
  {
    id: "chat2",
    name: "Chat 2",
  },
  {
    id: "chat3",
    name: "Chat 3",
  },
  {
    id: "chat4",
    name: "Chat 4",
  },
];

const initialMessages = initialChats.reduce((acc, chat) => {
  acc[chat.id] = [];
  return acc;
}, {});

export const Router = () => {
  const [chats, setChats] = useState(initialChats);
  const [messages, setMessages] = useState(initialMessages);

  const handleAddMessage = (newMessage, chatId) => {
    setMessages((prevMessages) => ({
      ...prevMessages,
      [chatId]: [...prevMessages[chatId], newMessage],
    }));
  };

  return (
    <BrowserRouter>
      <Link to="/">HOME</Link>
      <Link to="/chats">CHATS</Link>
      <Link to="/profile">PROFILE</Link>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chats" element={<ChatList chats={chats} />}>
          <Route
            path=":chatId"
            element={
              <Chats messages={messages} onAddMessage={handleAddMessage} />
            }
          />
        </Route>
        <Route path="/profile" element={<Profile />} />

        <Route path="*" element={<NoMatch />} />
      </Routes>
    </BrowserRouter>
  );
};
