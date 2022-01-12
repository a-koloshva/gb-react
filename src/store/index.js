import { createStore, combineReducers } from "redux";
import { chatsReducer } from "./chats/reducer";
import { messageReducer } from "./messages/reducer";
import { profileReducer } from "./profile/reduser";

const rootRediser = combineReducers({
  messages: messageReducer,
  chats: chatsReducer,
  profile: profileReducer,
});

export const store = createStore(
  rootRediser,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
