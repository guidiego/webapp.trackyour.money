import React from "react";

import Header from "./Header";
import BottomNavigator from "./BottomNavigator";

type Props = {
  withoutBottomNav?: boolean;
};

export const LayoutFeature: React.FC<Props> = ({
  children,
  withoutBottomNav = false,
}) => (
  <>
    <Header />
    <div className="h-full pb-48">{children}</div>
    {!withoutBottomNav && <BottomNavigator />}
  </>
);

export default LayoutFeature;
