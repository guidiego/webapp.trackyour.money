import React from "react";
import client from "~/client";

import AccountItem, { AccountItemLoad } from "./AccountItem";
import NewAccountModal from "./NewAccountModal";

export const AccountFeature: React.FC = () => {
  const { data, isLoading } = client.apis.account.queryPaginate();

  return (
    <>
      <NewAccountModal />
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
              <AccountItem {...account} />
            </li>
          ))
        )}
      </ul>
    </>
  );
};

export default AccountFeature;
