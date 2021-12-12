import React, { useMemo } from "react";
import Paper from "~/components/Paper";
import Tabs from "~/components/Tabs";

import { useRouter } from "next/dist/client/router";
import {
  LibraryIcon,
  SwitchVerticalIcon,
  HomeIcon,
  ClipboardListIcon,
} from "@heroicons/react/outline";

export const BottomNavigator: React.FC = () => {
  const router = useRouter();
  const pageId = useMemo(() => {
    return router.pathname.substr(1).split("/")[0];
  }, [router.pathname]);

  const BottomNavOptions = useMemo(
    () => [
      {
        id: "entries",
        text: <SwitchVerticalIcon className="h-5 w-5" />,
        onClick: () => router.push("/entries"),
      },
      {
        id: "budgets",
        text: <ClipboardListIcon className="h-5 w-5" />,
        onClick: () => router.push("/budgets"),
      },
      {
        id: "accounts",
        text: <LibraryIcon className="h-5 w-5" />,
        onClick: () => router.push("/accounts"),
      },
    ],
    [router.push]
  );

  return (
    <Paper noPadding position="fixed" className="bottom-0 w-full">
      <Tabs activeId={pageId} inverted options={BottomNavOptions} />
    </Paper>
  );
};

export default BottomNavigator;
