declare type Any = string | number | date | boolean;
declare type AnyArray = string[] | number[] | date[] | boolean[];
declare type AnyObject = Record<
  string | number,
  Any | AnyArray | AnyObject | AnyObject[]
>;

declare type Page<T> = {
  count: number;
  hasNext: boolean;
  results: T[];
};

declare type Entry = {
  id: Any;
  value: number;
  kind: "add" | "remove";
  description: string;
};

declare type Account = {
  id: Any;
  kind: "account" | "wallet";
  name: string;
  value: number;
};

declare type Budget = {
  id: Any;
  name: string;
  used: number;
  total: number;
};

declare type ResultList<T> = { results: T[] };
