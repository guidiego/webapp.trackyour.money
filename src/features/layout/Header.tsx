import React, { useCallback, useEffect, useState } from "react";
import Paper from "~/components/Paper";
import { MoonIcon, SunIcon, CogIcon } from "@heroicons/react/outline";

type Props = {
  openSetupModal: () => void;
};

export const Header: React.FC<Props> = ({ openSetupModal }) => {
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
      <div className="grid grid-cols-2 px-8 py-3 items-center">
        <object data="/tracklogo.svg" className="h-10 w-10" />
        <div className="flex justify-end">
          <button className="h-5 w-5 mr-4" onClick={toggleDarkMode}>
            {!darkMode ? <MoonIcon /> : <SunIcon />}
          </button>
          <button className="h-5 w-5" onClick={openSetupModal}>
            <CogIcon />
          </button>
        </div>
      </div>
    </Paper>
  );
};

export default Header;
