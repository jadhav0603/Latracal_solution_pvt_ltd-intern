import { createContext, useState } from "react";

export const GlobalDataContext = createContext();

const GlobalDataProvider = ({ children }) => {
  const [userData, setUserData] = useState([]);

  return (
    <GlobalDataContext.Provider value={{ userData, setUserData }}>
      {children}
    </GlobalDataContext.Provider>
  );
};

export default GlobalDataProvider;
