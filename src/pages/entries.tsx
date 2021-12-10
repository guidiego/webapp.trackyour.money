import React from "react";

import LayoutFeature from "~/features/layout";
import EntryListFeature from "~/features/entryList";

export const Entries: React.FC = () => (
  <LayoutFeature>
    <div className="p-6">
      <EntryListFeature />
    </div>
  </LayoutFeature>
);

export default Entries;
