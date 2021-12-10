import React from "react";

type Props = {
  className?: string;
  color?: "primary" | "secondary";
  variant?: "normal" | "outlined";
  onClick?: () => void;
};

const baseClasses = [
  "px-8",
  "py-3",
  "uppercase",
  "text-md",
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
  danger: ["bg-pink-600", "text-white", "border-pink-600"],
  primary: ["bg-indigo-600", "text-white", "border-indigo-600"],
  secondary: [
    "bg-gray-800",
    "text-white",
    "border-gray-800",
    "dark:bg-gray-100",
    "dark:text-gray-800",
    "dark:border-gray-100",
  ],
};

const mountClass = (className, color) => {
  return [...baseClasses, ...ClassMaps[color], className].join(" ");
};

export const Button: React.FC<Props> = ({
  children,
  color = "primary",
  className = "",
  onClick,
}) => (
  <button onClick={onClick} className={mountClass(className, color)}>
    {children}
  </button>
);

export default Button;
