import React from "react";
import Modal from "~/components/Modal";
import { useModalActions, useModalName } from "../context";

export const AddEntry: React.FC = () => {
  const modalName = useModalName();
  const { onClose } = useModalActions();

  return (
    <Modal open={modalName === "addEntry"} onClose={onClose}>
      <div>AddEntry</div>
    </Modal>
  );
};

export default AddEntry;
