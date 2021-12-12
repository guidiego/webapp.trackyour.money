import React from "react";
import Paper from "~/components/Paper";

import { CashIcon, LibraryIcon } from "@heroicons/react/outline";

export type Props = {
  kind: "account" | "wallet";
  name: string;
  value: number;
};

export const AccountItem: React.FC<Props> = ({ kind, name, value }) => (
  <Paper rounded noPadding>
    <div className="flex">
      <div className="h-26 w-16 bg-indigo-600 flex items-center justify-center">
        <div className="h-5 w-5 text-white">
          {kind === "wallet" ? <CashIcon /> : <LibraryIcon />}
        </div>
      </div>
      <div className="flex-1 p-6">
        <h2 className="text-sm text-gray-500">{name}</h2>
        <h3 className="text-xl font-medium text-indigo-600">
          R$ {value.toFixed(2)}
        </h3>
        <p className="text-xs text-gray-500 uppercase">{kind}</p>
      </div>
    </div>
  </Paper>
);

export default AccountItem;
