import React from "react";
import SubHeader from "~/components/SubHeader";

import BudgetItem from "./BudgetItem";
import SubHeaderNavigation from "./SubHeaderNavigation";

export const BudgetFeature = () => (
  <>
    <SubHeader>
      <SubHeaderNavigation />
    </SubHeader>
    <ul className="p-6">
      <li className="mb-3">
        <BudgetItem />
      </li>
      <li className="mb-3">
        <BudgetItem />
      </li>
    </ul>
  </>
);

export default BudgetFeature;
