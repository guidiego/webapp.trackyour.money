import React from "react";
import Paper from "~/components/Paper";

import { CashIcon, LibraryIcon } from "@heroicons/react/outline";
import { FormattedMessage, FormattedNumber } from "react-intl";

interface Props extends Account {
  currency: Setup["coin"];
}

export const AccountItem: React.FC<Props> = ({
  kind,
  name,
  value,
  currency,
}) => (
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
          <FormattedNumber value={value} format={currency} />
        </h3>
        <p className="text-xs text-gray-500 uppercase">
          <FormattedMessage id={`Feature.Account.Label.${kind}`} />
        </p>
      </div>
    </div>
  </Paper>
);

export const AccountItemLoad: React.FC = () => (
  <Paper rounded noPadding>
    <div className="flex">
      <div className="h-26 w-16 bg-gray-300 flex items-center justify-center" />
      <div className="flex-1 p-6">
        <div className="h-3 w-9/12 bg-gray-300" />
        <div className="h-6 my-2 w-11/12 bg-indigo-600" />
        <div className="h-2 w-2/4 bg-gray-300 uppercase" />
      </div>
    </div>
  </Paper>
);

export default AccountItem;
