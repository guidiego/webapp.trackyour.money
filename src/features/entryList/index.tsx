import React from "react";
import client from "~/client";
import EntryItem, { EntryItemLoad } from "./EntryItem";

export const EntryListFeature: React.FC = () => {
  const { data, isLoading } = client.apis.entry.queryPaginate();

  return (
    <ul>
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

export default EntryListFeature;
