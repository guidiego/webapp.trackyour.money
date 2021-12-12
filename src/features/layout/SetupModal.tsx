import React from "react";
import Modal, { ModalProps } from "~/components/Modal";
import SetupContent from "../setup";

export const SetupModal: React.FC<ModalProps> = ({ open, onClose }) => (
  <Modal open={open} onClose={onClose}>
    <SetupContent />
  </Modal>
);

export default SetupModal;
