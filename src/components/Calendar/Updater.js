import React, { useState, createContext } from "react";

const UpdaterContext = createContext();

function Updater({ children }) {
  const [update, setUpdate] = useState("");

  return (
    <UpdaterContext.Provider value={{ update, setUpdate }}>{children}</UpdaterContext.Provider>
  );
}

export default Updater;
export { UpdaterContext };
