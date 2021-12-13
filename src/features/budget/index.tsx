import React, { useMemo, useState } from "react";
import BudgetItem, { BudgetItemLoad } from "./BudgetItem";
import SubHeaderNavigation from "./SubHeaderNavigation";
import SubHeader from "~/components/SubHeader";
import AddBudgetModal from "./AddBudgetModal";
import client from "~/client";

import { FormattedMessage } from "react-intl";

export const BudgetFeature: React.FC = () => {
  const [open, setOpen] = useState(false);
  const { data, isLoading } = client.apis.budget.queryFindAll();
  const totalBudget = useMemo(() => {
    if (!data) {
      return null;
    }

    return data.results.reduce((a, c) => a + c.total, 0);
  }, [data]);

  return (
    <>
      <AddBudgetModal open={open} onClose={() => setOpen(false)} />
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
        {!isLoading && (
          <li>
            <button
              onClick={() => setOpen(true)}
              className="opacity-50 hover:opacity-100 cursor-pointer w-full border border-dashed border-gray-500 text-gray-500 dark:border-white dark:text-white p-4 rounded-xl"
            >
              <FormattedMessage id="Feature.Budget.Add" />
            </button>
          </li>
        )}
      </ul>
    </>
  );
};

export default BudgetFeature;
