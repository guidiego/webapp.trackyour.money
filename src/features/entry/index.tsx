import React from "react";

import EntryItemList from "./EntryItemList";
import AddEntryModal from "./modal/AddEntry";
import FilterEntryModal from "./modal/FilterEntry";
import EntrySubHeader from "./EntrySubHeader";
import EntryContext from "./context";

export const EntryListFeature: React.FC = () => (
  <EntryContext>
    <AddEntryModal />
    <EntrySubHeader />
    <FilterEntryModal />
    <EntryItemList />
  </EntryContext>
);

export default EntryListFeature;
