import "./App.css";
import React, { useState } from "react";
import { Provider } from "react-redux";
import { Router } from "./components/Router/router";
import { ProfileContext } from "./utils/ProfileContext";
import { store } from "./store";

function App() {
  const [name, setName] = useState("default");
  return (
    <Provider store={store}>
      <ProfileContext.Provider value={{ name, setName }}>
        <Router />
      </ProfileContext.Provider>
    </Provider>
  );
}

export default App;
