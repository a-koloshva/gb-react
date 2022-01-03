import { ADD_CHAT, DELETE_CHAT } from "../chats/actions";
import { ADD_MESSAGE } from "./actions";

const initialState = {};

export const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return {
        ...state,
        [action.payload.chatId]: [
          ...state[action.payload.chatId],
          action.payload.message,
        ],
      };
    case DELETE_CHAT: {
      const newMessages = { ...state };
      delete newMessages[action.payload];
      return newMessages;
    }
    case ADD_CHAT:
      return {
        ...state,
        [action.payload.id]: [],
      };
    default:
      return state;
  }
};
