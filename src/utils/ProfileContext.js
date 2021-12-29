import React from "react";

export const ProfileContext = React.createContext({
  name: "default name",
  setName: () => {},
});
