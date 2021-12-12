import React from "react";
import client from "~/client";
import AccountFeature from "~/features/account";

import LayoutFeature from "~/features/layout";
import prepareServerSideProps from "~/server/prepareServerSideProps";

export const Accounts: React.FC = () => (
  <LayoutFeature>
    <AccountFeature />
  </LayoutFeature>
);

export const getServerSideProps = prepareServerSideProps(async () => {
  await client.apis.account.prefetchPaginate();
});

export default Accounts;
