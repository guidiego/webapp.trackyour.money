import React, { useCallback, useEffect } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/outline";
import { setCookie } from "nookies";
import { useSetup } from "../setup/context";

export const ThemeChange: React.FC = () => {
  const [setup, setSetup] = useSetup();
  const toggleDarkMode = useCallback(() => {
    const newStatus = !document.body.classList.contains("dark");
    setSetup((prevSetup) => ({ ...prevSetup, darkMode: newStatus }));
    setCookie(null, "darkMode", newStatus.toString(), { path: "/" });
    document.body.classList.toggle("dark");
  }, []);

  useEffect(() => {
    if (setup.darkMode) {
      document.body.classList.add("dark");
    }
  }, []);

  return (
    <button className="h-5 w-5" onClick={toggleDarkMode}>
      {!setup.darkMode ? <MoonIcon /> : <SunIcon />}
    </button>
  );
};

export default ThemeChange;
