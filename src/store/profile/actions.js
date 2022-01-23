import { auth, userNameRef, userShowNameRef } from "../../service/firebase";
import { onAuthStateChanged } from "@firebase/auth";
import { onValue, set } from "firebase/database";

export const SHOW_NAME = "PROFILE::SHOW_NAME";
export const SET_NAME = "PROFILE::SET_NAME";
export const SIGN_IN = "PROFILE::SIGN_IN";
export const SIGN_OUT = "PROFILE::SIGN_OUT";

export const toggleName = (value) => ({
  type: SHOW_NAME,
  payload: value,
});

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

// FIREBASE

export const initAuthTracking = () => (dispatch) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      dispatch(signIn());
    } else {
      dispatch(signOut());
    }
  });
};

export const initUserData = () => (dispatch) => {
  onValue(userNameRef, (snapshot) => {
    const userName = snapshot?.val();
    dispatch(setName(userName));
  });
  onValue(userShowNameRef, (snapshot) => {
    const userShowName = snapshot?.val();
    dispatch(toggleName(userShowName));
  });
};

export const setNameInDb = (newName) => () => {
  set(userNameRef, newName);
};

export const setShowNameInDb = (newValue) => () => {
  set(userShowNameRef, newValue);
};
