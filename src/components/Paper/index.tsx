import React from "react";

type Props = {
  rounded?: boolean;
  position?: "relative" | "absolute" | "fixed";
  className?: string;
  noPadding?: boolean;
};

export const Paper: React.FC<Props> = ({
  children,
  rounded = false,
  position = "relative",
  className = "",
  noPadding = false,
}) => (
  <div
    className={`bg-white dark:bg-gray-800 dark:text-white shadow-md ${
      rounded ? "rounded-xl" : ""
    } ${noPadding ? "" : "p-6"} ${position} ${className}`}
  >
    {children}
  </div>
);

export default Paper;
