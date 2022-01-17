import "./App.css";
import React, { useState } from "react";
import { Provider } from "react-redux";
import { Router } from "./components/Router/router";
import { ProfileContext } from "./utils/ProfileContext";
import { persistor, store } from "./store";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  const [name, setName] = useState("default");
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ProfileContext.Provider value={{ name, setName }}>
          <Router />
        </ProfileContext.Provider>
      </PersistGate>
    </Provider>
  );
}

export default App;
