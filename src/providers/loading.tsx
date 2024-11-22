import React, { createContext, useContext, useState } from "react";

const LoadingContext = createContext<{
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}>({
  active: false,
  setActive: () => {},
});

export const LoadingProvider = ({ children }: { children: React.ReactNode }) => {
  const [active, setActive] = useState(false);

  return (
    <LoadingContext.Provider value={{ active, setActive }}>
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoading = () => useContext(LoadingContext);
