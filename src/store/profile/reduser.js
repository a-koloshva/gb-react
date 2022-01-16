import { SET_NAME, SHOW_NAME, SIGN_IN, SIGN_OUT } from "./actions";

const initialState = {
  name: "default name",
  showName: true,
  isAuthed: false,
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_NAME:
      return {
        ...state,
        showName: !state.showName,
      };
    case SET_NAME:
      return {
        ...state,
        name: action.payload,
      };
    case SIGN_OUT: {
      return { ...state, isAuthed: false };
    }
    case SIGN_IN: {
      return { ...state, isAuthed: true };
    }
    default:
      return state;
  }
};
