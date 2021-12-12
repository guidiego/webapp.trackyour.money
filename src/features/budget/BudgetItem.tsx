import React from "react";
import Badge from "~/components/Badge";
import Paper from "~/components/Paper";

export const BudgetItem: React.FC<Budget> = ({ name, used, total }) => (
  <Paper rounded>
    <div className="flex items-center justify-center">
      <div className="flex-1">{name}</div>
      <Badge
        label={`R$ ${used.toFixed(2)}`}
        className="mr-2 bg-indigo-600 text-white"
      />
      <Badge
        label={`R$ ${(total - used).toFixed(2)}`}
        className="bg-indigo-600 text-white"
      />
    </div>
  </Paper>
);

export const BudgetItemLoad: React.FC = () => (
  <Paper rounded>
    <div className="flex items-center justify-center">
      <div className="flex-1">
        <div className="h-4 w-9/12 bg-gray-300" />
      </div>
      <Badge label="load" className="mr-2 bg-gray-300 text-gray-300" />
      <Badge label="load" className="mr-2 bg-gray-300 text-gray-300" />
    </div>
  </Paper>
);

export default BudgetItem;
