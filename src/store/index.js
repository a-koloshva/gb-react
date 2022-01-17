import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { chatsReducer } from "./chats/reducer";
import { messageReducer } from "./messages/reducer";
import { profileReducer } from "./profile/reduser";

const persistConfig = {
  key: "gbMessenger",
  storage,
};

const rootRediser = combineReducers({
  messages: messageReducer,
  chats: chatsReducer,
  profile: profileReducer,
});

const persistedReducer = persistReducer(persistConfig, rootRediser);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export const persistor = persistStore(store);
