// import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
// import { addChat, deleteChat } from "../../store/chats/actions";
import Form from "../Form/Form";
import { v4 as uuidv4 } from "uuid";
// import { selectChats } from "../../store/chats/selectors";
import { ChatItem } from "./ChatItem";
import { useEffect, useState } from "react";
import {
  chatsRef,
  getChatRefById,
  getMsgsRefById,
} from "../../service/firebase";
import { onValue, set } from "firebase/database";

export const ChatList = () => {
  // const chats = useSelector(selectChats);
  // const dispatch = useDispatch();

  const [fbChats, setFbChats] = useState([]);

  useEffect(() => {
    onValue(chatsRef, (snapshot) => {
      const newChats = [];

      snapshot?.forEach((chat) => {
        newChats.push(chat.val());
      });

      setFbChats(newChats);
    });
  }, []);

  const onAddChat = (newChatName) => {
    const newId = uuidv4();
    const newChat = {
      id: newId,
      name: newChatName,
    };
    // dispatch(addChat(newChat));
    set(getChatRefById(newId), newChat);
    set(getMsgsRefById(newId), { empty: true });
  };

  const handleDeleteChat = (id) => {
    set(getChatRefById(id), null);
    // dispatch(deleteChat(id));
  };

  return (
    <>
      <ul>
        {fbChats.map((chat) => (
          <ChatItem key={chat.id} chat={chat} onDelete={handleDeleteChat} />
        ))}
        <Form onSubmit={onAddChat} />
      </ul>
      <Outlet />
    </>
  );
};
