import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";

const chats = [
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

export const ChatList = () => {
  return (
    <List>
      {chats.map((chat) => (
        <ListItem disablePadding key={chat.id}>
          <ListItemButton>
            <ListItemText primary={chat.name} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};
