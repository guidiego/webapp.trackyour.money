import React from "react";
import AccountFeature from "~/features/account";

import LayoutFeature from "~/features/layout";

export const Accounts: React.FC = () => (
  <LayoutFeature>
    <AccountFeature />
  </LayoutFeature>
);

export default Accounts;
