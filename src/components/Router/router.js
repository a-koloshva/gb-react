import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Chats from "../Chats/Chats";
import { NoMatch } from "../NoMatch/nomatch";
import { Home } from "../Home/home";
import Profile from "../Profile/profile";
import { ChatList } from "../chatList/chatList";
import { Weather } from "../Weather";

export const Router = () => (
  <BrowserRouter>
    <ul>
      <li>
        <NavLink
          style={(props) => ({ color: props.isActive ? "green" : "blue" })}
          to="/"
        >
          HOME
        </NavLink>
      </li>
      <li>
        <NavLink
          style={(props) => ({ color: props.isActive ? "green" : "blue" })}
          to="/chats"
        >
          CHATS
        </NavLink>
      </li>
      <li>
        <NavLink
          style={(props) => ({ color: props.isActive ? "green" : "blue" })}
          to="/profile"
        >
          PROFILE
        </NavLink>
      </li>
      <li>
        <NavLink
          style={(props) => ({ color: props.isActive ? "green" : "blue" })}
          to="/weather"
        >
          WEATHER
        </NavLink>
      </li>
    </ul>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="chats" element={<ChatList />}>
        <Route path=":chatId" element={<Chats />} />
      </Route>
      <Route path="/profile" element={<Profile />} />
      <Route path="/weather" element={<Weather />} />

      <Route path="*" element={<NoMatch />} />
    </Routes>
  </BrowserRouter>
);
