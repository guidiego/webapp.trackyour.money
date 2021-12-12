import React from "react";

import LayoutFeature from "~/features/layout";
import EntryListFeature from "~/features/entryList";
import client from "~/client";

export const Entries: React.FC = (props) => (
  <LayoutFeature>
    <div className="p-6">
      <EntryListFeature />
    </div>
  </LayoutFeature>
);

export const getServerSideProps = async (ctx) => {
  await client.apis.entry.prefetchPaginate();
  return { props: client.getDehydratedState() };
};

export default Entries;
