import AUTHORS from "../../utils/constants";
import { ResponseBot } from "../../utils/responseBot";
import { v4 as uuidv4 } from "uuid";

export const ADD_MESSAGE = "MESSAGES::ADD_MESSAGE";
export const DELETE_MESSAGE = "MESSAGES::DELETE_MESSAGE";

export const addMessage = (newMessage, chatId) => ({
  type: ADD_MESSAGE,
  payload: {
    message: newMessage,
    chatId,
  },
});

export const deleteMessage = (messageId, chatId) => ({
  type: DELETE_MESSAGE,
  payload: {
    messageId,
    chatId,
  },
});

let timeout;

export const addMessageWithReply = (newMessage, chatId) => (dispatch) => {
  dispatch(addMessage(newMessage, chatId));

  clearTimeout(timeout);

  if (newMessage.author !== AUTHORS.BOT) {
    timeout = setTimeout(() => {
      dispatch(
        addMessage(
          {
            text: ResponseBot(),
            author: AUTHORS.BOT,
            id: uuidv4(),
          },
          chatId
        )
      );
    }, 1000);
  }
};
