import React, { createContext, useContext } from "react";

type AppContextType = {
  changeLanguage: (language: string) => void;
};

const AppContext = createContext<AppContextType | null>(null);

type AppProviderProps = {
  children: React.ReactNode;
};

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const changeLanguage = (language: string) => {
    console.log(`Estou mudando a linguagem para ${language}`);
  };

  const sharedstate = {
    changeLanguage,
  };

  return <AppContext.Provider value={sharedstate}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useAppContext must be used within a AppProvider");
  }

  return context;
};

export default AppProvider;
