import React from "react";

import BudgetFeature from "~/features/budget";
import LayoutFeature from "~/features/layout";

export const Budget: React.FC = () => (
  <LayoutFeature>
    <BudgetFeature />
  </LayoutFeature>
);

export default Budget;
