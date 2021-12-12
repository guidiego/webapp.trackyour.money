import React from "react";

export const SubHeaderNavigation = () => (
  <div className="w-full flex px-2 items-center">
    <div className="flex-1">
      <h3 className="text-lg font-medium uppercase text-indigo-900 dark:text-white">
        December <small className="font-thin">2021</small>
      </h3>
    </div>
    <div>
      <h3 className="uppercase text-xs text-indigo-900 dark:text-gray-200">
        Budget
      </h3>
      <p className="font-medium text-indigo-600 dark:text-white">R$ 800</p>
    </div>
    <div className="pl-6">
      <h3 className="uppercase text-xs text-indigo-900 dark:text-gray-200">
        Money
      </h3>
      <p className="font-medium text-indigo-600 dark:text-white">R$ 2600</p>
    </div>
  </div>
);

export default SubHeaderNavigation;
