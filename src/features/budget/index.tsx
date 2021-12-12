import React, { useMemo } from "react";
import client from "~/client";
import SubHeader from "~/components/SubHeader";

import BudgetItem, { BudgetItemLoad } from "./BudgetItem";
import SubHeaderNavigation from "./SubHeaderNavigation";

export const BudgetFeature: React.FC = () => {
  const { data, isLoading } = client.apis.budget.queryFindAll();
  const totalBudget = useMemo(() => {
    if (!data) {
      return null;
    }

    return data.results.reduce((a, c) => a + c.total, 0);
  }, [data]);
  return (
    <>
      <SubHeader>
        <SubHeaderNavigation totalBudget={totalBudget} />
      </SubHeader>
      <ul className="p-6">
        {isLoading ? (
          <>
            <li className="mb-3">
              <BudgetItemLoad />
            </li>
            <li className="mb-3">
              <BudgetItemLoad />
            </li>
          </>
        ) : (
          data.results.map((budget) => (
            <li className="mb-3" key={budget.id}>
              <BudgetItem {...budget} />
            </li>
          ))
        )}
      </ul>
    </>
  );
};

export default BudgetFeature;
