import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { addChat, deleteChat } from "../../store/chats/actions";
import Form from "../Form/Form";
import { v4 as uuidv4 } from "uuid";
import { selectChats } from "../../store/chats/selectors";
import { ChatItem } from "./ChatItem";

export const ChatList = () => {
  const chats = useSelector(selectChats);
  const dispatch = useDispatch();

  const onAddChat = (newChatName) => {
    const newId = uuidv4();
    const newChat = {
      id: newId,
      name: newChatName,
    };
    dispatch(addChat(newChat));
  };

  const handleDeleteChat = (id) => {
    dispatch(deleteChat(id));
  };

  return (
    <>
      <ul>
        {chats.map((chat) => (
          <ChatItem key={chat.id} chat={chat} onDelete={handleDeleteChat} />
        ))}
        <Form onSubmit={onAddChat} />
      </ul>
      <Outlet />
    </>
  );
};
