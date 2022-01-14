import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { chatsReducer } from "./chats/reducer";
import { messageReducer } from "./messages/reducer";
import { profileReducer } from "./profile/reduser";
import { weatherReducer } from "./weather/reducer";

const persistConfig = {
  key: "gbMessenger",
  storage,
};

const rootRediser = combineReducers({
  messages: messageReducer,
  chats: chatsReducer,
  profile: profileReducer,
  weather: weatherReducer,
});

const persistedReducer = persistReducer(persistConfig, rootRediser);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export const persistor = persistStore(store);
