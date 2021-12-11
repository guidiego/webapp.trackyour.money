import React from "react";
import Paper from "~/components/Paper";

export type Props = {
  kind: "account" | "wallet";
  name: string;
  value: number;
};

export const AccountItem: React.FC<Props> = ({ kind, name, value }) => (
  <Paper rounded>
    <div className="flex">
      <div>
        aaa
      </div>
      <div>
        <h2>{name}</h2>
        <h3>R$ {value.toFixed(2)}</h3>
      </div>
    </div>
  </Paper>
);

export default AccountItem;
