import React from "react";
import client from "~/client";
import AccountFeature from "~/features/account";

import LayoutFeature from "~/features/layout";

export const Accounts: React.FC = () => (
  <LayoutFeature>
    <AccountFeature />
  </LayoutFeature>
);

export const getServerSideProps = async (ctx) => {
  await client.apis.account.prefetchPaginate();
  return { props: client.getDehydratedState() };
};

export default Accounts;
