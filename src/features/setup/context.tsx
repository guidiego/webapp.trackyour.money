import React, { useState, createContext, useContext } from "react";

const ctxValues = {
  api: "",
  token: "",
  darkMode: false,
  coin: "euro",
};

const ctx = createContext({
  setup: ctxValues,
  setSetup: null,
});

export const useSetup = () => {
  const { setup, setSetup } = useContext(ctx);
  return [setup, setSetup];
};

export const SetupProvider: React.FC<{ config: Setup }> = ({
  config,
  children,
}) => {
  const [setup, setSetup] = useState({
    ...ctxValues,
    ...config,
  });

  return <ctx.Provider value={{ setup, setSetup }}>{children}</ctx.Provider>;
};

export default SetupProvider;
