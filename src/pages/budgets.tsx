import React from "react";
import client from "~/client";

import BudgetFeature from "~/features/budget";
import LayoutFeature from "~/features/layout";
import prepareServerSideProps from "~/server/prepareServerSideProps";

export const Budget: React.FC = () => (
  <LayoutFeature>
    <BudgetFeature />
  </LayoutFeature>
);

export const getServerSideProps = prepareServerSideProps(async () => {
  await client.apis.budget.prefetchFindAll();
});

export default Budget;
