import React from "react";

type Props = {
  label: string;
  className?: string;
};

export const Badge: React.FC<Props> = ({ label, className = "" }) => (
  <div className={`px-2 py-1 text-xs uppercase rounded-full ${className}`}>
    {label}
  </div>
);

export default Badge;
