import React from "react";

export const SubHeader: React.FC = ({ children }) => (
  <div className="h-16 px-6 py-3 bg-indigo-200 dark:bg-indigo-800 shadow-xs flex items-center justify-center">
    {children}
  </div>
);

export default SubHeader;
