import React, { useCallback, useEffect, useState } from "react";
import Paper from "~/components/Paper";
import { MoonIcon, SunIcon } from "@heroicons/react/outline";

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
    <Paper>
      Financial
      <button className="h-5 w-5" onClick={toggleDarkMode}>
        {!darkMode ? <MoonIcon /> : <SunIcon />}
      </button>
    </Paper>
  );
};

export default Header;
