import React from "react";
import { FormattedMessage } from "react-intl";

type Props = {
  totalBudget?: number;
};

export const SubHeaderNavigation: React.FC<Props> = ({ totalBudget }) => (
  <div className="w-full flex px-2 items-center">
    <div className="flex-1">
      <h3 className="relative inline-block font-medium uppercase text-indigo-900 dark:text-white">
        Dec<small className="font-thin absolute -bottom-2 -right-4">2021</small>
      </h3>
    </div>
    <div className="text-center">
      <h3 className="uppercase text-xs text-indigo-900 dark:text-gray-200">
        <FormattedMessage id="Feature.Budget.SubHeader.Budget" />
      </h3>
      <p className="font-medium text-indigo-600 dark:text-white">
        {totalBudget ? totalBudget.toFixed(2) : <div />}
      </p>
    </div>
    <div className="pl-6 text-center">
      <h3 className="uppercase text-xs text-indigo-900 dark:text-gray-200">
        <FormattedMessage id="Feature.Budget.SubHeader.Money" />
      </h3>
      <p className="font-medium text-indigo-600 dark:text-white">R$ 2600</p>
    </div>
  </div>
);

export default SubHeaderNavigation;
