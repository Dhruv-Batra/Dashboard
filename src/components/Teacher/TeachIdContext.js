import React, { useState, createContext } from "react";

const TeachIdContext = createContext();

function TeachIdProvider({ children }) {
  const [id, SetId] = useState();

  return (
    <TeachIdContext.Provider value={{ id }}>{children}</TeachIdContext.Provider>
  );
}

export default TeachIdProvider;
export { TeachIdContext };
