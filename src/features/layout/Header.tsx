import React, { useCallback, useEffect, useState } from "react";
import Paper from "~/components/Paper";
import { MoonIcon, SunIcon, CogIcon } from "@heroicons/react/outline";

export const Header: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = useCallback(() => {
    setDarkMode(!document.body.classList.contains("dark"));
    document.body.classList.toggle("dark");
  }, []);

  useEffect(() => {
    if (process.browser) {
      setDarkMode(document.body.classList.contains("dark"));
    }
  }, []);

  return (
    <Paper noPadding>
      <div className="grid grid-cols-2 px-4 py-2 items-center">
        <object
          data={darkMode ? "/tracklogo-white.svg" : "/tracklogo.svg"}
          className="h-10 w-10"
        />
        <div className="flex justify-end">
          <button className="h-5 w-5 mr-4" onClick={toggleDarkMode}>
            {!darkMode ? <MoonIcon /> : <SunIcon />}
          </button>
          <button className="h-5 w-5" onClick={toggleDarkMode}>
            <CogIcon />
          </button>
        </div>
      </div>
    </Paper>
  );
};

export default Header;
