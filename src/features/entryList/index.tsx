import React from "react";
import EntryItem, { Props as EntryItemProps } from "./EntryItem";

const mock = [
  {
    id: 1,
    value: 1000,
    kind: "add",
    description: "Primark asdasd ijasidj asoi jdisjd soijd aosijd",
  },
  {
    id: 2,
    value: 1000,
    kind: "remove",
    description: "Primark asdasd ijasidj asoi jdisjd soijd aosijd",
  },
] as (EntryItemProps & { id: number })[];

export const EntryListFeature: React.FC = () => (
  <ul>
    {mock.map(({ id, ...entry }) => (
      <li key={id} className="mb-6">
        <EntryItem {...entry} />
      </li>
    ))}
  </ul>
);

export default EntryListFeature;
