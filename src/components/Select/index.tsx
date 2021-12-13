import React from "react";

type Option = {
  label: string;
  value: string;
};

type Props = {
  label?: string;
  labelClassName?: string;
  options?: Option[];
  optionId?: string;
  value?: string;
  className?: string;
  onChange: (e: React.ChangeEvent<HTMLElement>) => void;
};

export const Select: React.FC<Props> = ({
  options = [],
  optionId = "",
  value = "",
  className = "",
  label = "",
  labelClassName = "",
  onChange,
}) => (
  <label
    className={`uppercase text-xs text-gray-500 dark:text-gray-300 font-medium ${labelClassName}`}
  >
    {label}
    <select
      value={value}
      className={`rounded-md shadow-md bg-white bottom-12 px-6 py-4 outline-none w-full border border-blueGray-100 border-solid disabled:opacity-30 ${className}`}
      onChange={onChange}
    >
      {options.map(({ value, label }) => (
        <option key={`${optionId}-${value}`} value={value}>
          {label}
        </option>
      ))}
    </select>
  </label>
);

export default Select;
