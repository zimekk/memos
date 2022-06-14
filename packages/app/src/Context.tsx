import { createContext } from "react";

export const Context = createContext({
  setLaunch: (launch: boolean) => null,
});

export const ContextProvider = Context.Provider;
