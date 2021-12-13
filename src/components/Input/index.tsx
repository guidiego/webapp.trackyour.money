import React, { useCallback, useEffect, useState } from "react";
import debounce from "lodash.debounce";

type Props = {
  value?: string;
  label?: string;
  debounceTime?: number;
  inputType?: string;
  className?: string;
  labelClassName?: string;
  onChange: (val: string) => void;
};

export const Input: React.FC<Props> = ({
  value = "",
  label = "",
  onChange,
  debounceTime = 0,
  inputType = "text",
  className = "",
  labelClassName = "",
}) => {
  const [pristine, setPristine] = useState(true);
  const [innerValue, setValue] = useState(value);

  useEffect(() => {
    if (value !== "" && innerValue === "" && pristine) {
      setValue(value);
    }
  }, [value, pristine, innerValue, setValue]);

  const debouncedOnChange = useCallback(debounce(onChange, debounceTime), []);
  const handleOnChange = useCallback(
    (e) => {
      setPristine(false);
      setValue(e.target.value);
      debouncedOnChange(e.target.value);
    },
    [debouncedOnChange]
  );

  return (
    <label
      className={`uppercase text-xs text-gray-500 dark:text-gray-300 font-medium ${labelClassName}`}
    >
      {label}
      <input
        type={inputType}
        onChange={handleOnChange}
        value={innerValue}
        className={`text-md text-gray-900 rounded-md shadow-md bg-white bottom-12 px-6 py-4 outline-none w-full border border-blueGray-100 border-solid mt-2 ${className}`}
      />
    </label>
  );
};

export default Input;
