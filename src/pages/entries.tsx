import React from "react";

import LayoutFeature from "~/features/layout";
import EntryListFeature from "~/features/entry";
import prepareServerSideProps from "~/server/prepareServerSideProps";
import client from "~/client";

export const Entries: React.FC = () => (
  <LayoutFeature>
    <EntryListFeature />
  </LayoutFeature>
);

export const getServerSideProps = prepareServerSideProps(async () => {
  client.apis.entry.prefetchPaginate();
});

export default Entries;
