import React from "react";
import Modal from "~/components/Modal";

import { useModalActions, useModalName } from "../context";

export const FilterEntryModal: React.FC = () => {
  const modalName = useModalName();
  const { onClose } = useModalActions();

  return (
    <Modal open={modalName === "entryFilters"} onClose={onClose}>
      <div>FilterEntryModal</div>
    </Modal>
  );
};

export default FilterEntryModal;
