import React, { useState, createContext, useContext, useEffect } from "react";
import { setCookie } from "nookies";

const ctxValues = {
  api: "",
  token: "",
  darkMode: false,
  coin: "EUR",
  lang: "en",
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

  useEffect(() => {
    if (config && !config.lang) {
      setCookie(null, "lang", navigator.language, { path: "/" });
      setSetup((prevSetup) => ({ ...prevSetup, lang: navigator.language }));
    }
  }, [config]);

  return <ctx.Provider value={{ setup, setSetup }}>{children}</ctx.Provider>;
};

export default SetupProvider;
