import React from "react";
import Paper from "~/components/Paper";

import { ArrowSmDownIcon, ArrowSmUpIcon } from "@heroicons/react/outline";

export type Props = {
  kind: "add" | "remove";
  description: string;
  value: number;
};

export const EntryItem: React.FC<Props> = ({ kind, description, value }) => (
  <Paper noPadding rounded>
    <div className="flex items-center justify-center h-24">
      <div
        className={`h-full w-16 flex justify-center items-center ${
          kind === "add" ? "bg-green-600" : "bg-pink-600"
        }`}
      >
        {kind === "add" ? (
          <ArrowSmUpIcon className="h-8 w-8 text-white" />
        ) : (
          <ArrowSmDownIcon className="h-8 w-8 text-white" />
        )}
      </div>
      <div className="flex-1 p-4">
        <h3 className="text-xl font-medium text-gray-800 dark:text-gray-50 mb-1">
          R$ {value.toFixed(2)}
        </h3>
        <p className="text-xs text-gray-500">{description}</p>
      </div>
    </div>
  </Paper>
);

export default EntryItem;
