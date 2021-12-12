import React from "react";

import LayoutFeature from "~/features/layout";
import EntryListFeature from "~/features/entryList";
import prepareServerSideProps from "~/server/prepareServerSideProps";
import client from "~/client";

export const Entries: React.FC = () => (
  <LayoutFeature>
    <div className="p-6">
      <EntryListFeature />
    </div>
  </LayoutFeature>
);

export const getServerSideProps = prepareServerSideProps(async () => {
  client.apis.entry.prefetchPaginate();
});

export default Entries;
