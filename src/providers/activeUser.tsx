import React, { createContext, useContext, useState } from "react";

interface ActiveUserContextType {
  props: { [key: string]: any } | number | null;
  setProps: React.Dispatch<React.SetStateAction<{ [key: string]: any } | number | null>>;
}

const ActiveUserContext = createContext<ActiveUserContextType | undefined>(undefined);

export const useActiveUser = () => {
  const context = useContext(ActiveUserContext);
  if (!context) {
    throw new Error("useActiveUser должен использоваться внутри ActiveUserProvider");
  }
  return context;
};

export const ActiveUserProvider = ({ children }: { children: React.ReactNode }) => {
  const [props, setProps] = useState<{ [key: string]: any } | number | null>(null);

  return (
    <ActiveUserContext.Provider value={{ props, setProps }}>
      {children}
    </ActiveUserContext.Provider>
  );
};
