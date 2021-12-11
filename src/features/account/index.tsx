import React from "react";

import AccountItem, { Props as AccountItemProps } from "./AccountItem";
import NewAccountModal from "./NewAccountModal";

const mock = [
  {
    id: 1,
    kind: "account",
    name: "Commerzbank",
    value: 2000,
  },
  {
    id: 2,
    kind: "wallet",
    name: "My Wallet",
    value: 200,
  },
] as (AccountItemProps & { id: number })[];

export const AccountFeature: React.FC = () => {
  return (
    <>
      <NewAccountModal />
      <ul className="p-6">
        {mock.map(({ id, ...account }) => (
          <li className="mb-6" key={id}>
            <AccountItem {...account} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default AccountFeature;
