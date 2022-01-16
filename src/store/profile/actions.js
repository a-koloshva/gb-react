import { auth } from "../../service/firebase";
import { onAuthStateChanged } from "@firebase/auth";

export const SHOW_NAME = "PROFILE::SHOW_NAME";
export const SET_NAME = "PROFILE::SET_NAME";
export const SIGN_IN = "PROFILE::SIGN_IN";
export const SIGN_OUT = "PROFILE::SIGN_OUT";

export const toggleName = {
  type: SHOW_NAME,
};

export const setName = (newName) => ({
  type: SET_NAME,
  payload: newName,
});

export const signOut = () => ({
  type: SIGN_OUT,
});

export const signIn = () => ({
  type: SIGN_IN,
});

export const initAuthTracking = () => (dispatch) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      dispatch(signIn());
    } else {
      dispatch(signOut());
    }
  });
};
