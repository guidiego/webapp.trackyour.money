import React from "react";

type Props = {
  className?: string;
  color?: "primary" | "secondary";
  variant?: "normal" | "outlined";
  small?: boolean;
  onClick?: () => void;
};

const baseClasses = [
  "uppercase",
  "font-medium",
  "cursor-pointer",
  "opacity-95",
  "hover:opacity-100",
  "border-2",
  "border-solid",
  "rounded-xl",
  "hover:shadow-md",
];

const ClassMaps = {
  dangernormal: ["bg-pink-600", "text-white", "border-pink-600"],
  primarynormal: ["bg-indigo-600", "text-white", "border-indigo-600"],
  secondarynormal: [
    "bg-gray-800",
    "text-white",
    "border-gray-800",
    "dark:bg-gray-100",
    "dark:text-gray-800",
    "dark:border-gray-100",
  ],
  secondaryoutlined: [
    "text-gray-800",
    "border-gray-800",
    "dark:text-gray-100",
    "dark:border-gray-100",
  ],
  primaryoutlined: ["text-indigo-600", "border-indigo-600"],
};

const mountClass = (className, name, small) => {
  return [
    ...baseClasses,
    ...(small ? ["px-4", "py-2", "text-sm"] : ["px-8", "py-3"]),
    ...ClassMaps[name],
    className,
  ].join(" ");
};

export const Button: React.FC<Props> = ({
  children,
  color = "primary",
  variant = "normal",
  className = "",
  small,
  onClick,
}) => (
  <button
    onClick={onClick}
    className={mountClass(className, color + variant, small)}
  >
    {children}
  </button>
);

export default Button;
