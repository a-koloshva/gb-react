import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { chatsReducer } from "./chats/reducer";
import { messageReducer } from "./messages/reducer";
import { profileReducer } from "./profile/reduser";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootRediser = combineReducers({
  messages: messageReducer,
  chats: chatsReducer,
  profile: profileReducer,
});

export const store = createStore(
  rootRediser,
  composeEnhancers(applyMiddleware(thunk))
);
