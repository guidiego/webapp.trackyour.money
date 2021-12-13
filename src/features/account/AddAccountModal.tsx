import React from "react";
import Modal, { ModalProps } from "~/components/Modal";

export const AddAccountModal: React.FC<ModalProps> = ({ open, onClose }) => (
  <Modal open={open} onClose={onClose}>
    <div>AddAccountModal</div>
  </Modal>
);

export default AddAccountModal;
