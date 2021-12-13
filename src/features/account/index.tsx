import React, { useState } from "react";
import { FormattedMessage } from "react-intl";
import client from "~/client";
import { useSetup } from "../setup/context";

import AccountItem, { AccountItemLoad } from "./AccountItem";
import AddAccountModal from "./AddAccountModal";

export const AccountFeature: React.FC = () => {
  const [setup] = useSetup();
  const [open, setOpen] = useState(false);
  const { data, isLoading } = client.apis.account.queryPaginate();

  return (
    <>
      <AddAccountModal open={open} onClose={() => setOpen(false)} />
      <ul className="p-6">
        {isLoading ? (
          <>
            <li className="mb-6">
              <AccountItemLoad />
            </li>
            <li className="mb-6">
              <AccountItemLoad />
            </li>
          </>
        ) : (
          data.results.map((account) => (
            <li className="mb-6" key={account.id}>
              <AccountItem {...account} currency={setup.coin} />
            </li>
          ))
        )}
        {!isLoading && (
          <li>
            <button
              onClick={() => setOpen(true)}
              className="opacity-50 hover:opacity-100 cursor-pointer w-full border border-dashed border-gray-500 text-gray-500 dark:border-white dark:text-white py-8 rounded-xl"
            >
              <FormattedMessage id="Feature.Account.Add" />
            </button>
          </li>
        )}
      </ul>
    </>
  );
};

export default AccountFeature;
