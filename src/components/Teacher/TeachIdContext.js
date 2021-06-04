import React, { useState, createContext } from "react";

const TeachIdContext = createContext();

function TeachIdProvider({ children }) {
  const [id, setId] = useState("");

  return (
    <TeachIdContext.Provider value={{ id, setId }}>
      {children}
    </TeachIdContext.Provider>
  );
}

export default TeachIdProvider;
export { TeachIdContext };
