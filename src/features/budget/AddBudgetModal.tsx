import React from "react";
import Modal, { ModalProps } from "~/components/Modal";

export const AddBudgetModal: React.FC<ModalProps> = ({ open, onClose }) => (
  <Modal open={open} onClose={onClose}>
    <div>New Budget</div>
  </Modal>
);

export default AddBudgetModal;
