import React, { useEffect } from "react";
import { onAuthStateChanged } from "@firebase/auth";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Chats from "../Chats/Chats";
import { NoMatch } from "../NoMatch/nomatch";
import { Home } from "../Home/home";
import Profile from "../Profile/profile";
import { ChatList } from "../chatList/chatList";
import { Weather } from "../Weather";
import { PrivateOutlet } from "../PrivateOutlet";
import { PublicOutlet } from "../PublicOutlet";
import { auth } from "../../service/firebase";
import { useDispatch } from "react-redux";
import { initAuthTracking, signIn, signOut } from "../../store/profile/actions";

export const Router = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initAuthTracking());
  }, []);

  return (
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
        <Route path="/" element={<PublicOutlet />}>
          <Route path="" element={<Home />} />
          <Route path="signup" element={<Home isSignUp />} />
        </Route>
        <Route path="chats" element={<PrivateOutlet />}>
          <Route path="" element={<ChatList />}>
            <Route path=":chatId" element={<Chats />} />
          </Route>
        </Route>
        <Route path="/profile" element={<PrivateOutlet />}>
          <Route path="" element={<Profile />} />
        </Route>

        <Route path="/weather" element={<Weather />} />

        <Route path="*" element={<NoMatch />} />
      </Routes>
    </BrowserRouter>
  );
};
