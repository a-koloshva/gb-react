import "./App.css";
import React, { useState } from "react";
import { Router } from "./components/Router/router";
import { ProfileContext } from "./utils/ProfileContext";

function App() {
  const [name, setName] = useState("default");
  return (
    <ProfileContext.Provider value={{ name, setName }}>
      <Router />
    </ProfileContext.Provider>
  );
}

export default App;
