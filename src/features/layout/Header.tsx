import React from "react";
import Paper from "~/components/Paper";
import ThemeChange from "../themeChange";

import { CogIcon } from "@heroicons/react/outline";

type Props = {
  openSetupModal?: () => void;
};

export const Header: React.FC<Props> = ({ openSetupModal }) => (
  <Paper noPadding>
    <div className="grid grid-cols-2 px-8 py-3 items-center">
      <object data="/tracklogo.svg" className="h-10 w-10" />
      <div className="flex justify-end">
        <ThemeChange />
        {openSetupModal && (
          <button className="h-5 w-5 ml-4" onClick={openSetupModal}>
            <CogIcon />
          </button>
        )}
      </div>
    </div>
  </Paper>
);

export default Header;
