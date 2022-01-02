import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { Link, Outlet } from "react-router-dom";

export const ChatList = ({ chats }) => {
  return (
    <>
      <List>
        {chats.map((chat) => (
          <ListItem disablePadding key={chat.id}>
            <Link to={`/chats/${chat.id}`}>
              <ListItemButton>
                <ListItemText primary={chat.name} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
      <Outlet />
    </>
  );
};
