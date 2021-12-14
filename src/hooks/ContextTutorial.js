import React, { useState, createContext } from "react";
import Login from "../components/Login";
import User from "../components/User";

export const AppContext = createContext(null);

const ContextTutorial = () => {
  const [username, setUsername] = useState("");

  return (
    <AppContext.Provider value={{ username, setUsername }}>
      <div className="container">
        <Login />
        <User />
      </div>
    </AppContext.Provider>
  );
};

export default ContextTutorial;
