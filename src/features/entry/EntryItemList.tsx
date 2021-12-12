import React from "react";
import Paper from "~/components/Paper";

import { ArrowSmDownIcon, ArrowSmUpIcon } from "@heroicons/react/outline";
import client from "~/client";

const EntryItem: React.FC<Entry> = ({ kind, description, value }) => (
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

const EntryItemLoad: React.FC = () => (
  <Paper noPadding rounded>
    <div className="flex items-center justify-center h-24">
      <div className="h-full w-16 flex justify-center items-center bg-gray-500 dark:bg-gray-400" />
      <div className="flex-1 p-4">
        <div className="h-4 w-full bg-gray-500 dark:bg-white mb-4" />
        <div className="h-2 w-full bg-gray-300 mb-1" />
        <div className="h-2 w-full bg-gray-300" />
      </div>
    </div>
  </Paper>
);

export const EntryItemList: React.FC = () => {
  const { data, isLoading } = client.apis.entry.queryPaginate();

  return (
    <ul className="p-6">
      {isLoading ? (
        <>
          <li className="mb-6">
            <EntryItemLoad />
          </li>
          <li className="mb-6">
            <EntryItemLoad />
          </li>
        </>
      ) : (
        data.results.map((entry) => (
          <li key={entry.id} className="mb-6">
            <EntryItem {...entry} />
          </li>
        ))
      )}
    </ul>
  );
};

export default EntryItemList;
