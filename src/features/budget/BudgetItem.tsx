import React from "react";
import Badge from "~/components/Badge";
import Paper from "~/components/Paper";

export const BudgetItem = () => (
  <Paper rounded>
    <div className="flex items-center justify-center">
      <div className="flex-1">Eletricity</div>
      <Badge label="RS 400" className="mr-2 bg-indigo-600 text-white" />
      <Badge label="RS 400" className="bg-indigo-600 text-white" />
    </div>
  </Paper>
);

export default BudgetItem;
