import React from "react";

type Option = {
  id: string;
  text: React.ReactElement;
  onClick?: () => void;
};

type Props = {
  options?: Option[];
  activeId?: Any;
  inverted?: boolean;
};

export const Tabs: React.FC<Props> = ({
  options = [],
  activeId,
  inverted = false,
}) => (
  <ul
    className={`w-full flex cursor-pointer uppercase font-medium dark:bg-gray-800 dark:text-gray-100`}
  >
    {options.map(({ id, text, onClick }) => (
      <li
        key={id}
        onClick={onClick}
        className={`flex-1 flex items-center justify-center p-2 py-4 relative group opacity-80 hover:opacity-100 ${
          activeId === id
            ? "text-indigo-600 dark:text-indigo-500"
            : "group-hover:text-indigo-600 opacity-50 dark:group-hover:text-indigo-500 dark:group-hover:opacity-60"
        }`}
      >
        {text}
        <div
          className={`w-full h-1 absolute ${inverted ? "top-0" : "bottom-0"} ${
            activeId === id
              ? "bg-indigo-600 dark:bg-indigo-500"
              : "group-hover:bg-indigo-600 opacity-50 dark:group-hover:bg-indigo-500 dark:group-hover:opacity-60"
          }`}
        />
      </li>
    ))}
  </ul>
);

export default Tabs;
