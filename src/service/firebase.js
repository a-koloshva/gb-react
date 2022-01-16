import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  getAuth,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCYUY3J3zd-8XuSA3l7DYN5DxNGMaMIQ6k",
  authDomain: "gb-react-bd355.firebaseapp.com",
  projectId: "gb-react-bd355",
  storageBucket: "gb-react-bd355.appspot.com",
  messagingSenderId: "524321737240",
  appId: "1:524321737240:web:9989081bf30247ef64516d",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const signUp = async (email, pass) => {
  await createUserWithEmailAndPassword(auth, email, pass);
};
export const logIn = async (email, pass) => {
  await signInWithEmailAndPassword(auth, email, pass);
};
export const logOut = async () => {
  await signOut(auth);
};
