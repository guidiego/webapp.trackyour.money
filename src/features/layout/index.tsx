import React, { useState, useCallback } from "react";

import Header from "./Header";
import BottomNavigator from "./BottomNavigator";
import SetupModal from "./setup/Modal";

type Props = {
  withoutBottomNav?: boolean;
};

export const LayoutFeature: React.FC<Props> = ({
  children,
  withoutBottomNav = false,
}) => {
  const [setupModalOpen, setSetupModalOpen] = useState(false);
  const onClose = useCallback(() => {
    setSetupModalOpen(false);
  }, []);

  const openSetupModal = useCallback(() => {
    setSetupModalOpen(true);
  }, []);

  return (
    <>
      <Header openSetupModal={openSetupModal} />
      <div className="h-full pb-48">{children}</div>
      {!withoutBottomNav && <BottomNavigator />}
      <SetupModal open={setupModalOpen} onClose={onClose} />
    </>
  );
};

export default LayoutFeature;
